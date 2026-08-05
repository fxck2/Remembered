import * as THREE from "three";

export const keysPressed = {
    ArrowUp: false,
    ArrowDown: false,
    KeyW: false,
    KeyA: false,
    KeyS: false,
    KeyD: false,
    KeyP: false
};

const currentPage = () => {
    return window.location.pathname.split('/').pop();
}

export let mousePressed = [false, false, false];

export const updateMovement = (camera, controls) => {
    const speed = 0.05;

    if (keysPressed["KeyP"]) {
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

    if (keysPressed["ArrowUp"] && currentPage() === 'index.html') {
        camera.position.y += speed;
    }

    if (keysPressed["ArrowDown"] && currentPage() === 'index.html') {
        camera.position.y -= speed;
    }
}