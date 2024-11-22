// Get all the draggable elements
const images = document.querySelectorAll('.image');

// Add event listeners for dragstart, dragover, and drop
images.forEach(image => {
  image.addEventListener('dragstart', dragStart);
  image.addEventListener('dragover', dragOver);
  image.addEventListener('drop', drop);
  image.addEventListener('dragenter', dragEnter);
  image.addEventListener('dragleave', dragLeave);
});

let draggedImage = null;

function dragStart(e) {
  draggedImage = e.target;
  // Delay to ensure dragged element stays visible
  setTimeout(() => {
    e.target.style.opacity = '0.5'; // Make the image semi-transparent during drag
  }, 0);
}

function dragOver(e) {
  e.preventDefault(); // Allow the drop
}

function dragEnter(e) {
  // Change the background color of the image when it's hovered
  e.target.style.backgroundColor = '#ddd';
}

function dragLeave(e) {
  // Reset the background color when the dragged item leaves
  e.target.style.backgroundColor = '#ccc';
}

function drop(e) {
  e.preventDefault();
  // Reset background color after drop
  e.target.style.backgroundColor = '#ccc';

  // Check if the drop target is not the dragged image itself
  if (draggedImage !== e.target) {
    // Swap the content between the dragged and dropped image
    const draggedContent = draggedImage.innerHTML;
    draggedImage.innerHTML = e.target.innerHTML;
    e.target.innerHTML = draggedContent;
  }

  // Reset the opacity of the dragged image
  draggedImage.style.opacity = '1';
}
