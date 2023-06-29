import { keysPressed } from "../events.js";
import { RectEntity } from "./Entities.js";
import { camera, cx } from "../camera.js";
import { canvas, ctx } from "../canvas.js";
import { restart } from "../entities.js";

export class Player extends RectEntity {
    constructor(x, y, w, h, color, speedx, speedy) {
        super(x, y, w, h, color);
        this.speedx = speedx;
        this.speedy = speedy;
        this.isAlive = true;
        this.originalspeedy = speedy;
    }

    move() {
        if (keysPressed["KeyW"] || keysPressed["ArrowUp"]) {
            this.y -= this.speedy;
        }

        if (keysPressed["KeyS"] || keysPressed["ArrowDown"]) {
            this.y += this.speedy;
        }
        if (keysPressed["ShiftLeft"] || keysPressed["ShiftRight"]) {
            this.speedy = this.originalspeedy * 2;
        } else {
            this.speedy = this.originalspeedy;
        }
        this.x += this.speedx;
        this.speedx *= 1.0001;
        this.outOfBounds();
    }

    outOfBounds() {
        if (this.y + this.w > canvas.height) {
            this.y = canvas.height - this.w;
        }
        if (this.y < 0) {
            this.y = 0;
        }
    }

    setCamera() {
        camera.x = this.x;
    }

    die() {
        this.isAlive = false;
    }

    handleRespawn() {
        if (keysPressed["KeyR"]) {
            restart();
        }
    }

    update() {
        if (this.isAlive) {
            this.move();
            this.setCamera();
        } else {
            this.handleRespawn();
        }
    }

    draw() {
        if (this.isAlive) {
            super.draw();
        } else {
            ctx.fillStyle = "yellow";
            ctx.fillRect(cx(this.x), this.y, this.w, this.h);
            ctx.fillStyle = "black";
            ctx.font = "30px sans-serif";
            ctx.textAlign = "center";
            ctx.fillText("You died. Press R to respawn", canvas.width / 2, canvas.height / 1.5);
        }
    }
}