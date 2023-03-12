import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector(".gallery")
const markup = createGallryMarkup(galleryItems)
galleryRef.innerHTML = markup;

function createGallryMarkup(items) {
    return  items
        .map(({preview, original, description}) => { 
        return `
        <div class="gallery__item">
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
        </div> `
    })
    .join('');
    
}

 new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250,});

