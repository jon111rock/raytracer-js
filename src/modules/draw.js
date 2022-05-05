export function drawPixelsToCanva(canvas, pixels, width, height) {
  canvas.setAttribute("width", width);
  canvas.setAttribute("height", height);
  const ctx = canvas.getContext("2d");
  // Initialize a new ImageData object
  let imageData = new ImageData(pixels, width, height);
  // Draw image data to the canvas
  ctx.putImageData(imageData, 20, 20);
}

export function drawColorToArray(ary, x, y, width, height) {
  let r = x / (width - 1);
  let g = y / (height - 1);
  let b = 0.25;

  let ir = parseInt(255.99 * r);
  let ig = parseInt(255.99 * g);
  let ib = parseInt(255.99 * b);
  const index = ((height - 1 - y) * width + x) * 4;
  ary[index + 0] = ir; // R value
  ary[index + 1] = ig; // G value
  ary[index + 2] = ib; // B value
  ary[index + 3] = 255; // A value
}
