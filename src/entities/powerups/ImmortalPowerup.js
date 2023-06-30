import { player } from "../../entities.js";
import { Powerup } from "./Powerup.js";
import { immortalPowerupImage } from "../../images.js";

export class ImmortalPowerup extends Powerup {
    constructor(x, y, w, h, color, duration) {
        super(x, y, w, h, color, duration);
        this.image = immortalPowerupImage;
    }

    powerup() {
        player.immortal = true;
    }

    afterPowerup() {
        player.immortal = false;
    }
}