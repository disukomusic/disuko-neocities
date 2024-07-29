(function() {
    // Create the panda icon element
    const pandaIcon = document.createElement('img');
    pandaIcon.src = './images/bootsmarker.png'; // Replace with the actual URL of the panda icon
    pandaIcon.style.width = '64px';
    pandaIcon.style.height = 'auto';
    pandaIcon.style.cursor = 'pointer';
    pandaIcon.style.transition = 'transform 0.5s, opacity 0.5s';

    // List of rocket boot part URLs
    const rocketBootParts = [
        './images/bootsmarker.png',
        './images/bootsmarker.png',
        './images/bootsmarker.png',
        './images/bootsmarker.png',
        './images/bootsmarker.png'
    ];

    // Function to download a file
    function downloadFile(url) {
        const a = document.createElement('a');
        a.href = url;
        a.download = url.split('/').pop();
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }

    // Add click event listener to the panda icon
    pandaIcon.addEventListener('click', () => {
        // Perform bounce animation: grow and then shrink while fading out
        pandaIcon.style.transform = 'scale(1.2)';
        setTimeout(() => {
            pandaIcon.style.transform = 'scale(0)';
            pandaIcon.style.opacity = '0';
        }, 250);

        // Download a random rocket boot part
        const randomPart = rocketBootParts[Math.floor(Math.random() * rocketBootParts.length)];
        downloadFile(randomPart);

        // Remove the icon after the animation
        setTimeout(() => {
            pandaIcon.remove();
        }, 750); // Ensure it matches the animation duration
    });

    // Replace a random image on the page with the panda icon
    window.onload = () => {
        const images = document.querySelectorAll('img');
        if (images.length > 0) {
            const randomImage = images[Math.floor(Math.random() * images.length)];
            randomImage.replaceWith(pandaIcon);
        }
    };
})();
