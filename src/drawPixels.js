export function drawPixels(canvas, pixels, width, height) {
  canvas.setAttribute("width", width);
  canvas.setAttribute("height", height);
  const ctx = canvas.getContext("2d");
  // Initialize a new ImageData object
  let imageData = new ImageData(pixels, width, height);
  // Draw image data to the canvas
  ctx.putImageData(imageData, 20, 20);
}
