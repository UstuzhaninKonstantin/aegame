import { cx } from "../../camera.js";
import { ctx } from "../../canvas.js";
import { addEntity, player } from "../../entities.js";
import { RectEntity } from "../Entity.js";
import { PowerupDuration } from "./PowerupDuration.js";

export class Powerup extends RectEntity {
    constructor(x, y, w, h, color, duration, image) {
        super(x, y, w, h, color);
        this.duration = duration;
        this.powerupDuration = undefined;
        this.image = undefined;
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
            if (player.powerup) {
                player.powerup.powerupDuration.kill();
            }
            player.powerup = this;
            this.powerupDuration = new PowerupDuration(
                20,
                canvas.height / 1.1,
                300,
                50,
                "green",
                this.duration,
                this.afterPowerup.bind(this)
            );
            this.powerup();
            addEntity(this.powerupDuration);
        }
    }

    powerup() {}
    
    afterPowerup() {}

    update() {
        this.onCollision();
    }

    draw() {
        if (!this.image.loaded) {
            ctx.globalAlpha = 0.5;
            super.draw();
            ctx.globalAlpha = 1;
        } else {
            ctx.drawImage(this.image, cx(this.x), this.y);
        }
    }
}