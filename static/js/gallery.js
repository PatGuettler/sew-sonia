/**
 * Gallery JS - Handles gallery image interactions 
 */

document.addEventListener('DOMContentLoaded', function() {
    // Gallery lightbox functionality
    const galleryLinks = document.querySelectorAll('.gallery-link');
    
    // Create lightbox elements
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <button class="lightbox-close">&times;</button>
            <div class="lightbox-image-container">
                <img class="lightbox-image" src="" alt="">
            </div>
            <div class="lightbox-caption"></div>
            <button class="lightbox-prev">&laquo;</button>
            <button class="lightbox-next">&raquo;</button>
        </div>
    `;
    document.body.appendChild(lightbox);
    
    // Get lightbox elements
    const lightboxImage = lightbox.querySelector('.lightbox-image');
    const lightboxCaption = lightbox.querySelector('.lightbox-caption');
    const lightboxClose = lightbox.querySelector('.lightbox-close');
    const lightboxPrev = lightbox.querySelector('.lightbox-prev');
    const lightboxNext = lightbox.querySelector('.lightbox-next');
    
    // Current gallery and index
    let currentGallery = [];
    let currentIndex = 0;
    
    // Add click event to gallery links
    galleryLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const imageUrl = this.getAttribute('href');
            const caption = this.getAttribute('data-caption') || '';
            const galleryName = this.getAttribute('data-gallery') || '';
            
            if (imageUrl && imageUrl !== '#') {
                // Get all images from the same gallery
                currentGallery = Array.from(document.querySelectorAll(`.gallery-link[data-gallery="${galleryName}"]`));
                currentIndex = currentGallery.indexOf(this);
                
                openLightbox(imageUrl, caption);
            }
        });
    });
    
    // Open lightbox function
    function openLightbox(imageUrl, caption) {
        lightboxImage.src = imageUrl;
        lightboxCaption.textContent = caption;
        lightbox.classList.add('active');
        
        // Show/hide navigation buttons
        if (currentGallery.length <= 1) {
            lightboxPrev.style.display = 'none';
            lightboxNext.style.display = 'none';
        } else {
            lightboxPrev.style.display = 'block';
            lightboxNext.style.display = 'block';
        }
    }
    
    // Close lightbox
    lightboxClose.addEventListener('click', () => {
        lightbox.classList.remove('active');
    });
    
    // Close lightbox when clicking outside image
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
        }
    });
    
    // Previous image
    lightboxPrev.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + currentGallery.length) % currentGallery.length;
        const prevLink = currentGallery[currentIndex];
        const imageUrl = prevLink.getAttribute('href');
        const caption = prevLink.getAttribute('data-caption') || '';
        
        openLightbox(imageUrl, caption);
    });
    
    // Next image
    lightboxNext.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % currentGallery.length;
        const nextLink = currentGallery[currentIndex];
        const imageUrl = nextLink.getAttribute('href');
        const caption = nextLink.getAttribute('data-caption') || '';
        
        openLightbox(imageUrl, caption);
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        
        if (e.key === 'Escape') {
            lightbox.classList.remove('active');
        } else if (e.key === 'ArrowLeft') {
            lightboxPrev.click();
        } else if (e.key === 'ArrowRight') {
            lightboxNext.click();
        }
    });
    
    // Filter functionality for gallery (if available)
    const filterButtons = document.querySelectorAll('.gallery-filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                const filter = this.getAttribute('data-filter');
                
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                // Filter gallery items
                galleryItems.forEach(item => {
                    if (filter === 'all' || item.classList.contains(filter)) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }
});
