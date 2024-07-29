(function() {
    // Create the panda icon element
    const pandaIcon = document.createElement('img');
    pandaIcon.src = './images/bootsmarker.gif'; // Replace with the actual URL of the panda icon
    pandaIcon.style.width = '64px';
    pandaIcon.style.height = 'auto';
    pandaIcon.style.cursor = 'pointer';
    pandaIcon.style.transition = 'transform 0.5s, opacity 0.5s';

    // List of rocket boot part URLs
    const rocketBootParts = [
        './images/bootsmarker.gif',
        './images/bootsmarker.gif',
        './images/bootsmarker.gif',
        './images/bootsmarker.gif',
        './images/bootsmarker.gif'
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
        // Perform bounce animation
        pandaIcon.style.transform = 'scale(1.2)';
        setTimeout(() => {
            pandaIcon.style.transform = 'scale(1)';
        }, 250);

        // Download a random rocket boot part
        const randomPart = rocketBootParts[Math.floor(Math.random() * rocketBootParts.length)];
        downloadFile(randomPart);

        // Make the icon disappear after bounce animation
        setTimeout(() => {
            pandaIcon.style.opacity = '0';
            setTimeout(() => {
                pandaIcon.remove();
            }, 500); // Ensure it matches the fade-out duration
        }, 500); // Timing matches the animation duration
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
