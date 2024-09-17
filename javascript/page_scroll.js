document.addEventListener('DOMContentLoaded', () => {
    
    const scrollContainer = document.querySelector('.y-scroll-container');
    const pages = document.querySelectorAll('.page');

    // Handle scroll events
    function onScroll() {
        
        const scrollTop = scrollContainer.scrollTop;
        const containerHeight = scrollContainer.clientHeight;

        pages.forEach(page => {
            const pageRect = page.getBoundingClientRect();
            const containerRect = scrollContainer.getBoundingClientRect();

            // Calculate page top and bottom relative to the container
            const pageTop = pageRect.top - containerRect.top + scrollTop;
            const pageBottom = pageTop + pageRect.height;

            // Check if the page is in view
            if (pageTop <= scrollTop + containerHeight / 3 && pageBottom > scrollTop) {
                
                // Remove all color classes
                scrollContainer.classList.forEach(cls => {
                    if (cls.startsWith('color-')) {
                        scrollContainer.classList.remove(cls);
                    }
                });

                // Add the color class of the current page
                const colorClass = 'color-' + page.dataset.color;
                scrollContainer.classList.add(colorClass);
            }
        });
    }

    // Attach the scroll event listener
    scrollContainer.addEventListener('scroll', onScroll);

    // Trigger the scroll handler initially
    onScroll();
});
