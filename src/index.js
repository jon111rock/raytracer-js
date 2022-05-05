import { drawPixels } from "./drawPixels";

const canvas = document.getElementById("canvas");
const width = 256,
  height = 256;
const pixels = new Uint8ClampedArray(4 * width * height);

// Iterate through every pixel
for (let j = height - 1; j >= 0; j--) {
  for (let i = 0; i < width; i++) {
    let r = i / (width - 1);
    let g = j / (height - 1);
    let b = 0.25;

    let ir = parseInt(255.99 * r);
    let ig = parseInt(255.99 * g);
    let ib = parseInt(255.99 * b);
    const index = ((height - 1 - j) * width + i) * 4;
    pixels[index + 0] = ir; // R value
    pixels[index + 1] = ig; // G value
    pixels[index + 2] = ib; // B value
    pixels[index + 3] = 255; // A value
  }
}

drawPixels(canvas, pixels, width, height);
