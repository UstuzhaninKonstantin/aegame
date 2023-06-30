import { ctx } from "../../canvas.js";
import { player, removeEntity } from "../../entities.js";
import { RectEntity } from "../Entity.js";

export class PowerupDuration extends RectEntity {
    constructor(x, y, w, h, color, duration, afterPowerup) {
        super(x, y, w, h, color);
        this.working = true;
        this.originalDuration = duration;
        this.duration = duration;
        this.afterPowerup = afterPowerup;
    }

    kill() {
        this.working = false;
        this.afterPowerup();
        removeEntity(this);
    }

    update() {
        if (this.duration == 0) {
            this.kill();
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