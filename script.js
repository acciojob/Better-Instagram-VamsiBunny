// Get all the draggable elements (divs containing images)
const images = document.querySelectorAll('.image');

// Add event listeners for dragstart, dragover, and drop
images.forEach(image => {
  image.addEventListener('dragstart', dragStart);
  image.addEventListener('dragover', dragOver);
  image.addEventListener('drop', drop);
  image.addEventListener('dragenter', dragEnter);
  image.addEventListener('dragleave', dragLeave);
});

let draggedElement = null;

// When drag starts, store the dragged element
function dragStart(e) {
  draggedElement = e.target;
  e.dataTransfer.setData('text/plain', e.target.id);
  setTimeout(() => {
    e.target.style.opacity = '0.5';
  }, 0);
}

// Allow dragging over the div
function dragOver(e) {
  e.preventDefault();
}

// Highlight the target while dragging over it
function dragEnter(e) {
  e.preventDefault();
  if (e.target && e.target.classList.contains('image')) {
    e.target.style.backgroundColor = 'yellow';
  }
}

// Remove highlight when the dragged item leaves the target
function dragLeave(e) {
  if (e.target && e.target.classList.contains('image')) {
    e.target.style.backgroundColor = '';
  }
}

// Handle the drop event
function drop(e) {
  e.preventDefault();
  if (e.target && e.target.classList.contains('image')) {
    e.target.style.backgroundColor = '';
    const droppedElement = e.target;
    if (draggedElement !== droppedElement) {
      // Swap the images between the two elements
      const draggedImg = draggedElement.querySelector('img');
      const droppedImg = droppedElement.querySelector('img');
      const tempSrc = draggedImg.src;
      draggedImg.src = droppedImg.src;
      droppedImg.src = tempSrc;
    }
    draggedElement.style.opacity = '1';
  }
}
