import { keysPressed } from "../events.js";
import { RectEntity } from "./Entity.js";
import { camera } from "../camera.js";

export class Player extends RectEntity {
    constructor(x, y, w, h, color, speedx, speedy) {
        super(x, y, w, h, color);
        this.speedx = speedx;
        this.speedy = speedy;
    }

    move() {
        if (keysPressed["KeyW"] || keysPressed["ArrowUp"]) {
            this.y -= this.speedy;
        }

        if (keysPressed["KeyS"] || keysPressed["ArrowDown"]) {
            this.y += this.speedy;
        }
    }

    setCamera() {
        camera.x = this.x;
    }

    update() {
        this.move();
    }
}