document.addEventListener('DOMContentLoaded', () => {
    // Modal Functionality
    const modal = document.getElementById('facilityModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalImage = document.getElementById('modalImage');
    const modalDetails = document.getElementById('modalDetails');
    const closeModal = document.querySelector('.modal-close');
  
    const facilityDetails = {
      'Pool': {
        image: 'images/spa-pool.jpg',
        details: 'Our 18m indoor swimming pool offers a calming environment, perfect for leisurely laps or a refreshing swim.'
      },
      'SpaPool': {
        image: 'images/spa-pool-area.jpg',
        details: 'Relax in our soothing spa pool, designed to melt away stress in a serene setting.'
      },
      'Sauna': {
        image: 'images/sauna.jpg',
        details: 'Unwind in our heat room sauna, a tranquil space to detox and relax.'
      },
      'Aromatherapy': {
        image: 'images/aromatherapy-room.jpg',
        details: 'Experience scent-based wellness in our dedicated aromatherapy room, crafted for ultimate relaxation.'
      },
      'SteamRoom': {
        image: 'images/steam-room.jpg',
        details: 'Enjoy the warm, misty ambiance of our steam room, perfect for deep relaxation.'
      },
      'TreatmentRooms': {
        image: 'images/treatment-room.jpg',
        details: 'Our 12 private treatment rooms offer personalized therapies, including facials, massages, and manicures.'
      },
      'Gym': {
        image: 'images/gym.jpg',
        details: 'Stay active in our fully equipped gym with state-of-the-art fitness equipment.'
      }
    };
  
    document.querySelectorAll('.details-btn').forEach(button => {
      button.addEventListener('click', () => {
        const facility = button.getAttribute('data-facility');
        modalTitle.textContent = facilityDetails[facility].title || facility.replace(/([A-Z])/g, ' $1').trim();
        modalImage.src = facilityDetails[facility].image;
        modalImage.alt = `${facilityDetails[facility].title || facility} at Spa Naturel`;
        modalDetails.textContent = facilityDetails[facility].details;
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
  
    // Treatment Toggle Functionality
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
  
    // Testimonial Carousel
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
    let currentIndex = 0;
  
    function showTestimonial(index) {
      testimonialCards.forEach((card, i) => {
        card.classList.remove('active');
        if (i === index) {
          card.classList.add('active');
        }
      });
    }
  
    prevButton.addEventListener('click', () => {
      currentIndex = (currentIndex === 0) ? testimonialCards.length - 1 : currentIndex - 1;
      showTestimonial(currentIndex);
    });
  
    nextButton.addEventListener('click', () => {
      currentIndex = (currentIndex === testimonialCards.length - 1) ? 0 : currentIndex + 1;
      showTestimonial(currentIndex);
    });
  
    // Auto-advance carousel
    setInterval(() => {
      currentIndex = (currentIndex === testimonialCards.length - 1) ? 0 : currentIndex + 1;
      showTestimonial(currentIndex);
    }, 5000);
  
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