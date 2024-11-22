document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".image");
  
  // Handle drag start event
  images.forEach((image) => {
    image.addEventListener("dragstart", (e) => {
      e.dataTransfer.setData("text", e.target.id); // Set the dragged item's ID
    });

    image.addEventListener("dragover", (e) => {
      e.preventDefault(); // Allow drop
    });

    image.addEventListener("drop", (e) => {
      e.preventDefault(); // Prevent default drop behavior

      const draggedId = e.dataTransfer.getData("text");
      const draggedElement = document.getElementById(draggedId);
      const targetElement = e.target;

      if (draggedElement !== targetElement) {
        // Swap the background images
        const draggedBg = draggedElement.style.backgroundImage;
        const targetBg = targetElement.style.backgroundImage;

        draggedElement.style.backgroundImage = targetBg;
        targetElement.style.backgroundImage = draggedBg;
      }
    });
  });
});

