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

let draggedImage = null;

// When drag starts, store the dragged element
function dragStart(e) {
  draggedImage = e.target;
  // Set the opacity to show that it's being dragged
  setTimeout(() => {
    e.target.style.opacity = '0.5';
  }, 0);
}

// Allow dragging over the div (required to make a valid drop target)
function dragOver(e) {
  e.preventDefault();
  if (e.target && e.target.classList.contains('image')) {
    e.target.style.backgroundColor = 'yellow'; // Highlight drop target
  }
}

// Highlight the target while dragging over it
function dragEnter(e) {
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
  // Remove background highlight after drop
  if (e.target && e.target.classList.contains('image')) {
    e.target.style.backgroundColor = '';

    // If the dragged image is not dropped on itself, swap images
    if (draggedImage !== e.target) {
      const draggedImg = draggedImage.querySelector('img');
      const targetImg = e.target.querySelector('img');

      // Swap the src of the images to swap the content
      const tempSrc = draggedImg.src;
      draggedImg.src = targetImg.src;
      targetImg.src = tempSrc;
    }

    // Reset the opacity of the dragged image
    draggedImage.style.opacity = '1';
  }
}
