// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

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

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(0, 0, 0, 0.98)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 255, 136, 0.1)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Crypto price ticker simulation
function createPriceTicker() {
    const tickerContainer = document.createElement('div');
    tickerContainer.className = 'price-ticker';
    tickerContainer.innerHTML = `
        <div class="ticker-content">
            <span class="ticker-label">YOUSHAN:</span>
            <span class="ticker-price" id="price">$0.000123</span>
            <span class="ticker-change" id="change">+12.5%</span>
            <span class="ticker-volume">Vol: $1.2M</span>
        </div>
    `;
    
    // Add styles
    const style = document.createElement('style');
    style.textContent = `
        .price-ticker {
            position: fixed;
            top: 70px;
            left: 0;
            right: 0;
            background: linear-gradient(90deg, #00ff88, #00d4ff);
            color: #000;
            padding: 8px 0;
            z-index: 999;
            font-weight: 600;
            font-size: 0.9rem;
            overflow: hidden;
        }
        .ticker-content {
            display: flex;
            justify-content: center;
            gap: 2rem;
            animation: ticker 20s linear infinite;
        }
        @keyframes ticker {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
        }
        .ticker-change {
            color: #00ff88;
        }
    `;
    document.head.appendChild(style);
    
    // Insert after navbar
    const navbar = document.querySelector('.navbar');
    navbar.parentNode.insertBefore(tickerContainer, navbar.nextSibling);
    
    // Simulate price updates
    setInterval(() => {
        const priceElement = document.getElementById('price');
        const changeElement = document.getElementById('change');
        
        // Simulate random price movement
        const currentPrice = parseFloat(priceElement.textContent.replace('$', ''));
        const change = (Math.random() - 0.5) * 0.0001;
        const newPrice = currentPrice + change;
        const changePercent = (change / currentPrice) * 100;
        
        priceElement.textContent = `$${newPrice.toFixed(6)}`;
        changeElement.textContent = `${changePercent > 0 ? '+' : ''}${changePercent.toFixed(2)}%`;
        changeElement.style.color = changePercent > 0 ? '#00ff88' : '#ff4444';
    }, 3000);
}

// Initialize price ticker
document.addEventListener('DOMContentLoaded', () => {
    createPriceTicker();
});

// Enhanced animations for crypto elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            
            // Add special effects for crypto elements
            if (entry.target.classList.contains('tokenomics-card')) {
                entry.target.style.animation = 'glow 2s ease-in-out';
            }
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.feature, .tokenomics-card, .timeline-item, .community-link');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add glow animation - removed inline styles, now using external CSS

// Crypto particle effect enhancement
function enhanceParticles() {
    const particles = document.querySelector('.crypto-particles');
    if (particles) {
        // Add more dynamic particle effects
        particles.style.backgroundImage = `
            radial-gradient(circle at ${Math.random() * 100}% ${Math.random() * 100}%, rgba(0, 255, 136, 0.1) 0%, transparent 50%),
            radial-gradient(circle at ${Math.random() * 100}% ${Math.random() * 100}%, rgba(0, 212, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at ${Math.random() * 100}% ${Math.random() * 100}%, rgba(0, 255, 136, 0.05) 0%, transparent 50%)
        `;
    }
}

// Update particles periodically
setInterval(enhanceParticles, 5000);

// Community link click handlers
document.querySelectorAll('.community-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const platform = link.querySelector('span').textContent;
        alert(`${platform} link will be available soon! Join our community to stay updated.`);
    });
});

// Tokenomics card hover effects
document.querySelectorAll('.tokenomics-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
        card.style.boxShadow = '0 20px 40px rgba(0, 255, 136, 0.2)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
        card.style.boxShadow = '0 5px 15px rgba(0, 255, 136, 0.1)';
    });
});

// Feature card hover effects
document.querySelectorAll('.feature').forEach(feature => {
    feature.addEventListener('mouseenter', () => {
        feature.style.transform = 'translateY(-5px)';
        feature.style.boxShadow = '0 15px 30px rgba(0, 255, 136, 0.15)';
    });
    
    feature.addEventListener('mouseleave', () => {
        feature.style.transform = 'translateY(0)';
        feature.style.boxShadow = 'none';
    });
});

// Timeline marker animations
document.querySelectorAll('.timeline-marker').forEach(marker => {
    marker.addEventListener('mouseenter', () => {
        if (marker.classList.contains('active')) {
            marker.style.animation = 'pulse 1s infinite';
        }
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    
    // Add crypto-themed loading effect
    const loadingEffect = document.createElement('div');
    loadingEffect.className = 'crypto-loading';
    loadingEffect.innerHTML = `
        <div class="loading-spinner">
            <div class="spinner-ring"></div>
            <div class="spinner-text">Loading YOUSHAN...</div>
        </div>
    `;
    
    // Removed inline styles, now using external CSS
    document.body.appendChild(loadingEffect);
    
    // Remove loading effect after animation
    setTimeout(() => {
        if (loadingEffect.parentNode) {
            loadingEffect.parentNode.removeChild(loadingEffect);
        }
    }, 3000);
});

// Add scroll-triggered animations
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.crypto-particles');
    
    if (parallax) {
        const speed = scrolled * 0.5;
        parallax.style.transform = `translateY(${speed}px)`;
    }
});

