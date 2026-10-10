const menubutton = document.querySelector('.menu-button');
const navLinks = document.querySelector('.nav-links');

menubutton.addEventListener('click', toggleMenu);

function toggleMenu() {
    navLinks.classList.toggle('hide');
}

const gallery = document.querySelector('.gallery');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

gallery.addEventListener('click', openModal);

function openModal(e) {
    if (e.target.tagName !== 'IMG') return;

    console.log(e.target);
    
    const img = e.target;
    const src = img.getAttribute('src');
    const alt = img.getAttribute('alt');
    const full = src.replace('sm', 'full');

    modalImage.src = full;
    modalImage.alt = alt;

    modal.showModal();
}

closeButton.addEventListener('click', () => {
    modal.close();
});

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});