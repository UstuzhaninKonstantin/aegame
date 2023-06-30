import { keysPressed } from "../events.js";
import { RectEntity } from "./Entity.js";
import { camera, cx } from "../camera.js";
import { canvas, ctx } from "../canvas.js";
import { restart } from "../entities.js";

export class Player extends RectEntity {
    constructor(x, y, w, h, color, speedx, speedy) {
        super(x, y, w, h, color);
        this.originalSize = {w, h};
        this.speedx = speedx;
        this.speedy = speedy;
        this.isAlive = true;
        this.originalSpeedx = speedx;
        this.originalspeedy = speedy;
        this.points = 0;
        this.powerup = undefined;
        this.immortal = false;
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
        this.setCamera();
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
        if (!this.immortal) {
            this?.powerup?.afterPowerup();
            this.isAlive = false;
        }
    }

    handleRespawn() {
        if (keysPressed["KeyR"]) {
            restart();
        }
    }

    update() {
        if (this.isAlive) {
            this.points += 1;
            this.move();
        } else {
            this.handleRespawn();
        }
    }

    draw() {
        if (this.isAlive) {
            ctx.fillStyle = this.immortal ? "#9e9595": this.color;
            ctx.fillRect(cx(this.x), this.y, this.w, this.h);
            ctx.fillStyle = "black";
            ctx.font = "30px sans-serif";
            ctx.textAlign = "center";
            ctx.fillText(`Points: ${this.points}`, 100, 50);
        } else {
            ctx.fillStyle = "yellow";
            ctx.fillRect(cx(this.x), this.y, this.w, this.h);
            ctx.fillStyle = "black";
            ctx.font = "30px sans-serif";
            ctx.textAlign = "center";
            ctx.fillText("You died. Press R to respawn", canvas.width / 2, canvas.height / 1.5);
            ctx.fillText(`Points: ${this.points}`, canvas.width / 2, canvas.height / 1.4);
        }
    }
}