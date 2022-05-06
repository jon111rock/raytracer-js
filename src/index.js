import { Vector3, normalize, dot } from "./modules/vec3";
import { drawPixelsToCanva, drawColorToArray } from "./modules/draw";
import { Ray } from "./modules/ray";
import { Light, computeLighting } from "./modules/light";
import { Sphere } from "./modules/sphere";

const canvas = document.getElementById("canvas");

// Image
const aspectRatio = 16 / 9;
const imageWidth = 512;
const imageHeight = parseInt(imageWidth / aspectRatio);
const pixels = new Uint8ClampedArray(4 * imageWidth * imageHeight);

// Camera and Viewport
const viewportHeight = 2.0;
const viewportWidth = aspectRatio * viewportHeight;
const focalLength = 1.0;

const origin = new Vector3(0, 0, 0);
const horizontal = new Vector3(viewportWidth, 0, 0);
const vertical = new Vector3(0, viewportHeight, 0);
const lowerLeftCorner = origin
  .sub(horizontal.divideScalar(2))
  .sub(vertical.divideScalar(2))
  .sub(new Vector3(0, 0, focalLength));

// Light
const ambientLight = new Light.ambient(0.3);
const pointLight = new Light.point(0.5, new Vector3(1, 1, 0));
const directionalLight = new Light.directional(0.2, new Vector3(1, 4, 4));
const lights = [ambientLight, pointLight, directionalLight];

// Sphere
const s = new Sphere(
  new Vector3(0, 0, -1),
  0.5,
  new Vector3(0.8, 0.7, 0.5),
  65
);
const s2 = new Sphere(
  new Vector3(0, -100.5, -1),
  100,
  new Vector3(0.1, 0.9, 0.1),
  65
);
const spheres = [s, s2];

// Iterate through every pixel`
for (let j = imageWidth - 1; j >= 0; j--) {
  for (let i = 0; i < imageWidth; i++) {
    const u = i / (imageWidth - 1);
    const v = j / (imageHeight - 1);
    const r = new Ray(
      origin,
      lowerLeftCorner
        .add(horizontal.multiplyScalar(u))
        .add(vertical.multiplyScalar(v))
        .sub(origin)
    );
    // const pixelColor = rayColor(r, lights, s);
    const pixelColor = rayTrace(r, 0, Infinity, lights, spheres);
    drawColorToArray(pixels, i, j, pixelColor, imageWidth, imageHeight);
  }
}
drawPixelsToCanva(canvas, pixels, imageWidth, imageHeight);

// ray-sphere intersection test
function sphereRayIntersection(sphere, ray) {
  const oc = ray.origin.sub(sphere.center);
  const a = dot(ray.direction, ray.direction);
  const b = 2 * dot(oc, ray.direction);
  const c = dot(oc, oc) - sphere.radius * sphere.radius;
  const discriminant = b * b - 4 * a * c;
  if (discriminant < 0) {
    return -1;
  } else {
    const r1 = (-b - Math.sqrt(discriminant)) / (2 * a);
    const r2 = (-b + Math.sqrt(discriminant)) / (2 * a);
    return [r1, r2];
  }
}

// general function
function rayTrace(ray, tMin, tMax, lights, spheres) {
  let tClosest = Infinity;
  let closestSphere = null;
  for (const sphere of spheres) {
    const ts = sphereRayIntersection(sphere, ray);
    if (ts[0] < tClosest && ts[0] <= tMax && ts[0] >= tMin) {
      tClosest = ts[0];
      closestSphere = sphere;
    }
    if (ts[1] < tClosest && ts[1] <= tMax && ts[1] >= tMin) {
      tClosest = ts[1];
      closestSphere = sphere;
    }
  }

  if (closestSphere != null) {
    const hitPoint = ray.at(tClosest);
    const hitNormal = normalize(hitPoint.sub(closestSphere.center));
    const sphereColor = closestSphere.color;
    // const sphereColor = new Vector3(0.8, 0.7, 0.5);
    const view = ray.direction.multiplyScalar(-1);
    const lighting = computeLighting(
      hitPoint,
      hitNormal,
      view,
      lights,
      closestSphere.shine
    );
    return sphereColor.multiplyScalar(lighting);
  }
  const unitDirection = normalize(ray.direction);
  const a = 0.5 * (unitDirection.y + 1.0);
  const backgroundColor = new Vector3(1, 1, 1)
    .multiplyScalar(1 - a)
    .add(new Vector3(0.5, 0.7, 1).multiplyScalar(a));
  return backgroundColor;
}
