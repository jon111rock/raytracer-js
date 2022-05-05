import { Vector3, normalize } from "./modules/vec3";
import { drawPixelsToCanva, drawColorToArray } from "./modules/draw";
import { Ray } from "./modules/ray";

const canvas = document.getElementById("canvas");

// Image
const aspectRatio = 16 / 9;
const imageWidth = 400;
const imageHeight = parseInt(imageWidth / aspectRatio);
const pixels = new Uint8ClampedArray(4 * imageWidth * imageHeight);

// Camera
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

function rayColor(r) {
  const unitDirection = normalize(r.direction);
  const t = 0.5 * (unitDirection.y + 1.0);
  return new Vector3(1, 1, 1)
    .multiplyScalar(1 - t)
    .add(new Vector3(0.5, 0.7, 1).multiplyScalar(t));
}
