document.addEventListener('DOMContentLoaded', () => {
    // Modal Functionality
    const modal = document.getElementById('roomModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalImage = document.getElementById('modalImage');
    const modalDetails = document.getElementById('modalDetails');
    const closeModal = document.querySelector('.modal-close');
  
    const roomDetails = {
      'Calon': {
        image: 'images/outdoor-event.jpg',
        details: 'The grand Calon Suite on the ground floor is perfect for charity dinners, proms, and gala dinners, accommodating up to 450 guests with a licensed setup.'
      },
      'Caernarfon': {
        image: 'images/grand-banquet.jpg',
        details: 'Located on the first floor, Caernarfon is ideal for intimate gala dinners or special events, with a capacity of up to 140 guests.'
      },
      'CalonExclusive': {
        image: 'images/grand-arrival.jpg',
        details: 'The Calon Suite, exclusively hired, is a spacious and versatile venue with a private entrance, bar, stage, projector, high-speed Wi-Fi, and private kitchen, perfect for product launches, conferences, gala dinners, and weddings.'
      }
    };
  
    document.querySelectorAll('.details-btn').forEach(button => {
      button.addEventListener('click', () => {
        const room = button.getAttribute('data-room');
        modalTitle.textContent = room === 'CalonExclusive' ? 'Calon Suite Exclusive Hire' : room;
        modalImage.src = roomDetails[room].image;
        modalImage.alt = `${room} at Cardiff Holland House`;
        modalDetails.textContent = roomDetails[room].details;
        modal.classList.add('active');
      });
    });
  
    closeModal.addEventListener('click', () => {
      modal.classList.remove('active');
    });
  
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });
  
    // Toggle Functionality for Catering and Packages
    const detailsToggles = document.querySelectorAll('.details-toggle');
    detailsToggles.forEach(toggle => {
      toggle.addEventListener('click', () => {
        const details = toggle.nextElementSibling;
        const isActive = toggle.classList.contains('active');
  
        if (!isActive) {
          toggle.classList.add('active');
          toggle.setAttribute('aria-expanded', 'true');
          details.classList.add('active');
        } else {
          toggle.classList.remove('active');
          toggle.setAttribute('aria-expanded', 'false');
          details.classList.remove('active');
        }
      });
    });
  
    // Animation on Scroll
    const animatedElements = document.querySelectorAll('[data-animate]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.2 });
  
    animatedElements.forEach(element => observer.observe(element));
  
    // Initialize existing scripts
    if (typeof initMagazineCarousels === 'function') {
      initMagazineCarousels();
    }
  });