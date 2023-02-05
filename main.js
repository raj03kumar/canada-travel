//Get the video containers from the DOM
const containers = document.querySelectorAll("header > div");

// Loop through the contaniers
containers.forEach(container => {
    // Add a mouse enter event
    container.addEventListener("mouseenter", ()=>{
        // Play the video
        container.querySelector('video').play();
    });
    // Add a mouse leave event
    container.addEventListener("mouseleave" ,()=>{
        // Pause the video
        container.querySelector('video').pause();
    });
});