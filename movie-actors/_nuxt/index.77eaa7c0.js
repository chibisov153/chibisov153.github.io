import{_ as u}from"./BoxArtors.34b68f62.js";import{a as c,e as r,q as s,o as a,h as d,l as n,b as l,i as p}from"./entry.da8f4644.js";import"./nuxt-link.de68c461.js";const m={class:"popup"},v=n('<div class="popup-wrap" data-v-06d139c2><div class="popup-blog" data-v-06d139c2><h2 class="popup-h2" data-v-06d139c2>Pet-проект</h2><p class="popup-text" data-v-06d139c2>фреймворк: Nuxt 3</p><p class="popup-text" data-v-06d139c2>анимация: GSAP</p><p class="popup-text" data-v-06d139c2>плагины: ScrollTrigger, ScrollSmoother</p><p class="popup-text" data-v-06d139c2>задача: Создать бесшовное, адаптивное приложене и подружить его с плагинами</p><button class="popup-button" data-v-06d139c2>Close</button></div></div>',1),h=[v],x={__name:"PopUp",setup(_){return r(()=>{const t=document.querySelector(".popup"),o=document.querySelector(".popup-blog");document.querySelector(".popup-button").addEventListener("click",()=>{o.classList.remove("popup-blog-active"),setTimeout(()=>{t.classList.remove("popup-active")},1e3)}),s.popup||setTimeout(()=>{t.classList.add("popup-active"),o.classList.add("popup-blog-active"),s.popup=!0},1e3)}),(t,o)=>(a(),d("div",m,h))}},g=c(x,[["__scopeId","data-v-06d139c2"]]),b=""+globalThis.__publicAssetsURL("images/throne.jpg"),f=""+globalThis.__publicAssetsURL("images/img-1000/throne(1000).jpg");const S=b,L={class:"home-wrap"},T=n('<picture data-v-6704e49c><source media="screen and (min-width: 992px)" srcset="'+S+'" data-v-6704e49c><img src="'+f+'" class="home-img" alt="" data-v-6704e49c></picture><div class="home-text" data-v-6704e49c><h1 class="home-h1" data-v-6704e49c>Game<span data-v-6704e49c>of</span><wbr data-v-6704e49c>Thrones</h1><p class="home-h3" data-v-6704e49c>Actors</p></div>',2),B={__name:"index",setup(_){return l({title:"Game of Thrones"}),(t,o)=>{const e=u,i=g;return a(),d("div",L,[T,p(e),p(i)])}}},q=c(B,[["__scopeId","data-v-6704e49c"]]);export{q as default};
