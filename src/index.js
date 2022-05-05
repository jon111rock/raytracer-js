import { Vector3 } from "three";
import { drawPixelsToCanva, drawColorToArray } from "./modules/draw";
import { Ray } from "./modules/ray";

const canvas = document.getElementById("canvas");
const width = 512,
  height = 512;
const pixels = new Uint8ClampedArray(4 * width * height);

// Iterate through every pixel
for (let j = height - 1; j >= 0; j--) {
  for (let i = 0; i < width; i++) {
    drawColorToArray(pixels, i, j, width, height);
  }
}

drawPixelsToCanva(canvas, pixels, width, height);
