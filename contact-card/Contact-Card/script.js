document.addEventListener('DOMContentLoaded', function() {
    const secondaryBtn = document.querySelector('.secondary-btn');
    const contactPopup = document.querySelector('.contact-popup');
    const popupClose = document.querySelector('.popup-close');
    const contactForm = document.querySelector('.contact-form');
    
    // Open popup when Message button is clicked
    secondaryBtn.addEventListener('click', function() {
        contactPopup.classList.add('show');
        document.body.style.overflow = 'hidden';
    });
    
    // Close popup when close button is clicked
    popupClose.addEventListener('click', function() {
        contactPopup.classList.remove('show');
        document.body.style.overflow = '';
    });
    
    // Close popup when clicking outside the popup content
    contactPopup.addEventListener('click', function(e) {
        if (e.target === contactPopup) {
            contactPopup.classList.remove('show');
            document.body.style.overflow = '';
        }
    });
    
    // Prevent form submission and show confirmation
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Message sent successfully!');
        contactPopup.classList.remove('show');
        document.body.style.overflow = '';
        contactForm.reset();
    });
    
    // Animation for buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mousedown', function() {
            this.style.transform = 'scale(0.95)';
        });
        
        button.addEventListener('mouseup', function() {
            this.style.transform = '';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
    
    // Toggle follow state
    const followBtn = document.querySelector('.primary-btn');
    let following = false;
    
    followBtn.addEventListener('click', function() {
        following = !following;
        if (following) {
            this.innerHTML = '<i class="fa-solid fa-user-check"></i><span>Following</span>';
            this.style.backgroundColor = '#4CAF50';
        } else {
            this.innerHTML = '<i class="fa-solid fa-user-plus"></i><span>Follow</span>';
            this.style.backgroundColor = '';
        }
    });
});