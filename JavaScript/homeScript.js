// script.js

// Toggle Navigation Menu for Mobile
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Adjust Event Cards Based on Screen Width
const eventList = document.getElementById('event-list');
const events = [
  {
    img: 'https://via.placeholder.com/300x200',
    title: 'Concert Night',
    date: '25th October 2023',
    location: 'City Hall',
  },
  {
    img: 'https://via.placeholder.com/300x200',
    title: 'Tech Conference',
    date: '30th October 2023',
    location: 'Convention Center',
  },
  {
    img: 'https://via.placeholder.com/300x200',
    title: 'Food Festival',
    date: '5th November 2023',
    location: 'Central Park',
  },
];

function renderEvents() {
  eventList.innerHTML = '';
  events.forEach((event) => {
    const eventCard = document.createElement('div');
    eventCard.classList.add('event-card');
    eventCard.innerHTML = `
      <img src="${event.img}" alt="${event.title}">
      <h3>${event.title}</h3>
      <p>Date: ${event.date}</p>
      <p>Location: ${event.location}</p>
      <a href="#" class="btn">Book Now</a>
    `;
    eventList.appendChild(eventCard);
  });
}

window.addEventListener('resize', () => {
  if (window.innerWidth <= 768) {
    eventList.style.flexDirection = 'column';
  } else {
    eventList.style.flexDirection = 'row';
  }
});

// Initial Render
renderEvents();