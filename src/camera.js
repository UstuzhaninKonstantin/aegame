import { canvas } from "./canvas.js";

export const camera = {x: 0};

export function cx(x) {
    return x - camera.x + canvas.width / 5;
}