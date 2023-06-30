import { ctx } from "../canvas.js"; 
import { cx } from "../camera.js";

export class Entity {
    constructor() {
        this.toDelete = false;
    }

    update() {}

    draw() {}
}

export class RectEntity extends Entity {
    constructor(x, y, w, h, color) {
        super();
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.color = color;
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(cx(this.x), this.y, this.w, this.h);
    }
}