
let dragIndex;
let dropIndex = 0;

const images = document.querySelectorAll(".image");

const drag = (e) => {
  e.dataTransfer.setData("text", (link unavailable));
};

const allowDrop = (e) => {
  e.preventDefault();
};

const drop = (e) => {
  e.preventDefault();
  const clone = e.target.cloneNode(true);
  const data = e.dataTransfer.getData("text");
  const nodeList = document.getElementById("parent").childNodes;
  console.log(data, (link unavailable));

  for (let i = 0; i < nodeList.length; i++) {
    if (nodeList[i].id === data) {
      dragIndex = i;
    }
    if (nodeList[i].id === (link unavailable)) {
      dropIndex = i;
    }
  }

  document.getElementById("parent").replaceChild(document.getElementById(data), e.target);
  document.getElementById("parent").insertBefore(clone, document.getElementById("parent").childNodes[dragIndex]);
};

const dragDrop = (image) => {
  image.ondragstart = drag;
  image.ondragover = allowDrop;
  image.ondrop = drop;
};

images.forEach(dragDrop);