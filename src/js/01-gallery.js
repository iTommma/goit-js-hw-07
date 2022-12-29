import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallary = document.querySelector('.gallery');

// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
const createGallary = galleryItems.map(el => {
    const { preview, original, description } = el;
    // console.log(preview, original, description);
    return (gallary.innerHTML += `
        <div class="gallery__item">
            <a class="gallery__link" href="#">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div>`);
} )

// Реалізація делегування на div.gallery і отримання url великого зображення.
let instance;
gallary.addEventListener("click", ({target}) => {
  if (target.nodeName !== "IMG") {
    return;
  }
//   console.log(target.src);
//   console.log(target.dataset.source);
  
  // Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям.
  instance = basicLightbox.create(`
        <img src="${target.dataset.source}" width="800" height="600">
    `);

  // Відкриття модального вікна по кліку на елементі галереї.
  instance.show();

  //   console.log("event.target: ", event.target);
  //   console.log("event.currentTarget: ", event.currentTarget);
});

// Закриття модаки через Escape
document.addEventListener('keydown', event => {
    if (event.code === 'Escape') {
      // console.log(event.code);
      instance.close();
    }
})


