import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
let instance;

// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
galleryItems.map((el) => {
  const { preview, original, description } = el;
  // console.log(preview, original, description);
  return (gallery.innerHTML += `
    <div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>`);
});

// Закриття модаки Escape -ом
const onEscapeKeydown = (event) => {
  if (event.code !== "Escape") {
    return;
  }
  // console.log(event.code);
  instance.close();
  document.removeEventListener("keydown", onEscapeKeydown);
};

// Реалізація делегування на div.gallery і отримання url великого зображення.
gallery.addEventListener("click", (event) => {
  event.preventDefault();

  const { target } = event;

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
  // Активація слухача клавіатури
  document.addEventListener("keydown", onEscapeKeydown);
});
