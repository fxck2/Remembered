const sideInfoPanel = document.getElementById('side-info-panel');
const sideInfoName  = document.getElementById('side-info-name');
const sideInfoType  = document.getElementById('side-info-type');
const sideInfoDesc  = document.getElementById('side-info-desc');

export const showSideInfoPanel = (info) => {
    sideInfoName.innerText = info.name;
    sideInfoType.innerText = "type: " + info.type;
    sideInfoDesc.innerText = "description: " + info.description;

    sideInfoPanel.classList.add("active");
}

export const hideSideInfoPanel = () => {
    console.log("remove side panel")
    sideInfoPanel.classList.remove("active");
}