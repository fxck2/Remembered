import { CSS2DObject } from 'jsm/renderers/CSS2DRenderer.js';

import { ObjectInfo }       from './objectInfo.js';

export const attachLabel = (mesh, info) => {
    const div = document.createElement('div');
    div.innerText = "name:" + info.name + " type:" + info.type;

    // 設定 CSS 樣式 (預設透明度 0 隱藏)
    div.style.cssText = `
        color: white;
        background: rgba(0, 0, 0, 0.8);
        padding: 4px 8px;
        border-radius: 4px;
        font-size: 12px;
        border: 1px solid #00ff88;
        opacity: 0;
        transition: opacity 0.2s ease;
    `;


    const labelObject = new CSS2DObject(div);
    labelObject.position.set(0, 1.2, 0);
    mesh.add(labelObject);

    // 把 DOM 元素記錄在 mesh.userData，方便後續控管透明度
    mesh.userData.labelDom = div;
    mesh.userData.css2dObject = labelObject;
}