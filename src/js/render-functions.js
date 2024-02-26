// export default function onSearch(img) {
//   img.then(data => {
//     const imgs = data.hits.slice(0, 9);
//     gallery.innerHTML = imgs
//       .map(
//         ({
//           webformatURL,
//           largeImageURL,
//           tags,
//           likes,
//           views,
//           comments,
//           downloads,
//         }) => {
//           return `
//           <li class="gallery-item">
//             <div class="gallery-box item-card-wrapper">
//               <a class="gallery-link" href="${largeImageURL}">
//                 <img class="gallery-img" src="${webformatURL}" alt="${tags}">
//               </a>
//                 <div class="card-box">
//                   <p class="card-box-text"><b>Likes</b> ${likes}</p>
//                   <p class="card-box-text"><b>Views</b> ${views}</p>
//                   <p class="card-box-text"><b>Comments</b> ${comments}</p>
//                   <p class="card-box-text"><b>Downloads</b> ${downloads}</p>
//                 </div>
//             </div>
//           </li>`;
//         }
//       )
//       .join('');
//     // })
//     // .finally(() => {
//     //   refs.form.reset();
//   });
// }

export function renderGallery(data) {
  const gallery = document.querySelector('.list');

  if (!gallery) {
    console.error('Gallery element not found');
    return;
  }

  const imgs = data.hits.slice(0, 9);
  gallery.innerHTML = imgs
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
              <img class="gallery-img" src="${webformatURL}" alt="${tags}" loading="lazy">
            </a>
            <div class="card-box">
              <div>
                <p class="card-box-text"><b>Likes</b></p>
                <p class="card-box-text">${likes}</p>
              </div>
              <div>
                <p class="card-box-text"><b>Views</b></p>
                <p class="card-box-text">${views}</p>
              </div>
              <div>
                <p class="card-box-text"><b>Comments</b></p>
                <p class="card-box-text">${comments}</p>
              </div>
              <div>
                <p class="card-box-text"><b>Downloads</b></p>
                <p class="card-box-text">${downloads}</p>
              </div>
            </div>
          </div>
        </li>`;
      }
    )
    .join('');
}

// export default renderGallery;
