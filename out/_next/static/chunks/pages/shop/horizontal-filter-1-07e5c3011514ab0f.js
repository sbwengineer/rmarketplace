(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5582],{5554:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/shop/horizontal-filter-1",function(){return t(1530)}])},2815:function(e,r,t){"use strict";var a=t(5893),s=t(1163),n=t(7294),c=t(1433);function l(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},a=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),a.forEach((function(r){l(e,r,t[r])}))}return e}function o(e){for(var r=e.totalPage,t=(0,s.useRouter)().query,n=t.page?parseInt(t.page):1,l=[],o=0;o<Math.min(r,3);o++)n<4||n>r-3?(n<4&&(l[o]=o+1),r>4&&n>r-3&&(l[o]=r-2+o)):l[o]=n-1+o;return(0,a.jsx)(a.Fragment,{children:r>1&&(0,a.jsxs)("ul",{className:"pagination toolbox-item",children:[n>1&&(0,a.jsx)("li",{className:"page-item",children:(0,a.jsx)(c.Z,{className:"page-link page-link-btn",href:{query:i({},t,{page:n-1})},scroll:!1,children:(0,a.jsx)("i",{className:"icon-angle-left"})})}),l.map((function(e){return(0,a.jsx)("li",{className:"page-item ".concat(n===e?"active":""),children:(0,a.jsxs)(c.Z,{className:"page-link",href:{query:i({},t,{page:e})},scroll:!1,children:[e,n===e&&(0,a.jsx)("span",{className:"sr-only",children:"(current)"})]})},"page-".concat(e))})),n<r&&(0,a.jsx)("li",{className:"page-item",children:(0,a.jsx)(c.Z,{className:"page-link page-link-btn",href:{query:i({},t,{page:n+1})},scroll:!1,children:(0,a.jsx)("i",{className:"icon-angle-right"})})})]})})}r.Z=n.memo(o)},8734:function(e,r,t){"use strict";var a=t(5893),s=(t(7294),t(1163)),n=t(4416),c=t(2679),l=t(2610),i=t(8705),o=t(1625),u=t(1433);function d(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}r.Z=(0,n.$j)((function(e){return{wishlist:e.wishlist.list?e.wishlist.list:[]}}),function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},a=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),a.forEach((function(r){d(e,r,t[r])}))}return e}({},l.Nw,i.Nw,o.Nw))((function(e){(0,s.useRouter)();var r=e.adClass,t=void 0===r?"":r,n=e.link,l=void 0===n?"default":n,i=e.product;return(0,a.jsxs)("div",{className:"product-default media-with-lazy ".concat(t),children:[(0,a.jsxs)("figure",{children:[(0,a.jsxs)(u.Z,{href:"/product/".concat(l,"/").concat(i.slug),children:[(0,a.jsx)("div",{className:"lazy-overlay"}),(0,a.jsx)(c.LazyLoadImage,{alt:"product",src:"https://d-themes.com/react_asset_api/porto"+i.pictures[0].url,threshold:500,effect:"black and white",width:"100%",height:"auto"})]}),(0,a.jsx)("div",{className:"btn-icon-group",children:i.variants.length>0?(0,a.jsx)(u.Z,{href:"/product/default/".concat(i.slug),className:"btn-icon btn-add-cart",children:(0,a.jsx)("i",{className:"fa fa-arrow-right"})}):(0,a.jsx)("a",{href:"#",className:"btn-icon btn-add-cart product-type-simple",title:"Add To Cart",onClick:function(r){r.preventDefault(),e.addToCart(i)},children:(0,a.jsx)("i",{className:"icon-shopping-cart"})})}),(0,a.jsx)("a",{href:"#",className:"btn-quickview",title:"Quick View",onClick:function(r){r.preventDefault(),e.showQuickView(i.slug)},children:"Quick View"})]}),(0,a.jsxs)("div",{className:"product-details",children:[(0,a.jsx)("h3",{className:"product-title",children:(0,a.jsx)(u.Z,{href:"/product/default/".concat(i.slug),children:i.name})}),(0,a.jsx)("div",{className:"price-box",children:(0,a.jsx)("span",{className:"product-price",children:i.price[0]+" BNB"})})]})]})}))},7198:function(e,r,t){"use strict";t.d(r,{Z:function(){return n}});var a=t(5893),s=t(8734);function n(e){var r=e.products,t=void 0===r?[]:r,n=e.gridClass,c=void 0===n?"col-6 col-sm-4 col-lg-3":n,l=e.loading,i=e.perPage,o=e.addClass,u=void 0===o?"":o;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"row skeleton-body skel-shop-products ".concat(u," ").concat(l?"":"loaded"),children:l?new Array(parseInt(i)).fill(1).map((function(e,r){return(0,a.jsx)("div",{className:"skel-pro skel-pro-grid pr-3 pl-3 mb-4 ".concat(c)},"ProductGrid:"+r)})):t.map((function(e,r){return(0,a.jsx)("div",{className:c,children:(0,a.jsx)(s.Z,{adClass:"inner-quickview inner-icon",product:e})},"product-".concat(r))}))}),l||0!==t.length?"":(0,a.jsx)("div",{className:"info-box with-icon",children:(0,a.jsx)("p",{children:"No products were found matching your selection."})})]})}},1530:function(e,r,t){"use strict";t.r(r);var a=t(5893),s=t(1163),n=t(6521),c=t(7294),l=t(1433),i=t(4433),o=t(8048),u=t(2815),d=t(7198),m=t(2564),h=t(1731);function p(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,a=new Array(r);t<r;t++)a[t]=e[t];return a}function x(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function f(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},a=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),a.forEach((function(r){x(e,r,t[r])}))}return e}function g(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var a,s,n=[],c=!0,l=!1;try{for(t=t.call(e);!(c=(a=t.next()).done)&&(n.push(a.value),!r||n.length!==r);c=!0);}catch(i){l=!0,s=i}finally{try{c||null==t.return||t.return()}finally{if(l)throw s}}return n}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return p(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return p(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.default=(0,m.Z)({ssr:!1})((function(){var e=function(e){k(e.target.value),t.push({pathname:t.pathname,query:f({},m,{page:1})})},r=function(e){var r=document.querySelector("body"),t=document.querySelector(".main-content-wrap");e.preventDefault(),r.classList.contains("sidebar-opened")?(e.currentTarget.closest(".filter-toggle")&&e.currentTarget.closest(".filter-toggle").classList.remove("opened"),r.classList.remove("sidebar-opened"),t.classList.add("sidebar-hidden"),Z("col-6 col-sm-4 col-md-3")):(e.currentTarget.closest(".filter-toggle")&&e.currentTarget.closest(".filter-toggle").classList.add("opened"),r.classList.add("sidebar-opened"),Z("col-6 col-sm-4"),setTimeout((function(){t.classList.remove("sidebar-hidden")}),150))},t=(0,s.useRouter)(),m=t.query,p=g((0,n.t)(h.tT),2),x=p[0],j=p[1],b=j.data,y=j.loading,v=j.error,N=(0,c.useState)(12),w=N[0],k=N[1],O=(0,c.useState)("col-6 col-sm-4 col-md-3"),S=O[0],Z=O[1],P=(0,c.useState)(m.sortBy?m.sortBy:"default"),C=P[0],_=P[1],q=b&&b.products.data,T=b?parseInt(b.products.total/w)+(b.products.total%w?1:0):1;return(0,c.useEffect)((function(){var e=document.querySelector(".main-content").getBoundingClientRect().top+window.pageYOffset-58;setTimeout((function(){window.scrollTo({top:e,behavior:"smooth"})}),200);var r=m.page?m.page:1;x({variables:{search:m.search,colors:m.colors?m.colors.split(","):[],sizes:m.sizes?m.sizes.split(","):[],min_price:parseInt(m.min_price),max_price:parseInt(m.max_price),category:m.category,sortBy:C,from:w*(r-1),to:w*r}})}),[m,w,C]),v?(0,a.jsx)("div",{children:v.message}):(0,a.jsxs)("main",{className:"main",children:[(0,a.jsxs)("div",{className:"container",children:[(0,a.jsx)(i.Z,{}),(0,a.jsx)("nav",{"aria-label":"breadcrumb",className:"breadcrumb-nav mb-1",children:(0,a.jsxs)("ol",{className:"breadcrumb",children:[(0,a.jsx)("li",{className:"breadcrumb-item",children:(0,a.jsx)(l.Z,{href:"/",children:"Home"})}),m.category?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("li",{className:"breadcrumb-item",children:(0,a.jsx)(l.Z,{href:"/shop",scroll:!1,children:"Games"})}),b&&b.products.categoryFamily.map((function(e,r){return(0,a.jsx)("li",{className:"breadcrumb-item",children:(0,a.jsx)(l.Z,{href:{query:{category:e.slug}},scroll:!1,children:e.name})},"category-family-".concat(r))})),(0,a.jsx)("li",{className:"breadcrumb-item active",children:m.search?(0,a.jsxs)(a.Fragment,{children:["Search - ",(0,a.jsx)(l.Z,{href:{query:{category:m.category}},scroll:!1,children:m.category})," / ",m.search]}):m.category})]}):m.search?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("li",{className:"breadcrumb-item",children:(0,a.jsx)(l.Z,{href:{query:{}},scroll:!1,children:"games"})}),(0,a.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:"Search - ".concat(m.search)})]}):m.tag?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("li",{className:"breadcrumb-item",children:(0,a.jsx)(l.Z,{href:{query:{}},scroll:!1,children:"games"})}),(0,a.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:"Product Tag - ".concat(m.tag)})]}):(0,a.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:"Games"})]})})]}),(0,a.jsxs)("div",{className:"container",children:[(0,a.jsxs)("nav",{className:"toolbox sticky-header horizontal-filter mobile-sticky mb-1 pt-3 pb-3 pb-lg-0 bg-transparent",children:[(0,a.jsxs)("div",{className:"toolbox-left",children:[(0,a.jsxs)("a",{href:"#",className:"sidebar-toggle",onClick:function(e){return r(e)},children:[(0,a.jsxs)("svg",{"data-name":"Layer 3",id:"Layer_3",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:[(0,a.jsx)("line",{x1:"15",x2:"26",y1:"9",y2:"9",className:"cls-1"}),(0,a.jsx)("line",{x1:"6",x2:"9",y1:"9",y2:"9",className:"cls-1"}),(0,a.jsx)("line",{x1:"23",x2:"26",y1:"16",y2:"16",className:"cls-1"}),(0,a.jsx)("line",{x1:"6",x2:"17",y1:"16",y2:"16",className:"cls-1"}),(0,a.jsx)("line",{x1:"17",x2:"26",y1:"23",y2:"23",className:"cls-1"}),(0,a.jsx)("line",{x1:"6",x2:"11",y1:"23",y2:"23",className:"cls-1"}),(0,a.jsx)("path",{d:"M14.5,8.92A2.6,2.6,0,0,1,12,11.5,2.6,2.6,0,0,1,9.5,8.92a2.5,2.5,0,0,1,5,0Z",className:"cls-2"}),(0,a.jsx)("path",{d:"M22.5,15.92a2.5,2.5,0,1,1-5,0,2.5,2.5,0,0,1,5,0Z",className:"cls-2"}),(0,a.jsx)("path",{d:"M21,16a1,1,0,1,1-2,0,1,1,0,0,1,2,0Z",className:"cls-3"}),(0,a.jsx)("path",{d:"M16.5,22.92A2.6,2.6,0,0,1,14,25.5a2.6,2.6,0,0,1-2.5-2.58,2.5,2.5,0,0,1,5,0Z",className:"cls-2"})]}),(0,a.jsx)("span",{children:"Filter"})]}),(0,a.jsxs)("div",{className:"toolbox-item filter-toggle d-none d-lg-flex",children:[(0,a.jsx)("span",{children:"Filters:"}),(0,a.jsx)("a",{href:"#",onClick:function(e){return r(e)},children:"\xa0"})]})]}),(0,a.jsxs)("div",{className:"toolbox-right ml-auto",children:[(0,a.jsxs)("div",{className:"toolbox-item toolbox-sort",children:[(0,a.jsx)("label",{children:"Sort By:"}),(0,a.jsx)("div",{className:"select-custom mr-sm-1",children:(0,a.jsxs)("select",{name:"orderby",className:"form-control",value:C,onChange:function(e){return function(e){t.push({pathname:t.pathname,query:f({},m,{sortBy:e.target.value,page:1})}),_(e.target.value)}(e)},children:[(0,a.jsx)("option",{value:"default",children:"Default sorting"}),(0,a.jsx)("option",{value:"popularity",children:"Sort by popularity"}),(0,a.jsx)("option",{value:"rating",children:"Sort by average rating"}),(0,a.jsx)("option",{value:"date",children:"Sort by newness"}),(0,a.jsx)("option",{value:"price",children:"Sort by price: low to high"}),(0,a.jsx)("option",{value:"price-desc",children:"Sort by price: high to low"})]})})]}),(0,a.jsxs)("div",{className:"toolbox-item toolbox-show",children:[(0,a.jsx)("label",{children:"Show:"}),(0,a.jsx)("div",{className:"select-custom",children:(0,a.jsxs)("select",{name:"count",className:"form-control",value:w,onChange:function(r){return e(r)},children:[(0,a.jsx)("option",{value:"12",children:"12"}),(0,a.jsx)("option",{value:"24",children:"24"}),(0,a.jsx)("option",{value:"36",children:"36"})]})})]}),(0,a.jsxs)("div",{className:"toolbox-item layout-modes",children:[(0,a.jsx)(l.Z,{href:{pathname:t.pathname,query:m},className:"layout-btn btn-grid active",title:"Grid",children:(0,a.jsx)("i",{className:"icon-mode-grid"})}),(0,a.jsx)(l.Z,{href:{pathname:"/shop/list",query:m},className:"layout-btn btn-list",title:"List",children:(0,a.jsx)("i",{className:"icon-mode-list"})})]})]})]}),(0,a.jsxs)("div",{className:"row main-content-wrap sidebar-hidden",children:[(0,a.jsx)(o.Z,{adClass:"pt-lg-0"}),(0,a.jsxs)("div",{className:"col-lg-9 main-content pt-0",children:[(0,a.jsx)(d.Z,{products:q,loading:y,perPage:w,gridClass:S}),y||q&&q.length?(0,a.jsxs)("nav",{className:"toolbox toolbox-pagination",children:[(0,a.jsxs)("div",{className:"toolbox-item toolbox-show",children:[(0,a.jsx)("label",{children:"Show:"}),(0,a.jsx)("div",{className:"select-custom",children:(0,a.jsxs)("select",{name:"count",className:"form-control",value:w,onChange:function(r){return e(r)},children:[(0,a.jsx)("option",{value:"12",children:"12"}),(0,a.jsx)("option",{value:"24",children:"24"}),(0,a.jsx)("option",{value:"36",children:"36"})]})})]}),(0,a.jsx)(u.Z,{totalPage:T})]}):""]})]})]})]})}))}},function(e){e.O(0,[137,7380,9322,7771,9774,2888,179],(function(){return r=5554,e(e.s=r);var r}));var r=e.O();_N_E=r}]);