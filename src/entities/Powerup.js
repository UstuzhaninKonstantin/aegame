import { ctx } from "../canvas.js";
import { addEntity, player, removeEntity } from "../entities.js";
import { RectEntity } from "./Entities.js";

export class Powerup extends RectEntity {
    constructor(x, y, w, h, color, duration) {
        super(x, y, w, h, color);
        this.duration = duration;
        this.powerupDuration = undefined;
    }

    collisionWithPlayer() {
        return this.x < player.x + player.w &&
            this.x + this.w > player.x &&
            this.y < player.y + player.h &&
            this.h + this.y > player.y;
    }

    onCollision() {
        if (this.collisionWithPlayer()) {
            if (this.powerupDuration) return;
            this.powerupDuration = new PowerupDuration(
                20, // x 
                canvas.height / 1.1, // y 
                300, // w
                50, // h
                "green", // color
                this.duration
            );
            addEntity(this.powerupDuration);
        }
    }

    update() {
        this.onCollision();
    }
}

export class PowerupDuration extends RectEntity {
    constructor(x, y, w, h, color, duration) {
        super(x, y, w, h, color);
        this.working = true;
        this.originalDuration = duration;
        this.duration = duration;
    }

    update() {
        if (this.duration == 0) {
            removeEntity(this);
        }
        this.duration -= 1;
    }

    draw() {
        ctx.fillStyle = "green";
        if (this.duration !== 0 && player.isAlive) {
            ctx.fillRect(this.x, this.y, this.w * this.duration / this.originalDuration, this.h);
            ctx.fillStyle = "black";
            ctx.strokeRect(this.x, this.y, this.w, this.h);
        }
    }
}