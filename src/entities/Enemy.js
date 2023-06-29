import { RectEntity } from "./Entities.js";
import { player, removeEntity } from "../entities.js";
import { cx } from "../camera.js";

export class Enemy extends RectEntity {
    constructor(x, y, w, h, color) {
        super(x, y, w, h, color);
    }

    collisionWithPlayer() {
        return this.x < player.x + player.w &&
            this.x + this.w > player.x &&
            this.y < player.y + player.h &&
            this.h + this.y > player.y;
    }

    onCollision() {
        if (this.collisionWithPlayer()) {
            player.die();
        }
    }

    update() {
        this.onCollision();
    }
}