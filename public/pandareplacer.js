(function() {
    // Create the panda icon element
    const pandaIcon = document.createElement('img');
    pandaIcon.src = './images/bootsmarker.gif'; // Replace with the actual URL of the panda icon
    pandaIcon.style.width = '50px';
    pandaIcon.style.height = '50px';
    pandaIcon.style.cursor = 'pointer';

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
        const randomPart = rocketBootParts[Math.floor(Math.random() * rocketBootParts.length)];
        downloadFile(randomPart);
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
