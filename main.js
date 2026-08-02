import * as THREE from "three";

import { setupScene }           from "./module/scene.js"
import { setupListeners }       from "./module/eventListeners.js"
import { animate }              from "./module/animate.js"

const {scene, renderer, camera, controls, raycaster} = setupScene();

setupListeners();

// =================================================
// testing to show a cube (removed in the future)
const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshStandardMaterial({
  color: 0xffffff,
});

const cube1 = new THREE.Mesh(geometry, material);
cube1.position.set(0,0,1);
cube1.name = "cube1"
scene.add(cube1);

const hemiLight = new THREE.HemisphereLight(0x0099ff, 0xaa5500);
scene.add(hemiLight);

// =================================================

animate(scene, renderer, camera, controls, raycaster);

/*
const w = window.innerWidth;
const h = window.innerHeight;
const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer();
renderer.setSize(w, h);
document.body.appendChild(renderer.domElement);
const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);
camera.position.z = 2;
const ctrls = new PointerLockControls(camera, renderer.domElement);
scene.add(ctrls.object);
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

ctrls.addEventListener(
        "lock", 
        (event) => {
            console.log("lock")
        }
);

ctrls.addEventListener(
    "unlock", 
    (event) => {
        console.log("unlock")
    }
);

window.addEventListener(
    'mousemove', 
    (event) => {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    }
);

document.addEventListener(
    "mousedown",
    (event) => {
        if (event.button === 0) {
            ctrls.lock();
        }
    }
);

const keys = {};

window.addEventListener(
    "keydown",
    (event) => {
        keys[event.code] = true;
    }
);

window.addEventListener(
    "keyup",
    (event) => {
        keys[event.code] = false;
    }
);

function updateCamera(){

    const speed = 0.05;

    if(keys["KeyW"]){
        ctrls.moveForward(speed);
    }

    if(keys["KeyS"]){
        ctrls.moveForward(-speed);
    }


    if(keys["KeyA"]){
        ctrls.moveRight(-speed);
    }

    if(keys["KeyD"]){
        ctrls.moveRight(speed);
    }

    if(keys["ArrowUp"]){
        camera.position.y += speed;
    }

    if(keys["ArrowDown"]){
        camera.position.y -= speed;
    }
}

const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshStandardMaterial({
  color: 0xffffff,
});

const cube1 = new THREE.Mesh(geometry, material);
cube1.position.set(0,0,1);
cube1.name = "cube1"
scene.add(cube1);

const hemiLight = new THREE.HemisphereLight(0x0099ff, 0xaa5500);
scene.add(hemiLight);



animate();

function animate() {
    requestAnimationFrame(animate);
    updateCamera();
    const center = new THREE.Vector2(0, 0);
    raycaster.setFromCamera(center, camera);
    const intersects = raycaster.intersectObjects(scene.children, true);
    if (intersects.length > 0 && intersects[0].distance < 3) {

        const targetObject = intersects[0].object;
        
        console.log('當前指到的物體是：', targetObject.name || targetObject);
    }
    renderer.render(scene, camera)
}
*/