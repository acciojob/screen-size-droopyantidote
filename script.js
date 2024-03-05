// Get the <h1> tag where we'll display the width and height
const sizeText = document.getElementById('sizeText');

// Function to update width and height values
function updateSize() {
    // Get the width and height of the window
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Update the text content of the <h1> tag
    sizeText.textContent = `Width: ${width} Height: ${height}`;
}

// Call the updateSize function when the window is resized
window.addEventListener('resize', updateSize);

// Call the updateSize function initially to show the initial width and height
updateSize();
