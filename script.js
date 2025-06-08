function toggleDarkMode() {
    const body = document.body;
    const toggleBtn = document.querySelector(".toggle-btn");

    // Toggling the dark-mode class on the body
    body.classList.toggle("dark-mode");

    // Changing the button text based on the current mode
    if (body.classList.contains("dark-mode")) {
        toggleBtn.textContent = "Toggle Light Mode";
    } else {
        toggleBtn.textContent = "Toggle Dark Mode";
    }
}
var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 3, // Show multiple slides at once
    initialSlide: 1, // Start at the second slide so there's one on each side
    coverflowEffect: {
        rotate: 0, // No rotation
        stretch: 0,
        depth: 200, // Depth effect for perspective
        modifier: 1, // Effect multiplier
        slideShadows: false, // Disable slide shadows to make it look cleaner
    },
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

//slidesPerView: 3,

document.addEventListener('DOMContentLoaded', (event) => {
    const hamburger = document.querySelector('.hamburger');
    const navList = document.querySelector('.nav-list');

    hamburger.addEventListener('click', () => {
        navList.classList.toggle('open');
    });

    // Close the nav when a link is clicked
    document.querySelectorAll('.nav-list li a').forEach(link => {
        link.addEventListener('click', () => {
            navList.classList.remove('open');
        });
    });
});
function redirectToResume() {
    // Replace 'your_resume_url.pdf' with the actual URL of your resume file
    var resumeUrl = 'https://drive.google.com/file/d/1W3gm74UpZpymhqC52xdkjfAOPnzIwL2X/view?usp=sharin';
    window.location.href = resumeUrl;
}
function scrollToProjects() {
    var projectsSection = document.getElementById('projects');
    if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
}
document.querySelectorAll('ul a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent the form from submitting in the default way

        // Send the form data to your server or the Formspree URL
        // You can add the code here to send the form data

        // Clear the form fields after submission
        contactForm.reset();
    });
});