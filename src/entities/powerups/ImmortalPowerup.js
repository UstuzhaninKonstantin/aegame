import { player } from "../../entities.js";
import { Powerup } from "./Powerup.js";

export class ImmortalPowerup extends Powerup {
    constructor(x, y, w, h, color, duration) {
        super(x, y, w, h, color, duration);
    }

    powerup() {
        player.immortal = true;
    }

    afterPowerup() {
        player.immortal = false;
    }
}