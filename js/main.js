// Policy Modal Functions
function openPolicyModal(modalId, btnId) {
  document.getElementById(modalId).style.display = 'flex';
  document.getElementById(btnId).setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
}

function closePolicyModal(modalId) {
  document.getElementById(modalId).style.display = 'none';
  document.getElementById('privacyPolicyBtn').setAttribute('aria-expanded', 'false');
  document.getElementById('solidNotePrivacyBtn').setAttribute('aria-expanded', 'false');
  document.getElementById('termsServiceBtn').setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

// Accessibility: close modal on Esc key
document.addEventListener('keydown', function (evt) {
  if (evt.key === 'Escape' || evt.key === 'Esc') {
    if (document.getElementById('privacyPolicyModal').style.display === 'flex')
      closePolicyModal('privacyPolicyModal');
    if (document.getElementById('solidNotePrivacyModal').style.display === 'flex')
      closePolicyModal('solidNotePrivacyModal');
    if (document.getElementById('termsServiceModal').style.display === 'flex')
      closePolicyModal('termsServiceModal');
  }
});

// Button event listeners
document.addEventListener('DOMContentLoaded', function () {
  document
    .getElementById('privacyPolicyBtn')
    .addEventListener('click', function () {
      openPolicyModal('privacyPolicyModal', 'privacyPolicyBtn');
    });

  document
    .getElementById('solidNotePrivacyBtn')
    .addEventListener('click', function () {
      openPolicyModal('solidNotePrivacyModal', 'solidNotePrivacyBtn');
    });

  document.getElementById('termsServiceBtn').addEventListener('click', function () {
    openPolicyModal('termsServiceModal', 'termsServiceBtn');
  });

  // Close modal on background click
  document.getElementById('privacyPolicyModal').addEventListener('click', function (e) {
    if (e.target === this) closePolicyModal('privacyPolicyModal');
  });

  document.getElementById('solidNotePrivacyModal').addEventListener('click', function (e) {
    if (e.target === this) closePolicyModal('solidNotePrivacyModal');
  });

  document.getElementById('termsServiceModal').addEventListener('click', function (e) {
    if (e.target === this) closePolicyModal('termsServiceModal');
  });

  // Mobile Menu Toggle
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const navLinks = document.getElementById('navLinks');
  const mobileMenuBackdrop = document.getElementById('mobileMenuBackdrop');
  
  function toggleMobileMenu() {
    const isActive = navLinks.classList.contains('active');
    mobileMenuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
    if (mobileMenuBackdrop) {
      mobileMenuBackdrop.classList.toggle('active');
    }
    document.body.style.overflow = !isActive ? 'hidden' : '';
  }
  
  function closeMobileMenu() {
    mobileMenuToggle.classList.remove('active');
    navLinks.classList.remove('active');
    if (mobileMenuBackdrop) {
      mobileMenuBackdrop.classList.remove('active');
    }
    document.body.style.overflow = '';
  }
  
  if (mobileMenuToggle && navLinks) {
    mobileMenuToggle.addEventListener('click', toggleMobileMenu);
    
    if (mobileMenuBackdrop) {
      mobileMenuBackdrop.addEventListener('click', closeMobileMenu);
    }

    // Close menu when clicking on a link
    const navLinkItems = navLinks.querySelectorAll('a');
    navLinkItems.forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });
  }
});

