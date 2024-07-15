document.addEventListener('DOMContentLoaded', () => {
    const themeButton = document.querySelector('.theme-button');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navUl = document.querySelector('nav ul');
    const currentTheme = localStorage.getItem('theme') || 'dark';

    // Set the current theme on page load
    document.documentElement.setAttribute('data-theme', currentTheme);

    // Toggle theme on button click
    themeButton.addEventListener('click', () => {
        const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });

    // Toggle menu on hamburger click
    hamburgerMenu.addEventListener('click', () => {
        navUl.classList.toggle('show-menu');
        hamburgerMenu.classList.toggle('nav-open');
    });

    // Scroll to top button functionality
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");

    // Show or hide the button based on scroll position
    window.onscroll = () => {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    };

    // Smooth scroll to top when the button is clicked
    scrollToTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Footer toggle functionality for smaller screens
    if (window.innerWidth <= 768) {
        document.querySelectorAll('.footer-section h3').forEach(header => {
            header.addEventListener('click', () => {
                header.parentElement.classList.toggle('open');
            });
        });
    }

    // Handle window resize to add/remove footer toggle functionality
    window.addEventListener('resize', () => {
        if (window.innerWidth <= 768) {
            document.querySelectorAll('.footer-section h3').forEach(header => {
                if (!header._hasClickListener) {
                    header.addEventListener('click', () => {
                        header.parentElement.classList.toggle('open');
                    });
                    header._hasClickListener = true;
                }
            });
        } else {
            document.querySelectorAll('.footer-section').forEach(section => {
                section.classList.remove('open');
            });
        }
    });
});
