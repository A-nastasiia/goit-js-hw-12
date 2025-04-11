import{a as m,S as p,i as l}from"./assets/vendor-DVva8SYe.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const y="49635382-66eda9712402d4470ed35045b",h="https://pixabay.com/api/";function g(o){return m.get(h,{params:{key:y,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data.hits).catch(t=>(console.error("Error fetching images:",t),[]))}const u=document.querySelector(".gallery");let s;function L(o){const t=o.map(({webformatURL:n,largeImageURL:a,tags:e,likes:r,views:i,comments:d,downloads:f})=>`
      <a href="${a}" class="gallery-item">
        <img src="${n}" alt="${e}" />
        <div class="info">
          <p>Likes ${r}</p>
          <p>Views ${i}</p>
          <p>Comments ${d}</p>
          <p>Downloads ${f}</p>
        </div>
      </a>`).join("");u.innerHTML=t,s?s.refresh():s=new p(".gallery a",{captionsData:"alt",captionDelay:250})}function b(){u.innerHTML="",s&&s.destroy(),s=null}function q(){document.querySelector(".loader").classList.add("visible")}function v(){document.querySelector(".loader").classList.remove("visible")}const c=document.querySelector(".form"),S=c.querySelector("input[name='search-text']");c.addEventListener("submit",async o=>{o.preventDefault();const t=S.value.trim();if(!t){l.error({message:"Please enter a search query!"});return}b(),q(),g(t).then(n=>{if(v(),n.length===0){l.warning({message:"Sorry, there are no images matching your search query. Please try again!"}),c.reset();return}L(n),c.reset()})});
//# sourceMappingURL=index.js.map
