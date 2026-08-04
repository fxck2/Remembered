import * as THREE from "three";
import { PointerLockControls } from "jsm/controls/PointerLockControls.js";
import { CSS2DRenderer } from "jsm/renderers/CSS2DRenderer.js";


export const interactiveObjects = [];

export const setupEnv = () => {
    const w = window.innerWidth;
    const h = window.innerHeight;

    const scene = new THREE.Scene();

    const webglRenderer = new THREE.WebGLRenderer();
    webglRenderer.setSize(w, h);
    document.body.appendChild(webglRenderer.domElement);

    const labelRenderer = new CSS2DRenderer();
    labelRenderer.setSize(w, h);
    labelRenderer.domElement.style.position = 'absolute';
    labelRenderer.domElement.style.top = '0px';
    labelRenderer.domElement.style.pointerEvents = 'none';
    document.body.appendChild(labelRenderer.domElement);

    const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);
    camera.position.z = 2;

    const controls = new PointerLockControls(camera, webglRenderer.domElement);

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
    
    return {scene, webglRenderer, labelRenderer, camera, controls, raycaster};
}