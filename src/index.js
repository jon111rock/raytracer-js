import { Vector3, normalize, dot, reflect } from "./modules/vec3";
import { drawPixelsToCanva, drawColorToArray } from "./modules/draw";
import { Ray } from "./modules/ray";
import { Light } from "./modules/light";
import { Sphere } from "./modules/sphere";
import { Scene } from "./modules/scene";
import { Camera } from "./modules/camera";

const canvas = document.getElementById("canvas");

// Image
const aspectRatio = 16 / 9;
const imageWidth = 512;
const imageHeight = parseInt(imageWidth / aspectRatio);
const pixels = new Uint8ClampedArray(4 * imageWidth * imageHeight);

// Camera and Viewport
const camera = new Camera(
  new Vector3(1, 0.5, 4),
  new Vector3(0.5, 0, -1),
  new Vector3(0, 1, 0),
  20,
  aspectRatio
);
// Light
const ambientLight = new Light.ambient(0.3);
const pointLight = new Light.point(0.5, new Vector3(1, 1, 0));
const directionalLight = new Light.directional(0.2, new Vector3(1, 4, 4));
const lights = [ambientLight, pointLight, directionalLight];

// Sphere
const sphereLeft = new Sphere(
  new Vector3(-0.3, 0.1, -1),
  0.5,
  new Vector3(0.8, 0.7, 0.5),
  65,
  0
);

const sphereMiddle = new Sphere(
  new Vector3(0.7, 0.1, -1),
  0.4,
  new Vector3(0.5, 0.3, 0.2),
  0.3,
  0.4
);
const sphereRight = new Sphere(
  new Vector3(1.5, 0, -0.75),
  0.25,
  new Vector3(0.5, 0.4, 0.5),
  65,
  0.1
);
const plane = new Sphere(
  new Vector3(0, -100.5, -1),
  100,
  new Vector3(0.1, 0.9, 0.1),
  65,
  0
);
const spheres = [sphereLeft, sphereMiddle, sphereRight, plane];

//Scene
const tMin = 0.001;
const tMax = Infinity;
const scene = new Scene(spheres, lights, tMin, tMax);

// Iterate through every pixel
let startTime = performance.now();
for (let j = imageWidth - 1; j >= 0; j--) {
  for (let i = 0; i < imageWidth; i++) {
    const u = i / (imageWidth - 1);
    const v = j / (imageHeight - 1);
    const r = new Ray(
      camera.origin,
      camera.lowerLeftCorner
        .add(camera.horizontal.multiplyScalar(u))
        .add(camera.vertical.multiplyScalar(v))
        .sub(camera.origin)
    );
    // const pixelColor = rayColor(r, lights, s);
    const pixelColor = rayTrace(r, scene, 3);
    drawColorToArray(pixels, i, j, pixelColor, imageWidth, imageHeight);
  }
}
drawPixelsToCanva(canvas, pixels, imageWidth, imageHeight);
let endTime = performance.now();
let sec = (endTime - startTime) / 1000;
console.log(`execute time: ${sec}s`);
let displayTime = document.getElementById("exetime");
displayTime.innerHTML += ` ${sec.toFixed(2)}s`;

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

function findClosestShpere(ray, scene) {
  const { tMin, tMax, spheres } = scene;
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

  return { tClosest, closestSphere };
}
// too many para !
function computeLighting(hitPoint, hitNormal, view, lights, sphere, scene) {
  let i = 0;
  for (const light of lights) {
    if (light.type == "ambient") {
      i += light.intensity;
    } else {
      let lightVector;
      if (light.type == "point") {
        lightVector = light.position.sub(hitPoint);
      } else if (light.type == "directional") {
        lightVector = light.direction;
      }

      //Shadow
      const shadowRay = new Ray(hitPoint, normalize(lightVector.sub(hitPoint)));
      const { closestSphere } = findClosestShpere(shadowRay, scene);
      if (closestSphere != null) {
        continue;
      }

      // Diffuse
      const normalDotLight = dot(hitNormal, lightVector);
      if (normalDotLight > 0) {
        i +=
          (light.intensity * normalDotLight) /
          (hitNormal.length() * lightVector.length());
      }

      //Specular
      if (sphere.shine != undefined) {
        const reflectVector = hitNormal
          .multiplyScalar(2)
          .multiplyScalar(dot(hitNormal, lightVector))
          .sub(lightVector);
        const reflectDotView = dot(reflectVector, view);
        if (reflectDotView > 0) {
          i +=
            light.intensity *
            Math.pow(
              reflectDotView / (reflectVector.length() * view.length()),
              sphere.shine
            );
        }
      }
    }
  }

  return i;
}

function rayTrace(ray, scene, depth) {
  const { lights } = scene;
  let { tClosest, closestSphere } = findClosestShpere(ray, scene);

  if (closestSphere != null) {
    const hitPoint = ray.at(tClosest);
    const hitNormal = normalize(hitPoint.sub(closestSphere.center));
    const sphereColor = closestSphere.color;
    const view = ray.direction.multiplyScalar(-1);
    const lighting = computeLighting(
      hitPoint,
      hitNormal,
      view,
      lights,
      closestSphere,
      scene
    );
    const localColor = sphereColor.multiplyScalar(lighting);
    const r = closestSphere.reflective;
    if (depth <= 0 || r <= 0) {
      return localColor;
    }
    const reflectVector = reflect(ray.direction, hitNormal);
    const reflectRay = new Ray(hitPoint, reflectVector);
    const reflectColor = rayTrace(reflectRay, scene, depth - 1);
    return localColor.multiplyScalar(1 - r).add(reflectColor.multiplyScalar(r));
  }
  const unitDirection = normalize(ray.direction);
  const a = 0.5 * (unitDirection.y + 1.0);
  const backgroundColor = new Vector3(1, 1, 1)
    .multiplyScalar(1 - a)
    .add(new Vector3(0.5, 0.7, 1).multiplyScalar(a));
  return backgroundColor;
}
