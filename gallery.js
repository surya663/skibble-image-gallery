// Get all the images in the gallery
const images = document.querySelectorAll('#gallery img');

// Loop through each image and add a click event listener
images.forEach((image) => {
  image.addEventListener('click', () => {
    // Create a modal window
    const modal = document.createElement('div');
    modal.classList.add('modal');
    
    // Create an image element for the modal
    const modalImage = document.createElement('img');
    modalImage.src = image.src;
    modal.appendChild(modalImage);
    
    // Add the modal to the page
    document.body.appendChild(modal);
    
    // Add a click event listener to the modal
    modal.addEventListener('click', () => {
      modal.remove();
    });
  });
});

  