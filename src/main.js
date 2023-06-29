import { run } from "./run.js";
import { addEntity } from "./entities.js";
import { Player } from "./entities/Player.js";

const player = new Player(100, 100, 50, 50, "#df134a", 10, 10);
addEntity(player);
run();