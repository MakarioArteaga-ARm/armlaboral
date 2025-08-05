// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(14, 77, 146, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = 'linear-gradient(135deg, #0E4D92 0%, #1a5ba8 100%)';
            header.style.backdropFilter = 'none';
        }
    });

    // Mobile menu toggle
    const toggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (toggle && navLinks) {
        toggle.addEventListener("click", function(e) {
            e.stopPropagation();
            navLinks.classList.toggle("show");
            toggle.classList.toggle("active");
        });

        // Close menu when clicking outside
        document.addEventListener("click", function() {
            navLinks.classList.remove("show");
            toggle.classList.remove("active");
        });

        // Prevent menu from closing when clicking inside nav
        navLinks.addEventListener("click", function(e) {
            e.stopPropagation();
        });

        // Close menu when clicking on nav links
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                navLinks.classList.remove("show");
                toggle.classList.remove("active");
            });
        });
    }

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });

    // Package cards hover effects
    document.querySelectorAll('.paquete').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.borderTop = '4px solid #25D366';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.borderTop = '4px solid #0E4D92';
        });
    });

    // Token cards hover effects
    document.querySelectorAll('.token-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 12px 35px rgba(14, 77, 146, 0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 8px 25px rgba(0,0,0,0.1)';
        });
    });

    // Service cards hover effects
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.borderLeft = '4px solid #25D366';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.borderLeft = '4px solid #0E4D92';
        });
    });

    // WhatsApp button click tracking
    const whatsappBtn = document.querySelector('.whatsapp-btn');
    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', function() {
            // Analytics tracking can be added here
            console.log('WhatsApp button clicked');
        });
    }

    // Floating contact button effects
    const floatContact = document.querySelector('.float-contacto');
    if (floatContact) {
        floatContact.addEventListener('click', function() {
            // Analytics tracking can be added here
            console.log('Floating contact button clicked');
        });
    }

    // Dynamic bokeh effect sizing
    function updateBokehSizes() {
        const bokehElements = document.querySelectorAll('.bokeh');
        bokehElements.forEach(bokeh => {
            const randomSize = Math.random() * 50 + 30; // 30-80px
            const randomDelay = Math.random() * 20; // 0-20s delay
            bokeh.style.width = randomSize + 'px';
            bokeh.style.height = randomSize + 'px';
            bokeh.style.animationDelay = randomDelay + 's';
        });
    }

    // Initialize bokeh effects
    updateBokehSizes();

    // Add parallax effect to hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.hero-content');
        
        parallaxElements.forEach(element => {
            const speed = 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });

    // Add staggered animation to nav links
    const navLinkItems = document.querySelectorAll('.nav-links li');
    navLinkItems.forEach((item, index) => {
        item.style.animationDelay = (index * 0.1) + 's';
    });

    // Add scroll-triggered animations for sections
    const sections = document.querySelectorAll('section');
    const sectionObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        sectionObserver.observe(section);
    });

    // Add typing effect to hero title (optional enhancement)
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }

    // Enhanced button animations
    document.querySelectorAll('button, .whatsapp-btn, .float-contacto').forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Performance optimization: Throttle scroll events
    let ticking = false;
    
    function updateOnScroll() {
        // Header background update
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(14, 77, 146, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = 'linear-gradient(135deg, #0E4D92 0%, #1a5ba8 100%)';
            header.style.backdropFilter = 'none';
        }
        
        ticking = false;
    }

    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateOnScroll);
            ticking = true;
        }
    }

    window.addEventListener('scroll', requestTick);

    // Add loading animation
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
        
        // Trigger hero animations
        const heroElements = document.querySelectorAll('.hero h1, .hero-subtitle, .hero-description');
        heroElements.forEach((element, index) => {
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 200);
        });
    });

    // Add error handling for missing elements
    function safeAddEventListener(selector, event, callback) {
        const element = document.querySelector(selector);
        if (element) {
            element.addEventListener(event, callback);
        }
    }

    // Initialize all safe event listeners
    safeAddEventListener('.whatsapp-btn', 'click', function() {
        console.log('WhatsApp consultation requested');
    });

    // Add keyboard navigation support
    document.addEventListener('keydown', function(e) {
        // Close mobile menu with Escape key
        if (e.key === 'Escape') {
            const navLinks = document.querySelector('.nav-links');
            const toggle = document.querySelector('.menu-toggle');
            if (navLinks && navLinks.classList.contains('show')) {
                navLinks.classList.remove('show');
                toggle.classList.remove('active');
            }
        }
    });

    // Add focus management for accessibility
    const focusableElements = document.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.style.outline = '2px solid #25D366';
            this.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', function() {
            this.style.outline = 'none';
        });
    });

    console.log('ARmLaboral website initialized successfully! 🚀');
});