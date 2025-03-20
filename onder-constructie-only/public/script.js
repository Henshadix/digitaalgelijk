// Countdown timer with improved animation
const countdownDate = new Date("June 1, 2025 00:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = countdownDate - now;
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Animate the numbers changing
    animateValue('days', days);
    animateValue('hours', hours);
    animateValue('minutes', minutes);
    animateValue('seconds', seconds);
}

// Store previous values for animation
const prevValues = {
    days: -1,
    hours: -1,
    minutes: -1,
    seconds: -1
};

// Animate value changes
function animateValue(id, newValue) {
    const element = document.getElementById(id);
    if (!element) return;
    
    // If first time or same value, just set it
    if (prevValues[id] === -1 || prevValues[id] === newValue) {
        element.textContent = newValue;
        prevValues[id] = newValue;
        return;
    }
    
    // Add animation class
    element.classList.add('animate-change');
    
    // After a short delay, update the value and remove the animation class
    setTimeout(() => {
        element.textContent = newValue;
        prevValues[id] = newValue;
        
        // Remove animation class after the animation completes
        setTimeout(() => {
            element.classList.remove('animate-change');
        }, 300);
    }, 100);
}

// Update the countdown every second
setInterval(updateCountdown, 1000);

// Initial update
updateCountdown();

// Theme toggle functionality with improved animation
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    const sunIcon = document.querySelector('.sun-icon');
    const moonIcon = document.querySelector('.moon-icon');
    
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            // Add transition class for smooth color changes
            htmlElement.classList.add('color-transition');
            
            // Toggle dark mode
            htmlElement.classList.toggle('dark');
            
            // Toggle icon visibility
            if (sunIcon && moonIcon) {
                sunIcon.style.display = htmlElement.classList.contains('dark') ? 'none' : 'block';
                moonIcon.style.display = htmlElement.classList.contains('dark') ? 'block' : 'none';
            }
            
            // Save preference
            const isDark = htmlElement.classList.contains('dark');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            
            // Remove transition class after transition completes
            setTimeout(() => {
                htmlElement.classList.remove('color-transition');
            }, 500);
        });
    }
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        htmlElement.classList.remove('dark');
        if (sunIcon && moonIcon) {
            sunIcon.style.display = 'block';
            moonIcon.style.display = 'none';
        }
    } else if (savedTheme === 'dark') {
        htmlElement.classList.add('dark');
        if (sunIcon && moonIcon) {
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'block';
        }
    }
});

// Language toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const nlButton = document.getElementById('lang-nl');
    const enButton = document.getElementById('lang-en');
    
    if (nlButton && enButton) {
        // Dutch language button click
        nlButton.addEventListener('click', function() {
            setLanguage('nl');
            nlButton.classList.add('active');
            enButton.classList.remove('active');
        });
        
        // English language button click
        enButton.addEventListener('click', function() {
            setLanguage('en');
            enButton.classList.add('active');
            nlButton.classList.remove('active');
        });
        
        // Check for saved language preference
        const savedLang = localStorage.getItem('language') || 'nl';
        setLanguage(savedLang);
        
        if (savedLang === 'nl') {
            nlButton.classList.add('active');
            enButton.classList.remove('active');
        } else {
            enButton.classList.add('active');
            nlButton.classList.remove('active');
        }
    }
});

// Set language based on selection
function setLanguage(lang) {
    localStorage.setItem('language', lang);
    
    // Get all elements with data-lang attribute
    const elements = document.querySelectorAll('[data-lang]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-lang');
        if (translations[key] && translations[key][lang]) {
            element.innerHTML = translations[key][lang];
        }
    });
    
    // Update placeholder attributes
    const placeholders = document.querySelectorAll('[data-placeholder]');
    placeholders.forEach(element => {
        const key = element.getAttribute('data-placeholder');
        if (translations[key] && translations[key][lang]) {
            element.setAttribute('placeholder', translations[key][lang]);
        }
    });
}

