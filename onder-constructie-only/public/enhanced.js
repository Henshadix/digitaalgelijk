// Enhanced JavaScript functionality

// Scroll progress indicator
document.addEventListener('DOMContentLoaded', function() {
    const scrollIndicator = document.createElement('div');
    scrollIndicator.className = 'scroll-indicator';
    document.body.appendChild(scrollIndicator);

    window.addEventListener('scroll', function() {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        scrollIndicator.style.width = scrolled + '%';
    });
});

// Animated counter for stats
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
        start += increment;
        element.textContent = Math.floor(start);
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        }
    }, 16);
}

// Initialize counters when they come into view
document.addEventListener('DOMContentLoaded', function() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.getAttribute('data-target'), 10);
                animateCounter(entry.target, target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(stat => {
        observer.observe(stat);
    });
});

// Typing effect
document.addEventListener('DOMContentLoaded', function() {
    const typingElements = document.querySelectorAll('.typing');
    
    typingElements.forEach(element => {
        const text = element.textContent;
        element.textContent = '';
        element.style.width = '0';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                element.style.width = `${Math.min(100, (i / text.length) * 100)}%`;
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    typeWriter();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(element);
    });
});

// Parallax effect
document.addEventListener('DOMContentLoaded', function() {
    const parallaxElements = document.querySelectorAll('.parallax');
    
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        
        parallaxElements.forEach(element => {
            const speed = element.getAttribute('data-speed') || 0.2;
            element.style.transform = `translateY(${scrollY * speed}px)`;
        });
    });
});

// Smooth scroll to anchor links
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Add "Back to top" button
document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.createElement('button');
    backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTopButton.className = 'back-to-top';
    backToTopButton.title = 'Back to top';
    document.body.appendChild(backToTopButton);
    
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });
});

// Lazy loading images
document.addEventListener('DOMContentLoaded', function() {
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute('data-src');
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    lazyImages.forEach(img => {
        imageObserver.observe(img);
    });
});

// Animated timeline
document.addEventListener('DOMContentLoaded', function() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    
    timelineItems.forEach(item => {
        observer.observe(item);
    });
});

// Form validation with better feedback
document.addEventListener('DOMContentLoaded', function() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        const inputs = form.querySelectorAll('input, textarea');
        
        inputs.forEach(input => {
            // Create validation message element
            const validationMessage = document.createElement('div');
            validationMessage.className = 'validation-message';
            input.parentNode.appendChild(validationMessage);
            
            // Add validation on blur
            input.addEventListener('blur', () => {
                validateInput(input, validationMessage);
            });
            
            // Live validation as user types
            input.addEventListener('input', () => {
                if (input.classList.contains('error')) {
                    validateInput(input, validationMessage);
                }
            });
        });
        
        // Form submission
        form.addEventListener('submit', function(e) {
            let isValid = true;
            
            inputs.forEach(input => {
                const validationMessage = input.parentNode.querySelector('.validation-message');
                if (!validateInput(input, validationMessage)) {
                    isValid = false;
                }
            });
            
            if (!isValid) {
                e.preventDefault();
            }
        });
    });
    
    function validateInput(input, messageElement) {
        let isValid = true;
        let message = '';
        
        // Check if empty
        if (input.required && !input.value.trim()) {
            isValid = false;
            message = 'Dit veld is verplicht';
        } 
        // Email validation
        else if (input.type === 'email' && input.value.trim()) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(input.value)) {
                isValid = false;
                message = 'Voer een geldig e-mailadres in';
            }
        }
        
        // Update UI based on validation
        if (isValid) {
            input.classList.remove('error');
            input.classList.add('valid');
            messageElement.textContent = '';
            messageElement.style.display = 'none';
        } else {
            input.classList.add('error');
            input.classList.remove('valid');
            messageElement.textContent = message;
            messageElement.style.display = 'block';
        }
        
        return isValid;
    }
});

