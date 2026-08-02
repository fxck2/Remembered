import * as THREE from "three";
import { PointerLockControls } from "jsm/controls/PointerLockControls.js";

export const setupScene = () => {
    const w = window.innerWidth;
    const h = window.innerHeight;

    const scene = new THREE.Scene();

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(w, h);
    document.body.appendChild(renderer.domElement);

    const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);
    camera.position.z = 2;

    const controls = new PointerLockControls(camera, renderer.domElement);

    controls.addEventListener(
        "lock", 
        (event) => {
            console.log("lock")
        }
    );

    controls.addEventListener(
        "unlock", 
        (event) => {
            console.log("unlock")
        }
    );

    const raycaster = new THREE.Raycaster();
    
    return {scene, renderer, camera, controls, raycaster};
}