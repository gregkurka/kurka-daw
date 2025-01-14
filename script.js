$(function () {
  $(".dial").knob({
    draw: function () {
      //hook onto i property to change font size due to limits in jquery knob.
      $(this.i).css("font-size", "13pt");
      $(this.i).css("position", "static");
      $(this.i).css("margin-top", "-45px");
    },
  });
});

window.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById("piano-roll-canvas");
  const ctx = canvas.getContext("2d");

  const rowHeight = 20; // Height of each block (px)
  const colWidth = 35; // Width of each block  (px)
  const totalRows = 88;
  const totalCols = 90; // Example number of columns

  // Set the canvas size to match our grid
  canvas.width = totalCols * colWidth;
  canvas.height = totalRows * rowHeight;

  // Draw horizontal lines (for 88 rows)
  for (let r = 0; r <= totalRows; r++) {
    ctx.beginPath();
    ctx.moveTo(0, r * rowHeight);
    ctx.lineTo(canvas.width, r * rowHeight);
    ctx.strokeStyle = "#000";
    ctx.stroke();
  }

  // Draw vertical lines (for however many columns you want)
  for (let c = 0; c <= totalCols; c++) {
    ctx.beginPath();
    ctx.moveTo(c * colWidth, 0);
    ctx.lineTo(c * colWidth, canvas.height);
    ctx.strokeStyle = "#000";
    ctx.stroke();
  }
});
