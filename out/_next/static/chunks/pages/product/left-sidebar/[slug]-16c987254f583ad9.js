(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3831],{6183:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/product/left-sidebar/[slug]",function(){return a(1432)}])},1432:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return Z}});var r=a(5893),c=a(7294),n=a(1163),t=a(3571),i=a(2564),l=a(1731),d=a(1433),o=a(5858),u=a(5465),m=a(23),h=a(513),p=a(7205),g=a(2954),x=a(137),j=a(7380),b=a(2679),f=a(1746),N=a(1729),v=a(2022);function y(e,s,a){return s in e?Object.defineProperty(e,s,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[s]=a,e}var w=function(e){return(0,r.jsxs)(r.Fragment,{children:[e.name,(0,r.jsxs)("span",{className:"products-count",children:["(",e.count,")"]})]})};var k=(0,i.Z)({ssr:!1})((function(e){var s=function(e){i.push({pathname:"/shop",query:{category:e[0],grid:d.grid}})},a=function(){document.querySelector("body").classList.contains("sidebar-opened")&&document.querySelector("body").classList.remove("sidebar-opened")},i=(0,n.useRouter)(),d=i.query,o=e.adClass,u=void 0===o?"":o,m=(0,t.a)(l.EP,{variables:{featured:!0}}),h=m.data,p=m.loading,k=(m.error,(0,c.useMemo)((function(){var e,s,a,c=h?h.shopSidebarData.categories:[],n=[];for(e=c.reduce((function(e,s){if(!s.parent){var a={key:s.slug,title:(0,r.jsx)(w,{name:s.name,count:s.count}),children:[]};e.push(a),n.push({name:s.name,children:a.children})}return e}),[]);n.length;)s=n[n.length-1],n.pop(),c.filter((function(e){return e.parent===s.name})).forEach((function(e){a={key:e.slug,title:(0,r.jsx)(w,{name:e.name,count:e.count}),children:[]},s.children.push(a),n.push({name:e.name,children:a.children})}));return e}),[h]));return(0,c.useEffect)((function(){return function(){a()}}),[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"sidebar-overlay",onClick:a}),(0,r.jsx)("div",{className:"sidebar-toggle custom-sidebar-toggle",onClick:function(e){return function(e){var s=document.querySelector("body");e.preventDefault(),s.classList.contains("sidebar-opened")?s.classList.remove("sidebar-opened"):s.classList.add("sidebar-opened")}(e)},children:(0,r.jsx)("i",{className:"fas fa-sliders-h"})}),(0,r.jsx)("aside",{className:"sidebar-product col-lg-3 mobile-sidebar skeleton-body skel-shop-products ".concat(u," ").concat(p?"":"loaded"),children:(0,r.jsxs)(x.Z,{className:"sticky-wrapper",offsetTop:90,children:[p?(0,r.jsx)("div",{className:"skel-widget"}):(0,r.jsx)("div",{className:"widget widget-product-categories mb-3",children:(0,r.jsx)(g.Z,{children:function(e){var a,c=e.onToggle,n=e.setCollapsibleElement,t=e.toggleState;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h3",{className:"widget-title",children:(0,r.jsx)("a",(a={href:"#",className:"text-white",onClick:function(e){e.preventDefault(),c()}},y(a,"className","COLLAPSED"===t?"collapsed":""),y(a,"children","Categories"),a))}),(0,r.jsx)("div",{className:"overflow-hidden",ref:n,children:(0,r.jsx)("div",{className:"widget-body",children:(0,r.jsx)(j.Z,{className:"no-icon cat-list border-0",selectable:!0,showIcon:!1,defaultExpandedKeys:d.category?[d.category]:[],switcherIcon:function(e){return e.isLeaf?"":(0,r.jsx)("span",{className:"toggle"})},selectedKeys:d.category?[d.category]:[],treeData:k,onSelect:s})})})]})}})}),p?(0,r.jsx)("div",{className:"skel-widget"}):(0,r.jsx)("div",{className:"widget",children:(0,r.jsxs)("div",{className:"maga-sale-container",children:[(0,r.jsx)("figure",{className:"mega-image",children:(0,r.jsx)(b.LazyLoadImage,{alt:"banner",src:"images/banners/banner-sidebar.jpg",threshold:500,effect:"blur",width:100,height:335})}),(0,r.jsxs)("div",{className:"mega-content",children:[(0,r.jsxs)("div",{className:"mega-price-box",children:[(0,r.jsx)("span",{className:"price-big",children:"50"}),(0,r.jsxs)("span",{className:"price-desc",children:[(0,r.jsx)("em",{children:"%"}),"OFF"]})]}),(0,r.jsxs)("div",{className:"mega-desc",children:[(0,r.jsx)("h3",{className:"mega-title mb-0",children:"MEGA SALE"}),(0,r.jsx)("span",{className:"mega-subtitle",children:"MANY ITEM"})]})]})]})}),(0,r.jsxs)("div",{className:"widget widget-featured",children:[(0,r.jsx)("h3",{className:"widget-title text-white",children:"Featured"}),(0,r.jsx)("div",{className:"widget-body",children:(0,r.jsxs)(N.Z,{adClass:"widget-featured-products",isTheme:!1,options:v.nV,children:[(0,r.jsx)("div",{className:"featured-col",children:p?[0,1,2].map((function(e,s){return(0,r.jsx)("div",{className:"skel-product-col skel-pro mb-2"},"product-one"+s)})):h.shopSidebarData.featured.map((function(e,s){return(0,r.jsx)(f.Z,{product:e},"product-three"+s)}))}),(0,r.jsx)("div",{className:"featured-col",children:h&&h.shopSidebarData.featured.map((function(e,s){return(0,r.jsx)(f.Z,{product:e},"featured-".concat(s))}))})]})})]})]})})]})}));var Z=(0,i.Z)({ssr:!1})((function(){if(!(0,n.useRouter)().query.slug)return(0,r.jsx)("div",{className:"loading-overlay",children:(0,r.jsxs)("div",{className:"bounce-loader",children:[(0,r.jsx)("div",{className:"bounce1"}),(0,r.jsx)("div",{className:"bounce2"}),(0,r.jsx)("div",{className:"bounce3"})]})});var e=(0,n.useRouter)().query.slug,s=(0,t.a)(l.N4,{variables:{slug:e}}),a=s.data,i=s.loading,g=s.error,x=a&&a.product.data,j=a&&a.product.related;return g?(0,n.useRouter)().push("/pages/404"):(0,r.jsxs)("main",{className:"main",children:[(0,r.jsx)("nav",{"aria-label":"breadcrumb",className:"breadcrumb-nav mb-3",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("ol",{className:"breadcrumb",children:[(0,r.jsx)("li",{className:"breadcrumb-item",children:(0,r.jsx)(d.Z,{href:"/",children:"Home"})}),(0,r.jsx)("li",{className:"breadcrumb-item",children:(0,r.jsx)(d.Z,{href:"/shop",children:"Games"})}),(0,r.jsx)("li",{className:"breadcrumb-item",children:x&&x.categories.map((function(e,s){return(0,r.jsxs)(c.Fragment,{children:[(0,r.jsx)(d.Z,{href:{pathname:"/shop",query:{category:e.slug}},children:e.name}),s<x.categories.length-1?",":""]},"category-".concat(s))}))}),(0,r.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:x&&x.name})]})})}),(0,r.jsxs)("div",{className:"container pt-2",children:[(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)(k,{}),(0,r.jsxs)("div",{className:"col-lg-9 main-content pb-2 pt-0 skeleton-body skel-shop-products ".concat(i?"":"loaded"),children:[(0,r.jsx)("div",{className:"product-single-container product-single-default product-left-sidebar pt-0",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)(o.Z,{product:x,adClass:"col-lg-7 col-md-6"}),(0,r.jsx)(u.Z,{adClass:"col-lg-5 col-md-6",product:x,prev:x&&a.product.prev,next:x&&a.product.next})]})}),(0,r.jsx)(m.Z,{product:x,loading:i}),(0,r.jsx)(h.Z,{adClass:"mb-1 border-0",products:j,loading:i})]})]}),(0,r.jsx)("hr",{className:"mt-0 m-b-5"})]}),(0,r.jsx)(p.Z,{})]})}))}},function(e){e.O(0,[137,917,7380,7942,23,9774,2888,179],(function(){return s=6183,e(e.s=s);var s}));var s=e.O();_N_E=s}]);