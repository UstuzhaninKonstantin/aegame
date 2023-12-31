import { player } from "../../entities.js";
import { sizePowerupImage } from "../../images.js";
import { Powerup } from "./Powerup.js";

export class SizePowerup extends Powerup {
    constructor(x, y, w, h, color, duration) {
        super(x, y, w, h, color, duration);
        this.image = sizePowerupImage;
    }

    powerup() {
        player.w = player.originalSize.w / 2;
        player.h = player.originalSize.h / 2;
    }

    afterPowerup() {
        player.w = player.originalSize.w;
        player.h = player.originalSize.h;
    }
}
