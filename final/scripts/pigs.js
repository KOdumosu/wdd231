
const modal = document.querySelector('#pig-modal');
const modalTitle = document.querySelector('#modal-title');
const modalBody = document.querySelector('#modal-body');
const closeButton = document.querySelector('.modal-close');
const overlay = document.querySelector('.modal-overlay');

function openModal(pig) {
  modalTitle.textContent = pig.name;
  modalBody.innerHTML = `
    <p><strong>Origin:</strong> ${pig.origin}</p>
    <p><strong>Purpose:</strong> ${pig.purpose}</p>
    <p><strong>Growth Rate:</strong> ${pig.growthRate}</p>
    <p>${pig.description}</p>
  `;

  modal.classList.add('show');
  modal.setAttribute('aria-hidden', 'false');
}

function closeModal() {
  modal.classList.remove('show');
  modal.setAttribute('aria-hidden', 'true');
}

closeButton.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

async function loadPigs() {
  try {
    const response = await fetch('data/pigs.json');
    const pigs = await response.json();

    const container = document.querySelector('#pig-list');

    pigs.forEach(pig => {
      const card = document.createElement('article');
      card.innerHTML = `
        <h2>${pig.name}</h2>
        <p>Purpose: ${pig.purpose}</p>
        <button class="details-btn">View Details</button>
      `;

      card.querySelector('.details-btn')
        .addEventListener('click', () => openModal(pig));

      container.appendChild(card);
    });
  } catch (error) {
    console.error('Error loading pig data', error);
  }
}

loadPigs();

