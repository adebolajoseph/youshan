// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Mobile menu toggle (if you add a hamburger menu button)
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav ul');

if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
}

// Counter animation for stats (animated numbers)
function animateCounter(el, target, duration) {
  let start = 0;
  let increment = target / (duration / 16); // ~60fps
  let counter = setInterval(() => {
    start += increment;
    if (start >= target) {
      el.textContent = target.toLocaleString();
      clearInterval(counter);
    } else {
      el.textContent = Math.floor(start).toLocaleString();
    }
  }, 16);
}

// Initialize counters when page loads
document.querySelectorAll('.stat span:first-child').forEach(stat => {
  const target = parseInt(stat.dataset.target);
  if (target) {
    animateCounter(stat, target, 2000);
  }
});

// Scroll reveal animation for sections
const revealElements = document.querySelectorAll('.reveal');
const revealOnScroll = () => {
  const windowHeight = window.innerHeight;
  revealElements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    if (position < windowHeight - 100) {
      el.classList.add('active');
    }
  });
};
window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

// ====== ✅ Copy to clipboard with message ======
const copyBtn = document.getElementById("copyBtn");
const addressField = document.getElementById("contractAddress");
const copyMessage = document.getElementById("copyMessage");

if (copyBtn && addressField && copyMessage) {
  copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(addressField.value).then(() => {
      // Show "Successfully copied" message
      copyMessage.classList.remove("hidden");
      copyMessage.classList.add("visible");

      // Hide it after 2 seconds
      setTimeout(() => {
        copyMessage.classList.remove("visible");
        copyMessage.classList.add("hidden");
      }, 2000);
    });
  });
}

// Copy Contract Address Functionality
document.addEventListener('DOMContentLoaded', () => {
  const copyBtn = document.querySelector('.tokenomics-btn');
  const contractSpan = document.getElementById('contract-address');
  const contractBox = document.querySelector('.contract-box');

  if (copyBtn && contractSpan && contractBox) {
    copyBtn.addEventListener('click', () => {
      const contractText = contractSpan.textContent;

      navigator.clipboard.writeText(contractText).then(() => {
        // Remove existing message if it exists
        const existingMsg = document.querySelector('.copy-msg');
        if (existingMsg) existingMsg.remove();

        // Create the success message
        const msg = document.createElement('p');
        msg.textContent = '✅ Successfully copied!';
        msg.className = 'copy-msg';

        // Style the message (you can move this to CSS if preferred)
        msg.style.color = 'var(--gold)';
        msg.style.marginTop = '12px';
        msg.style.fontWeight = '500';

        // Insert message AFTER the entire contract box
        contractBox.parentNode.insertBefore(msg, contractBox.nextSibling);

        // Remove message after 2 seconds
        setTimeout(() => {
          msg.remove();
        }, 2000);
      });
    });
  }
});
