// Policy Modal Functions
function openPolicyModal(modalId, btnId) {
  document.getElementById(modalId).style.display = 'flex';
  document.getElementById(btnId).setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
}

function closePolicyModal(modalId) {
  document.getElementById(modalId).style.display = 'none';
  document.getElementById('privacyPolicyBtn').setAttribute('aria-expanded', 'false');
  document.getElementById('termsServiceBtn').setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

// Accessibility: close modal on Esc key
document.addEventListener('keydown', function (evt) {
  if (evt.key === 'Escape' || evt.key === 'Esc') {
    if (document.getElementById('privacyPolicyModal').style.display === 'flex')
      closePolicyModal('privacyPolicyModal');
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

  document.getElementById('termsServiceBtn').addEventListener('click', function () {
    openPolicyModal('termsServiceModal', 'termsServiceBtn');
  });

  // Close modal on background click
  document.getElementById('privacyPolicyModal').addEventListener('click', function (e) {
    if (e.target === this) closePolicyModal('privacyPolicyModal');
  });

  document.getElementById('termsServiceModal').addEventListener('click', function (e) {
    if (e.target === this) closePolicyModal('termsServiceModal');
  });
});

