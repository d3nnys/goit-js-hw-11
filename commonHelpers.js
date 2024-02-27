import{S as p,i as c}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function m(i){const r={KEYWORD:"nature",IMAGE_TYPE:"photo",SAFESEARCH:"true",ORIENTATION:"horizontal",API_KEY:"42458886-d6d62fa6987d6f72b0a5e97bb",URL:"https://pixabay.com/api/"},s=`${r.URL}?key=${r.API_KEY}&q=${i}&image_type=${r.IMAGE_TYPE}&safesearch=${r.SAFESEARCH}&orientation=${r.ORIENTATION}`;return fetch(s).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()}).then(o=>{if(o&&o.hits)return o})}function y(i){const r=document.querySelector(".list");if(!r){console.error("Gallery element not found");return}const s=i.hits.slice(0,9);r.innerHTML=s.map(({webformatURL:o,largeImageURL:e,tags:t,likes:a,views:d,comments:u,downloads:f})=>`
        <li class="gallery-item">
          <div class="gallery-box item-card-wrapper">
            <a class="gallery-link" href="${e}">
              <img class="gallery-img" src="${o}" alt="${t}" loading="lazy">
            </a>
            <div class="card-box">
              <div>
                <p class="card-box-text"><b>Likes</b></p>
                <p class="card-box-text">${a}</p>
              </div>
              <div>
                <p class="card-box-text"><b>Views</b></p>
                <p class="card-box-text">${d}</p>
              </div>
              <div>
                <p class="card-box-text"><b>Comments</b></p>
                <p class="card-box-text">${u}</p>
              </div>
              <div>
                <p class="card-box-text"><b>Downloads</b></p>
                <p class="card-box-text">${f}</p>
              </div>
            </div>
          </div>
        </li>`).join("")}const g="/goit-js-hw-11/assets/octagon-c1967aa5.svg",h=new p(".gallery a",{captionsData:"alt",captionDelay:250}),n=document.querySelector(".form");document.querySelector(".list");const l=document.querySelector(".loader");n.addEventListener("submit",b);l.style.display="none";function b(i){i.preventDefault();const r=n.elements.query.value.trim();if(r===""){c.warning({message:"Please enter a search query.",messageColor:"black",backgroundColor:"#ffac26",position:"topRight",pauseOnHover:!1,progressBarColor:"black",timeout:3e3});return}l.style.display="block",m(r).then(s=>{if(s.hits.length===0)return s}).then(s=>{y(s),h.refresh()}).catch(s=>c.error({theme:"dark",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#ffffff",backgroundColor:"#ef4040",position:"topRight",iconUrl:g,pauseOnHover:!1,progressBarColor:"#b51b1b",timeout:3e3})).finally(()=>{l.style.display="none",n.reset()})}
//# sourceMappingURL=commonHelpers.js.map
