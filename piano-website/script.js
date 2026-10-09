/**
 * Piano Brand Landing Page - High-Speed Performance Suite
 * GPU-optimized layout translations and debounced structural operations.
 */
document.addEventListener("DOMContentLoaded", () => {
  
  // ==========================================
  // 1. High-Performance Photo Parallax Engine
  // ==========================================
  const parallaxImg = document.querySelector('.photo-parallax-img');
  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrollY = window.scrollY;

        // Shifts the background image slightly slower than scroll speed for a premium 3D feel
        if (parallaxImg) {
          parallaxImg.style.transform = `translate3d(0, ${scrollY * 0.15}px, 0)`;
        }

        ticking = false;
      });

      ticking = true;
    }
  }, { passive: true });


  // ==========================================
  // 2. High-Speed Scroll Progress Tracker
  // ==========================================
  const progressBar = document.querySelector('.scroll-progress-bar');
  const docElem = document.documentElement;
  let progressTicking = false;
  
  if (progressBar) {
    window.addEventListener('scroll', () => {
      if (!progressTicking) {
        window.requestAnimationFrame(() => {
          const windowScroll = window.scrollTop || docElem.scrollTop;
          const totalHeight = docElem.scrollHeight - docElem.clientHeight;
          
          if (totalHeight > 0) {
            progressBar.style.width = `${(windowScroll / totalHeight) * 100}%`;
          }
          progressTicking = false;
        });
        progressTicking = true;
      }
    }, { passive: true });
  }

  // ==========================================
  // 3. Cinematic Scroll-Reveal Observer
  // ==========================================
  const observerOptions = {
    root: null,
    rootMargin: "0px 0px -10% 0px", // Fired safely before viewport alignment
    threshold: 0.02 // Immediate triggering to prevent trailing wait states
  };

  const revealOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target); 
      }
    });
  }, observerOptions);

  const targets = document.querySelectorAll('section, .about-content, .price-card, .faq-item, .contact-form');
  targets.forEach(target => {
    target.classList.add('scroll-reveal');
    revealOnScroll.observe(target);
  });

  // ==========================================
  // 4. Smooth FAQ Accordion Framework
  // ==========================================
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    const content = item.querySelector('.faq-content');

    if (trigger && content) {
      trigger.addEventListener('click', () => {
        const isExpanded = trigger.getAttribute('aria-expanded') === 'true';

        faqItems.forEach(otherItem => {
          if (otherItem !== item) {
            const otherTrigger = otherItem.querySelector('.faq-trigger');
            const otherContent = otherItem.querySelector('.faq-content');
            if (otherTrigger && otherContent) {
              otherTrigger.setAttribute('aria-expanded', 'false');
              otherContent.style.maxHeight = null;
              otherItem.classList.remove('active');
            }
          }
        });

        if (isExpanded) {
          trigger.setAttribute('aria-expanded', 'false');
          content.style.maxHeight = null;
          item.classList.remove('active');
        } else {
          trigger.setAttribute('aria-expanded', 'true');
          content.style.maxHeight = content.scrollHeight + "px";
          item.classList.add('active');
        }
      });
    }
  });

  // ==========================================
  // 5. Asynchronous Intake Form Processing
  // ==========================================
  const contactForm = document.querySelector('.contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const submitButton = contactForm.querySelector('button[type="submit"]');
      if (!submitButton) return;

      submitButton.disabled = true;
      submitButton.textContent = "Processing Application...";
      submitButton.style.opacity = "0.6";

      // Accelerated user mock verification routine
      await new Promise(resolve => setTimeout(resolve, 1000));

      contactForm.style.opacity = '0';
      contactForm.style.transform = 'translate3d(0, -10px, 0)';
      
      setTimeout(() => {
        contactForm.innerHTML = `
          <div class="success-message">
            <div class="success-icon">✧</div>
            <h3>Thank you, Maestro</h3>
            <p>Your background assessment and repertoire targets have been received. I will review your schedule options and reach out directly within 48 hours to arrange our diagnostic session.</p>
          </div>
        `;
        
        const successCard = contactForm.querySelector('.success-message');
        if (successCard) {
          successCard.style.opacity = '0';
          successCard.style.transform = 'translate3d(0, 10px, 0)';
          
          window.requestAnimationFrame(() => {
            contactForm.style.opacity = '1';
            contactForm.style.transform = 'translate3d(0, 0, 0)';
            successCard.style.opacity = '1';
            successCard.style.transform = 'translate3d(0, 0, 0)';
          });
        }
      }, 400); 
    });
  }
});
