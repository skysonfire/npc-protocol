// Main JavaScript file for NPC Protocol website
// This file handles the interactive elements of the website

// DOMContentLoaded event listener to ensure the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Header scroll effect
    const header = document.querySelector('.nav');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Mobile menu toggle (if needed)
    // This would be implemented if there were a mobile menu button
    // const mobileMenuButton = document.querySelector('.mobile-menu-button');
    // if (mobileMenuButton) {
    //     mobileMenuButton.addEventListener('click', function() {
    //         // Toggle mobile menu
    //     });
    // }

    // Animation on scroll
    const fadeUpElements = document.querySelectorAll('.fade-up');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    fadeUpElements.forEach(element => {
        observer.observe(element);
    });

    // Form submission handling
    const contactForms = document.querySelectorAll('form');
    
    contactForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            
            // In a real implementation, you would send this to your server
            console.log('Form submitted:', Object.fromEntries(formData));
            
            // Show success message (this would be replaced with actual submission)
            alert('Thank you for your message! We will get back to you soon.');
            
            // Reset form
            this.reset();
        });
    });

    // Initialize any other interactive elements here
    console.log('NPC Protocol website initialized');
});

// Utility functions that can be used throughout the site
const utils = {
    // Debounce function for performance optimization
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },
    
    // Check if element is in viewport
    isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
};

// Export utilities for use in other scripts if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = utils;
}