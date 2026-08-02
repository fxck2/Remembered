import { keysPressed, mousePressed } from "./move.js"

export const setupListeners = () => {
    window.addEventListener(
        "keydown",
        (event) => {
            if (event.code in keysPressed) {
                keysPressed[event.code] = true;
            }
        }
    );

    window.addEventListener(
        "keyup",
        (event) => {
            if (event.code in keysPressed) {
                keysPressed[event.code] = false;
            }
        }
    );

    document.addEventListener(
        "mousedown",
        (event) => {
            mousePressed[event.button] = true;
        }
    );

    document.addEventListener(
        "mouseup",
        (event) => {
            mousePressed[event.button] = false;
        }
    );
}
