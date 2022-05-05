export function drawPixelsToCanva(canvas, pixels, width, height) {
  canvas.setAttribute("width", width);
  canvas.setAttribute("height", height);
  const ctx = canvas.getContext("2d");
  // Initialize a new ImageData object
  let imageData = new ImageData(pixels, width, height);
  // Draw image data to the canvas
  ctx.putImageData(imageData, 20, 20);
}

export function drawColorToArray(ary, x, y, colorVec, width, height) {
  let r = parseInt(255.99 * colorVec.x);
  let g = parseInt(255.99 * colorVec.y);
  let b = parseInt(255.99 * colorVec.z);
  const index = ((height - 1 - y) * width + x) * 4;
  ary[index + 0] = r; // R value
  ary[index + 1] = g; // G value
  ary[index + 2] = b; // B value
  ary[index + 3] = 255; // A value
}
