// Mobile Menu Toggle
const mobileToggle = document.getElementById('mobileToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

mobileToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    mobileToggle.classList.toggle('active');
});

// Close mobile menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileToggle.classList.remove('active');
    });
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 1px 2px rgba(0, 0, 0, 0.05)';
    }
    
    lastScroll = currentScroll;
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 70; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Form submission handler with multiple integration options
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formStatus = document.getElementById('formStatus');
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.textContent;
        
        // Show loading state
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
        formStatus.className = 'form-status loading';
        formStatus.textContent = 'Sending your message...';
        
        // Get form data
        const formData = new FormData(contactForm);
        
        try {
            // Option 1: Formspree (Recommended - Easy Setup)
            // Replace YOUR_FORM_ID with your actual Formspree form ID
            // Sign up at https://formspree.io/ to get your form ID
            const formAction = contactForm.getAttribute('action');
            
            if (formAction && formAction.includes('formspree.io')) {
                const response = await fetch(formAction, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                
                if (response.ok) {
                    formStatus.className = 'form-status success';
                    formStatus.textContent = '✓ Thank you! We\'ll get back to you within 24 hours.';
                    contactForm.reset();
                } else {
                    throw new Error('Form submission failed');
                }
            } else {
                // Option 2: Custom Backend API
                // Uncomment and modify for your backend
                /*
                const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(Object.fromEntries(formData)),
                });
                
                if (!response.ok) throw new Error('Submission failed');
                
                const result = await response.json();
                */
                
                // Option 3: EmailJS (No backend needed)
                // Uncomment and configure with your EmailJS credentials
                // Sign up at https://www.emailjs.com/
                /*
                emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
                    from_name: formData.get('name'),
                    from_email: formData.get('email'),
                    phone: formData.get('phone'),
                    service: formData.get('service'),
                    budget: formData.get('budget'),
                    message: formData.get('message'),
                }).then(() => {
                    formStatus.className = 'form-status success';
                    formStatus.textContent = '✓ Thank you! We\'ll get back to you within 24 hours.';
                    contactForm.reset();
                }).catch((error) => {
                    throw error;
                });
                */
                
                // Demo mode - shows instructions
                formStatus.className = 'form-status error';
                formStatus.innerHTML = `
                    <strong>Setup Required:</strong> Please configure a form handler.<br>
                    Options: Formspree (easiest), EmailJS, or custom backend.<br>
                    See script.js for integration instructions.
                `;
            }
        } catch (error) {
            console.error('Form submission error:', error);
            formStatus.className = 'form-status error';
            formStatus.textContent = '✗ Oops! Something went wrong. Please try again or email us directly.';
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = originalBtnText;
            
            // Auto-hide status after 10 seconds
            setTimeout(() => {
                formStatus.style.display = 'none';
            }, 10000);
        }
    });
}

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Add fade-in effect to service cards, portfolio items, and blog cards
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll(
        '.service-card, .portfolio-item, .blog-card'
    );
    
    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        el.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(el);
    });
});

// Add active state to navigation based on scroll position
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Add loading animation prevention
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        // Close other items
        faqItems.forEach(otherItem => {
            if (otherItem !== item && otherItem.classList.contains('active')) {
                otherItem.classList.remove('active');
            }
        });
        
        // Toggle current item
        item.classList.toggle('active');
    });
});

// Newsletter form handler
const newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const emailInput = newsletterForm.querySelector('input[type="email"]');
        const email = emailInput.value;
        
        // Show success message
        const btn = newsletterForm.querySelector('button');
        const originalText = btn.textContent;
        btn.textContent = '✓ Subscribed!';
        btn.style.background = '#10b981';
        
        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = '';
            emailInput.value = '';
        }, 3000);
        
        // In production, send to backend
        console.log('Newsletter subscription:', email);
    });
}

// Enhanced form validation
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.style.borderColor = '#ef4444';
            
            setTimeout(() => {
                input.style.borderColor = '';
            }, 2000);
        }
    });
    
    return isValid;
}

// Add real-time validation
const formInputs = document.querySelectorAll('.contact-form input, .contact-form textarea, .contact-form select');
formInputs.forEach(input => {
    input.addEventListener('blur', () => {
        if (input.hasAttribute('required') && !input.value.trim()) {
            input.style.borderColor = '#ef4444';
        } else {
            input.style.borderColor = '#10b981';
        }
    });
    
    input.addEventListener('focus', () => {
        input.style.borderColor = '';
    });
});

// Portfolio Modal
const portfolioItems = document.querySelectorAll('.portfolio-item');
const body = document.body;

portfolioItems.forEach(item => {
    item.addEventListener('click', () => {
        const title = item.querySelector('.portfolio-title').textContent;
        const category = item.querySelector('.portfolio-category').textContent;
        const imageStyle = item.querySelector('.portfolio-image').style.background;
        
        // Create modal
        const modal = document.createElement('div');
        modal.className = 'portfolio-modal';
        modal.innerHTML = `
            <div class="modal-overlay"></div>
            <div class="modal-content">
                <button class="modal-close">&times;</button>
                <div class="modal-image" style="background: ${imageStyle};"></div>
                <div class="modal-info">
                    <div class="modal-category">${category}</div>
                    <h2 class="modal-title">${title}</h2>
                    <p class="modal-description">
                        A comprehensive redesign focusing on user experience and modern aesthetics.
                        This project involved extensive research, prototyping, and iterative testing
                        to ensure optimal user satisfaction.
                    </p>
                    <div class="modal-features">
                        <h3>Key Features</h3>
                        <ul>
                            <li>Responsive Design</li>
                            <li>Interactive Animations</li>
                            <li>Performance Optimized</li>
                            <li>Accessibility Focused</li>
                        </ul>
                    </div>
                    <div class="modal-tech">
                        <h3>Technologies</h3>
                        <div class="tech-tags">
                            <span>React</span>
                            <span>TypeScript</span>
                            <span>Tailwind CSS</span>
                            <span>Framer Motion</span>
                        </div>
                    </div>
                    <a href="#contact" class="btn btn-primary btn-large">Start Similar Project</a>
                </div>
            </div>
        `;
        
        body.appendChild(modal);
        body.style.overflow = 'hidden';
        
        // Animate in
        setTimeout(() => modal.classList.add('active'), 10);
        
        // Close handlers
        const closeModal = () => {
            modal.classList.remove('active');
            setTimeout(() => {
                modal.remove();
                body.style.overflow = '';
            }, 300);
        };
        
        modal.querySelector('.modal-close').addEventListener('click', closeModal);
        modal.querySelector('.modal-overlay').addEventListener('click', closeModal);
        
        // Close on escape key
        const escHandler = (e) => {
            if (e.key === 'Escape') {
                closeModal();
                document.removeEventListener('keydown', escHandler);
            }
        };
        document.addEventListener('keydown', escHandler);
    });
});

// Add scroll progress indicator
const createScrollProgress = () => {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.pageYOffset / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
};

createScrollProgress();
