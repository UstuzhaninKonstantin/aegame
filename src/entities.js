import { canvas } from "./canvas.js";
import { Enemy } from "./entities/Enemy.js";
import { Player } from "./entities/Player.js";
import { Portal } from "./entities/Portal.js";
import { SizePowerup } from "./entities/powerups/SizePowerup.js";
import { SpeedPowerup } from "./entities/powerups/SpeedPowerup.js";
import { ImmortalPowerup } from "./entities/powerups/ImmortalPowerup.js";

export let entities = [];
export let player;
let interval;

export function addEntity(entity) { 
    entities.push(entity);
}

export function removeEntity(entity) {
    const index = entities.indexOf(entity);
    if (index != -1) {
        entities.splice(index, 1);
    }
}

export function setPlayer(p) {
    player = p;
    entities.push(p);
}

function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

export function createEntities() {
    let counter = 1;
    const player = new Player(100, canvas.height / 2, 20, 20, "#df134a", 10, 10);
    for (let i = 0; i < 10; i++) {
        const x = randomNumber(canvas.width, canvas.width + 1500);
        const h = randomNumber(10, 50); 
        const y = randomNumber(0, canvas.height - h) ;
        const w = randomNumber(10, 50);
        addEntity(
            new Enemy(x, y, w, h, "#123456")
        );
    }

    let CHUNK = 2500;
    interval = setInterval(() => {
        for (let i = 0; i < 10 + counter / 2; i++) {
            const x = randomNumber(canvas.width + counter * CHUNK, canvas.width + CHUNK * (counter + 1));
            const h = randomNumber(10, 50 + counter); 
            const y = randomNumber(0, canvas.height - h);
            const w = randomNumber(10, 50 + counter);
            if (Math.random() < 0.05) {
                if (Math.random() < 0.5) {                 
                    addEntity(new Portal(x, 0, 20, canvas.height, "yellow", "-"));
                } else { 
                    addEntity(new Portal(x, 0, 20, canvas.height, "blue", "+"));
                }
            } else if (Math.random() < 0.05) {
                const rnd = Math.random();
                if (rnd < 0.3) {
                    addEntity(new SizePowerup(x, y, 50, 50, "green", 300));
                } else if (rnd < 0.6) {
                    addEntity(new SpeedPowerup(x, y, 50, 50, "green", 300));
                } else {
                    addEntity(new ImmortalPowerup(x, y, 50, 50, "green", 300));
                }
            } else {
                addEntity(
                    new Enemy(x, y, w, h, "#123456")
                );
            }
        }
        counter += 1;
    }, 2000);
    setPlayer(player);
}


export function deleteEntities() {
    clearInterval(interval);
    entities = [];
    player = undefined;
}

export function restart() {
    deleteEntities();
    createEntities();
}