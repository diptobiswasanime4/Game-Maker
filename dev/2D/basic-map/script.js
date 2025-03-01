const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 500;
canvas.height = 500;

const CELL_SIZE = 25;

let oldHoverGX, oldHoverGY;

let cells = [[]];

addEventListener("click", (e) => {
  let gx = Math.floor(e.offsetX / CELL_SIZE);
  let gy = Math.floor(e.offsetY / CELL_SIZE);
  drawTerrain(gx, gy);
});

addEventListener("mousemove", (e) => {
  let gx = Math.floor(e.offsetX / CELL_SIZE);
  let gy = Math.floor(e.offsetY / CELL_SIZE);

  //   console.log(gx, gy, e.offsetX, e.offsetY);

  hoverTerrain(gx, gy);
});

function drawTerrain(gx, gy) {
  ctx.fillStyle = "green";
  ctx.fillRect(gx * CELL_SIZE, gy * CELL_SIZE, CELL_SIZE, CELL_SIZE);

  cells[gx][gy] = {
    terrain: "grass",
    items: "none",
  };
}

function hoverTerrain(gx, gy) {
  ctx.clearRect(
    oldHoverGX * CELL_SIZE,
    oldHoverGY * CELL_SIZE,
    CELL_SIZE,
    CELL_SIZE
  );
  ctx.fillStyle = "lightgrey";
  ctx.fillRect(gx * CELL_SIZE, gy * CELL_SIZE, CELL_SIZE, CELL_SIZE);
  oldHoverGX = gx;
  oldHoverGY = gy;
}

function animate() {
  requestAnimationFrame(animate);
}

animate();
