import { cx } from "../camera.js";
import { ctx } from "../canvas.js";
import { player, removeEntity } from "../entities.js";
import { coinImage } from "../images.js";
import { RectEntity } from "./Entity.js";

export class Coin extends RectEntity {
    constructor(x, y, w, h, color) {
        super(x, y, w, h, color);
        this.image = coinImage;
    }

    collisionWithPlayer() {
        return this.x < player.x + player.w &&
            this.x + this.w > player.x &&
            this.y < player.y + player.h &&
            this.h + this.y > player.y;
    }

    onCollision() {
        if (this.collisionWithPlayer()) {
            player.points += 300;
            removeEntity(this);
        }
    }

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
