import * as THREE from "three";

import { interactiveObjects, setupEnv}               from "./module/env.js"
import { setupListeners }                           from "./module/eventListeners.js"
import { animate }                                  from "./module/animate.js"
import { objectInfo  }                              from "./module/objectInfo.js";
import { attachLabel }                              from "./module/objectLabel.js";

const {scene, webglRenderer, labelRenderer, camera, controls, raycaster} = setupEnv();

setupListeners();

// =================================================
// testing to show a cube (removed in the future)
const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshStandardMaterial({
    color: 0xffffff,
});

const cube1 = new THREE.Mesh(geometry, material);
cube1.position.set(0,0,1);
cube1.name = "cube1";
cube1.userData.info = new objectInfo("c1", "cube");
attachLabel(cube1, cube1.userData.info);
scene.add(cube1);
interactiveObjects.push(cube1);

const hemiLight = new THREE.HemisphereLight(0x0099ff, 0xaa5500);
scene.add(hemiLight);

// =================================================

animate(scene, webglRenderer, labelRenderer, camera, controls, raycaster);