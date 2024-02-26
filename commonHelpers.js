import{S as f,i as p}from"./assets/vendor-5b791d57.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function m(i){const t={KEYWORD:"nature",IMAGE_TYPE:"photo",SAFESEARCH:"true",ORIENTATION:"horizontal",API_KEY:"42458886-d6d62fa6987d6f72b0a5e97bb",URL:"https://pixabay.com/api/"},o=`${t.URL}?key=${t.API_KEY}&q=${i}&image_type=${t.IMAGE_TYPE}&safesearch=${t.SAFESEARCH}&orientation=${t.ORIENTATION}`;return fetch(o).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()}).then(s=>{if(s&&s.hits)return s})}function y(i){const t=document.querySelector(".list");if(!t){console.error("Gallery element not found");return}const o=i.hits.slice(0,9);t.innerHTML=o.map(({webformatURL:s,largeImageURL:e,tags:r,likes:n,views:c,comments:d,downloads:u})=>`
        <li class="gallery-item">
          <div class="gallery-box item-card-wrapper">
            <a class="gallery-link" href="${e}">
              <img class="gallery-img" src="${s}" alt="${r}" loading="lazy">
            </a>
            <div class="card-box">
              <div>
                <p class="card-box-text"><b>Likes</b></p>
                <p class="card-box-text">${n}</p>
              </div>
              <div>
                <p class="card-box-text"><b>Views</b></p>
                <p class="card-box-text">${c}</p>
              </div>
              <div>
                <p class="card-box-text"><b>Comments</b></p>
                <p class="card-box-text">${d}</p>
              </div>
              <div>
                <p class="card-box-text"><b>Downloads</b></p>
                <p class="card-box-text">${u}</p>
              </div>
            </div>
          </div>
        </li>`).join("")}const g="/goit-js-hw-11/assets/octagon-c1967aa5.svg",h=new f(".gallery a",{captionsData:"alt",captionDelay:250}),l=document.querySelector(".form");document.querySelector(".list");const a=document.querySelector(".loader");l.addEventListener("submit",b);a.style.display="none";function b(i){i.preventDefault();const t=l.elements.query.value.trim();t!==""&&(a.style.display="block",m(t).then(o=>{if(o.hits.length===0)p.error({theme:"dark",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#ffffff",backgroundColor:"#ef4040",position:"topRight",iconUrl:g,progressBarColor:"#b51b1b",timeout:3e3});else return o}).then(o=>{y(o),h.refresh()}).catch(o=>console.log(o.status)).finally(()=>{a.style.display="none",l.reset()}))}
//# sourceMappingURL=commonHelpers.js.map
