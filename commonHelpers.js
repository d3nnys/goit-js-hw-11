import{S as d,i as p}from"./assets/vendor-5b791d57.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const c="/goit-js-hw-11/assets/octagon-c1967aa5.svg",o={form:document.querySelector(".form"),btnStart:document.querySelector(".form-btn"),gallery:document.querySelector(".list"),KEYWORD:"nature",IMAGE_TYPE:"photo",SAFESEARCH:"true",ORIENTATION:"horizontal",API_KEY:"42458886-d6d62fa6987d6f72b0a5e97bb",URL:"https://pixabay.com/api/"};function g(i){const s=`${o.URL}?key=${o.API_KEY}&q=${i}&image_type=${o.IMAGE_TYPE}&safesearch=${o.SAFESEARCH}&orientation=${o.ORIENTATION}`;return fetch(s).then(t=>{if(!t.ok)throw new c(t.status);return t.json()}).then(t=>{if(t&&t.hits)return t}).catch(t=>{p.error({theme:"dark",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#ffffff",backgroundColor:"#ef4040",position:"topRight",iconUrl:c,progressBarColor:"#b51b1b",timeout:3e3})})}o.form.addEventListener("submit",y);function y(i){i.preventDefault();const s=i.currentTarget.elements.query.value.trim();g(s).then(t=>{const n=t.hits.slice(0,9);o.gallery.innerHTML=n.map(({webformatURL:e,largeImageURL:r,tags:a,likes:l,views:u,comments:f,downloads:m})=>`
          <li class="gallery-item">
            <div class="gallery-box item-card-wrapper">
              <a class="gallery-link" href="${r}">
                <img class="gallery-img" src="${e}" alt="${a}" width="800">
              </a>
                <div class="card-box">
                  <p class="card-box-text"><b>Likes</b> ${l}</p>
                  <p class="card-box-text"><b>Views</b> ${u}</p>
                  <p class="card-box-text"><b>Comments</b> ${f}</p>
                  <p class="card-box-text"><b>Downloads</b> ${m}</p>
                </div>
            </div>
          </li>`).join("")}).finally(()=>{o.form.reset()})}new d(".gallery a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=commonHelpers.js.map
