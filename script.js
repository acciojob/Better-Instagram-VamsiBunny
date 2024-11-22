document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.image');

    images.forEach(image => {
        image.addEventListener('dragstart', dragStart);
        image.addEventListener('dragover', dragOver);
        image.addEventListener('drop', drop);
    });

    let draggedElement = null;

    function dragStart(event) {
        // Store the reference to the dragged element
        draggedElement = event.target;
        event.dataTransfer.setData("text", draggedElement.id);
    }

    function dragOver(event) {
        // Prevent the default action (to allow dropping)
        event.preventDefault();
    }

    function drop(event) {
        event.preventDefault();

        // Get the ID of the target element
        const target = event.target;

        // Check if the target is a valid drop location (i.e., an image div)
        if (target && target !== draggedElement && target.classList.contains('image')) {
            // Swap the content (images)
            const draggedId = draggedElement.id;
            const targetId = target.id;

            // Swap the elements
            const draggedContent = draggedElement.innerHTML;
            draggedElement.innerHTML = target.innerHTML;
            target.innerHTML = draggedContent;

            // Optional: Update the background images if necessary (if background images are involved)
            const draggedBg = draggedElement.style.backgroundImage;
            draggedElement.style.backgroundImage = target.style.backgroundImage;
            target.style.backgroundImage = draggedBg;
        }
    }
});
