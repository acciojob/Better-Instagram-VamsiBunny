const images = document.querySelectorAll('.image');
let draggedElement = null;

// Add event listeners to each draggable image container
images.forEach((image) => {
  image.addEventListener('dragstart', handleDragStart);
  image.addEventListener('dragover', handleDragOver);
  image.addEventListener('drop', handleDrop);
  image.addEventListener('dragenter', handleDragEnter);
  image.addEventListener('dragleave', handleDragLeave);
});

function handleDragStart(event) {
  draggedElement = event.target;
  event.target.style.opacity = '0.5'; // Visually indicate dragging
}

function handleDragOver(event) {
  event.preventDefault(); // Allow dropping
}

function handleDrop(event) {
  event.preventDefault();

  if (event.target !== draggedElement && event.target.classList.contains('image')) {
    // Swap inner HTML to exchange images
    const draggedHTML = draggedElement.innerHTML;
    draggedElement.innerHTML = event.target.innerHTML;
    event.target.innerHTML = draggedHTML;
  }

  // Reset styles
  resetDragStyles();
}

function handleDragEnter(event) {
  if (event.target.classList.contains('image')) {
    event.target.style.backgroundColor = 'yellow'; // Highlight potential drop target
  }
}

function handleDragLeave(event) {
  if (event.target.classList.contains('image')) {
    event.target.style.backgroundColor = ''; // Remove highlight
  }
}

// Reset styles after drag ends
function resetDragStyles() {
  images.forEach((image) => {
    image.style.opacity = '1';
    image.style.backgroundColor = '';
  });
}