// Cookie consent banner
document.addEventListener('DOMContentLoaded', function() {
    if (!localStorage.getItem('cookieConsent')) {
        const cookieBanner = document.createElement('div');
        cookieBanner.className = 'cookie-banner';
        cookieBanner.innerHTML = `
            <div class="cookie-content">
                <p>Wij gebruiken cookies om uw ervaring op onze website te verbeteren. 
                   Door verder te gaan, gaat u akkoord met ons <a href="#">cookiebeleid</a>.</p>
                <div class="cookie-buttons">
                    <button class="cookie-accept">Accepteren</button>
                    <button class="cookie-decline">Weigeren</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(cookieBanner);
        
        document.querySelector('.cookie-accept').addEventListener('click', () => {
            localStorage.setItem('cookieConsent', 'accepted');
            cookieBanner.classList.add('hide');
            setTimeout(() => {
                cookieBanner.remove();
            }, 500);
        });
        
        document.querySelector('.cookie-decline').addEventListener('click', () => {
            localStorage.setItem('cookieConsent', 'declined');
            cookieBanner.classList.add('hide');
            setTimeout(() => {
                cookieBanner.remove();
            }, 500);
        });
    }
});

// Add confetti effect for special events
function showConfetti() {
    const canvas = document.createElement('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '1000';
    document.body.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    const confettiCount = 200;
    const confetti = [];
    
    for (let i = 0; i < confettiCount; i++) {
        confetti.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            size: Math.random() * 10 + 5,
            color: `hsl(${Math.random() * 360}, 100%, 70%)`,
            speed: Math.random() * 3 + 2,
            angle: Math.random() * 6.28,
            spin: Math.random() * 0.2 - 0.1
        });
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        let stillFalling = false;
        
        confetti.forEach(c => {
            c.y += c.speed;
            c.angle += c.spin;
            
            ctx.save();
            ctx.translate(c.x, c.y);
            ctx.rotate(c.angle);
            ctx.fillStyle = c.color;
            ctx.fillRect(-c.size / 2, -c.size / 2, c.size, c.size);
            ctx.restore();
            
            if (c.y < canvas.height) {
                stillFalling = true;
            }
        });
        
        if (stillFalling) {
            requestAnimationFrame(animate);
        } else {
            canvas.remove();
        }
    }
    
    animate();
}

// Detect when user has been on the page for a certain time
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        const engagementModal = document.createElement('div');
        engagementModal.className = 'engagement-modal';
        engagementModal.innerHTML = `
            <div class="modal-content card">
                <button class="modal-close">&times;</button>
                <h3>Geïnteresseerd in onze diensten?</h3>
                <p>Laat uw e-mailadres achter en ontvang als eerste updates over onze lancering!</p>
                <form class="modal-form">
                    <input type="email" placeholder="Uw e-mailadres" required>
                    <button type="submit" class="btn-hover-effect">Inschrijven</button>
                </form>
            </div>
        `;
        
        // Only show if user hasn't dismissed it before
        if (!localStorage.getItem('engagementModalDismissed')) {
            document.body.appendChild(engagementModal);
            
            document.querySelector('.modal-close').addEventListener('click', () => {
                engagementModal.classList.add('hide');
                localStorage.setItem('engagementModalDismissed', 'true');
                setTimeout(() => {
                    engagementModal.remove();
                }, 500);
            });
            
            document.querySelector('.modal-form').addEventListener('submit', (e) => {
                e.preventDefault();
                engagementModal.innerHTML = `
                    <div class="modal-content card">
                        <h3>Bedankt voor uw inschrijving!</h3>
                        <p>We houden u op de hoogte van onze lancering.</p>
                    </div>
                `;
                
                // Show confetti for successful signup
                showConfetti();
                
                setTimeout(() => {
                    engagementModal.classList.add('hide');
                    setTimeout(() => {
                        engagementModal.remove();
                    }, 500);
                }, 3000);
            });
        }
    }, 30000); // Show after 30 seconds
}); 