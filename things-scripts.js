document.addEventListener('DOMContentLoaded', () => {
    // Modal Functionality
    const modal = document.getElementById('activityModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalImage = document.getElementById('modalImage');
    const modalDetails = document.getElementById('modalDetails');
    const closeModal = document.querySelector('.modal-close');
  
    const activityDetails = {
      'cardiff-castle': {
        title: 'Cardiff Castle',
        image: 'images/culture.jpg',
        details: 'Step into history at Cardiff Castle, featuring Roman walls, a Norman keep, and opulent Victorian interiors. Located just a short walk from Cardiff Holland House, it’s a must-visit for history and culture lovers.'
      },
      'national-museum': {
        title: 'National Museum Cardiff',
        image: 'images/culture-2.jpg',
        details: 'Discover art, history, and natural sciences at this free museum in Cardiff’s Civic Centre, offering a rich cultural experience for all ages.'
      },
      'bute-park': {
        title: 'Bute Park',
        image: 'images/outdoor.jpg',
        details: 'Relax in Bute Park’s sprawling green spaces with riverside walks, beautiful gardens, and historic landmarks, perfect for a leisurely day out.'
      },
      'cardiff-bay': {
        title: 'Cardiff Bay',
        image: 'images/outdoor-2.jpg',
        details: 'Explore Cardiff Bay’s waterfront with dining, cultural attractions like the Wales Millennium Centre, and scenic views, ideal for a relaxing outing.'
      },
      'techniquest': {
        title: 'Techniquest',
        image: 'images/family.jpg',
        details: 'Engage kids with hands-on science exhibits at Techniquest in Cardiff Bay, a fun and educational experience for families.'
      },
      'stadium-tours': {
        title: 'Principality Stadium Tours',
        image: 'images/family-2.jpg',
        details: 'Go behind the scenes of Cardiff’s iconic Principality Stadium, a thrilling experience for sports-loving families and visitors.'
      },
      'the-moon': {
        title: 'Live Music at The Moon',
        image: 'images/nightlife.jpg',
        details: 'Vibe to local bands at The Moon, an intimate music venue offering a lively night out in Cardiff’s vibrant nightlife scene.'
      },
      'potted-pig': {
        title: 'Cocktails at The Potted Pig',
        image: 'images/nightlife-2.jpg',
        details: 'Sip creative cocktails in the cozy, underground setting of The Potted Pig, perfect for a memorable evening in Cardiff.'
      }
    };
  
    document.querySelectorAll('.details-btn').forEach(button => {
      button.addEventListener('click', () => {
        const activity = button.getAttribute('data-activity');
        modalTitle.textContent = activityDetails[activity].title;
        modalImage.src = activityDetails[activity].image;
        modalImage.alt = `${activityDetails[activity].title} in Cardiff`;
        modalDetails.textContent = activityDetails[activity].details;
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
  
    // Filter Functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const activityCards = document.querySelectorAll('.activity-card');
  
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
  
        filterButtons.forEach(btn => {
          btn.classList.remove('active');
          btn.setAttribute('aria-selected', 'false');
        });
        button.classList.add('active');
        button.setAttribute('aria-selected', 'true');
  
        activityCards.forEach(card => {
          const type = card.getAttribute('data-type');
          if (filter === 'all' || type === filter) {
            card.classList.remove('hidden');
          } else {
            card.classList.add('hidden');
          }
        });
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