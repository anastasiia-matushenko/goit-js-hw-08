// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line

const gallery = document.querySelector(".gallery");

const imagesGallery = galleryItems.reduce((acc, {preview, original, description}) =>
  acc +
    `<a class="gallery__item" href="${original}">
         <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
        />
    </a>`
  , "");

gallery.insertAdjacentHTML("beforeend", imagesGallery);

new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250});