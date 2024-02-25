'use strict';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import Error from '../img/octagon.svg';

const refs = {
  form: document.querySelector('.form'),
  btnStart: document.querySelector('.form-btn'),
  gallery: document.querySelector('.list'),
  KEYWORD: 'nature',
  IMAGE_TYPE: 'photo',
  SAFESEARCH: 'true',
  ORIENTATION: 'horizontal',
  API_KEY: '42458886-d6d62fa6987d6f72b0a5e97bb',
  URL: 'https://pixabay.com/api/',
};

const LINK = `${refs.URL}?key=${refs.API_KEY}&q=${refs.KEYWORD}&image_type=${refs.IMAGE_TYPE}&safesearch=${refs.SAFESEARCH}&orientation=${refs.ORIENTATION}`;

function fetchImgs(query) {
  const linkWithQuery = `${refs.URL}?key=${refs.API_KEY}&q=${query}&image_type=${refs.IMAGE_TYPE}&safesearch=${refs.SAFESEARCH}&orientation=${refs.ORIENTATION}`;

  return fetch(linkWithQuery)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      if (data && data.hits) {
        return data;
      }
    })
    .catch(error => {
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
    });
}

refs.form.addEventListener('submit', onSearch);

function onSearch(event) {
  event.preventDefault();

  const searchQuery = event.currentTarget.elements.query.value.trim();

  fetchImgs(searchQuery)
    .then(data => {
      const imgs = data.hits.slice(0, 9);
      refs.gallery.innerHTML = imgs
        .map(
          ({
            webformatURL,
            largeImageURL,
            tags,
            likes,
            views,
            comments,
            downloads,
          }) => {
            return `
          <li class="gallery-item">
            <div class="gallery-box item-card-wrapper">
              <a class="gallery-link" href="${largeImageURL}">
                <img class="gallery-img" src="${webformatURL}" alt="${tags}" width="800">
              </a>
                <div class="card-box">
                  <p class="card-box-text"><b>Likes</b> ${likes}</p>
                  <p class="card-box-text"><b>Views</b> ${views}</p>
                  <p class="card-box-text"><b>Comments</b> ${comments}</p>
                  <p class="card-box-text"><b>Downloads</b> ${downloads}</p>
                </div>
            </div>
          </li>`;
          }
        )
        .join('');
    })
    .finally(() => {
      refs.form.reset();
    });
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
