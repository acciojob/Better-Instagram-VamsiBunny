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
  e.preventDefault();

  // Check if the target is a valid draggable image
  if (e.target && e.target.classList.contains('image')) {
    e.target.style.backgroundColor = 'yellow'; // Highlight valid drop target
  } else {
    e.target.style.backgroundColor = ''; // Reset if it's not a valid target
  }
}

function dragEnter(e) {
  // Only highlight if the target is a valid image element
  if (e.target && e.target.classList.contains('image')) {
    e.target.style.backgroundColor = 'yellow';
  }
}

function dragLeave(e) {
  // Reset the background color when the dragged item leaves
  if (e.target && e.target.classList.contains('image')) {
    e.target.style.backgroundColor = '';
  }
}

function drop(e) {
  e.preventDefault();
  
  // Reset the background color after drop
  if (e.target && e.target.classList.contains('image')) {
    e.target.style.backgroundColor = '';

    // Check if the drop target is not the dragged image itself
    if (draggedImage !== e.target) {
      // Swap the content between the dragged and dropped image
      const draggedContent = draggedImage.innerHTML;
      draggedImage.innerHTML = e.target.innerHTML;
      e.target.innerHTML = draggedContent;
    }

    // Reset the opacity of the dragged image
    draggedImage.style.opacity = '1';
  } else {
    // If the target is not a valid image, do not allow the drop
    e.target.style.backgroundColor = ''; // Reset background color if drop is not allowed
  }
}
