import{S as C,N as P,P as q,K as N,a as O,i as A,A as R}from"./assets/vendor-BFlcYqFY.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function i(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(a){if(a.ep)return;a.ep=!0;const s=i(a);fetch(a.href,s)}})();const j=document.getElementById("contactForm"),f=document.getElementById("email"),v=document.querySelector(".error-message");j.addEventListener("submit",function(t){t.preventDefault();const e={email:document.getElementById("email").value,comment:document.getElementById("message").value};fetch("https://portfolio-js.b.goit.study/api/requests",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(i=>{if(!i.ok)throw new Error(`HTTP error! Status: ${i.status}`);return i.json()}).then(i=>{i.title&&i.message?(document.querySelector("#successPopup h3").textContent=i.title,document.querySelector("#successPopup p").textContent=i.message,document.getElementById("successPopup").style.display="flex",j.reset()):document.getElementById("errorPopup").style.display="flex"}).catch(i=>{console.error("Error:",i),document.getElementById("errorPopup").style.display="flex",document.getElementById("email").value=e.email,document.getElementById("message").value=e.comment})});document.querySelectorAll(".close-btn").forEach(t=>{t.addEventListener("click",function(){t.closest(".popup").style.display="none"})});document.querySelectorAll(".popup").forEach(t=>{t.addEventListener("click",function(e){e.target===t&&(t.style.display="none")})});document.addEventListener("keydown",function(t){t.key==="Escape"&&document.querySelectorAll(".popup").forEach(e=>{e.style.display="none"})});f.addEventListener("input",function(){f.validity.valid?v.style.display="none":v.style.display="block"});document.addEventListener("DOMContentLoaded",J);const n={swiper:document.querySelector(".reviews-container"),swiperNext:document.querySelector(".review-button-next"),swiperPrev:document.querySelector(".review-button-prev"),reviewsList:document.querySelector(".reviews-list")},m=new C(n.swiper,{grabCursor:!0,direction:"horizontal",autoplay:{delay:1e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},slidesPerView:1,spaceBetween:16,breakpoints:{768:{slidesPerView:1},1280:{slidesPerView:2,spaceBetween:32}},modules:[P,q,N],navigation:{nextEl:n.swiperNext,prevEl:n.swiperPrev},keyboard:{enabled:!0,onlyInViewport:!0}});async function V(){const t=await O.get("https://portfolio-js.b.goit.study/api/reviews");if(t.status!==200)throw new Error(`Request failed with status ${t.status}`);return t.data}let T=!1;async function J(){try{const e=(await V()).map(({author:i,avatar_url:o,review:a})=>`<li class="reviews-list-item swiper-slide" id="style-15">
                    <p class="reviews-text">${a}</p>
                    <div class="reviewer-info">
                        <img class="reviewers-avatar" src="${o}" alt=" ${i}'s photo" loading="lazy" />
                        <h3 class="reviewers-name">${i}</h3>
                    </div>
                </li>`).join("");n.reviewsList.insertAdjacentHTML("beforeend",e)}catch(t){T=!0,m.params.breakpoints[1280].slidesPerView=1,m.params.breakpoints[1280].spaceBetween=16,m.update(),console.dir(m.params.breakpoints),n.reviewsList.insertAdjacentHTML("beforeend",'<li class="error-mock"><p>We could not find what you are looking for.</p></li>'),console.error("Error fetching or rendering reviews:",t)}}function G(){T&&A.error({message:"No reviews were found! Please try again later.",position:"bottomRight"})}const z=new IntersectionObserver(t=>{t.forEach(e=>{e.isIntersecting&&G()})});z.observe(n.swiper);const H=()=>{const t=document.querySelector(".js-menu-container"),e=document.querySelector(".js-open-menu"),i=document.querySelector(".js-close-menu"),o=()=>{const r=t.querySelectorAll('a[href*="#"]'),p=e.getAttribute("aria-expanded")==="true"||!1;if(e.setAttribute("aria-expanded",!p),t.classList.toggle("is-open"),r.length!==0){if(!p){r.forEach(l=>{l.addEventListener("click",o)});return}r.forEach(l=>{l.removeEventListener("click",o)})}};e.addEventListener("click",o),i.addEventListener("click",o),window.matchMedia("(min-width: 375px)").addEventListener("change",r=>{r.matches&&(t.classList.remove("is-open"),e.setAttribute("aria-expanded",!1))});const a=document.getElementById("switch"),s=document.getElementById("favicon");a.addEventListener("change",()=>{document.body.classList.toggle("dark-theme"),document.body.classList.contains("dark-theme")?(localStorage.setItem("theme","dark"),s.href="/js_109_yuliia-shl/favicon-dark.ico"):(localStorage.setItem("theme","light"),s.href="/js_109_yuliia-shl/favicon.ico")}),localStorage.getItem("theme")==="dark"?(document.body.classList.add("dark-theme"),a.checked=!0,s.href="/js_109_yuliia-shl/favicon-dark.ico"):s.href="/js_109_yuliia-shl/favicon.ico"};document.addEventListener("DOMContentLoaded",function(){const t=document.body,e=document.querySelector(".js-open-menu"),i=document.querySelector(".js-close-menu"),o=document.getElementById("mobile-menu"),a=document.querySelectorAll(".header-mobile-link");e.addEventListener("click",function(){o.classList.add("active"),t.style.overflow="hidden",e.setAttribute("aria-expanded","true")}),i.addEventListener("click",function(){o.classList.remove("active"),t.style.overflow="auto",e.setAttribute("aria-expanded","false")}),a.forEach(s=>{s.addEventListener("click",function(){t.style.overflow="auto",o.classList.remove("active"),e.setAttribute("aria-expanded","false")})}),document.addEventListener("click",function(s){!o.contains(s.target)&&!e.contains(s.target)&&(o.classList.remove("active"),e.setAttribute("aria-expanded","false"))})});new R(".faq-ac-container",{openOnInit:[0],collapse:!0,elementClass:"faq-ac",triggerClass:"faq-ac-trigger",panelClass:"faq-ac-panel"});const c="/js_109_yuliia-shl/assets/icons-B8RZkLtE.svg",d="/js_109_yuliia-shl/assets/my-project-4-mob_1x-CaZrrZ4L.webp",I="/js_109_yuliia-shl/assets/my-project-4-mob_2x-Dsi_fBJN.webp",W="/js_109_yuliia-shl/assets/my-project-4-tab_1x-Bm4HUelK.webp",F="/js_109_yuliia-shl/assets/my-project-4-tab_2x-C_rSt4TV.webp",Y="/js_109_yuliia-shl/assets/my-project-4-desk_1x-B_EbEvoG.webp",K="/js_109_yuliia-shl/assets/my-project-4-desk_2x-CT56BrZF.webp",u="/js_109_yuliia-shl/assets/my-project-5-mob_1x-C-FqkT_n.webp",E="/js_109_yuliia-shl/assets/my-project-5-mob_2x-D_lBFHrP.webp",Z="/js_109_yuliia-shl/assets/my-project-5-tab_1x-DY1MIwHu.webp",U="/js_109_yuliia-shl/assets/my-project-5-tab_2x-CA6TLo5f.webp",X="/js_109_yuliia-shl/assets/my-project-5-desk_1x-D8ZaSk76.webp",Q="/js_109_yuliia-shl/assets/my-project-5-desk_2x-Byw1lDZs.webp",h="/js_109_yuliia-shl/assets/my-project-6-mob_1x-BKMi80tp.webp",k="/js_109_yuliia-shl/assets/my-project-6-mob_2x-BZr_msEn.webp",ee="/js_109_yuliia-shl/assets/my-project-6-tab_1x-GgBQYr0M.webp",te="/js_109_yuliia-shl/assets/my-project-6-tab_2x-BXnbLvWP.webp",se="/js_109_yuliia-shl/assets/my-project-6-desk_1x-DCmBPE18.webp",ae="/js_109_yuliia-shl/assets/my-project-6-desk_2x--X3-j-ey.webp",y="/js_109_yuliia-shl/assets/my-project-7-mob_1x-0-0e4ZQT.webp",$="/js_109_yuliia-shl/assets/my-project-7-mob_2x-DwkD79fv.webp",ie="/js_109_yuliia-shl/assets/my-project-7-tab_1x-C84u-3nB.webp",oe="/js_109_yuliia-shl/assets/my-project-7-tab_2x-DeSCEq0d.webp",re="/js_109_yuliia-shl/assets/my-project-7-desk_1x-C8xhJxg1.webp",ce="/js_109_yuliia-shl/assets/my-project-7-desk_2x-CC_ezROz.webp",g="/js_109_yuliia-shl/assets/my-project-8-mob_1x-ByoW_oVT.webp",S="/js_109_yuliia-shl/assets/my-project-8-mob_2x-CaI7-QGM.webp",ne="/js_109_yuliia-shl/assets/my-project-8-tab_1x-DgB_lU8O.webp",le="/js_109_yuliia-shl/assets/my-project-8-tab_2x-DeV4Xxri.webp",pe="/js_109_yuliia-shl/assets/my-project-8-desk_1x-BBvz8kpI.webp",me="/js_109_yuliia-shl/assets/my-project-8-desk_2x-CPkKKTsW.webp",x="/js_109_yuliia-shl/assets/my-project-9-mob_1x-D-cVnVu7.webp",L="/js_109_yuliia-shl/assets/my-project-9-mob_2x-Dgq8Yv0C.webp",de="/js_109_yuliia-shl/assets/my-project-9-tab_1x-Vrq7X7tk.webp",ue="/js_109_yuliia-shl/assets/my-project-9-tab_2x-bNxU0I4l.webp",he="/js_109_yuliia-shl/assets/my-project-9-desk_1x-B6OWfVZ3.webp",ye="/js_109_yuliia-shl/assets/my-project-9-desk_2x-D8rB3lnd.webp",b="/js_109_yuliia-shl/assets/my-project-10-mob_1x-BdpK2UYi.webp",B="/js_109_yuliia-shl/assets/my-project-10-mob_2x-CjX_wIUa.webp",ge="/js_109_yuliia-shl/assets/my-project-10-tab_1x-BafFCe4R.webp",xe="/js_109_yuliia-shl/assets/my-project-10-tab_2x-DJ587m_0.webp",be="/js_109_yuliia-shl/assets/my-project-10-desk_1x-Dh7zn3mI.webp",we="/js_109_yuliia-shl/assets/my-project-10-desk_2x-CkzGHwxJ.webp";document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".load-more"),e=document.querySelector(".project-list");let i=[`<li class="project-item">
      <picture>
        <source media="(min-width:1280px)" srcset="${Y} 1x, ${K} 2x" type="image/webp" />
        <source media="(min-width:768px)" srcset="${W} 1x, ${F} 2x" type="image/webp" />
        <source media="(min-width:320px)" srcset="${d} 1x, ${I} 2x" type="image/webp" />
        <img width: 1008px; height: 580px src="${d}" srcset="${d} 1x, ${I} 2x" alt="Project 4" loading="lazy" class="project-img" />
      </picture>
      <p class="project-tech">React, JavaScript, Node JS, Git</p>
      <div class="tab-link-container">
        <h3 class="project-subtitle">ENERGY FLOW WEBSERVICE</h3>
        <a href="#" target="blank" class="project-btn">Visit 
          <span class="arrow">
            <svg class="highlight" width="24" height="24">
                <use href="${c}#icon-arrow-up">
                </use>
            </svg>
          </span>
        </a>
      </div>
    </li>`,`<li class="project-item">
      <picture>
        <source media="(min-width:1280px)" srcset="${X} 1x, ${Q} 2x" type="image/webp" />
        <source media="(min-width:768px)" srcset="${Z} 1x, ${U} 2x" type="image/webp" />
        <source media="(min-width:320px)" srcset="${u} 1x, ${E} 2x" type="image/webp" />
        <img width: 1008px; height: 580px; src="${u}" srcset="${u} 1x, ${E} 2x" alt="Project 5" loading="lazy"  class="project-img" />
      </picture>
      <p class="project-tech">React, JavaScript, Node JS, Git</p>
      <div class="tab-link-container">
        <h3 class="project-subtitle">STARLIGHT STUDIO LANDING PAGE</h3>
        <a href="#" target="blank" class="project-btn">Visit 
          <span class="arrow">
            <svg width="24" height="24">
                <use href="${c}#icon-arrow-up">
                </use>
            </svg>
          </span>
        </a>
      </div>
    </li>`,`<li class="project-item">
      <picture>
        <source media="(min-width:1280px)" srcset="${se} 1x, ${ae} 2x" type="image/webp" />
        <source media="(min-width:768px)" srcset="${ee} 1x, ${te} 2x" type="image/webp" />
        <source media="(min-width:320px)" srcset="${h} 1x, ${k} 2x" type="image/webp" />
        <img width: 1008px; height: 580px; src="${h}" srcset="${h} 1x, ${k} 2x" alt="Project 6" loading="lazy" class="project-img" />
      </picture>
      <p class="project-tech">React, JavaScript, Node JS, Git</p>
      <div class="tab-link-container">
        <h3 class="project-subtitle">FRUITBOX ONLINE STORE</h3>
        <a href="#" target="blank" class="project-btn">Visit 
          <span class="arrow">
            <svg width="24" height="24">
                <use href="${c}#icon-arrow-up">
                </use>
            </svg>
          </span></a>
      </div>
    </li>`,`<li class="project-item">
      <picture>
        <source media="(min-width:1280px)" srcset="${re} 1x, ${ce} 2x" type="image/webp" />
        <source media="(min-width:768px)" srcset="${ie} 1x, ${oe} 2x" type="image/webp" />
        <source media="(min-width:320px)" srcset="${y} 1x, ${$} 2x" type="image/webp" />
        <img width: 1008px; height: 580px; src="${y}" srcset="${y} 1x, ${$} 2x" alt="Project 7" loading="lazy" class="project-img" />
      </picture>
      <p class="project-tech">React, JavaScript, Node JS, Git</p>
      <div class="tab-link-container">
        <h3 class="project-subtitle">CHEGO JEWELRY WEBSITE</h3>
        <a href="#" target="blank" class="project-btn">Visit 
          <span class="arrow">
            <svg width="24" height="24">
                <use href="${c}#icon-arrow-up">
                </use>
            </svg>
        </span></a>
      </div>
    </li>`,`<li class="project-item">
      <picture>
        <source media="(min-width:1280px)" srcset="${pe} 1x, ${me} 2x" type="image/webp" />
        <source media="(min-width:768px)" srcset="${ne} 1x, ${le} 2x" type="image/webp" />
        <source media="(min-width:320px)" srcset="${g} 1x, ${S} 2x" type="image/webp" />
        <img width: 1008px; height: 580px; src="${g}" srcset="${g} 1x, ${S} 2x" alt="Project 8" loading="lazy" class="project-img" />
      </picture>
      <p class="project-tech">React, JavaScript, Node JS, Git</p>
      <div class="tab-link-container">
        <h3 class="project-subtitle">MIMINO WEBSITE</h3>
        <a href="#" target="blank" class="project-btn">Visit 
          <span class="arrow">
          <svg width="24" height="24">
              <use href="${c}#icon-arrow-up">
              </use>
          </svg>
      </span></a>
      </div>
    </li>`,`<li class="project-item">
      <picture>
        <source media="(min-width:1280px)" srcset="${he} 1x, ${ye} 2x" type="image/webp" />
        <source media="(min-width:768px)" srcset="${de} 1x, ${ue} 2x" type="image/webp" />
        <source media="(min-width:320px)" srcset="${x} 1x, ${L} 2x" type="image/webp" />
        <img width: 1008px; height: 580px src="${x}" srcset="${x} 1x, ${L} 2x" alt="Project 9" loading="lazy" class="project-img" />
      </picture>
      <p class="project-tech">React, JavaScript, Node JS, Git</p>
      <div class="tab-link-container">
        <h3 class="project-subtitle">VYSHYVANKA VIBES LANDING PAGE</h3>
        <a href="#" target="blank" class="project-btn">Visit 
          <span class="arrow">
          <svg width="24" height="24">
              <use href="${c}#icon-arrow-up">
              </use>
          </svg>
      </span></a>
      </div>
    </li>`,`<li class="project-item">
        <picture>
          <source media="(min-width:1280px)" srcset="${be} 1x, ${we} 2x" type="image/webp" />
          <source media="(min-width:768px)" srcset="${ge} 1x, ${xe} 2x" type="image/webp" />
          <source media="(min-width:320px)" srcset="${b} 1x, ${B} 2x" type="image/webp" />
          <img width: 1008px; height: 580px; src="${b}" srcset="${b} 1x, ${B} 2x" alt="Project 10" loading="lazy" class="project-img" />
        </picture>
          <p class="project-tech">React, JavaScript, Node JS, Git</p>
          <div class="tab-link-container">
            <h3 class="project-subtitle">POWER PULSE WEBSERVICE</h3>
            <a href="#" target="blank" class="project-btn">Visit 
              <span class="arrow">
              <svg width="24" height="24">
                  <use href="${c}#icon-arrow-up">
                  </use>
              </svg>
          </span></a>
          </div>
      </li>`],o=0;t.addEventListener("click",a=>{a.preventDefault();const s=i.slice(o,o+3);if(s.length>0){e.children[e.children.length-1],s.forEach(l=>{const _=document.createElement("template");_.innerHTML=l.trim();const M=_.content.firstChild;e.appendChild(M)});const p=e.children[o].getBoundingClientRect().height;window.scrollBy({top:p*.6,behavior:"smooth"}),o+=s.length}o>=i.length&&(t.style.display="none")})});const w=document.getElementById("backToTop");window.addEventListener("scroll",()=>{window.scrollY>window.innerHeight*.75?w.style.display="flex":w.style.display="none"});function D(){const e=window.scrollY;e>0&&(window.scrollTo(0,e-e*1),requestAnimationFrame(D))}w.addEventListener("click",D);H();
//# sourceMappingURL=index.js.map