// Translations object
const translations = {
    'title': {
        'nl': 'Website in ontwikkeling',
        'en': 'Website under construction'
    },
    'subtitle': {
        'nl': 'Wij werken momenteel hard aan deze website. Binnenkort vindt u hier alle informatie over onze duurzame IT-oplossingen.',
        'en': 'We are currently working hard on this website. Soon you will find all information about our sustainable IT solutions here.'
    },
    'launch-date': {
        'nl': 'Geplande lanceerdatum: 1 juni 2025',
        'en': 'Planned launch date: June 1, 2025'
    },
    'days': {
        'nl': 'Dagen',
        'en': 'Days'
    },
    'hours': {
        'nl': 'Uren',
        'en': 'Hours'
    },
    'minutes': {
        'nl': 'Minuten',
        'en': 'Minutes'
    },
    'seconds': {
        'nl': 'Seconden',
        'en': 'Seconds'
    },
    'progress': {
        'nl': '83% voltooid',
        'en': '83% completed'
    },
    'newsletter-title': {
        'nl': 'Blijf op de hoogte',
        'en': 'Stay updated'
    },
    'newsletter-text': {
        'nl': 'Schrijf je in voor onze nieuwsbrief om als eerste te horen wanneer we live gaan!',
        'en': 'Subscribe to our newsletter to be the first to know when we go live!'
    },
    'email-placeholder': {
        'nl': 'Uw e-mailadres',
        'en': 'Your email address'
    },
    'subscribe': {
        'nl': 'Inschrijven',
        'en': 'Subscribe'
    },
    'contact-title': {
        'nl': 'Neem contact met ons op',
        'en': 'Contact us'
    },
    'contact-text': {
        'nl': 'Heeft u vragen over onze diensten of wilt u meer informatie? Neem gerust contact met ons op via het formulier of de onderstaande gegevens.',
        'en': 'Do you have questions about our services or would you like more information? Feel free to contact us using the form or the details below.'
    },
    'email': {
        'nl': 'E-mail',
        'en': 'Email'
    },
    'phone': {
        'nl': 'Telefoon',
        'en': 'Phone'
    },
    'location': {
        'nl': 'Locatie',
        'en': 'Location'
    },
    'hours': {
        'nl': 'Openingstijden',
        'en': 'Opening hours'
    },
    'name': {
        'nl': 'Naam',
        'en': 'Name'
    },
    'message': {
        'nl': 'Bericht',
        'en': 'Message'
    },
    'send': {
        'nl': 'Versturen',
        'en': 'Send'
    },
    'copyright': {
        'nl': '© 2025 Digitaalgelijk. Alle rechten voorbehouden.',
        'en': '© 2025 Digitaalgelijk. All rights reserved.'
    },
    'privacy': {
        'nl': 'Privacybeleid',
        'en': 'Privacy Policy'
    },
    'terms': {
        'nl': 'Algemene voorwaarden',
        'en': 'Terms of Service'
    },
    'features-title': {
        'nl': 'Wat kunt u verwachten?',
        'en': 'What can you expect?'
    },
    'features-subtitle': {
        'nl': 'Onze website zal een breed scala aan duurzame IT-oplossingen bieden',
        'en': 'Our website will offer a wide range of sustainable IT solutions'
    },
    'feature1-title': {
        'nl': 'Duurzame Hosting',
        'en': 'Sustainable Hosting'
    },
    'feature1-desc': {
        'nl': 'Milieuvriendelijke hosting-oplossingen die draaien op 100% hernieuwbare energie.',
        'en': 'Environmentally friendly hosting solutions running on 100% renewable energy.'
    },
    'feature2-title': {
        'nl': 'Efficiënte Code',
        'en': 'Efficient Code'
    },
    'feature2-desc': {
        'nl': 'Geoptimaliseerde code die minder serverresources verbruikt en de CO2-voetafdruk vermindert.',
        'en': 'Optimized code that uses fewer server resources and reduces the carbon footprint.'
    },
    'feature3-title': {
        'nl': 'Circulaire IT',
        'en': 'Circular IT'
    },
    'feature3-desc': {
        'nl': 'Advies over het verlengen van de levensduur van hardware en verantwoorde recycling.',
        'en': 'Advice on extending hardware lifespan and responsible recycling.'
    },
    'faq-title': {
        'nl': 'Veelgestelde vragen',
        'en': 'Frequently Asked Questions'
    },
    'faq1-question': {
        'nl': 'Wanneer gaat de website live?',
        'en': 'When will the website go live?'
    },
    'faq1-answer': {
        'nl': 'We streven ernaar om de website op 1 juni 2025 live te zetten. Tot die tijd kunt u ons bereiken via e-mail of telefoon voor vragen over onze diensten.',
        'en': 'We aim to launch the website on June 1, 2025. Until then, you can reach us via email or phone for questions about our services.'
    },
    'faq2-question': {
        'nl': 'Wat zijn duurzame IT-oplossingen?',
        'en': 'What are sustainable IT solutions?'
    },
    'faq2-answer': {
        'nl': 'Duurzame IT-oplossingen zijn technologische diensten en producten die zijn ontworpen om de milieu-impact te minimaliseren. Dit omvat energiezuinige hardware, groene hosting, geoptimaliseerde software en circulaire economie-principes voor IT-apparatuur.',
        'en': 'Sustainable IT solutions are technological services and products designed to minimize environmental impact. This includes energy-efficient hardware, green hosting, optimized software, and circular economy principles for IT equipment.'
    },
    'faq3-question': {
        'nl': 'Kan ik nu al diensten afnemen?',
        'en': 'Can I already purchase services?'
    },
    'faq3-answer': {
        'nl': 'Ja, hoewel onze website nog in ontwikkeling is, zijn we al volledig operationeel. Neem contact met ons op via e-mail of telefoon om te bespreken hoe we u kunnen helpen met duurzame IT-oplossingen.',
        'en': 'Yes, although our website is still under development, we are already fully operational. Contact us via email or phone to discuss how we can help you with sustainable IT solutions.'
    },
    'stat1-label': {
        'nl': 'Tevreden klanten',
        'en': 'Satisfied clients'
    },
    'stat2-label': {
        'nl': 'Afgeronde projecten',
        'en': 'Completed projects'
    },
    'stat3-label': {
        'nl': 'Ton CO₂ bespaard',
        'en': 'Tons of CO₂ saved'
    },
    'timeline-title': {
        'nl': 'Onze roadmap',
        'en': 'Our roadmap'
    },
    'timeline1-date': {
        'nl': 'Maart 2025',
        'en': 'March 2025'
    },
    'timeline1-title': {
        'nl': 'Start ontwikkeling',
        'en': 'Development start'
    },
    'timeline1-desc': {
        'nl': 'Begin van het ontwerp en de ontwikkeling van onze nieuwe website.',
        'en': 'Beginning of the design and development of our new website.'
    },
    'timeline2-date': {
        'nl': 'April 2025',
        'en': 'April 2025'
    },
    'timeline2-title': {
        'nl': 'Bèta-testing',
        'en': 'Beta testing'
    },
    'timeline2-desc': {
        'nl': 'Interne tests en optimalisatie van de website.',
        'en': 'Internal testing and optimization of the website.'
    },
    'timeline3-date': {
        'nl': 'Mei 2025',
        'en': 'May 2025'
    },
    'timeline3-title': {
        'nl': 'Laatste aanpassingen',
        'en': 'Final adjustments'
    },
    'timeline3-desc': {
        'nl': 'Laatste verbeteringen en voorbereidingen voor de lancering.',
        'en': 'Final improvements and preparations for the launch.'
    },
    'timeline4-date': {
        'nl': '1 Juni 2025',
        'en': 'June 1, 2025'
    },
    'timeline4-title': {
        'nl': 'Officiële lancering',
        'en': 'Official launch'
    },
    'timeline4-desc': {
        'nl': 'Onze website gaat live met alle functionaliteiten!',
        'en': 'Our website goes live with all functionalities!'
    },
    'accessibility': {
        'nl': 'Toegankelijkheid',
        'en': 'Accessibility'
    },
    'sustainability': {
        'nl': 'Duurzaamheid',
        'en': 'Sustainability'
    },
    'sustainability-tooltip': {
        'nl': 'Deze website is ontworpen met duurzaamheid als prioriteit, met minimale serverbelasting en geoptimaliseerde code.',
        'en': 'This website is designed with sustainability as a priority, with minimal server load and optimized code.'
    }
};

