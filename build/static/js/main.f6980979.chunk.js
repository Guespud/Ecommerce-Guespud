(this["webpackJsonpecommerce-cd"]=this["webpackJsonpecommerce-cd"]||[]).push([[0],{62:function(e,t,c){},63:function(e,t,c){},92:function(e,t,c){},95:function(e,t,c){},96:function(e,t,c){"use strict";c.r(t);var s=c(3),a=c(1),n=c(23),r=c.n(n),i=(c(62),c(12)),j=(c(63),c(18)),l=c(9),o=c(5),d=function(){return Object(s.jsxs)(o.n,{color:"cyan",className:"font-small darken-3 pt-0",children:[Object(s.jsx)(o.m,{children:Object(s.jsx)(o.z,{children:Object(s.jsx)(o.k,{md:"12",className:"py-5",children:Object(s.jsxs)("div",{className:"mb-5 flex-center",children:[Object(s.jsx)("a",{className:"fb-ic",children:Object(s.jsx)("i",{className:"fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"})}),Object(s.jsx)("a",{className:"tw-ic",children:Object(s.jsx)("i",{className:"fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"})}),Object(s.jsx)("a",{className:"gplus-ic",children:Object(s.jsx)("i",{className:"fab fa-google-plus fa-lg white-text mr-md-5 mr-3 fa-2x"})}),Object(s.jsx)("a",{className:"li-ic",children:Object(s.jsx)("i",{className:"fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"})}),Object(s.jsx)("a",{className:"ins-ic",children:Object(s.jsx)("i",{className:"fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"})}),Object(s.jsx)("a",{className:"pin-ic",children:Object(s.jsx)("i",{className:"fab fa-pinterest fa-lg white-text fa-2x",children:" "})})]})})})}),Object(s.jsx)("div",{className:"footer-copyright text-center py-3",children:Object(s.jsxs)(o.m,{fluid:!0,children:["\xa9 ",(new Date).getFullYear()," Copyright:"," ",Object(s.jsx)("a",{children:" Alejandro Guespud 2021 "})]})})]})},b=(c(92),function(e){e.key;var t=e.Imagen,c=e.category,a=e.Estilo,n=e.Valor,r=(e.Stock,e.Id);return Object(s.jsx)("div",{children:Object(s.jsxs)(o.f,{className:"align-items-center",children:[Object(s.jsx)(o.h,{src:t,top:!0,alt:"sample photo",overlay:"white-slight"}),Object(s.jsxs)(o.g,{className:"text-center",children:[Object(s.jsx)("h5",{children:Object(s.jsx)("strong",{children:Object(s.jsxs)("a",{href:"#!",className:"dark-grey-text",children:[a," ",Object(s.jsx)(o.b,{pill:!0,color:"danger",children:"NEW"})]})})}),Object(s.jsx)("h4",{className:"font-weight-bold green-text",children:Object(s.jsx)("strong",{children:n})})]}),Object(s.jsxs)(o.e,{color:"default",children:[" ",Object(s.jsx)(j.b,{to:"/".concat(c,"/").concat(r),children:"Ver detalle"})," ",Object(s.jsx)(o.o,{icon:"hand-peace",className:"ml-1"})]})]})})}),x=c(38),h=(c(93),x.a.initializeApp({apiKey:"AIzaSyDQMDtElX_dRZLO7Iic_L7kCynJjpJXdx4",authDomain:"ecommerce-gshop.firebaseapp.com",projectId:"ecommerce-gshop",storageBucket:"ecommerce-gshop.appspot.com",messagingSenderId:"922751280984",appId:"1:922751280984:web:38dab678c874f0bb02e72d",measurementId:"G-KLGXVX68M0"}));function O(){return x.a.firestore(h)}var m=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),c=t[0],n=t[1],r=O();return Object(a.useEffect)((function(){r.collection("productos").where("outstanding","==",!0).get().then((function(e){var t=[];e.forEach((function(e){t.push({id:e.id,data:e.data()})})),n(t)})).catch((function(e){return console.log(e)}))}),[]),Object(s.jsx)("section",{className:"ItemListCard text-center my-5",children:c.length?Object(s.jsx)(s.Fragment,{children:Object(s.jsx)(o.z,{children:c.map((function(e,t){return Object(s.jsx)(o.k,{lg:"3",md:"6",className:"mb-lg-0 mb-4",children:Object(s.jsx)(b,{Imagen:e.data.img,category:e.data.category,Estilo:e.data.title,Valor:e.data.price,Stock:e.data.Stock,Id:e.id},e.data.id)})}))})}):Object(s.jsx)("p",{className:"cargando",children:"Cargando items..."})})},u=Object(a.memo)(m),f=(c(49),c(50),c(51),c.p+"static/media/navbar.10725e09.png"),g=Object(a.createContext)(),p=function(){var e=Object(a.useContext)(g),t=Object(i.a)(e,2),c=t[0],n=(t[1],Object(a.useState)([])),r=Object(i.a)(n,2),j=r[0],l=r[1];return Object(a.useEffect)((function(){if(c.items.length){var e=JSON.stringify(c.items);localStorage.setItem("productos",e)}localStorage.getItem("productos")?l(JSON.parse(localStorage.getItem("productos"))):l(c.items)}),[c.items]),console.log(j,"donde esta la imagen"),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h1",{children:"Est\xe1s en el cart"}),j.map((function(e){return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)(o.f,{narrow:!0,ecommerce:!0,className:"mb-2",children:[Object(s.jsx)(o.h,{src:e.data.img,height:"200"}),Object(s.jsxs)(o.g,{cascade:!0,children:[Object(s.jsx)(o.j,{center:!0,children:Object(s.jsx)("strong",{children:Object(s.jsx)("a",{children:e.data.title})})}),Object(s.jsxs)(o.i,{children:["Cantidad = ",e.cantidad]}),Object(s.jsxs)("span",{className:"float-left",children:["Unidad : ",Object(s.jsx)("br",{})," $",e.data.price]}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsxs)("span",{className:"float-left",children:["Total : ",Object(s.jsx)("br",{})," $",e.data.price*e.cantidad]})]})]})})}))]})},N=(c(95),function(e){var t=e.show,c=e.action;return Object(s.jsxs)("div",{className:"widgetCart ".concat(t?"open":"close"),children:[Object(s.jsx)("button",{onClick:c,children:"Cerrar Cart"}),Object(s.jsx)(p,{})]})}),v=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),c=t[0],n=t[1],r=function(){n(!c)};return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(o.o,{icon:"tshirt",size:"2x",className:"white-text pr-3",onClick:r}),Object(s.jsx)(N,{show:c,action:r})]})},y=function(){var e=Object(a.useContext)(g),t=Object(i.a)(e,2),c=t[0];t[1];return Object(s.jsx)("div",{children:Object(s.jsx)("header",{children:Object(s.jsx)(o.B,{src:f,children:Object(s.jsx)(o.t,{dark:!0,expand:"md",children:Object(s.jsxs)(o.m,{children:[Object(s.jsx)(o.u,{href:"/",children:Object(s.jsx)("strong",{children:"G-shop"})}),Object(s.jsx)(o.w,{}),Object(s.jsxs)(o.l,{navbar:!0,children:[Object(s.jsxs)(o.v,{left:!0,children:[Object(s.jsx)(o.r,{active:!0,children:Object(s.jsx)(o.s,{to:"/",children:"Home"})}),Object(s.jsx)(o.r,{children:Object(s.jsx)(o.s,{to:"/Hombre",children:"Hombre"})}),Object(s.jsx)(o.r,{children:Object(s.jsx)(o.s,{to:"/Gorra",children:"Gorra"})})]}),Object(s.jsxs)(o.v,{right:!0,children:[Object(s.jsx)(v,{}),Object(s.jsx)("span",{children:c.cantidad})]})]})]})})})})})},k=function(){return Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("h1",{children:"Hombre"}),Object(s.jsx)(u,{})]})},w=function(){return Object(s.jsx)("div",{})},C=function(){var e=Object(a.useContext)(g),t=Object(i.a)(e,2),c=t[0];t[1];return Object(s.jsxs)(o.t,{color:"default-color",dark:!0,expand:"md",children:[Object(s.jsx)(o.u,{children:Object(s.jsx)("strong",{className:"white-text",children:"G-Shop"})}),Object(s.jsxs)(o.v,{left:!0,children:[Object(s.jsx)(o.r,{active:!0,children:Object(s.jsx)(o.s,{to:"/",children:"Home"})}),Object(s.jsx)(o.r,{children:Object(s.jsx)(o.s,{to:"/Hombre",children:"Hombre"})}),Object(s.jsx)(o.r,{children:Object(s.jsx)(o.s,{to:"/Gorra",children:"Gorra"})})]}),Object(s.jsxs)(o.v,{right:!0,children:[Object(s.jsx)(v,{}),Object(s.jsx)("span",{children:c.cantidad})]})]})},S=c(40),I=c(39),E=function(e){var t=e.item,c=e.Stock,n=Object(l.f)(),r=Object(a.useContext)(g),j=Object(i.a)(r,2),d=j[0],b=j[1],x=Object(a.useState)(0),h=Object(i.a)(x,2),m=h[0],u=h[1],f=O();console.log(t,"estos son los items que vienen de detail");return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("section",{className:"text-center my-5",children:[Object(s.jsx)("h2",{className:"h1-responsive font-weight-bold text-center my-5",children:t.data.title}),Object(s.jsx)(o.z,{children:Object(s.jsx)(o.k,{lg:"12",md:"6",className:"mb-lg-0 mb-4",children:Object(s.jsxs)(o.f,{className:"align-items-center",children:[Object(s.jsx)(o.h,{src:t.data.img,top:!0,alt:"sample photo",overlay:"white-slight"}),Object(s.jsxs)(o.g,{className:"text-center",children:[Object(s.jsx)("a",{href:"#!",className:"grey-text",children:Object(s.jsx)("h5",{children:"Shirt"})}),Object(s.jsx)("h5",{children:Object(s.jsx)("strong",{children:Object(s.jsxs)("a",{href:"#!",className:"dark-grey-text",children:[t.data.title," ",Object(s.jsx)(o.b,{pill:!0,color:"danger",children:"NEW"})]})})}),Object(s.jsx)("h4",{className:"font-weight-bold blue-text",children:Object(s.jsxs)("strong",{children:["$",t.data.price]})}),Object(s.jsx)(o.z,{center:!0,children:Object(s.jsxs)("div",{className:"def-number-input number-input",children:[Object(s.jsx)("button",{onClick:function(){m>0?u(m-1):alert("0 es el valor minimo")},className:"minus",disabled:0===m?"disabled":null}),Object(s.jsx)("input",{className:"quantity",name:"quantity",value:m,onChange:function(){return console.log("change")},type:"number"}),Object(s.jsx)("button",{onClick:function(){u(m+1)},className:"plus",disabled:m===c?"disabled":null})]})}),Object(s.jsxs)(o.e,{color:"default",onClick:function(){var e=t.id;if(d.items.some((function(t){return t.id===e}))){var c=d.items.map((function(t){return t.id===e?(t.cantidad+=m,t):t}));d.items=Object(I.a)(c),n.push("/cart")}else t.cantidad=m,b(Object(S.a)(Object(S.a)({},d),{},{cantidad:d.cantidad+m,items:[].concat(Object(I.a)(d.items),[t])})),n.push("/cart");n.push("/cart")},disabled:0===m?"disabled":null,children:[Object(s.jsx)(o.o,{icon:"tshirt",className:"mr-1"})," Agregar Al Carrito"]}),Object(s.jsxs)(o.e,{color:"default",onClick:function(){f.collection("productos").doc(t.data.id).update({price:100}).then((function(){return console.log("Se actualiz\xf3 correctamente")})).catch((function(e){return console.log(e)}))},disabled:0===m?"disabled":null,children:[Object(s.jsx)(o.o,{icon:"tshirt",className:"mr-1"})," Actualizar precio"]}),Object(s.jsx)("br",{})]})]})})})]})})},F=function(){var e=Object(l.g)().id,t=Object(a.useState)(null),c=Object(i.a)(t,2),n=c[0],r=c[1],d=O();return console.log(e,"este es el id"),Object(a.useEffect)((function(){d.collection("productos").doc(e).get().then((function(e){e.exists&&(console.log("entro al if que si existe"),r({id:e.id,data:e.data()}))})).catch((function(e){return console.log(e)}))}),[]),console.log(n,"esta es la data que esta fallando"),Object(s.jsx)(s.Fragment,{children:n?Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("br",{}),Object(s.jsxs)(o.c,{light:!0,color:"default",children:[Object(s.jsx)(o.d,{children:Object(s.jsx)(j.b,{to:"/".concat(n.data.category),children:n.data.category.split("-").join(" ")})}),Object(s.jsx)(o.d,{active:!0,children:n.data.title})]}),Object(s.jsx)(E,{item:n,Stock:n.data.Stock})]}):Object(s.jsx)("p",{children:"Cargando producto..."})})},G=function(){return Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("h1",{children:"Gorras"}),Object(s.jsx)(u,{})]})};var z=function(){var e=Object(a.useState)({items:[],cantidad:0,freeShipping:4e3,cuotas:3,precioTotal:0}),t=Object(i.a)(e,2),c=t[0],n=t[1];return Object(s.jsx)(g.Provider,{value:[c,n],children:Object(s.jsxs)(j.a,{children:[Object(s.jsxs)(l.c,{children:[Object(s.jsxs)(l.a,{exact:!0,path:"/",children:[Object(s.jsx)(y,{}),Object(s.jsx)("hr",{}),Object(s.jsx)(u,{})]}),Object(s.jsxs)(l.a,{path:"/Hombre",children:[Object(s.jsx)(C,{}),Object(s.jsx)(k,{})]}),Object(s.jsxs)(l.a,{path:"/Gorras",children:[Object(s.jsx)(C,{}),Object(s.jsx)(G,{})]}),Object(s.jsxs)(l.a,{path:"/cart",children:[Object(s.jsx)(C,{}),Object(s.jsx)(p,{})]}),Object(s.jsxs)(l.a,{exact:!0,path:"/:category_name/:id",children:[Object(s.jsx)(C,{}),Object(s.jsx)(F,{})]}),Object(s.jsxs)(l.a,{path:"*",children:[Object(s.jsx)(C,{}),Object(s.jsx)(w,{})]})]}),Object(s.jsx)(d,{})]})})},H=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,100)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,r=t.getTTFB;c(e),s(e),a(e),n(e),r(e)}))};r.a.render(Object(s.jsx)(z,{}),document.getElementById("root")),H()}},[[96,1,2]]]);
//# sourceMappingURL=main.f6980979.chunk.js.map