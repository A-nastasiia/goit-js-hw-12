import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryContainer = document.querySelector(".gallery");

let lightbox; 

export function createGallery(images) {
  const markup = images
    .map(
      ({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
      <a href="${largeImageURL}" class="gallery-item">
        <img src="${webformatURL}" alt="${tags}" />
        <div class="info">
          <p>Likes ${likes}</p>
          <p>Views ${views}</p>
          <p>Comments ${comments}</p>
          <p>Downloads ${downloads}</p>
        </div>
      </a>`
    )
    .join("");

  galleryContainer.innerHTML = markup;


  if (!lightbox) {
    lightbox = new SimpleLightbox(".gallery a", {
      captionsData: "alt",
      captionDelay: 250,
    });
  } else {
    lightbox.refresh(); 
  }
}

export function clearGallery() {
  galleryContainer.innerHTML = "";
  
  if (lightbox) {
    lightbox.destroy();
  }
  
  lightbox = null; 
}

export function showLoader() {
  document.querySelector(".loader").classList.add("visible");
}

export function hideLoader() {
  document.querySelector(".loader").classList.remove("visible");
}