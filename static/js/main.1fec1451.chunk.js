(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(18)},16:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),l=a.n(c),i=(a(16),a(1)),o=a(2),m=a(5),s=a(3),u=a(4),d=[{name:"Anteojos Fedra Modelo 2020",description:"Antireflex, los mejores anteojos de la line premium Fedra 2019",type:"LIBRE",ring:"ENTERO",segment:"CABALLERO",material:"METAL",colors:"red, blue, yellow",caliber:"TBD",price:"412",strikethorughPrice:"456",image:"img/items/g9.jpeg",model:"1549-001",brand:"Route 66",isPromotion:!0,category:"RECETADOS",isPromoted:!0},{name:"Producto 2",description:"Product 2 Description",type:"RECETA",ring:"ENTERO",segment:"DAMA",material:"PLASTIC",colors:"red",caliber:"TBD",price:"323",strikethorughPrice:"456",image:"img/banner/banner-img.png",model:"1549-00223",brand:"Ray Van",isPromotion:!1,category:"RECETADOS",isPromoted:!0},{name:"Producto SOL",description:"Descripcion Producto SOL",type:"LIBRE",ring:"PLASTICO",segment:"CABALLERO",material:"METAL",colors:"yellow, pink",caliber:"TBD",price:"567",strikethorughPrice:"456",image:"img/items/g8.jpeg",model:"12345-332",brand:"Anteojos Burma",isPromotion:!1,category:"SOL",isPromoted:!1}],p={items:[{title:"home",href:"#home"},{title:"catalogo",href:"#catalogo",options:[{title:"recetados"},{title:"sol"}]},{title:"promociones",href:"#promociones"},{title:"contacto",href:"#contacto"},{title:"politica de precios",href:"#precios"},{title:"carrito",href:"#carrito"}]},g={items:[{title:"Delivery gratuito",description:"Free Shipping on all order",image:"img/features/f-icon1.png"},{title:"Return Policy",description:"Free Shipping on all order",image:"img/features/f-icon2.png"},{title:"24/7 Support",description:"Free Shipping on all order",image:"img/features/f-icon3.png"},{title:"Secure Payment",description:"Free Shipping on all order",image:"img/features/f-icon4.png"}]},E={aboutUsTitle:"ABOUT_US_ADD",aboutUsDescription:"DESCRIPTION_ADD",corporateTitle:"CORPORATE_TITLE_ADD",corporateDescription:"CORPORATE_DESCRIPTION_ADD",instagramTitle:"INSTAGRAM_TITLE_ADD",instagramItems:[{imageUrl:"img/i1.jpg",instagramUrl:"https://www.instagram.com/"},{imageUrl:"img/i2.jpg",instagramUrl:"https://www.instagram.com/"},{imageUrl:"img/i3.jpg",instagramUrl:"https://www.instagram.com/"},{imageUrl:"img/i4.jpg",instagramUrl:"https://www.instagram.com/"},{imageUrl:"img/i5.jpg",instagramUrl:"https://www.instagram.com/"},{imageUrl:"img/i6.jpg",instagramUrl:"https://www.instagram.com/"},{imageUrl:"img/i7.jpg",instagramUrl:"https://www.instagram.com/"},{imageUrl:"img/i8.jpg",instagramUrl:"https://www.instagram.com/"}],letUsBeSocialTitle:"LET_US_BE_SOCIAL_ADD",followUsTitle:"FOLLOW_US_ADD",facebookUrl:"https://www.google.com",twitterUrl:"https://www.google.com",dribbleUrl:"https://www.google.com",behanceUrl:"https://www.google.com"},f={PAGES:{HOME:"#home",CATALOG:"#catalogo",PROMOTIONS:"#promociones",CONTACT:"#contacto",PRICES:"#precios",CART:"#carrito"},home:{headerSection:p,bannerSection:{items:d},featuresSection:g,footerSection:E},catalog:{headerSection:p,footerSection:E},contact:{headerSection:p,featuresSection:g,footerSection:E},cart:{headerSection:p,footerSection:E},footerSection:E,products:d},h=(a(17),a(6)),b=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(c)))).renderItemOption=function(e,t){return r.a.createElement("li",{key:t,className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"category.html"},e.title))},a.renderItem=function(e,t){return r.a.createElement("li",{key:t,className:"nav-item submenu dropdown"},r.a.createElement("a",{onClick:function(){Object(h.redirect)(e.href)},style:{cursor:"pointer"},className:"nav-link dropdown-toggle","data-toggle":"dropdown",role:"button","aria-expanded":"false","aria-haspopup":"true"},e.title),r.a.createElement("ul",{className:"dropdown-menu"},e.options&&e.options.map(function(e,t){return a.renderItemOption(e,t)})))},a.renderItems=function(e){return e.map(function(e,t){return a.renderItem(e,t)})},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.data;return r.a.createElement("header",{className:"header_area sticky-header"},r.a.createElement("div",{className:"main_menu"},r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light main_box"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{className:"navbar-brand logo_h",href:"index.html"},r.a.createElement("img",{style:{width:"200px","padding-top":"15px"},src:"img/logo.png",alt:""})),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"icon-bar"}),r.a.createElement("span",{className:"icon-bar"}),r.a.createElement("span",{className:"icon-bar"})),r.a.createElement("div",{className:"collapse navbar-collapse offset",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"nav navbar-nav menu_nav ml-auto"},this.renderItems(e.items)))))))}}]),t}(r.a.Component),v=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.data;return r.a.createElement("section",{className:"banner-area"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row fullscreen align-items-center justify-content-start"},r.a.createElement("div",{className:"col-lg-12"},r.a.createElement("div",{className:"active-banner-slider owl-carousel"},e.items.filter(function(e){return e.isPromoted}).map(function(e,t){return r.a.createElement("div",{key:t,className:"row single-slide"},r.a.createElement("div",{className:"col-lg-5"},r.a.createElement("div",{className:"banner-content"},r.a.createElement("h1",null,e.title),r.a.createElement("p",null,e.description),r.a.createElement("div",{className:"add-bag d-flex align-items-center"},r.a.createElement("a",{className:"add-btn",href:""},r.a.createElement("span",{className:"lnr lnr-cross"})),r.a.createElement("span",{className:"add-text text-uppercase"},"Agregar al carrito")))),r.a.createElement("div",{className:"col-lg-7"},r.a.createElement("div",{className:"banner-img"},r.a.createElement("img",{className:"img-fluid custom-banner-section-img",src:e.image,alt:""}))))}))))))}}]),t}(r.a.Component),N=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.data;return r.a.createElement("section",{className:"features-area section_gap"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row features-inner"},e.items.map(function(e,t){return r.a.createElement("div",{key:t,className:"col-lg-3 col-md-6 col-sm-6"},r.a.createElement("div",{className:"single-features"},r.a.createElement("div",{className:"f-icon"},r.a.createElement("img",{src:"img/features/f-icon1.png",alt:""})),r.a.createElement("h6",null,e.title),r.a.createElement("p",null,e.description)))}))))}}]),t}(r.a.Component),O=(r.a.Component,r.a.Component,a(6).addItemToCart),w=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=f.products;return r.a.createElement("section",{className:"owl-carousel active-product-area section_gap"},r.a.createElement("div",{className:"single-product-slider"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-lg-6 text-center"},r.a.createElement("div",{className:"section-title"},r.a.createElement("h1",null,"Recetados"),r.a.createElement("p",null,"DESCRIPCION PRODUCTOS RECETADOS")))),r.a.createElement("div",{className:"row"},e.filter(function(e){return"RECETADOS"===e.category}).map(function(e,t){return r.a.createElement("div",{key:t,className:"col-lg-3 col-md-6"},r.a.createElement("div",{className:"single-product"},r.a.createElement("img",{className:"img-fluid",src:e.image,alt:""}),r.a.createElement("div",{className:"product-details"},r.a.createElement("h6",null,e.name),r.a.createElement("div",{className:"price"},r.a.createElement("h6",null,e.price),r.a.createElement("h6",{className:"l-through"},e.strikethorughPrice)),r.a.createElement("div",{className:"prd-bottom"},r.a.createElement("div",{href:"",className:"social-info"},r.a.createElement("span",{onClick:function(){return O(e,1)},className:"ti-bag",style:{cursor:"pointer"}}),r.a.createElement("p",{className:"hover-text"},"Agregar"))))))})))),r.a.createElement("div",{className:"single-product-slider"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-lg-6 text-center"},r.a.createElement("div",{className:"section-title"},r.a.createElement("h1",null,"SOL"),r.a.createElement("p",null,"DESCRIPCION PRODUCTOS SOL")))),r.a.createElement("div",{className:"row"},e.filter(function(e){return"SOL"===e.category}).map(function(e,t){return r.a.createElement("div",{key:t,className:"col-lg-3 col-md-6"},r.a.createElement("div",{className:"single-product"},r.a.createElement("img",{className:"img-fluid",src:e.image,alt:""}),r.a.createElement("div",{className:"product-details"},r.a.createElement("h6",null,e.name),r.a.createElement("div",{className:"price"},r.a.createElement("h6",null,e.price),r.a.createElement("h6",{className:"l-through"},e.strikethorughPrice)),r.a.createElement("div",{className:"prd-bottom"},r.a.createElement("a",{href:"",className:"social-info"},r.a.createElement("span",{className:"ti-bag"}),r.a.createElement("p",{className:"hover-text"},"Agregar"))))))})))))}}]),t}(r.a.Component),y=(r.a.Component,r.a.Component,function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.data,t=e.aboutUsTitle,a=e.aboutUsDescription,n=e.corporateTitle,c=e.corporateDescription,l=e.instagramTitle,i=e.instagramItems,o=e.facebookUrl,m=e.twitterUrl,s=e.dribbleUrl,u=e.behanceUrl,d=e.letUsBeSocialTitle,p=e.followUsTitle;return r.a.createElement("footer",{className:"footer-area section_gap"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-3  col-md-6 col-sm-6"},r.a.createElement("div",{className:"single-footer-widget"},r.a.createElement("h6",null,t),r.a.createElement("p",null,a))),r.a.createElement("div",{className:"col-lg-4  col-md-6 col-sm-6"},r.a.createElement("div",{className:"single-footer-widget"},r.a.createElement("h6",null,n),r.a.createElement("p",null,c))),r.a.createElement("div",{className:"col-lg-3  col-md-6 col-sm-6"},r.a.createElement("div",{className:"single-footer-widget mail-chimp"},r.a.createElement("h6",{className:"mb-20"},l),r.a.createElement("ul",{className:"instafeed d-flex flex-wrap"},i.map(function(e){return r.a.createElement("li",null,r.a.createElement("a",{href:e.instagramUrl},r.a.createElement("img",{src:e.imageUrl,alt:""})))})))),r.a.createElement("div",{className:"col-lg-2 col-md-6 col-sm-6"},r.a.createElement("div",{className:"single-footer-widget"},r.a.createElement("h6",null,p),r.a.createElement("p",null,d),r.a.createElement("div",{className:"footer-social d-flex align-items-center"},r.a.createElement("a",{href:o},r.a.createElement("i",{className:"fa fa-facebook"})),r.a.createElement("a",{href:m},r.a.createElement("i",{className:"fa fa-twitter"})),r.a.createElement("a",{href:s},r.a.createElement("i",{className:"fa fa-dribbble"})),r.a.createElement("a",{href:u},r.a.createElement("i",{className:"fa fa-behance"})))))),r.a.createElement("div",{className:"footer-bottom d-flex justify-content-center align-items-center flex-wrap"},r.a.createElement("p",{className:"footer-text m-0"},"Copyright \xa9",r.a.createElement("script",null,"document.write(new Date().getFullYear());")," All rights reserved | This template is made with ",r.a.createElement("i",{className:"fa fa-heart-o","aria-hidden":"true"})," by ",r.a.createElement("a",{href:"https://colorlib.com",target:"_blank"},"Colorlib")))))}}]),t}(r.a.Component)),C=a(7),j=a(6).renderCuitModal,S=a(6).setCUIT,I=a(6).getCUIT,T=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(s.a)(t).call(this,e))).state={cuitValue:""},a.handleCuitValueUpdate=a.handleCuitValueUpdate.bind(Object(C.a)(a)),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){if(!I())return j()}},{key:"handleCuitValueUpdate",value:function(e){this.setState({cuitValue:e.target.value})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"modal fade top",id:"cuitModal",tabIndex:"-1",role:"dialog","aria-labelledby":"myModalLabel","aria-hidden":"true","data-backdrop":"true"},r.a.createElement("div",{className:"modal-dialog modal-frame modal-top modal-notify modal-info",role:"document"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-body"},r.a.createElement("div",{className:"row d-flex justify-content-center align-items-center"},r.a.createElement("p",{className:"pt-3 pr-2"},"Por favor ingrese su CUIT:"),r.a.createElement("input",{onChange:this.handleCuitValueUpdate})),r.a.createElement("div",{className:"row d-flex justify-content-center align-items-center"},r.a.createElement("a",{type:"button",className:"btn btn-outline-primary waves-effect","data-dismiss":"modal",onClick:function(){return S(e.state.cuitValue)}},"Guardar"))))))}}]),t}(r.a.Component),U=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.data;return r.a.createElement(n.Fragment,null,r.a.createElement(T,null),r.a.createElement(b,{data:e.headerSection}),r.a.createElement(v,{data:e.bannerSection}),r.a.createElement(N,{data:e.featuresSection}),r.a.createElement(w,{data:e.products}),r.a.createElement(y,{data:e.footerSection}))}}]),t}(r.a.Component),P=function(e){function t(e){return Object(i.a)(this,t),Object(m.a)(this,Object(s.a)(t).call(this,e))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.data;return r.a.createElement(n.Fragment,null,r.a.createElement(b,{data:e.headerSection}),r.a.createElement(w,null),r.a.createElement(y,{data:e.footerSection}))}}]),t}(r.a.Component),A=function(e){function t(e){return Object(i.a)(this,t),Object(m.a)(this,Object(s.a)(t).call(this,e))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.data;return r.a.createElement(n.Fragment,null,r.a.createElement(b,{data:e.headerSection}),r.a.createElement(N,{data:e.featuresSection}),r.a.createElement(y,{data:e.footerSection}))}}]),t}(r.a.Component),k=a(6).getCart,D=a(6).getCartTotalPrice,x=a(6).getCartItemTotalPrice,R=a(6).incrementItemQuantityInCartByOne,_=a(6).decrementItemQuantityInCartByOne,L=a(6).removeItemFromCart,B=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=k();return r.a.createElement("section",{class:"cart_area"},r.a.createElement("div",{class:"container"},r.a.createElement("div",{class:"cart_inner"},r.a.createElement("div",{class:"table-responsive"},r.a.createElement("table",{class:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Producto"),r.a.createElement("th",{scope:"col"},"Precio Unitario"),r.a.createElement("th",{scope:"col"},"Cantidad"),r.a.createElement("th",{scope:"col"},"Total"),r.a.createElement("th",{scope:"col"},"Eliminar"))),r.a.createElement("tbody",null,e.map(function(e){return r.a.createElement("tr",{key:e.item.model},r.a.createElement("td",null,r.a.createElement("div",{class:"media"},r.a.createElement("div",{class:"d-flex"},r.a.createElement("img",{style:{"max-height":"100px",height:"70%",width:"auto"},src:e.item.image,alt:""})),r.a.createElement("div",{class:"media-body"},r.a.createElement("p",null,e.item.description)))),r.a.createElement("td",null,r.a.createElement("h5",null,"$",e.item.price)),r.a.createElement("td",null,r.a.createElement("div",{class:"product_count"},r.a.createElement("input",{type:"text",name:"qty",id:"sst",maxlength:"9999",value:e.quantity,title:"Cantidad:",class:"input-text qty"}),r.a.createElement("button",{onClick:function(){return R(e.item)},class:"increase items-count",type:"button"},r.a.createElement("i",{class:"lnr lnr-chevron-up"})),r.a.createElement("button",{onClick:function(){return _(e.item)},class:"reduced items-count",type:"button"},r.a.createElement("i",{class:"lnr lnr-chevron-down"})))),r.a.createElement("td",null,r.a.createElement("h5",null,"$",x(e.item,e.quantity))),r.a.createElement("td",null,r.a.createElement("div",{class:"cupon_text d-flex align-items-center",onClick:function(){return L(e.item)}},r.a.createElement("a",{class:"primary-btn",href:"#"},"eliminar"))))}),r.a.createElement("tr",null,r.a.createElement("td",null),r.a.createElement("td",null),r.a.createElement("td",null,r.a.createElement("h5",null,"Subtotal")),r.a.createElement("td",null,r.a.createElement("h5",null,"$",D()))),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("div",{class:"cupon_text d-flex align-items-center"},r.a.createElement("a",{class:"primary-btn",href:"#"},"Generar Pedido"))))))))))}}]),t}(r.a.Component),F=function(e){function t(e){return Object(i.a)(this,t),Object(m.a)(this,Object(s.a)(t).call(this,e))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.data;return r.a.createElement(n.Fragment,null,r.a.createElement(b,{data:e.headerSection}),r.a.createElement(B,null),r.a.createElement(y,{data:e.footerSection}))}}]),t}(r.a.Component),M=a(6),q=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=f.PAGES,t=f.home,a=f.catalog,n=f.contact,c=f.cart,l=e.HOME,i=e.CATALOG,o=e.CONTACT,m=e.CART;switch(M.getCurrentPage()){case l:return r.a.createElement(U,{data:t,currentPage:l});case i:return r.a.createElement(P,{data:a,currentPage:i});case o:return r.a.createElement(A,{data:n,currentPage:o});case m:return r.a.createElement(F,{data:c,currentPage:m});default:return r.a.createElement(U,{data:t,currentPage:l})}}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},6:function(e,t,a){"use strict";a.r(t),a.d(t,"redirect",function(){return n}),a.d(t,"getCurrentPage",function(){return r}),a.d(t,"getCUIT",function(){return c}),a.d(t,"setCUIT",function(){return l}),a.d(t,"renderCuitModal",function(){return i}),a.d(t,"getCart",function(){return o}),a.d(t,"getCartItemTotalPrice",function(){return m}),a.d(t,"incrementItemQuantityInCartByOne",function(){return s}),a.d(t,"decrementItemQuantityInCartByOne",function(){return u}),a.d(t,"getCartTotalPrice",function(){return d}),a.d(t,"removeItemFromCart",function(){return p}),a.d(t,"addItemToCart",function(){return g});var n=function(e){window.location.href=e,window.location.reload()},r=function(){return window.location.href.split("/")[window.location.href.split("/").length-1]},c=function(){return localStorage.getItem("cuit")},l=function(e){return localStorage.setItem("cuit",e)},i=function(){return window.$("#cuitModal").modal({show:!0})},o=function(){return localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[]},m=function(e,t){return parseInt(e.price)*parseInt(t)},s=function(e){var t=o();t.forEach(function(t){t.item.model===e.model&&(t.quantity=parseInt(t.quantity)+1)}),localStorage.setItem("cart",JSON.stringify(t)),window.location.reload()},u=function(e){var t=o();t.forEach(function(t){t.item.model===e.model&&parseInt(t.quantity)>1&&(t.quantity=parseInt(t.quantity)-1)}),localStorage.setItem("cart",JSON.stringify(t)),window.location.reload()},d=function(){var e=o(),t=0;return e.forEach(function(e){t+=t+parseInt(e.item.price)*parseInt(e.quantity)}),t},p=function(e){var t=o(),a=[];t.forEach(function(t){t.item.model!==e.model&&a.push(t)}),localStorage.setItem("cart",JSON.stringify(a)),window.location.reload()},g=function(e,t){var a=o();(function(e,t){var a=!1;return t.forEach(function(t){t.item.model===e&&(a=!0)}),a})(e.model,a)||(a.push({item:e,quantity:t}),localStorage.setItem("cart",JSON.stringify(a)))}}},[[10,1,2]]]);
//# sourceMappingURL=main.1fec1451.chunk.js.map