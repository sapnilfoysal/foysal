
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.navmenu li');
    const navLinks = document.querySelectorAll('.navmenu li a');

    // Function to remove 'active' class from all nav items
    function removeActiveClasses() {
        navItems.forEach(nav => nav.classList.remove('active'));
    }

    // Function to add 'active' class to the current section's nav item
    function addActiveClassToNavItem(id) {
        navLinks.forEach(link => {
            if (link.getAttribute('href').substring(1) === id) {
                link.parentElement.classList.add('active');
            }
        });
    }

    // Event listener to handle scroll
    window.addEventListener('scroll', function () {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        removeActiveClasses();
        addActiveClassToNavItem(current);
    });

    // Optional: Click event to smoothly scroll to the section
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });
});



// Function to check if an element is in viewport
function isInViewport(element) {
var rect = element.getBoundingClientRect();
return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
);
}

// Function to animate progress bars
function animateProgressBars() {
var progressBars = document.querySelectorAll('.progress-bar');
progressBars.forEach(function(bar) {
    var width = bar.style.width;
    bar.style.width = '0';
    setTimeout(function() {
        bar.style.transition = 'width 3s ease';
        bar.style.width = width;
    }, 100);
});
}

// Function to handle scroll event
function handleScroll() {
var skillsSection = document.getElementById('skill');
if (isInViewport(skillsSection)) {
    animateProgressBars();
    window.removeEventListener('scroll', handleScroll); // Remove event listener once animation is triggered
}
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);
