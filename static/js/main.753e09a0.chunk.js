(this["webpackJsonpbookstore-app"]=this["webpackJsonpbookstore-app"]||[]).push([[0],{69:function(e,t,n){"use strict";n.r(t);var r,i,a,c,o,s,l,u,d,b,j,p,h,O,f,g=n(1),x=n.n(g),m=n(36),v=n.n(m),S=n(2),y=n(4),k=n(5),w=Object(k.a)(r||(r=Object(y.a)(["\n  * {\n    margin: 0;\n    padding: 0;\n    font-family: Montserrat, Helvetica, Sans-Serif;\n  }\n  \n"]))),N=n(8),C=k.b.header(i||(i=Object(y.a)(["\n  padding: 1vh 25vh;\n  display: flex;\n  justify-content: space-between;\n  background-color: #f9fafd;\n  box-shadow: 0 2px 3px 0.5px #e5eaf6;\n  & .logo-placeholder {\n    width: 5rem;\n  }\n  & span,\n  & .logo-placeholder {\n    align-self: center;\n  }\n  & .main-nav {\n    padding: 1rem;\n  }\n  & .nav-link {\n    margin-left: 2rem;\n    font-size: 1.3rem;\n    color: grey;\n    text-decoration: none;\n    position: relative;\n  }\n  & .nav-link:hover,\n  & .nav-link.active {\n    text-decoration: underline;\n    text-underline-offset: 0.1rem;\n    color: #4835b5;\n  }\n  & .cart-state {\n    display: inline-block;\n    padding: 0.2rem 0.5rem;\n    position: absolute;\n    top: -0.5rem;\n    right: -0.8rem;\n    background-color: white;\n    border-radius: 50%;\n    border: solid 0.2px #d1d3dd;\n    box-shadow: 1px 2px 5px -1px #babdcd;\n  }\n  & img {\n    width: 80%;\n  }\n"]))),U=k.b.div(a||(a=Object(y.a)(["\n  & a {\n    position: absolute;\n    top: 40vh;\n    left: 25vh;\n    display: inline-block;\n    padding: 1.5vh 3vh;\n    background-color: #ffdb33;\n    border-radius: 6px;\n    font-weight: 600;\n    font-size: 1.8rem;\n    color: #4c3f00;\n  }\n  & a:hover {\n    color: #7f4261;\n    background-color: #ffffff;\n    box-shadow: 2px 2px 5px 0.3px #ffdb33;\n  }\n  width: 100vw;\n  & img {\n    width: 100%;\n  }\n"]))),$=n.p+"static/media/books.fd3295b3.png",E=n(0),J=function(e){var t=e.shoppingCart,n=e.loggedUser,r=e.userName;return Object(E.jsxs)(C,{children:[Object(E.jsx)(N.c,{to:"/portfolio",className:"logo-placeholder",children:Object(E.jsx)("img",{src:$,alt:"logo"})}),Object(E.jsxs)("span",{children:["Hello, ",r]}),Object(E.jsxs)("nav",{className:"main-nav",children:[Object(E.jsx)(N.c,{className:"nav-link",exact:!0,to:"/portfolio",children:"HOME"}),Object(E.jsx)(N.c,{className:"nav-link",to:"/store",children:"STORE"}),"admin"!==n?Object(E.jsxs)(N.c,{className:"nav-link",to:"/shopping-cart",children:["SHOPPING CART",Object(E.jsx)("span",{className:"cart-state",children:Object(E.jsx)("span",{children:t.reduce((function(e,t){return e+t.quantity}),0)})})]}):null,Object(E.jsx)(N.c,{className:"nav-link",to:"/login",children:"LOGIN"})]})]})},B=n(6),L=n(3),T=n(13),I=n.n(T),R=function(){return I.a.get("https://el-bookstore-app.herokuapp.com/users")},q=n(70),F=function(e,t){var n=e-1;return JSON.parse(JSON.stringify(Object(B.a)(t))).splice(6*n,6)},P=n(41),G=k.b.article(c||(c=Object(y.a)(["\n  margin: 1rem 0;\n  border-radius: 0.3rem;\n  background-color: #fdfcfb;\n  box-shadow: 0 3px 4px 0.5px #f5f1e9;\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  & button {\n    width: 8rem;\n    padding: 0.3rem 0.6rem;\n  }\n  & button,\n  & p,\n  & a {\n    margin-top: 0.6rem;\n  }\n"]))),z=function(e){var t=e.book,n=e.setShoppingCart,r=e.loggedUser,i=e.setEditedBook,a=e.setUpdatedStore;return Object(E.jsxs)(G,{children:[Object(E.jsx)("h4",{children:t.title}),Object(E.jsx)("p",{children:Object(E.jsx)(N.b,{to:"/store/".concat(t.id),children:"Find out more"})},q.a),Object(E.jsxs)("p",{children:["$",t.price]}),"admin"!==r?Object(E.jsx)("button",{onClick:function(e){n((function(e){if(console.log(e),0===e.length)return[{item:t.title,quantity:1,price:t.price,id:t.id}];var n=e.findIndex((function(e){return e.id===t.id}));if(-1!==n){var r=Object(B.a)(e),i=r[n].quantity;return r.splice(n,1,{quantity:++i,item:t.title,price:t.price,id:t.id}),console.log(r),Object(B.a)(r)}return[].concat(Object(B.a)(e),[{item:t.title,quantity:1,price:t.price,id:t.id}])}))},children:"Add To Cart"}):Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)("button",{onClick:function(){i(JSON.parse(JSON.stringify(Object(P.a)({},t))))},children:"Edit"}),Object(E.jsx)("button",{onClick:function(){var e;e=t.id,I.a.delete("https://el-bookstore-app.herokuapp.com/books/".concat(e)),a((function(e){return!e}))},children:"Delete"})]})]})},A=k.b.form(o||(o=Object(y.a)(["\n  width: 70vw;\n  padding: 0.8rem 0.8rem 0 0.8rem;\n  margin: 0 auto;\n  margin-bottom: 1rem;\n  display: flex;\n  flex-direction: column;\n  & input,\n  textarea,\n  label {\n    margin-bottom: 0.8rem;\n    padding: 0.5rem;\n  }\n"]))),H=function(e){var t=e.editedBook,n=e.setEditedBook,r=e.setUpdatedStore,i=Object(g.useState)(""),a=Object(S.a)(i,2),c=a[0],o=a[1],s=Object(g.useState)(""),l=Object(S.a)(s,2),u=l[0],d=l[1],b=Object(g.useState)(""),j=Object(S.a)(b,2),p=j[0],h=j[1],O=Object(g.useState)(""),f=Object(S.a)(O,2),x=f[0],m=f[1],v=Object(g.useState)(""),y=Object(S.a)(v,2),k=y[0],w=y[1],N=Object(g.useState)(""),C=Object(S.a)(N,2),U=C[0],$=C[1];Object(g.useEffect)((function(){o(t.title),d(t.subtitle),h(t.id),m(t.price),w(t.image),$(t.url)}),[t]);return Object(E.jsxs)(A,{onSubmit:function(e){e.preventDefault()},children:[Object(E.jsx)("input",{value:c,type:"text",placeholder:"Title",onChange:function(e){o(e.target.value)}}),Object(E.jsx)("input",{value:u,type:"text",placeholder:"Subtitle",onChange:function(e){d(e.target.value)}}),Object(E.jsx)("input",{value:x,type:"text",placeholder:"Price in $",onChange:function(e){m(e.target.value.trim())}}),Object(E.jsx)("input",{value:p,type:"text",placeholder:"ISBN",onChange:function(e){h(e.target.value.trim())}}),Object(E.jsx)("input",{value:k,type:"text",placeholder:"image url",onChange:function(e){w(e.target.value.trim())}}),Object(E.jsx)("input",{value:U,type:"text",placeholder:"URL to single book",onChange:function(e){$(e.target.value.trim())}}),Object(E.jsx)("input",{value:t.id?"CHANGE":"POST",type:"submit",onClick:function(e){var t,i={title:c,subtitle:u,id:p,price:x,image:k,url:U};n({title:"",subtitle:"",id:"",price:"",image:"",url:""}),console.log(i),"POST"===e.target.value?(t=i,I.a.post("https://el-bookstore-app.herokuapp.com/books",t)):function(e,t){I.a.put("https://el-bookstore-app.herokuapp.com/books/".concat(e),t)}(i.id,i),r((function(e){return!e}))}})]})},M=k.b.form(s||(s=Object(y.a)(["\n  padding: 0.8rem;\n  display: grid;\n  grid-template-columns: 16% 16% 16% 18% 16% 18%;\n  grid-template-rows: 7vh 5vh;\n  & input,\n  & label,\n  & select {\n    margin-right: 0.5rem;\n    padding: 0.5rem;\n    align-self: center;\n  }\n  label {\n    text-align: right;\n  }\n"]))),D=function(e){var t=e.allBooks,n=e.setFiltered,r=e.filtered,i=Object(g.useState)("all"),a=Object(S.a)(i,2),c=a[0],o=a[1],s=Object(g.useState)("0"),l=Object(S.a)(s,2),u=l[0],d=l[1],b=Object(g.useState)(null),j=Object(S.a)(b,2),p=j[0],h=j[1],O=Object(g.useState)(""),f=Object(S.a)(O,2),x=f[0],m=f[1],v=Object(g.useState)(t.length),y=Object(S.a)(v,2),k=y[0],w=y[1];return Object(g.useEffect)((function(){w(r.length)}),[r]),Object(E.jsxs)(M,{children:[Object(E.jsxs)("select",{defaultValue:c,onChange:function(e){var i=e.target.value,a=function(e,t,n){var r=JSON.parse(JSON.stringify(Object(B.a)(n)));return"all"!==e&&t.length===n.length||(r=JSON.parse(JSON.stringify(Object(B.a)(t)))),"$0"===e?r&&(r=r.filter((function(e){return 0===Number(e.price)}))):"$0-$20"===e?r=r.filter((function(e){return Number(e.price)<20&&Number(e.price)>0})):"$20-$50"===e?r=r.filter((function(e){return Number(e.price)>20&&Number(e.price)<=50})):"$50-$100"===e?r=r.filter((function(e){return Number(e.price)>50&&Number(e.price)<=100})):">$100"===e&&(r=r.filter((function(e){return Number(e.price)>100}))),r}(i,t,r);n(Object(B.a)(a)),o(i),w(a.length)},children:[Object(E.jsx)("option",{value:"all",children:"ALL"}),Object(E.jsx)("option",{value:"$0",children:"FREE"}),Object(E.jsx)("option",{value:"$0-$20",children:"$0 - $20"}),Object(E.jsx)("option",{value:"$20-$50",children:"$20 - $50"}),Object(E.jsx)("option",{value:"$50-$100",children:"$50 - $100"}),Object(E.jsx)("option",{value:">$100",children:"MORE THAN $100"})]}),Object(E.jsxs)("select",{defaultValue:u,onChange:function(e){var t=e.target.value,i=function(e,t){var n=JSON.parse(JSON.stringify(Object(B.a)(t)));return"lowest"===e?n.sort((function(e,t){return e.price-t.price})):"highest"===e&&n.sort((function(e,t){return t.price-e.price})),n}(t,r);d(t),n(Object(B.a)(i))},children:[Object(E.jsx)("option",{value:"0",children:"Sort:"}),Object(E.jsx)("option",{value:"lowest",children:"Price: lowest"}),Object(E.jsx)("option",{value:"highest",children:"Price: highest"})]}),Object(E.jsx)("label",{children:"Search by id"}),Object(E.jsx)("input",{defaultValue:p,type:"number",placeholder:"1234567891234",onChange:function(e){var r=e.target.value.trim();n((function(e){var n=JSON.parse(JSON.stringify(Object(B.a)(t)));return r?n=n.filter((function(e){return e.id.includes(r)&&e.title.toLowerCase().includes(x)})):n})),h(r)}}),Object(E.jsx)("label",{children:"Search by title"}),Object(E.jsx)("input",{defaultValue:x,type:"text",id:"title-search",placeholder:"Java or java",onChange:function(e){var r=e.target.value;n((function(){var e=JSON.parse(JSON.stringify(Object(B.a)(t)));return e=e.filter((function(e){return e.title.toLowerCase().includes(r)&&e.id.includes(p)}))})),m(r.toLowerCase().trim())}}),("all"!==c||p||x)&&Object(E.jsxs)("label",{children:["Search results: ",k]})]})},V=k.b.ul(l||(l=Object(y.a)(["\n  width: 100%;\n  display: grid;\n  grid-template-columns: 30% 30% 30%;\n  justify-content: space-between;\n  list-style: none;\n\n  & a {\n    text-decoration: none;\n    color: inherit;\n  }\n"]))),Y=k.b.ul(u||(u=Object(y.a)(["\n  list-style: none;\n  display: flex;\n  & button {\n    font-size: 0.8rem;\n    padding: 0.2rem 0.5rem;\n    margin: 0 0.4rem;\n    border: none;\n    background: none;\n  }\n  & button:hover,\n  & button:active {\n    color: #4835b5;\n    font-weight: 600;\n    text-decoration: underline;\n    text-underline-offset: 0.1rem;\n  }\n"]))),Q=k.b.section(d||(d=Object(y.a)(["\n  padding: 0 25vh;\n"]))),_=function(e){var t=e.setShoppingCart,n=e.loggedUser,r=e.allBooks,i=e.filtered,a=e.setFiltered,c=e.setUpdatedStore,o=Object(g.useState)([]),s=Object(S.a)(o,2),l=s[0],u=s[1],d=Object(g.useState)([]),b=Object(S.a)(d,2),j=b[0],p=b[1],h=Object(g.useState)({title:"",subtitle:"",id:"",price:"",image:"",url:""}),O=Object(S.a)(h,2),f=O[0],x=O[1];return Object(g.useEffect)((function(){for(var e=Math.ceil(i.length/6),t=[],n=1;n<=e;n++)t.push(n);u(t),p(F(1,i))}),[i]),Object(E.jsxs)(Q,{children:["admin"===n&&Object(E.jsx)(H,{setEditedBook:x,editedBook:f,allBooks:r,setUpdatedStore:c}),Object(E.jsx)(D,{setFiltered:a,allBooks:r,filtered:i}),Object(E.jsx)(Y,{children:l.map((function(e){return Object(E.jsx)("li",{children:Object(E.jsx)("button",{onClick:function(){p(F(e,i))},children:e})},Object(q.a)())}))}),Object(E.jsx)(V,{children:j.map((function(e){return Object(E.jsx)(z,{book:e,allBooks:r,setShoppingCart:t,loggedUser:n,setEditedBook:x,setUpdatedStore:c},e.id)}))})]})},K=k.b.section(b||(b=Object(y.a)(["\n  flex: display;\n  flex-direction: column;\n  margin: 10vh;\n\n  img {\n    height: 100%;\n  }\n  & .heading {\n    display: grid;\n    grid-template-columns: 5% 40% 30% 25%;\n\n    font-size: 1.5rem;\n    padding: 1rem;\n  }\n  & .total {\n    display: grid;\n    grid-template-columns: 5% 70% 25%;\n    font-size: 1.5rem;\n    padding: 1rem;\n  }\n"]))),W=k.b.article(j||(j=Object(y.a)(["\n  font-size: 1.5rem;\n  padding: 1rem;\n  display: grid;\n  grid-template-columns: 5% 40% 30% 25%;\n  & button {\n    margin: 0.8rem auto;\n    height: 1.5rem;\n    width: 1.5rem;\n  }\n  p {\n    align-self: center;\n  }\n"]))),X=function(e){var t=e.item,n=e.setShoppingCart,r=e.shoppingCart,i=Object(g.useState)(!0),a=Object(S.a)(i,2),c=a[0],o=a[1];return Object(g.useEffect)((function(){o((function(e){return!e}))}),[r]),t?Object(E.jsxs)(W,{className:"".concat(c),children:[Object(E.jsx)("button",{onClick:function(){n((function(e){var n=JSON.parse(JSON.stringify(Object(B.a)(e)));console.log(t.quantity);var r=n.findIndex((function(e){return Number(e.id)===Number(t.id)})),i=--n[r].quantity;return console.log(i),o(r%2===0),0===i&&(n=e.filter((function(e){return Number(e.id)!==Number(t.id)}))),n}))},children:"x"}),Object(E.jsx)("p",{children:t.item}),Object(E.jsx)("p",{children:t.quantity}),Object(E.jsxs)("p",{children:["$",(Number(t.price)*Number(t.quantity)).toFixed(2)]})]}):null},Z=function(e){var t=e.shoppingCart,n=e.setShoppingCart;return Object(E.jsx)(K,{children:0!==t.length?Object(E.jsxs)(E.Fragment,{children:[Object(E.jsxs)("h3",{className:"heading",children:[Object(E.jsx)("span",{}),Object(E.jsx)("span",{children:"Book Title"}),Object(E.jsx)("span",{children:"Quantity"}),Object(E.jsx)("span",{children:"Price"})]}),t.map((function(e){return Object(E.jsx)(X,{item:e,setShoppingCart:n,shoppingCart:t},"".concat(e.id,"+").concat(Object(q.a)()))})),Object(E.jsxs)("h3",{className:"total",children:[Object(E.jsx)("span",{}),Object(E.jsx)("span",{children:"Total:"}),Object(E.jsxs)("span",{children:["$",t.reduce((function(e,t){return e+t.quantity*Number(t.price)}),0).toFixed(2)]})]})]}):Object(E.jsx)("p",{children:"YOUR CART IS EMPTY..."})})},ee=k.b.form(p||(p=Object(y.a)(["\n  padding: 2.5rem;\n  display: flex;\n  flex-direction: column;\n  margin: 5vh 30vh;\n  background-color: #fdfcfb;\n  box-shadow: 0 3px 4px 0.5px #f5f1e9;\n  & input {\n    padding: 0.5rem 1rem;\n    border: solid 1px lightgray;\n    border-radius: 0.2rem;\n    box-shadow: 1px 1px 1px 0.2px #fcfbfb;\n  }\n  & input[type='text']:focus {\n    margin-top: 0.5rem;\n    border: #ffdb33 solid 0.5px;\n    transition: ease-in-out, width 0.35s ease-in-out;\n  }\n  & label {\n    padding: 0 1rem;\n    height: 1rem;\n    color: red;\n    font-style: italic;\n  }\n  & input[type='submit'] {\n    background-color: #ffdb33;\n    color: #4c3f00;\n    font-size: 1.2rem;\n    font-weight: 400;\n    border: none;\n  }\n  & input[type='submit']:hover {\n    color: #7f4261;\n    background-color: #ffffff;\n    box-shadow: 2px 2px 2px 1px #d8c6cf;\n  }\n\n  & a {\n    margin: 0 auto;\n    margin-top: 1.2rem;\n  }\n"]))),te=function(e){var t=e.setLoggedUser,n=e.setUser,r=Object(g.useState)(""),i=Object(S.a)(r,2),a=i[0],c=i[1],o=Object(g.useState)(""),s=Object(S.a)(o,2),l=s[0],u=s[1],d=Object(L.g)();return Object(E.jsxs)(ee,{onSubmit:function(e){e.preventDefault(),R().then((function(e){var r=[];e.data&&(r=JSON.parse(JSON.stringify(Object(B.a)(e.data))));var i=r.find((function(e){return e.username===a}));i?i.password===l&&(n(i),Object.keys(i).join("").includes("admin")?(t("admin"),d.push("/store")):(t("user"),d.push("/store"))):console.log("neuspesna registracija")})),t(""),u("")},children:[Object(E.jsx)("input",{type:"text",placeholder:"username",onInput:function(e){c(e.target.value.trim())}}),Object(E.jsx)("label",{}),Object(E.jsx)("input",{type:"password",placeholder:"*************",onInput:function(e){u(e.target.value.trim())}}),Object(E.jsx)("label",{}),Object(E.jsx)("input",{type:"submit",value:"LOGIN"}),Object(E.jsx)(N.b,{to:"/register",children:"OR REGISTER"})]})},ne=function(e){var t=e.shoppingCart,n=e.setLoggedUser,r=e.setUser,i=Object(g.useState)(""),a=Object(S.a)(i,2),c=a[0],o=a[1],s=Object(g.useState)(""),l=Object(S.a)(s,2),u=l[0],d=l[1],b=Object(g.useState)(""),j=Object(S.a)(b,2),p=j[0],h=j[1],O=Object(g.useState)(""),f=Object(S.a)(O,2),x=f[0],m=f[1],v=Object(g.useState)("*****************"),y=Object(S.a)(v,2),k=y[0],w=y[1],C=Object(g.useState)(["","","","","",""]),U=Object(S.a)(C,2),$=U[0],J=U[1],T=Object(L.g)();return Object(E.jsxs)(ee,{onSubmit:function(e){e.preventDefault();var i=["","","","","",""];if(c||(i[0]="*This field is required"),u||(i[1]="*This field is required"),function(e){return/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(e)}(p)||(i[2]="*Email is not valid"),function(e){return/\w{5,14}$/.test(e)}(x)||(i[3]="*Password should contain minimum 7 characters, number,capital letter and small letter"),x!==k&&(i[4]="*Passwords don't match"),J([].concat(i)),console.log(i.join("").trim(),"ovo je vrednost koja se dobija u proveri"),i.join("").trim())return console.log("*neuspesna registracija"),null;J(["","","","","",""]),R().then((function(e){var i=Object(B.a)(e.data),a=i.find((function(e){return e.username===u})),s=i.find((function(e){return e.email===p})),l=Object(B.a)($);if(0===i.length||!a&&!s){console.log("create new user");var b={name:c,username:u,password:x,id:Object(q.a)(),shoppingCart:0!==t.length?Object(B.a)(t):[]};!function(e){I.a.post("https://el-bookstore-app.herokuapp.com/users",e)}(b),J(["","","","","",""]),o(""),d(""),m(""),w(""),h(""),n("user"),r(b),T.push("/store")}else a?l[1]="*Choose another username":s&&(l[2]="*Use another email");J(Object(B.a)(l)),console.log(l)}))},children:[Object(E.jsx)("input",{type:"text",placeholder:"Full Name",value:c,onChange:function(e){o(e.target.value)}}),Object(E.jsx)("label",{children:$[0]}),Object(E.jsx)("input",{type:"text",placeholder:"username",value:u,onChange:function(e){d(e.target.value.trim())}}),Object(E.jsx)("label",{children:$[1]}),Object(E.jsx)("input",{type:"text",placeholder:"email",value:p,onChange:function(e){h(e.target.value.trim())}}),Object(E.jsx)("label",{children:$[2]}),Object(E.jsx)("input",{type:"password",placeholder:"eg: passworD_123",value:x,onChange:function(e){m(e.target.value.trim())}}),Object(E.jsx)("label",{children:$[3]}),Object(E.jsx)("input",{type:"password",placeholder:"*************",value:k,onChange:function(e){w(e.target.value.trim())}}),Object(E.jsx)("label",{children:$[4]}),Object(E.jsx)("input",{type:"submit",value:"REGISTER"}),Object(E.jsx)(N.b,{to:"/login",children:"OR LOGIN"})]})},re=k.b.article(h||(h=Object(y.a)(["\n  height: 50vh;\n  display: flex;\n  background-color: #f9fafd;\n  box-shadow: 0 3px 5px 0.5px #e5eaf6;\n  padding: 7vh 0;\n  margin: 5vh 20vw;\n  & div {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    padding: 8vh 8vh 8vh 0;\n    max-width: 40vw;\n  }\n"]))),ie=function(e){var t=e.allBooks,n=Object(L.h)().id,r=t.find((function(e){return e.id===n}));return-1!==r?Object(E.jsxs)(re,{children:[Object(E.jsx)("p",{children:Object(E.jsx)("img",{src:r.image,alt:"".concat(r.id,"'s cover")})}),Object(E.jsxs)("div",{children:[Object(E.jsx)("p",{children:r.title}),r.subtitle&&Object(E.jsx)("p",{children:r.subtitle}),r.desc&&Object(E.jsx)("p",{children:r.desc}),Object(E.jsxs)("p",{children:["$",r.price]})]})]},q.a):Object(E.jsx)(L.a,{to:"/store"})},ae=k.b.main(O||(O=Object(y.a)([""]))),ce=n.p+"static/media/cover.e3dd0859.jpeg",oe=function(){return Object(E.jsxs)(U,{children:[Object(E.jsx)(N.b,{to:"/store",children:"Check out awesome books"}),Object(E.jsx)("img",{src:ce,alt:""})]})},se=function(e){var t=e.setShoppingCart,n=e.shoppingCart,r=e.setLoggedUser,i=e.setUser,a=e.loggedUser,c=e.user,o=Object(g.useState)([]),s=Object(S.a)(o,2),l=s[0],u=s[1],d=Object(g.useState)([]),b=Object(S.a)(d,2),j=b[0],p=b[1],h=Object(g.useState)(!1),O=Object(S.a)(h,2),f=O[0],x=O[1];return Object(g.useEffect)((function(){I.a.get("https://el-bookstore-app.herokuapp.com/books").then((function(e){u(JSON.parse(JSON.stringify(Object(B.a)(e.data)))),p(Object(B.a)(e.data)),console.log("this rendered")}))}),[f]),Object(E.jsx)(ae,{children:Object(E.jsxs)(L.d,{children:[Object(E.jsx)(L.b,{exact:!0,path:"/portfolio",children:Object(E.jsx)(oe,{})}),Object(E.jsx)(L.b,{exact:!0,path:"/store",children:Object(E.jsx)(_,{setShoppingCart:t,loggedUser:a,allBooks:l,setAllBooks:u,filtered:j,setFiltered:p,updateStore:f,setUpdatedStore:x})}),Object(E.jsx)(L.b,{exact:!0,path:"/store/:id",children:Object(E.jsx)(ie,{allBooks:l})}),"admin"!==a?Object(E.jsx)(L.b,{exact:!0,path:"/shopping-cart",children:Object(E.jsx)(Z,{setShoppingCart:t,shoppingCart:n,loggedUser:a,user:c})}):null,Object(E.jsx)(L.b,{exact:!0,path:"/login",children:Object(E.jsx)(te,{setLoggedUser:r,setUser:i})}),Object(E.jsx)(L.b,{exact:!0,path:"/register",children:Object(E.jsx)(ne,{shoppingCart:n,setLoggedUser:r,setUser:i})})]})})},le=k.b.footer(f||(f=Object(y.a)(["\n  background-color: #ffdb33;\n  border: none;\n  width: 100vw;\n  position: absolute;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  padding: 3vh 25vh;\n"]))),ue=function(){return Object(E.jsx)(le,{})};var de=function(){var e=Object(g.useState)([]),t=Object(S.a)(e,2),n=t[0],r=t[1],i=Object(g.useState)("guest"),a=Object(S.a)(i,2),c=a[0],o=a[1],s=Object(g.useState)({username:"",shoppingCart:[]}),l=Object(S.a)(s,2),u=l[0],d=l[1];return Object(E.jsxs)(N.a,{children:[Object(E.jsx)(w,{}),Object(E.jsx)(J,{userName:u.username?u.username:"Guest",setShoppingCart:r,shoppingCart:n,loggedUser:c}),Object(E.jsx)(se,{shoppingCart:n,setShoppingCart:r,loggedUser:c,setLoggedUser:o,setUser:d,user:u}),Object(E.jsx)(ue,{})]})};v.a.render(Object(E.jsx)(x.a.StrictMode,{children:Object(E.jsx)(de,{})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.753e09a0.chunk.js.map