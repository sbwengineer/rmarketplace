(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[201],{3279:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/product/center/[slug]",function(){return a(4866)}])},4866:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return f}});var r=a(5893),c=a(7294),t=a(1163),l=a(3571),i=a(2564),n=a(1731),o=a(1433),d=a(2879),m=a(4047),u=a(2679),h=a(1729),p=a(2022);function x(e){var s=function(){return l.price[0]!==l.price[1]&&0===l.variants.length?"-"+(100*(l.price[1]-l.price[0])/l.price[1]).toFixed(0)+"%":!!l.variants.find((function(e){return e.sale_price}))&&"Sale"},a=e.adClass,t=void 0===a?"":a,l=e.product,i=e.parent,n=void 0===i?".product-single-default":i,o=(0,c.useState)(null),x=o[0],v=o[1],j=(0,c.useState)(!1),N=j[0],g=j[1],b=(0,c.useState)(0),f=b[0],w=b[1],y={onTranslate:function(e){document.querySelector("".concat(n," .prod-thumbnail .owl-dot.active"))&&document.querySelector("".concat(n," .prod-thumbnail .owl-dot.active")).classList.remove("active"),document.querySelectorAll("".concat(n," .prod-thumbnail .owl-dot"))[e.item.index].classList.add("active")},onTranslated:function(e){w(e.item.index)}};return(0,c.useEffect)((function(){l&&(g(!1),w(0),document.querySelector("".concat(n," .prod-thumbnail .owl-dot.active"))&&document.querySelector("".concat(n," .prod-thumbnail .owl-dot.active")).classList.remove("active"),document.querySelector("".concat(n," .prod-thumbnail .owl-dot")).classList.add("active"))}),[l]),(0,r.jsxs)("div",{className:"product-single-gallery ".concat(t),children:[(0,r.jsx)("div",{className:"skel-pro skel-magnifier-vertical skel-full col-12"}),l&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"product-slider-container mb-auto",children:[(0,r.jsxs)("div",{className:"label-group",children:[l.is_hot?(0,r.jsx)("div",{className:"product-label label-hot",children:"HOT"}):"",s()?(0,r.jsx)("div",{className:"product-label label-sale",children:s()}):""]}),(0,r.jsx)(h.Z,{adClass:"product-single-carousel owl-carousel owl-theme show-nav-hover",options:p.Kk,events:y,onChangeRef:v,children:l&&l.large_pictures.map((function(e,s){return(0,r.jsx)("div",{className:"product-item",children:(0,r.jsx)(m.lb,{style:{paddingTop:"141.56%",position:"relative"},imageSrc:"https://d-themes.com/react_asset_api/porto"+e.url,imageAlt:"product",mouseActivation:"hover",cursorStyleActive:"crosshair",dragToMove:!1,className:"product-single-image"})},"product-item-".concat(s))}))}),(0,r.jsx)("span",{className:"prod-full-screen",onClick:function(){g(!0)},children:(0,r.jsx)("i",{className:"icon-plus"})})]}),(0,r.jsx)("div",{className:"prod-thumbnail thumb-vertical owl-dots order-lg-first",id:"carousel-quick-dots",children:l&&l.pictures.map((function(e,s){return(0,r.jsx)("div",{className:"owl-dot media-with-lazy",onClick:function(e){return function(e,s){if(!s.currentTarget.classList.contains("active")){var a=s.currentTarget.closest(".prod-thumbnail");a.querySelector(".owl-dot.active")&&a.querySelector(".owl-dot.active").classList.remove("active"),s.currentTarget.classList.add("active")}x.current.goTo(e)}(s,e)},children:(0,r.jsx)("figure",{children:(0,r.jsx)(u.LazyLoadImage,{src:"https://d-themes.com/react_asset_api/porto"+e.url,alt:"Thumbnail",width:"100%",height:"auto"})})},"owl-dot-".concat(s))}))}),N&&(0,r.jsx)(d.Z,{mainSrc:"https://d-themes.com/react_asset_api/porto"+l.large_pictures[f].url,prevSrc:"https://d-themes.com/react_asset_api/porto"+l.large_pictures[(f+l.large_pictures.length-1)%l.large_pictures.length].url,nextSrc:"https://d-themes.com/react_asset_api/porto"+l.large_pictures[(f+1)%l.large_pictures.length].url,onCloseRequest:function(){g(!1)},onMoveNextRequest:function(){w((f+1)%l.large_pictures.length)},onMovePrevRequest:function(){w((f+l.large_pictures.length-1)%l.large_pictures.length)}})]})]})}var v=a(911),j=a(7205),N=a(513),g=a(8369);var b=function(e){var s=function(e){e.preventDefault(),document.querySelector(".add-product-review .active")&&document.querySelector(".add-product-review .active").classList.remove("active"),e.currentTarget.classList.add("active")},a=e.adClass,c=void 0===a?"":a,t=e.product;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"skel-pro-tabs"}),t&&(0,r.jsx)(g.mQ,{className:"product-single-tabs ".concat(c),selectedTabClassName:"active",selectedTabPanelClassName:"show",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-lg-2",children:(0,r.jsxs)(g.td,{className:"nav nav-tabs",children:[(0,r.jsx)(g.OK,{className:"nav-item",children:(0,r.jsx)(o.Z,{href:"#",className:"nav-link",children:"Description"})}),(0,r.jsx)(g.OK,{className:"nav-item",children:(0,r.jsxs)(o.Z,{href:"#",className:"nav-link",children:["Reviews (",t.reviews,")"]})})]})}),(0,r.jsx)("div",{className:"col-lg-10",children:(0,r.jsxs)("div",{className:"tab-content",children:[(0,r.jsx)(g.x4,{className:"tab-pane fade",children:(0,r.jsxs)("div",{className:"product-desc-content",children:[(0,r.jsx)("p",{children:t.short_description}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"Any Product types that You want - Simple, Configurable"}),(0,r.jsx)("li",{children:"Downloadable/Digital Products, Virtual Products"}),(0,r.jsx)("li",{children:"Inventory Management with Backordered items"})]}),(0,r.jsx)("p",{children:"Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "})]})}),(0,r.jsx)(g.x4,{className:"tab-pane fade",children:(0,r.jsxs)("div",{className:"product-reviews-content",children:[0!==t.reviews?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h3",{className:"reviews-title",children:"1 review for Men Black Sports Shoes"}),(0,r.jsx)("div",{className:"comment-list",children:(0,r.jsxs)("div",{className:"comments",children:[(0,r.jsx)("figure",{className:"img-thumbnail",children:(0,r.jsx)("img",{src:"images/blog/author.jpg",alt:"author",width:"80",className:"80"})}),(0,r.jsxs)("div",{className:"comment-block",children:[(0,r.jsxs)("div",{className:"comment-header",children:[(0,r.jsx)("div",{className:"comment-arrow"}),(0,r.jsx)("div",{className:"ratings-container float-sm-right",children:(0,r.jsxs)("div",{className:"product-ratings",children:[(0,r.jsx)("span",{className:"ratings",style:{width:"".concat(20*t.ratings,"%")}}),(0,r.jsx)("span",{className:"tooltiptext tooltip-top",children:t.ratings.toFixed(2)})]})}),(0,r.jsxs)("span",{className:"comment-by",children:[(0,r.jsx)("strong",{children:"Joe Doe"})," \u2013 April 12, 2018"]})]}),(0,r.jsx)("div",{className:"comment-content",children:(0,r.jsx)("p",{children:"Excellent."})})]})]})})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h3",{className:"reviews-title",children:"Review"}),(0,r.jsx)("p",{children:"There are no reviews yet."})]}),(0,r.jsx)("div",{className:"divider"}),(0,r.jsx)("div",{className:"add-product-review",children:(0,r.jsxs)("div",{className:"add-product-review",children:[(0,r.jsx)("h3",{className:"review-title",children:"Add a review"}),(0,r.jsxs)("form",{action:"#",className:"comment-form m-0",children:[(0,r.jsxs)("div",{className:"rating-form",children:[(0,r.jsxs)("label",{htmlFor:"rating",children:["Your rating ",(0,r.jsx)("span",{className:"required",children:"*"})]}),(0,r.jsxs)("span",{className:"rating-stars",children:[(0,r.jsx)("a",{className:"star-1",href:"#",onClick:s,children:"1"}),(0,r.jsx)("a",{className:"star-2",href:"#",onClick:s,children:"2"}),(0,r.jsx)("a",{className:"star-3",href:"#",onClick:s,children:"3"}),(0,r.jsx)("a",{className:"star-4",href:"#",onClick:s,children:"4"}),(0,r.jsx)("a",{className:"star-5",href:"#",onClick:s,children:"5"})]})]}),(0,r.jsxs)("div",{className:"form-group",children:[(0,r.jsxs)("label",{children:["Your review ",(0,r.jsx)("span",{className:"required",children:"*"})]}),(0,r.jsx)("textarea",{cols:"5",rows:"6",className:"form-control form-control-sm"})]}),(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-md-6 col-xl-12",children:(0,r.jsxs)("div",{className:"form-group",children:[(0,r.jsxs)("label",{children:["Name ",(0,r.jsx)("span",{className:"required",children:"*"})]}),(0,r.jsx)("input",{type:"text",className:"form-control form-control-sm",required:!0})]})}),(0,r.jsx)("div",{className:"col-md-6 col-xl-12",children:(0,r.jsxs)("div",{className:"form-group",children:[(0,r.jsxs)("label",{children:["Email ",(0,r.jsx)("span",{className:"required",children:"*"})]}),(0,r.jsx)("input",{type:"text",className:"form-control form-control-sm",required:!0})]})}),(0,r.jsx)("div",{className:"col-md-12",children:(0,r.jsxs)("div",{className:"custom-control custom-checkbox",children:[(0,r.jsx)("input",{type:"checkbox",className:"custom-control-input",id:"save-name"}),(0,r.jsx)("label",{className:"custom-control-label mb-0",htmlFor:"save-name",children:"Save my name, email, and website in this browser for the next time I comment."})]})})]}),(0,r.jsx)("input",{type:"submit",className:"btn btn-primary",value:"Submit"})]})]})})]})})]})})]})})]})};var f=(0,i.Z)({ssr:!1})((function(){if(!(0,t.useRouter)().query.slug)return(0,r.jsx)("div",{className:"loading-overlay",children:(0,r.jsxs)("div",{className:"bounce-loader",children:[(0,r.jsx)("div",{className:"bounce1"}),(0,r.jsx)("div",{className:"bounce2"}),(0,r.jsx)("div",{className:"bounce3"})]})});var e=(0,t.useRouter)().query.slug,s=(0,l.a)(n.N4,{variables:{slug:e}}),a=s.data,i=s.loading,d=s.error,m=a&&a.product.data,u=a&&a.product.related;return d?(0,t.useRouter)().push("/pages/404"):(0,r.jsxs)("main",{className:"main",children:[(0,r.jsx)("nav",{"aria-label":"breadcrumb",className:"breadcrumb-nav",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("ol",{className:"breadcrumb",children:[(0,r.jsx)("li",{className:"breadcrumb-item",children:(0,r.jsx)(o.Z,{href:"/",children:"Home"})}),(0,r.jsx)("li",{className:"breadcrumb-item",children:(0,r.jsx)(o.Z,{href:"/shop",children:"Games"})}),(0,r.jsx)("li",{className:"breadcrumb-item",children:m&&m.categories.map((function(e,s){return(0,r.jsxs)(c.Fragment,{children:[(0,r.jsx)(o.Z,{href:{pathname:"/shop",query:{category:e.slug}},children:e.name}),s<m.categories.length-1?",":""]},"category-".concat(s))}))}),(0,r.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:m&&m.name})]})})}),(0,r.jsxs)("div",{className:"container skeleton-body skel-shop-products ".concat(i?"":"loaded"),children:[(0,r.jsx)("div",{className:"product-single-container product-single-default product-center-vertical",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)(v.Z,{adClassOne:"order-1 order-lg-0",adClassTwo:"order-2 order-lg-2",type:"1",product:m,prev:m&&a.product.prev,next:m&&a.product.next}),(0,r.jsx)(x,{adClass:"col-lg-6 d-lg-flex order-0 order-lg-0",subClass:"col-lg-12",product:m})]})}),(0,r.jsx)(b,{product:m,adClass:"product-tabs-list pt-3 mb-0 mt-1"}),(0,r.jsx)(N.Z,{products:u,loading:i}),(0,r.jsx)("hr",{className:"mt-0 m-b-5"})]}),(0,r.jsx)(j.Z,{})]})}))}},function(e){e.O(0,[137,917,8369,7942,911,9774,2888,179],(function(){return s=3279,e(e.s=s);var s}));var s=e.O();_N_E=s}]);