import{a as l,S as d,i as n}from"./assets/vendor-DvfmeZXB.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();l.defaults.baseURL="https://pixabay.com/api/";const m="53372311-1598a9acbbcd6e2742c5f6eb6";function h(o){const s=new URLSearchParams({key:m,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return l("",{params:s}).then(({data:t})=>t)}const p=new d(".gallery a",{}),c=document.querySelector(".gallery"),u=document.querySelector(".loader");function y(o){const s=o.map(t=>`
     <li class="gallery-item">
  <a class="gallery-link" href="${t.largeImageURL}">
    <img class="gallery-img" src="${t.webformatURL}" alt="${t.tags}">
  </a>
  <ul class="info">
    <li class="info-item">
      <b>Likes</b>${t.likes}
    </li>
    <li class="info-item">
      <b>Views</b>${t.views}
    </li><li class="info-item">
      <b>Comments</b>${t.comments}
    </li><li class="info-item">
      <b>Downloads</b>${t.downloads}
    </li>
  </ul>
</li>   
        `).join("");c.insertAdjacentHTML("beforeend",s),p.refresh()}function g(){c.innerHTML=""}function b(){u.classList.remove("hidden")}function L(){u.classList.add("hidden")}const f=document.querySelector(".form");f.addEventListener("submit",w);function w(o){o.preventDefault();const{searchText:s}=o.target.elements,t=s.value.trim();if(t==="")return n.error({position:"topRight",message:"Please fill in the search field."});b(),g(),h(t).then(i=>{if(i.hits.length===0)return n.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});y(i.hits),f.reset()}).catch(i=>n.error({position:"topRight",message:i.message})).finally(()=>L())}
//# sourceMappingURL=index.js.map
