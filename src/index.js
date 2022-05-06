import { Vector3, normalize, dot } from "./modules/vec3";
import { drawPixelsToCanva, drawColorToArray } from "./modules/draw";
import { Ray } from "./modules/ray";
import { Light } from "./modules/light";

const canvas = document.getElementById("canvas");

// Image
const aspectRatio = 16 / 9;
const imageWidth = 800;
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

// Iterate through every pixel
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
    const pixelColor = rayColor(r);
    drawColorToArray(pixels, i, j, pixelColor, imageWidth, imageHeight);
  }
}
drawPixelsToCanva(canvas, pixels, imageWidth, imageHeight);

// general function
function rayColor(r) {
  if (hitSphere(new Vector3(0, 0, -1), 0.5, r)) return new Vector3(1, 0, 0);
  const unitDirection = normalize(r.direction);
  const t = 0.5 * (unitDirection.y + 1.0);
  return new Vector3(1, 1, 1)
    .multiplyScalar(1 - t)
    .add(new Vector3(0.5, 0.7, 1).multiplyScalar(t));
}

// ray-sphere intersection test
function hitSphere(center, radius, r) {
  const oc = r.origin.sub(center);
  const a = dot(r.direction, r.direction);
  const b = 2 * dot(oc, r.direction);
  const c = dot(oc, oc) - radius * radius;
  const discriminant = b * b - 4 * a * c;
  return discriminant > 0;
}
