import * as THREE from "three";

export const keysPressed = {
    ArrowUp: false,
    ArrowDown: false,
    KeyW: false,
    KeyA: false,
    KeyS: false,
    KeyD: false
};

export let mousePressed = [false, false, false];

export const updateMovement = (camera, controls) => {
    const speed = 0.05;

    if (mousePressed[0]) {
        controls.lock();
    }

    if (keysPressed["KeyW"]) {
        controls.moveForward(speed);
    }

    if (keysPressed["KeyS"]) {
        controls.moveForward(-speed);
    }

    if (keysPressed["KeyA"]) {
        controls.moveRight(-speed);
    }

    if (keysPressed["KeyD"]) {
        controls.moveRight(speed);
    }

    if (keysPressed["ArrowUp"]) {
        camera.position.y += speed;
    }

    if (keysPressed["ArrowDown"]) {
        camera.position.y -= speed;
    }
}