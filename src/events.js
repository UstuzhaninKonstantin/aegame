const keysPressed = {};
const mouseClick = {};
const mousePos = {x: 0, y: 0};

document.addEventListener("keydown", (e) => {
    keysPressed[e.code] = true;
});

document.addEventListener("keyup", (e) => {
    keysPressed[e.code] = false;
});

document.addEventListener("mousedown", (e) => {
    mouseClick[e.button] = true;
});

document.addEventListener("mouseup", (e) => {
    mouseClick[e.button] = false;
});

document.addEventListener("mousemove", (e) => {
    mousePos.x = e.offsetX;
    mousePos.y = e.offsetY;
});

export { keysPressed, mouseClick, mousePos }