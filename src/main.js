import { run } from "./run.js";

const playButton = document.getElementById("play");
playButton.addEventListener("click", () => {
    const canvas = document.getElementById("canvas");
    const menu = document.getElementById("menu");
    canvas.style.display = "block";
    menu.style.display = "none";
    run();
});