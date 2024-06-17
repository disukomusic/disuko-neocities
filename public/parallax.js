document.addEventListener('mousemove', function(e) {
    var x = (e.clientX / window.innerWidth) - 0.5;
    var y = (e.clientY / window.innerHeight) - 0.5;
    var elements = document.querySelectorAll('.parallax-element');

    elements.forEach(function(element) {
        var depth = element.getAttribute('data-depth') || 1;
        var moveX = (x * depth * 30).toFixed(2);
        var moveY = (y * depth * 30).toFixed(2);
        element.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
});