import { canvas } from "./canvas.js";
import { Enemy } from "./entities/Enemy.js";
import { Player } from "./entities/Player.js";

export let entities = [];
export let player;

export function addEntity(entity) {
    entities.push(entity);
}

export function setPlayer(p) {
    player = p;
    entities.push(p);
}

export function createEntities() {
    const player = new Player(100, canvas.height / 2, 50, 50, "#df134a", 10, 10);
    setPlayer(player);
    addEntity(new Enemy(1600, 100, 20, 20, "#123456"));
}

export function deleteEntities() {
    entities = [];
    player = undefined;
}

export function restart() {
    deleteEntities();
    createEntities();
}