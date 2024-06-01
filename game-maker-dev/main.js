import "./style.css";
import { setupCounter } from "./counter.js";
import { createTerrain, hoverTerrain } from "./createTerrain.js";

const TILE_SIZE = 40;
const TERRAIN_TYPES = ["grass", "sand", "water"];

let mapMaker = document.getElementById("map-maker");
let ctx = mapMaker.getContext("2d");

let selector = document.getElementById("selector");
let terrain;

let map;

selector.addEventListener("click", (e) => {
  terrain = e.target.id;
});

function randomMap() {
  let terrainRandom;
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      terrainRandom = TERRAIN_TYPES[Math.floor(Math.random() * 3)];
      createTerrain(ctx, i * 40, j * 40, terrainRandom);
    }
  }
}

function exportMap() {}

// issue with hover functionality
addEventListener("mousemove", (e) => {
  let x = Math.floor(e.clientX / 40) * 40;
  let y = Math.floor(e.clientY / 40) * 40;
  // hoverTerrain(ctx, x, y);
  let OldX = x;
  let OldY = y;
});

addEventListener("click", (e) => {
  createTerrain(ctx, e.clientX, e.clientY, terrain);
});

document.getElementById("generate-map-fn").addEventListener("click", randomMap);

ctx.beginPath();
ctx.lineWidth = 2;
ctx.rect(100, 200, 50, 50);
ctx.stroke();
ctx.closePath();
