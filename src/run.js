import { ctx, canvas } from "./canvas.js";
import { createEntities, entities } from "./entities.js";

export function run() {
    createEntities();
    setInterval(() => { 
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (const entity of entities) {
            entity.update();
            entity.draw();
        }
    }, 1000 / 60);
}
