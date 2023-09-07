// Add imports above this line
import { galleryItems } from './gallery-items';
// Описан в документации
import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

const galleryContainer = document.querySelector('.gallery');

const gallery = createGallery(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', gallery);
galleryContainer.addEventListener('click', handlePhotoClick);

function createGallery(arr) {
  return arr
    .map(({ preview, original, description }) => {
      return `
      <li class="gallery__item" id="preview">
  <a class="gallery__link" href="${original}" >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
    `;
    })
    .join('');
}

function handlePhotoClick(event) {
  if (event.target === event.currentTarget) {
    return;
  }

  event.preventDefault();

  //   const modal = basicLightbox.create(`<img
  //       class="gallery__image"
  //       src="${event.target.dataset.source}"
  //       alt="${event.target.alt}"
  //     />`);
  //   modal.show();

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      modal.close();
    }
  });
}

console.log(galleryItems);
