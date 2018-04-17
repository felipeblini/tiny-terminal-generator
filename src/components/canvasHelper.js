export const _roundedRect = function (
  ctx,
  x,
  y,
  width,
  height,
  radius,
  radiusTopLeft,
  radiusTopRight,
  radiusBottomLeft,
  radiusBottomRight,
  fillColor
) {
  ctx.fillStyle = fillColor;
  ctx.beginPath();
  ctx.moveTo(x, y + radius);
  ctx.lineTo(x, y + height - radius);
  ctx.arcTo(x, y + height, x + radius, y + height, radiusBottomLeft);
  ctx.lineTo(x + width - radius, y + height);
  ctx.arcTo(
    x + width,
    y + height,
    x + width,
    y + height - radius,
    radiusBottomRight
  );
  ctx.lineTo(x + width, y + radius);
  ctx.arcTo(x + width, y, x + width - radius, y, radiusTopLeft);
  ctx.lineTo(x + radius, y);
  ctx.arcTo(x, y, x, y + radius, radiusTopRight);
  ctx.fill();
};

export const _circle = function (
  ctx,
  fillStyle,
  x,
  y,
  radius,
  startAngle = 0,
  endAngle = Math.PI * 2,
  anticlockwise = true,
  pad = 0
) {
  ctx.fillStyle = fillStyle;
  ctx.beginPath();
  ctx.arc(x + pad, y + pad, 7, startAngle, endAngle, true);
  ctx.closePath();
  ctx.fill();
};