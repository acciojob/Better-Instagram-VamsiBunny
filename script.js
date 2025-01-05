const draggables = document.querySelectorAll('.draggable');
let draggedElement = null;

draggables.forEach(div => {
  div.addEventListener('dragstart', (e) => {
    draggedElement = e.target;
    setTimeout(() => {
      draggedElement.style.opacity = '0.5';
    }, 0);
  });

  div.addEventListener('dragend', () => {
    setTimeout(() => {
      draggedElement.style.opacity = '1';
      draggedElement = null;
    }, 0);
  });

  div.addEventListener('dragover', (e) => {
    e.preventDefault();
  });

  div.addEventListener('dragenter', (e) => {
    e.preventDefault();
    e.target.style.border = '2px dashed #000';
  });

  div.addEventListener('dragleave', (e) => {
    e.target.style.border = '2px solid #ccc';
  });

  div.addEventListener('drop', (e) => {
    e.preventDefault();
    e.target.style.border = '2px solid #ccc';

    // Swap background images of dragged and dropped elements
    if (draggedElement !== e.target) {
      const tempBackground = e.target.style.backgroundImage;
      e.target.style.backgroundImage = draggedElement.style.backgroundImage;
      draggedElement.style.backgroundImage = tempBackground;
    }
  });
});
