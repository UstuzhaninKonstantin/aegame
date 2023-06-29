import { canvas } from "./canvas.js";
import { Enemy } from "./entities/Enemy.js";
import { Player } from "./entities/Player.js";
import { Portal } from "./entities/Portal.js";

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
    addEntity(new Portal(3000, 0, 20, canvas.height, "yellow", "-"));
    addEntity(new Portal(5000, 0, 20, canvas.height, "blue", "+"));
    
    for (let i = 0; i < 100; i++) {
        const x = randomNumber(1600, 16000);
        const h = randomNumber(10, 50); 
        const y = randomNumber(0, canvas.height - h) ;
        const w = randomNumber(10, 50);
        addEntity(
            new Enemy(x, y, w, h, "#123456")
        );
    }
    setPlayer(player);
}


export function deleteEntities() {
    entities = [];
    player = undefined;
}

export function restart() {
    deleteEntities();
    createEntities();
}