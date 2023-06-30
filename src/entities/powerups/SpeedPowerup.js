import { player } from "../../entities.js";
import { Powerup } from "./Powerup.js";
import { speedPowerupImage } from "../../images.js";

export class SpeedPowerup extends Powerup {
    constructor(x, y, w, h, color, duration) {
        super(x, y, w, h, color, duration);
        this.image = speedPowerupImage;
    }

    powerup() {
        player.speedx = player.originalSpeedx / 2;
    }

    afterPowerup() {
        player.speedx = player.originalSpeedx;
    }
}