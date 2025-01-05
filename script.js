const images = document.querySelectorAll(".image");
let draggedElement = null;

// Event Listener for Drag Start
images.forEach((image) => {
  image.addEventListener("dragstart", (e) => {
    draggedElement = e.target; // Store the dragged element
    e.dataTransfer.effectAllowed = "move";
  });
  
  image.addEventListener("dragover", (e) => {
    e.preventDefault(); // Allow the drop
    e.dataTransfer.dropEffect = "move";
  });

  image.addEventListener("drop", (e) => {
    e.preventDefault();

    if (draggedElement !== e.target && e.target.classList.contains('image')) {
      // Swap the inner HTML of dragged and dropped elements
      const tempHTML = draggedElement.innerHTML;
      draggedElement.innerHTML = e.target.innerHTML;
      e.target.innerHTML = tempHTML;
    }
  });
});
