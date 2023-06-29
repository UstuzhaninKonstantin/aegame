import { RectEntity } from "./Entities.js";
import { player } from "../entities.js";

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
                player.speedy = Math.abs(player.speedy)
            } else {
                player.speedy = -1 * Math.abs(player.speedy);
            }
        }
    }

    update() {
        this.onCollision();
    }
}