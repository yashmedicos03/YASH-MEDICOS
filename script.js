/**
 * Yash Medicos - Client-side Interactive JavaScript
 * Location: Golegaon Bk, Sillod 431112 | Contact: +91 9860384278
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // --- Configuration Constants ---
  const WHATSAPP_NUMBER = '919860384278';
  const STORE_PHONE = '+919860384278';

  // --- Dynamic Year in Footer ---
  const currentYearSpan = document.getElementById('currentYear');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // ========================================================================
  // 1. Mobile Drawer Navigation & Backdrop
  // ========================================================================
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const closeDrawerBtn = document.getElementById('closeDrawerBtn');
  const mobileNav = document.getElementById('mobileNav');
  const drawerBackdrop = document.getElementById('drawerBackdrop');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  function openMobileNav() {
    if (!mobileNav) return;
    mobileNav.classList.add('open');
    if (drawerBackdrop) drawerBackdrop.classList.add('open');
    if (hamburgerBtn) {
      hamburgerBtn.classList.add('active');
      hamburgerBtn.setAttribute('aria-expanded', 'true');
    }
    mobileNav.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // Prevent background scroll
  }

  function closeMobileNav() {
    if (!mobileNav) return;
    mobileNav.classList.remove('open');
    if (drawerBackdrop) drawerBackdrop.classList.remove('open');
    if (hamburgerBtn) {
      hamburgerBtn.classList.remove('active');
      hamburgerBtn.setAttribute('aria-expanded', 'false');
    }
    mobileNav.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = mobileNav && mobileNav.classList.contains('open');
      if (isOpen) {
        closeMobileNav();
      } else {
        openMobileNav();
      }
    });
  }

  if (closeDrawerBtn) {
    closeDrawerBtn.addEventListener('click', closeMobileNav);
  }

  if (drawerBackdrop) {
    drawerBackdrop.addEventListener('click', closeMobileNav);
  }

  mobileNavLinks.forEach((link) => {
    link.addEventListener('click', closeMobileNav);
  });

  // Close drawer on ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (mobileNav && mobileNav.classList.contains('open')) {
        closeMobileNav();
      }
      closeModal();
    }
  });

  // ========================================================================
  // 2. Sticky Header & Scrollspy Navigation
  // ========================================================================
  const header = document.getElementById('header');
  const sections = document.querySelectorAll('section[id]');
  const desktopNavLinks = document.querySelectorAll('.main-nav .nav-link');

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;

    // Header shadow on scroll
    if (header) {
      if (scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    // Scrollspy active state calculation
    const headerOffset = 100;
    sections.forEach((section) => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - headerOffset;
      const sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        desktopNavLinks.forEach((link) => {
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, { passive: true });

  // ========================================================================
  // 3. Service Filter Tabs
  // ========================================================================
  const filterBtns = document.querySelectorAll('.filter-btn');
  const serviceCards = document.querySelectorAll('.service-card');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      // Update active state on buttons
      filterBtns.forEach((b) => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const filterValue = btn.getAttribute('data-filter');

      // Filter cards
      serviceCards.forEach((card) => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          card.style.animation = 'fadeInCard 0.3s ease-in-out';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // ========================================================================
  // 4. FAQ Accordion Interaction
  // ========================================================================
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach((item) => {
    const questionBtn = item.querySelector('.faq-question');
    if (!questionBtn) return;

    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Optionally close other items for single-open behavior:
      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          const otherBtn = otherItem.querySelector('.faq-question');
          if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
        }
      });

      // Toggle current
      if (isActive) {
        item.classList.remove('active');
        questionBtn.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('active');
        questionBtn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // ========================================================================
  // 5. Prescription Upload Modal Interaction
  // ========================================================================
  const prescriptionModal = document.getElementById('prescriptionModal');
  const quickPrescriptionBtn = document.getElementById('quickPrescriptionBtn');
  const closeModalBtn = document.getElementById('closeModalBtn');

  function openModal() {
    if (!prescriptionModal) return;
    prescriptionModal.classList.add('open');
    prescriptionModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!prescriptionModal) return;
    prescriptionModal.classList.remove('open');
    prescriptionModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (quickPrescriptionBtn) {
    quickPrescriptionBtn.addEventListener('click', openModal);
  }

  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeModal);
  }

  if (prescriptionModal) {
    prescriptionModal.addEventListener('click', (e) => {
      if (e.target === prescriptionModal) {
        closeModal();
      }
    });
  }

  // ========================================================================
  // 6. Contact Form Validation & WhatsApp Handshake
  // ========================================================================
  const contactForm = document.getElementById('contactForm');
  const fullNameInput = document.getElementById('fullName');
  const phoneInput = document.getElementById('phoneNumber');
  const serviceInput = document.getElementById('serviceType');
  const messageInput = document.getElementById('messageText');
  const nameError = document.getElementById('nameError');
  const phoneError = document.getElementById('phoneError');
  const messageError = document.getElementById('messageError');
  const formStatus = document.getElementById('formStatus');
  const sendDirectWhatsAppBtn = document.getElementById('sendDirectWhatsAppBtn');

  // Helper validation functions
  function validateName(val) {
    if (!val || val.trim().length < 2) {
      return 'Please enter your full name (at least 2 characters).';
    }
    return '';
  }

  function validatePhone(val) {
    const cleaned = val ? val.replace(/\D/g, '') : '';
    // Check for valid 10-digit Indian phone number
    if (!cleaned || (cleaned.length !== 10 && !(cleaned.length === 12 && cleaned.startsWith('91')))) {
      return 'Please enter a valid 10-digit mobile number.';
    }
    return '';
  }

  function validateMessage(val) {
    if (!val || val.trim().length < 4) {
      return 'Please enter medicine name or your question (at least 4 characters).';
    }
    return '';
  }

  function checkFormValidity() {
    let isValid = true;

    const nameErr = validateName(fullNameInput ? fullNameInput.value : '');
    if (nameError) nameError.textContent = nameErr;
    if (fullNameInput) {
      if (nameErr) {
        fullNameInput.classList.add('input-error');
        isValid = false;
      } else {
        fullNameInput.classList.remove('input-error');
      }
    }

    const pErr = validatePhone(phoneInput ? phoneInput.value : '');
    if (phoneError) phoneError.textContent = pErr;
    if (phoneInput) {
      if (pErr) {
        phoneInput.classList.add('input-error');
        isValid = false;
      } else {
        phoneInput.classList.remove('input-error');
      }
    }

    const mErr = validateMessage(messageInput ? messageInput.value : '');
    if (messageError) messageError.textContent = mErr;
    if (messageInput) {
      if (mErr) {
        messageInput.classList.add('input-error');
        isValid = false;
      } else {
        messageInput.classList.remove('input-error');
      }
    }

    return isValid;
  }

  // Clear errors on input
  [fullNameInput, phoneInput, messageInput].forEach((input) => {
    if (!input) return;
    input.addEventListener('input', () => {
      input.classList.remove('input-error');
      const errElem = document.getElementById(input.id.replace('Name', 'Error').replace('Number', 'Error').replace('Text', 'Error'));
      if (errElem) errElem.textContent = '';
      if (formStatus) {
        formStatus.textContent = '';
        formStatus.className = 'form-status';
      }
    });
  });

  // Direct WhatsApp Forwarding
  function sendInquiryViaWhatsApp() {
    if (!checkFormValidity()) {
      if (formStatus) {
        formStatus.textContent = 'Please fill out all required fields marked with * before sending.';
        formStatus.className = 'form-status error';
      }
      return;
    }

    const name = fullNameInput.value.trim();
    const phone = phoneInput.value.trim();
    const service = serviceInput ? serviceInput.value : 'General Inquiry';
    const message = messageInput.value.trim();

    const formattedMessage = `*New Healthcare Inquiry - Yash Medicos*\n\n` +
      `👤 *Name:* ${name}\n` +
      `📞 *Phone:* ${phone}\n` +
      `🏥 *Service Required:* ${service}\n` +
      `📝 *Message / Medicines:* ${message}\n\n` +
      `_Sent from Yash Medicos Website (Golegaon Bk, Sillod)_`;

    const encoded = encodeURIComponent(formattedMessage);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;

    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    if (formStatus) {
      formStatus.innerHTML = `<strong>WhatsApp chat opened!</strong> If it did not open automatically, <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" style="text-decoration:underline; font-weight:bold;">click here to message Yash Medicos on WhatsApp</a>.`;
      formStatus.className = 'form-status success';
    }
  }

  if (sendDirectWhatsAppBtn) {
    sendDirectWhatsAppBtn.addEventListener('click', sendInquiryViaWhatsApp);
  }

  // Form Submission Handler
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      if (!checkFormValidity()) {
        if (formStatus) {
          formStatus.textContent = 'Please correct the highlighted fields above.';
          formStatus.className = 'form-status error';
        }
        return;
      }

      // Check if user set up a custom remote action URL (e.g., Formspree or Web3Forms)
      const formAction = contactForm.getAttribute('action');
      const hasRemoteAction = formAction && formAction !== '#' && formAction.trim() !== '';

      if (hasRemoteAction) {
        // Submit via remote service
        const submitBtn = document.getElementById('submitFormBtn');
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.textContent = 'Submitting...';
        }

        const formData = new FormData(contactForm);
        fetch(formAction, {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        })
        .then((response) => {
          if (response.ok) {
            formStatus.innerHTML = '<strong>Inquiry Sent Successfully!</strong> Yash Medicos will contact you shortly.';
            formStatus.className = 'form-status success';
            contactForm.reset();
          } else {
            throw new Error('Form service error');
          }
        })
        .catch(() => {
          formStatus.innerHTML = 'Could not submit via email service. <strong>Forwarding your message to WhatsApp directly...</strong>';
          formStatus.className = 'form-status error';
          setTimeout(sendInquiryViaWhatsApp, 1200);
        })
        .finally(() => {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = `
              <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              <span>Submit Inquiry</span>
            `;
          }
        });
      } else {
        // Default standalone mode: Prompt user with helpful instructions and forward straight to WhatsApp
        formStatus.innerHTML = `
          <strong>Inquiry prepared!</strong> We are opening WhatsApp (+91 9860384278) so our pharmacist in Golegaon Bk can respond to you immediately.
        `;
        formStatus.className = 'form-status success';

        setTimeout(() => {
          sendInquiryViaWhatsApp();
        }, 800);
      }
    });
  }

  // Smooth scroll offset adjustment for in-page anchors
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 70;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});
