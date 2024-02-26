'use strict';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { fetchImgs } from './js/pixabay-api.js';
import { renderGallery } from './js/render-functions.js';
import Error from './img/octagon.svg';

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

const form = document.querySelector('.form');
const gallery = document.querySelector('.list');
const loader = document.querySelector('.loader');

form.addEventListener('submit', checkForSending);
loader.style.display = 'none';

function checkForSending(event) {
  event.preventDefault();

  const searchQuery = form.elements.query.value.trim();
  if (searchQuery === '') return;

  const clearGallery = () => {
    if (!gallery) return;

    gallery.innerHTML = '';
  };

  loader.style.display = 'block';

  fetchImgs(searchQuery)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          theme: 'dark',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          messageColor: '#ffffff',
          backgroundColor: '#ef4040',
          position: 'topRight',
          iconUrl: Error,
          progressBarColor: '#b51b1b',
          timeout: 3000,
        });
      } else {
        return data;
      }
    })
    .then(data => {
      //   loader.style.display = 'block';
      renderGallery(data);
      lightbox.refresh();
    })
    .catch(error => console.log(error.status))
    .finally(() => {
      loader.style.display = 'none';
      form.reset();
    });
}

//   loader.style.display = 'block';

//   const toggleLoader = state => {
//     if (!loader) return;

//     state
//       ? loader.classList.add('is-active')
//       : loader.classList.remove('is-active');
//   };
