import { drawPixels } from "./drawPixels";

const canvas = document.getElementById("canvas");
const width = 600,
  height = 600;
const arr = new Uint8ClampedArray(4 * width * height);

// Iterate through every pixel
for (let i = 0; i < arr.length; i += 4) {
  arr[i + 0] = 100; // R value
  arr[i + 1] = 190; // G value
  arr[i + 2] = 0; // B value
  arr[i + 3] = 255; // A value
}

drawPixels(canvas, arr, width, height);
