document.addEventListener('DOMContentLoaded', () => {
    // Table Filtering
    const roomTypeFilter = document.getElementById('roomTypeFilter');
    const floorFilter = document.getElementById('floorFilter');
    const tableRows = document.querySelectorAll('.meeting-table tbody tr');
  
    function filterTable() {
      const roomType = roomTypeFilter.value;
      const floor = floorFilter.value;
  
      tableRows.forEach(row => {
        const rowRoomType = row.getAttribute('data-room-type');
        const rowFloor = row.getAttribute('data-floor');
        const matchesRoomType = roomType === 'all' || rowRoomType.includes(roomType);
        const matchesFloor = floor === 'all' || rowFloor === floor;
  
        row.style.display = matchesRoomType && matchesFloor ? '' : 'none';
      });
    }
  
    roomTypeFilter.addEventListener('change', filterTable);
    floorFilter.addEventListener('change', filterTable);
  
    // Modal Functionality
    const modal = document.getElementById('roomModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalImage = document.getElementById('modalImage');
    const modalDetails = document.getElementById('modalDetails');
    const closeModal = document.querySelector('.modal-close');
  
    const roomDetails = {
      'Calon': {
        image: 'images/calon-suite.jpg',
        details: 'The impressive Calon Suite, located on the ground floor, is ideal for large-scale conferences, gala dinners, or events, accommodating up to 650 guests in a theatre setup.'
      },
      'Calon Lobby': {
        image: 'images/calon-lobby.jpg',
        details: 'Available exclusively for events in the Calon Suite, perfect for receptions or networking.'
      },
      'Caernarfon': {
        image: 'images/caernarfon-room.jpg',
        details: 'Located on the first floor, Caernarfon is suited for mid-sized conferences or banquets, with a capacity of up to 200 in theatre style.'
      },
      'Brecon': {
        image: 'images/brecon-room.jpg',
        details: 'A versatile second-floor space for meetings or banquets, accommodating up to 100 guests.'
      },
      'Caerleon': {
        image: 'images/caerleon-room.jpg',
        details: 'A compact second-floor boardroom for intimate meetings, seating up to 12.'
      },
      'Kidwelly': {
        image: 'images/kidwelly-room.jpg',
        details: 'A second-floor room ideal for smaller meetings or workshops, with flexible setups.'
      },
      'Tredegar': {
        image: 'images/tredegar-room.jpg',
        details: 'A second-floor boardroom for up to 20, perfect for executive meetings.'
      },
      '2nd Floor Breakout': {
        image: 'images/breakout-second.jpg',
        details: 'Non-private breakout area for second-floor events, ideal for informal gatherings.'
      },
      'Pembroke': {
        image: 'images/pembroke-room.jpg',
        details: 'A third-floor venue for meetings or banquets, accommodating up to 90 guests.'
      },
      'Caerphilly': {
        image: 'images/caerphilly-room.jpg',
        details: 'A third-floor room for small meetings or workshops, with a capacity of up to 40.'
      },
      'Tintern': {
        image: 'images/tintern-room.jpg',
        details: 'A third-floor boardroom for up to 20, ideal for focused discussions.'
      },
      'Portmeiron': {
        image: 'images/portmeiron-room.jpg',
        details: 'A compact third-floor boardroom for up to 12, perfect for small meetings.'
      },
      'Glamorgan': {
        image: 'images/glamorgan-room.jpg',
        details: 'A third-floor boardroom for intimate meetings, seating up to 6.'
      },
      'Monmouth': {
        image: 'images/monmouth-room.jpg',
        details: 'A third-floor boardroom for up to 6, ideal for small executive meetings.'
      },
      'Montgomery': {
        image: 'images/montgomery-room.jpg',
        details: 'A third-floor boardroom for up to 8, suited for small meetings.'
      },
      'Wye': {
        image: 'images/wye-room.jpg',
        details: 'A third-floor boardroom for up to 6, perfect for private discussions.'
      },
      'Snowdonia': {
        image: 'images/snowdonia-room.jpg',
        details: 'A third-floor boardroom for up to 6, ideal for small meetings.'
      },
      'Llanelli': {
        image: 'images/llanelli-room.jpg',
        details: 'A third-floor boardroom for up to 8, suited for small professional gatherings.'
      },
      'Third Floor Breakout': {
        image: 'images/breakout-third.jpg',
        details: 'Non-private breakout area for third-floor events, ideal for informal networking.'
      }
    };
  
    document.querySelectorAll('.details-btn').forEach(button => {
      button.addEventListener('click', () => {
        const room = button.getAttribute('data-room');
        modalTitle.textContent = room;
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
  
    // Package Toggle Functionality
    const detailsToggles = document.querySelectorAll('.details-toggle');
    detailsToggles.forEach(toggle => {
      toggle.addEventListener('click', () => {
        const details = toggle.nextElementSibling;
        const isActive = toggle.classList.contains('active');
  
        // Close all toggles
        detailsToggles.forEach(t => {
          t.classList.remove('active');
          t.setAttribute('aria-expanded', 'false');
          t.nextElementSibling.classList.remove('active');
        });
  
        // Open current toggle
        if (!isActive) {
          toggle.classList.add('active');
          toggle.setAttribute('aria-expanded', 'true');
          details.classList.add('active');
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