// Contact form handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            // Show loading state
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalText = submitButton.querySelector('.btn-text').textContent;
            submitButton.disabled = true;
            submitButton.querySelector('.btn-text').textContent = 'Sending...';
            
            try {
                const response = await fetch('/api/contact/submit', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
                });
                
                const result = await response.json();
                
                if (response.ok) {
                    formMessage.innerHTML = `
                        <div class="alert alert-success">
                            Message received. We'll be in touch within 24 hours.
                        </div>
                    `;
                    contactForm.reset();
                } else {
                    // Handle validation errors
                    let errorHtml = '<div class="alert alert-error"><ul>';
                    if (result.detail && Array.isArray(result.detail)) {
                        result.detail.forEach(error => {
                            errorHtml += `<li>${error.msg}</li>`;
                        });
                    } else {
                        errorHtml += '<li>An error occurred. Please try again.</li>';
                    }
                    errorHtml += '</ul></div>';
                    formMessage.innerHTML = errorHtml;
                }
            } catch (error) {
                console.error('Error:', error);
                formMessage.innerHTML = `
                    <div class="alert alert-error">
                        Network error. Please check your connection and try again.
                    </div>
                `;
            } finally {
                // Reset button state
                submitButton.disabled = false;
                submitButton.querySelector('.btn-text').textContent = originalText;
            }
        });
    }

    // FAQ Accordion functionality
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Toggle active class on clicked item
            item.classList.toggle('active');
            
            // Update toggle symbol
            const toggle = question.querySelector('.faq-toggle');
            if (item.classList.contains('active')) {
                toggle.textContent = '−';
            } else {
                toggle.textContent = '+';
            }
        });
    });
});