// Form validation and submission
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const newsletterForm = document.getElementById('newsletter-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple validation
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');
            
            let isValid = true;
            
            if (!name.value.trim()) {
                highlightError(name);
                isValid = false;
            } else {
                removeError(name);
            }
            
            if (!isValidEmail(email.value)) {
                highlightError(email);
                isValid = false;
            } else {
                removeError(email);
            }
            
            if (!message.value.trim()) {
                highlightError(message);
                isValid = false;
            } else {
                removeError(message);
            }
            
            if (isValid) {
                // Show success message (in real implementation, you would send the form data to a server)
                const successMessage = document.createElement('div');
                successMessage.className = 'success-message';
                successMessage.textContent = localStorage.getItem('language') === 'en' 
                    ? 'Thank you for your message! We will get back to you soon.' 
                    : 'Bedankt voor uw bericht! We nemen spoedig contact met u op.';
                
                contactForm.innerHTML = '';
                contactForm.appendChild(successMessage);
            }
        });
    }
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('newsletter-email');
            
            if (!isValidEmail(email.value)) {
                highlightError(email);
            } else {
                removeError(email);
                
                // Show success message
                const successMessage = document.createElement('div');
                successMessage.className = 'success-message';
                successMessage.textContent = localStorage.getItem('language') === 'en' 
                    ? 'Thank you for subscribing to our newsletter!' 
                    : 'Bedankt voor uw inschrijving op onze nieuwsbrief!';
                
                newsletterForm.innerHTML = '';
                newsletterForm.appendChild(successMessage);
            }
        });
    }
});

// Validate email format
function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Highlight form field with error
function highlightError(element) {
    element.classList.add('error');
    element.addEventListener('input', function() {
        if ((element.id === 'email' || element.id === 'newsletter-email') && isValidEmail(element.value)) {
            removeError(element);
        } else if (element.value.trim() !== '') {
            removeError(element);
        }
    });
}

// Remove error highlight
function removeError(element) {
    element.classList.remove('error');
}

// Add animation to background elements
document.addEventListener('DOMContentLoaded', function() {
    const bgAnimation = document.querySelector('.bg-animation');
    
    if (bgAnimation) {
        // Create animated background elements
        for (let i = 0; i < 5; i++) {
            const span = document.createElement('span');
            bgAnimation.appendChild(span);
        }
    }
}); 