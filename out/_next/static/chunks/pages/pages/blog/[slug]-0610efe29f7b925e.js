(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9834],{8598:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pages/blog/[slug]",function(){return a(8815)}])},4729:function(e,s,a){"use strict";a.d(s,{Z:function(){return h}});var i=a(5893),t=a(3571),l=a(137),r=a(1163),c=a(2564),n=a(1731),o=a(1433),d=(a(7294),a(2679));function m(e){var s=e.blog,a=new Date(s.date);return(0,i.jsxs)("li",{className:"media-with-lazy",children:[(0,i.jsx)("figure",{className:"post-media",children:(0,i.jsx)(o.Z,{href:"/pages/blog/".concat(s.slug),children:s.picture?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"lazy-overlay"}),(0,i.jsx)(d.LazyLoadImage,{alt:"post_image",src:"https://d-themes.com/react_asset_api/porto"+s.picture[0].url,threshold:500,width:"100%",height:"auto",effect:"blur"})]}):""})}),(0,i.jsxs)("div",{className:"post-info",children:[(0,i.jsx)(o.Z,{href:"/pages/blog/".concat(s.slug),children:s.title}),(0,i.jsx)("div",{className:"post-meta",children:" ".concat(["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][a.getMonth()]," ").concat(a.getUTCDate()<10?"0"+a.getUTCDate():a.getUTCDate()+1,", ").concat(a.getYear()+1900)})]})]})}var h=(0,c.Z)({ssr:!1})((function(){var e=(0,t.a)(n.oG),s=e.data,a=e.loading,c=e.error,d=s&&s.postSidebarData.categories,h=s&&s.postSidebarData.recent,u=(0,r.useRouter)().query;return c?(0,i.jsx)("div",{children:c.message}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"sidebar-overlay",onClick:function(){document.querySelector("body").classList.contains("sidebar-opened")&&document.querySelector("body").classList.remove("sidebar-opened")}}),(0,i.jsx)("div",{className:"sidebar-toggle custom-sidebar-toggle",onClick:function(e){return function(e){var s=document.querySelector("body");e.preventDefault(),s.classList.contains("sidebar-opened")?s.classList.remove("sidebar-opened"):s.classList.add("sidebar-opened")}(e)},children:(0,i.jsx)("i",{className:"fas fa-sliders-h"})}),(0,i.jsx)("aside",{className:"sidebar mobile-sidebar col-lg-3 h-auto skeleton-body skel-shop-products ".concat(a?"":"loaded"),children:(0,i.jsxs)(l.Z,{className:"sidebar-wrapper sticky-sidebar",offsetTop:90,children:[a?(0,i.jsx)("div",{className:"skel-widget"}):(0,i.jsxs)("div",{className:"widget widget-categories",children:[(0,i.jsx)("h4",{className:"widget-title",children:"Blog Categories"}),(0,i.jsx)("ul",{className:"list",children:d.map((function(e,s){return(0,i.jsx)("li",{className:"".concat(u.category===e.slug?"active":""),children:(0,i.jsx)(o.Z,{href:{pathname:"/pages/blog",query:{category:e.slug}},scroll:!1,children:e.name})},s)}))})]}),a?(0,i.jsx)("div",{className:"skel-widget"}):(0,i.jsxs)("div",{className:"widget widget-post",children:[(0,i.jsx)("h4",{className:"widget-title",children:"Recent Posts"}),(0,i.jsx)("ul",{className:"simple-post-list",children:h.slice(0,2).map((function(e,s){return(0,i.jsx)(m,{blog:e},"BlogTypeTwo"+s)}))})]}),a?(0,i.jsx)("div",{className:"skel-widget"}):(0,i.jsxs)("div",{className:"widget",children:[(0,i.jsx)("h4",{className:"widget-title",children:"Tags"}),(0,i.jsxs)("div",{className:"tagcloud",children:[(0,i.jsx)(o.Z,{href:"#",children:"ARTICLES"}),(0,i.jsx)(o.Z,{href:"#",children:"CHAT"})]})]})]})})]})}))},8815:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return g}});var i=a(5893),t=a(3571),l=a(1163),r=a(2564),c=a(1731),n=a(1433),o=a(1729),d=a(4729),m=(a(7294),a(2679));var h=function(e){var s=e.blog,a=new Date(s.date);return(0,i.jsxs)("article",{className:"post media-with-lazy",children:[(0,i.jsx)("figure",{className:"post-media zoom-effect",children:s.picture?(0,i.jsxs)(n.Z,{href:"/pages/blog/".concat(s.slug),children:[(0,i.jsx)("div",{className:"lazy-overlay"}),(0,i.jsx)(m.LazyLoadImage,{alt:"post_image",src:"https://d-themes.com/react_asset_api/porto"+s.picture[0].url,threshold:500,width:"100%",height:"auto",effect:"blur"})]}):""}),(0,i.jsxs)("div",{className:"post-body",children:[(0,i.jsxs)("div",{className:"post-date",children:[(0,i.jsx)("span",{className:"day",children:"".concat(a.getUTCDate()<10?"0"+a.getUTCDate():a.getUTCDate())}),(0,i.jsx)("span",{className:"month",children:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][a.getUTCMonth()]})]}),(0,i.jsx)("h2",{className:"post-title",children:(0,i.jsx)(n.Z,{href:"/pages/blog/".concat(s.slug),children:s.title})}),(0,i.jsxs)("div",{className:"post-content",children:[(0,i.jsx)("p",{children:s.content}),(0,i.jsxs)(n.Z,{href:"/pages/blog/".concat(s.slug),className:"read-more d-flex align-items-center",children:["Read More ",(0,i.jsx)("i",{className:"fas fa-angle-right"})]})]})]})]})},u=a(4416),p=a(1625);var x=(0,u.$j)(null,p.Nw)((function(e){var s=e.blog,a=e.loading,t=new Date(s&&s.date);return a?(0,i.jsx)("div",{className:"skel-post"}):(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("article",{className:"post single",children:[(0,i.jsxs)("figure",{className:"post-media",style:{paddingTop:"".concat(100*s.picture[0].height/s.picture[0].width,"%")},children:[s.picture?s.picture.length>1?(0,i.jsx)(o.Z,{adClass:"owl-theme post-slider show-nav-hover",options:{nav:!0,dots:!1},children:s.picture.map((function(e,s){return(0,i.jsx)(m.LazyLoadImage,{alt:"post_image",src:"https://d-themes.com/react_asset_api/porto"+e.url,threshold:500,width:"100%",height:"100%",effect:"blur"},"blog"+s)}))}):(0,i.jsx)(m.LazyLoadImage,{alt:"post_image",src:"https://d-themes.com/react_asset_api/porto"+s.picture[0].url,threshold:500,width:"100%",height:"100%",effect:"blur"}):"",s.video&&(0,i.jsx)("a",{className:"btn-play btn-iframe",onClick:function(s){s.preventDefault(),e.showVideo()},href:"https://www.youtube.com/watch?v=vBPgmASQ1A0",children:(0,i.jsx)("i",{className:"fas fa-play"})})]}),(0,i.jsxs)("div",{className:"post-body",children:[(0,i.jsxs)("div",{className:"post-date",children:[(0,i.jsx)("span",{className:"day",children:"".concat(t.getUTCDate()<10?"0"+t.getUTCDate():t.getUTCDate())}),(0,i.jsx)("span",{className:"month",children:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getUTCMonth()]})]}),(0,i.jsx)("h2",{className:"post-title",children:(0,i.jsx)(n.Z,{href:"#",children:s.title})}),(0,i.jsx)("div",{className:"post-meta",children:(0,i.jsxs)(n.Z,{href:"#",className:"hash-scroll",children:[(0,i.jsx)("span",{children:s.comments})," Comments"]})}),(0,i.jsxs)("div",{className:"post-content",children:[(0,i.jsx)("p",{children:s.content}),(0,i.jsx)("h3",{children:"\u201c Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model search for evolved over sometimes by accident, sometimes on purpose \u201d"}),(0,i.jsx)("p",{children:"Aenean lorem diam, venenatis nec venenatis id, adipiscing ac massa. Nam vel dui eget justo dictum pretium a rhoncus ipsum. Donec venenatis erat tincidunt nunc suscipit, sit amet bibendum lacus posuere. Sed scelerisque, dolor a pharetra sodales, mi augue consequat sapien, et interdum tellus leo et nunc. Nunc imperdiet eu libero ut imperdiet."})]}),(0,i.jsxs)("div",{className:"post-share",children:[(0,i.jsxs)("h3",{className:"d-flex align-items-center",children:[(0,i.jsx)("i",{className:"fas fa-share"}),"Share this post"]}),(0,i.jsxs)("div",{className:"social-icons",children:[(0,i.jsx)(n.Z,{href:"#",className:"social-icon social-facebook",title:"Facebook",children:(0,i.jsx)("i",{className:"icon-facebook"})}),(0,i.jsx)(n.Z,{href:"#",className:"social-icon social-twitter",title:"Twitter",children:(0,i.jsx)("i",{className:"icon-twitter"})}),(0,i.jsx)(n.Z,{href:"#",className:"social-icon social-linkedin",title:"Linkedin",children:(0,i.jsx)("i",{className:"fab fa-linkedin-in"})}),(0,i.jsx)(n.Z,{href:"#",className:"social-icon social-mail",title:"Email",children:(0,i.jsx)("i",{className:"icon-mail-alt"})})]})]}),(0,i.jsxs)("div",{className:"post-author",children:[(0,i.jsxs)("h3",{children:[(0,i.jsx)("i",{className:"far fa-user"}),"Author"]}),(0,i.jsx)("div",{className:"media-with-lazy",children:(0,i.jsx)("figure",{className:"mb-0",children:(0,i.jsx)(n.Z,{href:"#",children:(0,i.jsx)(m.LazyLoadImage,{alt:"author",src:"images/blog/author.jpg",threshold:500,width:"100%",height:80,effect:"blur"})})})}),(0,i.jsxs)("div",{className:"author-content",children:[(0,i.jsx)("h4",{children:(0,i.jsx)(n.Z,{href:"#",children:"Jone Doe"})}),(0,i.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies, justo eu convallis placerat, felis enim ornare nisi, vitae mattis nulla ante id dui."})]})]}),(0,i.jsxs)("div",{className:"comment-respond",children:[(0,i.jsx)("h3",{children:"Leave a Reply"}),(0,i.jsxs)("form",{action:"#",children:[(0,i.jsx)("p",{children:"Your email address will not be published. Required fields are marked *"}),(0,i.jsxs)("div",{className:"form-group",children:[(0,i.jsx)("label",{children:"Comment"}),(0,i.jsx)("textarea",{cols:"30",rows:"1",className:"form-control",required:!0})]}),(0,i.jsxs)("div",{className:"form-group",children:[(0,i.jsx)("label",{children:"Name"}),(0,i.jsx)("input",{type:"text",className:"form-control",required:!0})]}),(0,i.jsxs)("div",{className:"form-group",children:[(0,i.jsx)("label",{children:"Email"}),(0,i.jsx)("input",{type:"email",className:"form-control",required:!0})]}),(0,i.jsxs)("div",{className:"form-group",children:[(0,i.jsx)("label",{children:"Website"}),(0,i.jsx)("input",{type:"url",className:"form-control"})]}),(0,i.jsx)("div",{className:"form-group-custom-control mb-2",children:(0,i.jsxs)("div",{className:"custom-control custom-checkbox",children:[(0,i.jsx)("input",{type:"checkbox",className:"custom-control-input",id:"save-name"}),(0,i.jsx)("label",{className:"custom-control-label",htmlFor:"save-name",children:"Save my name, email, and website in this browser for the next time I comment."})]})}),(0,i.jsx)("div",{className:"form-footer my-0",children:(0,i.jsx)("button",{type:"submit",className:"btn btn-sm btn-primary",children:"Post Comment"})})]})]})]})]})})})),j=a(2022);var g=(0,r.Z)({ssr:!1})((function(){if(!(0,l.useRouter)().query.slug)return(0,i.jsx)("div",{className:"loading-overlay",children:(0,i.jsxs)("div",{className:"bounce-loader",children:[(0,i.jsx)("div",{className:"bounce1"}),(0,i.jsx)("div",{className:"bounce2"}),(0,i.jsx)("div",{className:"bounce3"})]})});var e=(0,l.useRouter)().query.slug,s=(0,t.a)(c.QI,{variables:{slug:e}}),a=s.data,r=s.loading,m=s.error,u=a&&a.post.data,p=a&&a.post.related;return m?(0,l.useRouter)().push("/pages/404"):(0,i.jsxs)("main",{className:"main",children:[(0,i.jsx)("nav",{"aria-label":"breadcrumb",className:"breadcrumb-nav mb-3",children:(0,i.jsx)("div",{className:"container",children:(0,i.jsxs)("ol",{className:"breadcrumb",children:[(0,i.jsx)("li",{className:"breadcrumb-item",children:(0,i.jsx)(n.Z,{href:"/",children:"Home"})}),(0,i.jsx)("li",{className:"breadcrumb-item",children:(0,i.jsx)(n.Z,{href:"/pages/blog",children:"Blog"})}),(0,i.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:u&&u.title})]})})}),(0,i.jsx)("div",{className:"container skeleton-body skel-shop-products ".concat(r?"":"loaded"),children:(0,i.jsxs)("div",{className:"row",children:[(0,i.jsxs)("div",{className:"col-lg-9",children:[(0,i.jsx)(x,{blog:u,loading:r}),r||p.length?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("hr",{className:"mt-2 mb-1"}),(0,i.jsxs)("div",{className:"related-posts",children:[(0,i.jsxs)("h4",{children:["Related ",(0,i.jsx)("strong",{children:"Posts"})]}),(0,i.jsx)(o.Z,{adClass:"related-posts-carousel",options:j.Uw,children:r?new Array(3).fill(1).map((function(e,s){return(0,i.jsx)("div",{className:"skel-pro skel-pro-grid"},"Skeleton:"+s)})):p.map((function(e,s){return(0,i.jsx)(h,{blog:e},"BlogTypeThree"+s)}))})]})]}):""]}),(0,i.jsx)(d.Z,{})]})})]})}))}},function(e){e.O(0,[137,9774,2888,179],(function(){return s=8598,e(e.s=s);var s}));var s=e.O();_N_E=s}]);