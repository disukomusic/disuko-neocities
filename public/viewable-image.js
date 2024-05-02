document.addEventListener("DOMContentLoaded", function() {
    const viewableImgs = document.querySelectorAll('.viewable-img');

    viewableImgs.forEach(function(viewableImg) {
        viewableImg.addEventListener('mouseenter', function() {
            viewableImg.classList.add('hovered');
        });

        viewableImg.addEventListener('mouseleave', function() {
            if (!viewableImg.classList.contains('expanded')) {
                viewableImg.classList.remove('hovered');
            }
        });

        viewableImg.addEventListener('click', function() {
            if (!viewableImg.classList.contains('expanded')) {
                closeAllViewableImgs();
                viewableImg.classList.add('expanded');
            } else {
                viewableImg.classList.remove('expanded');
            }
        });
    });

    function closeAllViewableImgs() {
        viewableImgs.forEach(function(viewableImg) {
            viewableImg.classList.remove('expanded');
        });
    }
});
