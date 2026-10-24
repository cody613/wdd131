const menubutton = document.querySelector('.menu-button');
const navLinks = document.querySelector('.nav-links');
const gallery = document.querySelector('.gallery');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

function toggleMenu() {
    navLinks.classList.toggle('hide');
}

function openModal(e) {
    if (e.target.tagName !== 'IMG') return;
    
    const img = e.target;
    const src = img.getAttribute('src');
    const alt = img.getAttribute('alt');
    const full = src.replace('sm', 'full');

    modalImage.src = full;
    modalImage.alt = alt;

    modal.showModal();
}

menubutton.addEventListener('click', toggleMenu);

closeButton.addEventListener('click', () => {
    modal.close();
});

gallery.addEventListener('click', openModal);

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});