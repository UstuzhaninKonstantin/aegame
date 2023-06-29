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

function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

export function createEntities() {
    const player = new Player(100, canvas.height / 2, 50, 50, "#df134a", 10, 10);
    setPlayer(player);
    addEntity(new Enemy(1600, 100, 20, 20, "#123456"));
    for (let i = 0; i < 500; i++) {
        const x = randomNumber(1600, 16000);
        const h = randomNumber(10, 50); 
        const y = randomNumber(0, canvas.height - h) ;
        const w = randomNumber(10, 50);
        addEntity(
            new Enemy(x, y, w, h, "black")
        );
    }
}


export function deleteEntities() {
    entities = [];
    player = undefined;
}

export function restart() {
    deleteEntities();
    createEntities();
}