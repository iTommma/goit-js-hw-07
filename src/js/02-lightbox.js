import { galleryItems } from './gallery-items.js';
// Change code below this line
// console.log(galleryItems);

const gallery = document.querySelector(".gallery");

// створення галереї з масиву
galleryItems.map(el => {
    const { description, original, preview } = el;
    // console.log(preview);

    gallery.innerHTML += `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`;
});

// налаштування SimpleLightbox
new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});


