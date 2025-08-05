document.addEventListener('DOMContentLoaded', () => {
    // Modal Functionality
    const modal = document.getElementById('roomModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalImage = document.getElementById('modalImage');
    const modalDetails = document.getElementById('modalDetails');
    const closeModal = document.querySelector('.modal-close');
  
    const roomDetails = {
      'classic-double': {
        title: 'Classic Double',
        image: 'images/classic-double.jpg',
        details: '247 sqft | 1 King Bed or 2 Single Beds<br>Enjoy a comfortable stay with free WiFi, private bathroom, flat-screen TV, tea/coffee maker, and safe. Non-smoking.'
      },
      'classic-triple': {
        title: 'Classic Triple',
        image: 'images/classic-triple.jpg',
        details: '247 sqft | 1 King Bed or 3 Single Beds<br>Perfect for small groups, featuring free WiFi, private bathroom, flat-screen TV, tea/coffee maker, and safe. Non-smoking.'
      },
      'superior': {
        title: 'Superior',
        image: 'images/superior.jpg',
        details: '355 sqft | 1 King Bed or 2 Single Beds<br>Spacious comfort with free WiFi, private bathroom, flat-screen TV, tea/coffee maker, and safe. Non-smoking.'
      },
      'privilege': {
        title: 'Privilege',
        image: 'images/privilege.jpg',
        details: '279 sqft | 1 King Bed or 2 Single Beds<br>Elevated luxury with free WiFi, private bathroom, flat-screen TV, tea/coffee maker, safe, mini bar, bathrobe, and slippers. Non-smoking.'
      },
      'suite': {
        title: 'Suite',
        image: 'images/suite.jpg',
        details: '645 sqft | 1 King Bed<br>Ultimate indulgence with free WiFi, private bathroom, flat-screen TV, tea/coffee maker, safe, mini bar, bathrobe, and slippers. Non-smoking.'
      }
    };
  
    document.querySelectorAll('.details-btn').forEach(button => {
      button.addEventListener('click', () => {
        const room = button.getAttribute('data-room');
        modalTitle.textContent = roomDetails[room].title;
        modalImage.src = roomDetails[room].image;
        modalImage.alt = `${roomDetails[room].title} at Cardiff Holland House`;
        modalDetails.innerHTML = roomDetails[room].details;
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
    const roomCards = document.querySelectorAll('.room-card');
  
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
  
        filterButtons.forEach(btn => {
          btn.classList.remove('active');
          btn.setAttribute('aria-selected', 'false');
        });
        button.classList.add('active');
        button.setAttribute('aria-selected', 'true');
  
        roomCards.forEach(card => {
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