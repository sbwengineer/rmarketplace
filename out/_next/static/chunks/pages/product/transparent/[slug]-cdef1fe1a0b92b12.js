(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3014],{8371:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/product/transparent/[slug]",function(){return s(5806)}])},5806:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return x}});var a=s(5893),i=s(7294),c=s(1163),r=s(3571),l=s(2564),n=s(1731),o=s(1433),d=s(2879),u=s(4047),p=s(1729),m=s(2022);function h(e){var t,s,c,r,l,n,o,h,g,v,b=function(){w(),o=parseInt(3*r.offsetHeight)+parseInt(2*l)+3,document.querySelector(".product-thumbs-wrap")&&(document.querySelector(".product-thumbs-wrap").style.height=o+"px")},f=function(){return N.price[0]!==N.price[1]&&0===N.variants.length?"-"+(100*(N.price[1]-N.price[0])/N.price[1]).toFixed(0)+"%":!!N.variants.find((function(e){return e.sale_price}))&&"Sale"},x=function(e){var t=parseInt(window.getComputedStyle(s).getPropertyValue("top").slice(0,-2)),a=t+e*(parseInt(r.offsetHeight)+parseInt(l)),i=v[e];a<0?(null==i.previousSibling?!h.classList.contains("disabled")&&h.classList.add("disabled"):h.classList.contains("disabled")&&h.classList.remove("disabled"),g.classList.contains("disabled")&&g.classList.remove("disabled"),s.setAttribute("style","top: "+parseInt(t-a)+"px")):(a=s.getBoundingClientRect().top+s.offsetHeight-i.getBoundingClientRect().top-i.offsetHeight)<0&&(null==i.nextSibling?!g.classList.contains("disabled")&&g.classList.add("disabled"):g.classList.contains("disabled")&&g.classList.remove("disabled"),h.classList.contains("disabled")&&h.classList.remove("disabled"),s.setAttribute("style","top: "+parseInt(t+a)+"px"))},w=function(){n<=3?(g&&g.setAttribute("style","visibility: hidden"),h&&h.setAttribute("style","visibility: hidden")):(s&&(s.style.top="0px"),g&&g.setAttribute("style","visibility: visible"),h&&h.setAttribute("style","visibility: visible"),h&&!h.classList.contains("disabled")&&h.classList.add("disabled"),g&&g.classList.contains("disabled")&&g.classList.remove("disabled"))},j=e.adClass,y=void 0===j?"col-lg-5 col-md-6":j,N=e.product,_=e.parent,L=void 0===_?".product-single-default":_,S=(0,i.useState)(!1),C=S[0],q=S[1],k=(0,i.useState)(0),I=k[0],R=k[1],A=(0,i.useState)(null),T=A[0],E=A[1],H=0,Z={onTranslate:function(e){document.querySelector("".concat(L," .vertical-thumbs .owl-dot.active")).classList.remove("active"),document.querySelectorAll("".concat(L," .vertical-thumbs .owl-dot"))[e.item.index].classList.add("active"),x(e.item.index)},onTranslated:function(e){R(e.item.index)}};return(0,i.useEffect)((function(){return window.addEventListener("resize",b),function(){window.removeEventListener("resize",b)}})),(0,i.useEffect)((function(){N&&(t=document.querySelector(".pg-vertical"),s=t.querySelector(".product-thumbs"),l=window.getComputedStyle(s.querySelector(".owl-dot")).getPropertyValue("margin-bottom").slice(0,-2),r=s.querySelector(".owl-dot"),c=s.parentElement,v=s.querySelectorAll(".owl-dot"),n=v.length,o=r.offsetHeight*n+l*(n-1),h=document.querySelector(".vertical-thumbs .thumb-up"),g=document.querySelector(".vertical-thumbs .thumb-down"))})),(0,i.useEffect)((function(){N&&(q(!1),R(0),b(),document.querySelector("".concat(L," .vertical-thumbs .owl-dot.active"))&&document.querySelector("".concat(L," .vertical-thumbs .owl-dot.active")).classList.remove("active"),document.querySelector("".concat(L," .vertical-thumbs .owl-dot")).classList.add("active"))}),[N]),(0,a.jsxs)("div",{className:"product-single-gallery ".concat(y),children:[(0,a.jsx)("div",{className:"skel-pro skel-magnifier-vertical skel-full ".concat(y)}),N&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"product-slider-container",children:[(0,a.jsxs)("div",{className:"label-group",children:[N.is_hot?(0,a.jsx)("div",{className:"product-label label-hot",children:"HOT"}):"",f()?(0,a.jsx)("div",{className:"product-label label-sale",children:f()}):""]}),(0,a.jsx)(p.Z,{adClass:"product-single-carousel owl-carousel owl-theme show-nav-hover",options:m.Kk,events:Z,onChangeRef:E,children:N.large_pictures.map((function(e,t){return(0,a.jsx)("div",{className:"product-item",children:(0,a.jsx)(u.lb,{style:{paddingTop:"141.56%",position:"relative"},imageSrc:"https://d-themes.com/react_asset_api/porto"+e.url,imageAlt:"product",mouseActivation:"hover",cursorStyleActive:"crosshair",dragToMove:!1,className:"product-single-image"})},"product-item-".concat(t))}))}),(0,a.jsx)("span",{className:"prod-full-screen",onClick:function(){q(!0)},children:(0,a.jsx)("i",{className:"icon-plus"})}),C&&(0,a.jsx)(d.Z,{mainSrc:"https://d-themes.com/react_asset_api/porto"+N.large_pictures[I].url,prevSrc:"https://d-themes.com/react_asset_api/porto"+N.large_pictures[(I+N.large_pictures.length-1)%N.large_pictures.length].url,nextSrc:"https://d-themes.com/react_asset_api/porto"+N.large_pictures[(I+1)%N.large_pictures.length].url,onCloseRequest:function(){q(!1)},onMoveNextRequest:function(){R((I+1)%N.large_pictures.length)},onMovePrevRequest:function(){R((I+N.large_pictures.length-1)%N.large_pictures.length)}})]}),(0,a.jsxs)("div",{className:"vertical-thumbs",children:[(0,a.jsx)("button",{className:"thumb-up disabled",onClick:function(e){var t=c.getBoundingClientRect().top+window.pageYOffset,a=s.getBoundingClientRect().top+window.pageYOffset,i=parseInt(window.getComputedStyle(s).getPropertyValue("top").slice(0,-2))+parseInt(r.offsetHeight)+parseInt(l);0!==H&&H--,t>a&&(s.setAttribute("style","top: "+i+"px"),0==H&&(!h.classList.contains("disabled")&&h.classList.add("disabled"),g.classList.contains("disabled")&&g.classList.remove("disabled")))},children:(0,a.jsx)("i",{className:"icon-angle-up"})}),(0,a.jsx)("div",{className:"product-thumbs-wrap",children:(0,a.jsx)("div",{className:"product-thumbs owl-dots",children:N.pictures.map((function(e,t){return(0,a.jsx)("div",{className:"owl-dot media-with-lazy",onClick:function(e){return function(e,t){if(!t.currentTarget.classList.contains("active")){var s=t.currentTarget.closest(".vertical-thumbs");s.querySelector(".owl-dot.active")&&s.querySelector(".owl-dot.active").classList.remove("active"),t.currentTarget.classList.add("active")}T.current.goTo(e);var a=c.getBoundingClientRect().top+window.pageYOffset+parseInt(r.offsetHeight)+parseInt(l);if(n>3){var i=v[e].getBoundingClientRect().top+pageYOffset;i>a&&i!==a&&e<n-1?x(e+1):i<a&&i!==a&&0!==e&&x(e-1)}}(t,e)},children:(0,a.jsx)("figure",{children:(0,a.jsx)("img",{src:"https://d-themes.com/react_asset_api/porto"+e.url,alt:"Thumbnail"})})},"owl-dot-".concat(t))}))})}),(0,a.jsx)("button",{className:"thumb-down disabled",onClick:function(e){var t=c.getBoundingClientRect().top+window.pageYOffset+c.offsetHeight,a=o+s.getBoundingClientRect().top+window.pageYOffset,i=parseInt(window.getComputedStyle(s).getPropertyValue("top").slice(0,-2))-parseInt(r.offsetHeight)-parseInt(l);H!==n-3&&H++,t<=a&&(s.setAttribute("style","top: "+i+"px"),H==n-3&&(h.classList.contains("disabled")&&h.classList.remove("disabled"),!g.classList.contains("disabled")&&g.classList.add("disabled")))},children:(0,a.jsx)("i",{className:"icon-angle-down"})})]})]})]})}var g=s(5465),v=s(23),b=s(513),f=s(7205);var x=(0,l.Z)({ssr:!1})((function(){if(!(0,c.useRouter)().query.slug)return(0,a.jsx)("div",{className:"loading-overlay",children:(0,a.jsxs)("div",{className:"bounce-loader",children:[(0,a.jsx)("div",{className:"bounce1"}),(0,a.jsx)("div",{className:"bounce2"}),(0,a.jsx)("div",{className:"bounce3"})]})});var e=(0,c.useRouter)().query.slug,t=(0,r.a)(n.N4,{variables:{slug:e}}),s=t.data,l=t.loading,d=t.error,u=s&&s.product.data,p=s&&s.product.related;return d?(0,c.useRouter)().push("/pages/404"):(0,a.jsxs)("main",{className:"main",children:[(0,a.jsx)("div",{className:"container",children:(0,a.jsx)("nav",{"aria-label":"breadcrumb",className:"breadcrumb-nav",children:(0,a.jsxs)("ol",{className:"breadcrumb",children:[(0,a.jsx)("li",{className:"breadcrumb-item",children:(0,a.jsx)(o.Z,{href:"/",children:"Home"})}),(0,a.jsx)("li",{className:"breadcrumb-item",children:(0,a.jsx)(o.Z,{href:"/shop",children:"Games"})}),(0,a.jsx)("li",{className:"breadcrumb-item",children:u&&u.categories.map((function(e,t){return(0,a.jsxs)(i.Fragment,{children:[(0,a.jsx)(o.Z,{href:{pathname:"/shop",query:{category:e.slug}},children:e.name}),t<u.categories.length-1?",":""]},"category-".concat(t))}))}),(0,a.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:u&&u.name})]})})}),(0,a.jsx)("div",{className:"product-single-container product-single-default product-transparent-image pb-3  pb-3 skeleton-body skel-shop-products ".concat(l?"":"loaded"),children:(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:"col-xl-7",children:(0,a.jsx)(h,{product:u,adClass:"pg-vertical"})}),(0,a.jsx)(g.Z,{adClass:"col-xl-5 pt-3",product:u,prev:u&&s.product.prev,next:u&&s.product.next})]})})}),(0,a.jsxs)("div",{className:"container skeleton-body skel-shop-products ".concat(l?"":"loaded"),children:[(0,a.jsx)(v.Z,{product:u,adClass:"mb-6"}),(0,a.jsx)(b.Z,{products:p,loading:l}),(0,a.jsx)("hr",{className:"mt-0 m-b-5"})]}),(0,a.jsx)(f.Z,{})]})}))}},function(e){e.O(0,[917,7942,23,9774,2888,179],(function(){return t=8371,e(e.s=t);var t}));var t=e.O();_N_E=t}]);