// Add crypto-themed cursor effect
document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.createElement('div');
    cursor.className = 'crypto-cursor';
    document.body.appendChild(cursor);
    
    const cursorStyle = document.createElement('style');
    cursorStyle.textContent = `
        .crypto-cursor {
            position: fixed;
            width: 20px;
            height: 20px;
            background: radial-gradient(circle, #00ff88, transparent);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            opacity: 0.7;
            transition: transform 0.1s ease;
        }
    `;
    document.head.appendChild(cursorStyle);
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX - 10 + 'px';
        cursor.style.top = e.clientY - 10 + 'px';
    });
    
    // Hide cursor on mobile
    if (window.innerWidth <= 768) {
        cursor.style.display = 'none';
    }
});

// Add crypto-themed button click effects
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        // Create ripple effect
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple effect styles
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(0, 255, 136, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// ===== MOBILE RESPONSIVE ENHANCEMENTS =====

// Mobile-specific improvements
function isMobile() {
    return window.innerWidth <= 768 || 'ontouchstart' in window;
}

// Enhanced touch interactions for mobile
document.addEventListener('DOMContentLoaded', function() {
    // Improve button touch targets for mobile
    const buttons = document.querySelectorAll('.btn, .chip, .tokenomics-btn');
    buttons.forEach(button => {
        // Add touch feedback
        button.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.95)';
            this.style.transition = 'transform 0.1s ease';
        });
        
        button.addEventListener('touchend', function() {
            this.style.transform = '';
            this.style.transition = 'transform 0.1s ease';
        });
        
        // Ensure minimum touch target size
        if (isMobile()) {
            button.style.minHeight = '44px';
            button.style.minWidth = '44px';
        }
    });

    // Add swipe functionality for slider (if exists)
    const slider = document.querySelector('.slider');
    if (slider) {
        let touchStartX = 0;
        let touchEndX = 0;

        function handleTouchStart(e) {
            touchStartX = e.changedTouches[0].screenX;
        }

        function handleTouchEnd(e) {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }

        function handleSwipe() {
            const swipeThreshold = 50;
            const diff = touchStartX - touchEndX;
            
            if (Math.abs(diff) > swipeThreshold) {
                // Trigger custom event for swipe
                const swipeEvent = new CustomEvent('sliderSwipe', {
                    detail: { direction: diff > 0 ? 'left' : 'right' }
                });
                slider.dispatchEvent(swipeEvent);
            }
        }

        slider.addEventListener('touchstart', handleTouchStart, { passive: true });
        slider.addEventListener('touchend', handleTouchEnd, { passive: true });
    }

    // Prevent zoom on double tap (iOS)
    let lastTouchEnd = 0;
    document.addEventListener('touchend', function(event) {
        const now = (new Date()).getTime();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, false);

    // Add mobile-specific scroll behavior
    if (isMobile()) {
        // Smooth scrolling for mobile
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

        // Optimize animations for mobile
        const animatedElements = document.querySelectorAll('.feature, .tokenomics-card, .timeline-item');
        animatedElements.forEach(el => {
            el.style.willChange = 'transform, opacity';
        });
    }

    // Handle orientation change
    window.addEventListener('orientationchange', () => {
        setTimeout(() => {
            // Recalculate layouts after orientation change
            window.dispatchEvent(new Event('resize'));
        }, 100);
    });

    // Mobile-specific performance optimizations
    if (isMobile()) {
        // Reduce animation complexity on mobile
        const style = document.createElement('style');
        style.textContent = `
            @media (max-width: 768px) {
                .crypto-cursor {
                    display: none !important;
                }
                
                .price-ticker {
                    font-size: 0.8rem;
                    padding: 6px 0;
                }
                
                .ticker-content {
                    gap: 1rem;
                }
                
                /* Optimize animations for mobile */
                * {
                    -webkit-transform: translateZ(0);
                    transform: translateZ(0);
                }
                
                /* Reduce particle effects on mobile */
                .crypto-particles {
                    opacity: 0.3;
                }
            }
        `;
        document.head.appendChild(style);
    }
});

// Enhanced mobile navigation
document.addEventListener('DOMContentLoaded', function() {
    // Add mobile menu toggle if hamburger exists
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            if (navMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
});

// Mobile-specific loading optimizations
window.addEventListener('load', () => {
    if (isMobile()) {
        // Optimize images for mobile
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            img.style.maxWidth = '100%';
            img.style.height = 'auto';
        });
        
        // Reduce animation duration on mobile for better performance
        const animatedElements = document.querySelectorAll('[style*="animation"]');
        animatedElements.forEach(el => {
            const currentAnimation = el.style.animation;
            if (currentAnimation) {
                el.style.animation = currentAnimation.replace(/\d+s/g, (match) => {
                    const duration = parseFloat(match);
                    return Math.min(duration * 0.7, 1) + 's';
                });
            }
        });
    }
});
