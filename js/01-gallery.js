import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryRef = document.querySelector(".gallery")
const markup = createGallryMarkup(galleryItems)
galleryRef.innerHTML = markup;

function createGallryMarkup(items) {
    return  items
        .map(({preview, original, description}) => { 
        return`
        <div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div> `
    })
    .join('');
    
}

function showModal(img) {

    const instance = basicLightbox.create(
      `<img src="${img}" width="1080">`)
    instance.show()

    galleryRef.addEventListener(`keydown`, (e) => {
      if(e.code === "Escape") {
        instance.close()
      }
    })
}

galleryRef.addEventListener("click", function (event) {
  event.preventDefault()

    if (event.target.closest('.gallery__image')) {
        showModal(event.target.dataset.source)
    }
});









