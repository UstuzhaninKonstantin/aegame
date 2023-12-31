import { RectEntity } from "./Entity.js";
import { player } from "../entities.js";
import { ctx } from "../canvas.js";

export class Portal extends RectEntity {
    constructor(x, y, w, h, color, mode) {
        super(x, y, w, h, color);
        this.mode = mode;
    }

    collisionWithPlayer() {
        return this.x < player.x + player.w &&
            this.x + this.w > player.x &&
            this.y < player.y + player.h &&
            this.h + this.y > player.y;
    }

    onCollision() {
        if (this.collisionWithPlayer()) {
            if (this.mode === "+") {
                player.originalspeedy = Math.abs(player.originalspeedy);
            } else {
                player.originalspeedy = -1 * Math.abs(player.originalspeedy);
            }
        }
    }

    update() {
        this.onCollision();
    }

    draw() {
        ctx.globalAlpha = 0.5;
        super.draw();
        ctx.globalAlpha = 1;
    }
}