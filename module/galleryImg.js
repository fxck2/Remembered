import * as THREE from "three";

import { interactiveObjects }       from "./env.js";
import { attachLabel }              from "./objectLabel.js"

const textureLoader = new THREE.TextureLoader();

const SCALE = 500;
const imgGAP = 0.5;

export class ImgData {
    url;
    w;
    h;
    imgInfo;
    constructor (url, w, h, imgInfo) {
        this.url = url;
        this.w = w;
        this.h = h;
        this.imgInfo = imgInfo;
    }
}

export const createImg = (imgURL, width, height, imgInfo) => {
    const imgTexture = textureLoader.load(imgURL);
    imgTexture.colorSpace = THREE.SRGBColorSpace;
    const imgMaterial = new THREE.MeshBasicMaterial({
        map: imgTexture
    });
    const imgGeometry = new THREE.PlaneGeometry(width, height);
    const imgMesh = new THREE.Mesh(imgGeometry, imgMaterial);
    imgMesh.userData.info = imgInfo;
    attachLabel(imgMesh, imgInfo);
    return imgMesh;
}

export const createGallery = (scene, imgDataList) => {
    const imgMeshList = [];
    let currentX = 0;

    imgDataList.forEach((data) => {
        const scaledWidth = data.w / SCALE;
        const scaledHeight = data.h / SCALE;

        const imgMesh = createImg(data.url, scaledWidth, scaledHeight, data.imgInfo);
        imgMesh.position.set(currentX + scaledWidth / 2, 0, 0);
        currentX += scaledWidth + imgGAP; // currentX 對齊下一張圖片的最左邊

        imgMeshList.push(imgMesh);
        scene.add(imgMesh);
        interactiveObjects.push(imgMesh);
    });

    return imgMeshList;
}

export const destroyGallery = (imgMeshList) => {
    imgMeshList.forEach((mesh) => {
        mesh.removeFromParent();
        if (mesh.geometry) {
            mesh.geometry.dispose();
        }
        if (mesh.material) {
            if (mesh.material.map) {
                mesh.material.map.dispose(); 
            }
            mesh.material.dispose(); 
        }
    });

    imgMeshList.length = 0;
}