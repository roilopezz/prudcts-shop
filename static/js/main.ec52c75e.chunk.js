(this["webpackJsonpshop-app"]=this["webpackJsonpshop-app"]||[]).push([[0],{30:function(t,e,c){},31:function(t,e,c){},66:function(t,e,c){"use strict";c.r(e);var n=c(1),a=c.n(n),r=c(16),s=c.n(r),o=(c(30),c(31),c(9)),l=c(10),i=c(12),d=c(11),b=c(8),j=c(4),u=c(14),m=(c(32),c(0)),h=a.a.createContext(),p=function(t){Object(i.a)(c,t);var e=Object(d.a)(c);function c(){var t;Object(o.a)(this,c);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={products:[{id:1,price:700,title:"product 1",body:"body product 1",category:"category 1",amount:0,src:"https://cdn.pixabay.com/photo/2016/11/19/15/32/laptop-1839876_960_720.jpg"},{id:2,price:100,title:"product 2",body:"body product 2",category:"category 2",amount:0,src:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"},{id:3,price:700,title:"product 3",body:"body product 3",category:"category 3",amount:0,src:"https://cdn.pixabay.com/photo/2015/01/21/14/14/apple-606761_640.jpg"},{id:4,price:700,title:"product 4",body:"body product 4",category:"category 4",amount:0,src:"https://cdn.pixabay.com/photo/2016/03/27/07/12/apple-1282241_640.jpg"},{id:5,price:700,title:"product 1",body:"body product 1",category:"category 1",amount:0,src:"https://images.unsplash.com/photo-1570993492903-ba4c3088f100?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"},{id:6,price:100,title:"product 2",body:"body product 2",category:"category 2",amount:0,src:"https://images.unsplash.com/photo-1511025998370-7d59f82e9c8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80"},{id:7,price:700,title:"product 3",body:"body product 3",category:"category 3",amount:0,src:"https://images.unsplash.com/photo-1505739718967-6df30ff369c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"},{id:8,price:700,title:"product 4",body:"body product 4",category:"category 4",amount:0,src:"https://cdn.pixabay.com/photo/2014/02/22/19/45/camera-272263_960_720.jpg"}],cart:[],errors:""},t.handleDelete=function(e){var c=t.state.products.filter((function(t){return t.id!==e}));t.setState({products:c})},t.totalAmount=function(){return t.state.cart.map((function(t){return{amount:t.amount}}))},t.handleIncrement=function(e){var c=t.state.products.map((function(t){return t.id===e?Object(j.a)(Object(j.a)({},t),{},{amount:t.amount+1}):t}));t.setState({products:c})},t.handleDecrement=function(e){var c=t.state.products.map((function(t){return t.id===e&&t.amount>0&&t.id===e?Object(j.a)(Object(j.a)({},t),{},{amount:t.amount-1}):t}));t.setState({products:c})},t.randomId=function(){return Math.floor(999999999999999*Math.random())},t.addToCart=function(e){var c=t.state,n=c.products,a=c.cart;return t.setState({products:n.map((function(c){return c.id===e&&0!==c.amount?(a.push(Object(j.a)(Object(j.a)({},c),{},{id:t.randomId()})),u.b.success("Item added successfully",{position:"top-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),Object(j.a)(Object(j.a)({},c),{},{amount:c.amount=0})):Object(j.a)({},c)}))})},t.handleIncrementCart=function(e){var c=t.state.cart.map((function(t){return t.id===e?Object(j.a)(Object(j.a)({},t),{},{amount:t.amount+1}):t}));t.setState({cart:c})},t.handleDecrementCart=function(e){var c=t.state.cart.map((function(t){return t.id===e&&t.amount>1?Object(j.a)(Object(j.a)({},t),{},{amount:t.amount-1}):t.id===e&&t.amount<=1?(u.b.error("need at least one product !",{position:"top-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),t):t}));t.setState({cart:c})},t.handleClearCart=function(){var e=t.state.cart;u.b.info("The cart was cleaned",{position:"top-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),window.scrollTo(0,0),t.setState({cart:e.filter((function(t){return null}))})},t.handleDeleteItemCart=function(e){var c=t.state.cart;u.b.info("The Item was deleted",{position:"top-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),t.setState({cart:c.filter((function(t){return t.id!==e}))})},t}return Object(l.a)(c,[{key:"render",value:function(){return Object(m.jsxs)(h.Provider,{value:Object(j.a)(Object(j.a)({},this.state),{},{plus:this.plus,addToCart:this.addToCart,handleDelete:this.handleDelete,handleIncrement:this.handleIncrement,handleDecrement:this.handleDecrement,handleClearCart:this.handleClearCart,handleDeleteItemCart:this.handleDeleteItemCart,totalAmount:this.totalAmount,handleIncrementCart:this.handleIncrementCart,handleDecrementCart:this.handleDecrementCart}),children:[Object(m.jsx)(u.a,{}),this.props.children]})}}]),c}(n.Component),x=function(t){Object(i.a)(c,t);var e=Object(d.a)(c);function c(){var t;Object(o.a)(this,c);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={},t}return Object(l.a)(c,[{key:"render",value:function(){var t=this.context.cart;return Object(m.jsx)("nav",{className:"navbar navbar-expand-md navbar-dark bg-dark",children:Object(m.jsxs)("div",{className:"container-fluid",children:[Object(m.jsxs)(b.b,{className:"text-white navbar-brand",exact:!0,to:"/",style:{textDecoration:"none"},children:["Products ",Object(m.jsx)("i",{className:"bi bi-bag"})," Shop"]}),Object(m.jsxs)(b.b,{className:"cartNav",style:{textDecoration:"none"},to:"/cart",children:[Object(m.jsx)("i",{style:{color:"white"},className:"bi bi-cart2 "}),Object(m.jsx)("span",{className:"text-warning cartItems ",children:Object.keys(t).reduce((function(e,c){return e+t[c].amount}),0)})]})]})})}}]),c}(n.Component);x.contextType=h;var O=x,f=function(t){var e=t.counter,c=t.onPlus,n=t.onMinus;return Object(m.jsxs)("div",{children:[Object(m.jsx)("button",{onClick:c,className:"me-4 btn btn-success",children:"+"}),e,Object(m.jsx)("button",{onClick:n,className:"ms-4 btn btn-danger",children:"-"}),Object(m.jsx)("br",{})," ",Object(m.jsx)("br",{})]})},y=function(t){var e=t.product,c=(e.id,e.price),n=e.title,a=e.body,r=e.category,s=e.amount,o=e.src,l=t.onDelete,i=t.onPlus,d=t.onMinus,b=t.onCart;return Object(m.jsx)("div",{className:"col-12 col-xl-3 col-md-6  text-center  ",children:Object(m.jsx)("div",{className:"card-deck d-flex justify-content-center mb-3",children:Object(m.jsxs)("div",{className:"card ",children:[Object(m.jsx)("img",{className:"card-img-top",src:o,alt:"Card image cap"}),Object(m.jsxs)("div",{className:"card-body",children:[Object(m.jsx)("h5",{className:"card-title",children:n}),Object(m.jsx)("p",{className:"card-text",children:a}),Object(m.jsx)("span",{children:r}),Object(m.jsxs)("span",{className:"ms-3",children:[c," $ "]}),Object(m.jsx)("br",{}),Object(m.jsx)("div",{className:"text-center mt-4",children:Object(m.jsx)(f,{counter:s,onMinus:d,onPlus:i})}),Object(m.jsx)("br",{}),Object(m.jsx)("button",{className:"btn btn-primary float-start",onClick:b,children:"Add Cart"}),Object(m.jsx)("button",{className:"btn btn-danger float-end",onClick:l,children:"Delete"}),Object(m.jsx)("br",{})]})]})})})},g=function(t){Object(i.a)(c,t);var e=Object(d.a)(c);function c(){return Object(o.a)(this,c),e.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){var t=this.context,e=t.products,c=t.handleDelete,n=t.handleIncrement,a=t.handleDecrement,r=t.addToCart;return e.length?e.map((function(t){return Object(m.jsx)(y,{product:t,onDelete:function(){return c(t.id)},onPlus:function(){return n(t.id)},onMinus:function(){return a(t.id)},onCart:function(){return r(t.id)}},t.id)})):Object(m.jsx)("p",{className:"text-center pt-5",children:"No products ..."})}}]),c}(n.Component);g.contextType=h;var v=g,N=function(t){Object(i.a)(c,t);var e=Object(d.a)(c);function c(){return Object(o.a)(this,c),e.apply(this,arguments)}return Object(l.a)(c,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){var t=this.context,e=t.cart,c=t.handleClearCart,n=t.handleDeleteItemCart,a=t.handleIncrementCart,r=t.handleDecrementCart;return console.log(e),Object(m.jsxs)("div",{className:" text-center",children:[Object(m.jsx)("br",{}),Object(m.jsxs)("div",{className:"text-center",children:[Object(m.jsxs)("h1",{children:["Cart",Object(m.jsx)("i",{className:"bi bi-cart2 ms-2"})]}),Object(m.jsx)("div",{className:"d-flex justify-content-center",children:Object(m.jsx)("hr",{style:{width:"70px"},className:"my-4"})}),Object(m.jsx)("br",{})]}),e.length?Object(m.jsxs)("table",{className:"table",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{className:"hideItemCart",scope:"col",children:"#"}),Object(m.jsx)("th",{scope:"col",children:"Product"}),Object(m.jsx)("th",{className:"",scope:"col ",children:"Amount"}),Object(m.jsx)("th",{scope:"col",children:"price"}),Object(m.jsx)("th",{scope:"col"})]})}),e.map((function(t){return Object(m.jsx)("tbody",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{className:"hideItemCart",scope:"row",children:Object(m.jsx)("img",{style:{width:"70px"},className:"img-thumbnail rounded",src:t.src,alt:""})}),Object(m.jsx)("td",{className:"pt-xl-3 pt-lg-3 pt-md-3",children:t.title}),Object(m.jsx)("td",{className:"pt-xl-3 pt-lg-3 pt-md-3",children:Object(m.jsxs)("span",{className:"containerBtnsCart",children:[Object(m.jsx)("button",{onClick:function(){return r(t.id)},className:"btnCart1 btn btn-danger me-1 me-xl-3 rr BtnsCart",children:Object(m.jsx)("i",{className:"bi bi-dash btnMinIcon"})}),t.amount,Object(m.jsx)("button",{className:"btn btn-success ms-1 ms-xl-3 BtnsCart",onClick:function(){return a(t.id)},children:Object(m.jsx)("i",{className:"bi bi-plus btnPluIcon"})})]})}),Object(m.jsx)("td",{className:"pt-xl-3 pt-lg-3 pt-md-3 tt",children:t.price*t.amount}),Object(m.jsx)("td",{className:"pt-xl-3 pt-lg-3 pt-md-3",children:Object(m.jsx)("button",{onClick:function(){return n(t.id)},className:"btn btn-danger ms-xl-4 btnDelCart BtnsCart",children:Object(m.jsx)("i",{className:"bi bi-trash deleteCartIcon"})})})]})},t.id)}))]}):Object(m.jsx)("p",{className:"pt-5 mt-5",children:"The cart is empty"}),Object(m.jsx)("br",{}),e.length?Object(m.jsxs)("div",{className:"text-primary",children:[Object(m.jsxs)("div",{className:"",children:[Object(m.jsxs)("span",{className:"text-start",children:["Total amount :",Object(m.jsx)("span",{className:"ms-1",children:Object.keys(e).reduce((function(t,c){return t+e[c].amount}),0)})]}),Object(m.jsx)("br",{}),Object(m.jsxs)("span",{children:["Total price :",Object(m.jsx)("span",{className:"ms-1 me-1",children:Object.keys(e).reduce((function(t,c){return t+e[c].price*e[c].amount}),0)}),"$"]})]}),Object(m.jsx)("br",{}),Object(m.jsx)("button",{onClick:c,className:"btn btn-primary mt-2 mb-4 clearBtnCart",children:"Clear Cart"})]}):null]})}}]),c}(n.Component);N.contextType=h;var C=N,w=c(2),D=function(){return Object(m.jsxs)("nav",{className:"bg-light col-xl-1 col-lg-2 col-md-2 col-1 min-vh-100  sideNav",style:{listStyleType:"none",color:"white"},children:[Object(m.jsxs)(b.b,{className:"text-white mt-5",to:"/",exact:!0,style:{textDecoration:"none"},title:"Home",activeStyle:{fontWeight:"bold"},children:[Object(m.jsx)("i",{style:{color:"black"},className:"bi bi-house me-md-2 me-lg-2 me-xl-2 me-1 symbols"}),Object(m.jsx)("span",{style:{color:"black"},className:"sideNav-title\r d-none d-sm-inline d-sm-none d-md-inline\r hideText780",children:"Home"})]}),Object(m.jsx)("br",{}),Object(m.jsxs)(b.b,{activeStyle:{fontWeight:"bold"},to:"/cart",style:{textDecoration:"none"},title:"cart",children:[Object(m.jsx)("i",{style:{color:"black"},className:"bi bi-cart2 me-md-2 me-lg-2 me-xl-2 me-1 symbols"}),Object(m.jsx)("span",{style:{color:"black"},className:"sideNav-title\r d-none d-sm-inline d-sm-none d-md-inline\r hideText780",children:"cart"})]})]})},k=function(){return Object(n.useEffect)((function(){}),[window.scrollTo(0,0)]),Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)(D,{}),Object(m.jsxs)("main",{className:" ms-sm-auto col-xl-11 col-10 px-md-5 ",children:[Object(m.jsx)("div",{className:"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom",children:Object(m.jsx)("h1",{className:"h2",children:"Dashboard"})}),Object(m.jsx)("div",{className:"test",children:Object(m.jsx)("div",{className:"row",children:Object(m.jsxs)(w.c,{children:[Object(m.jsx)(w.a,{exact:!0,path:"/",component:v}),Object(m.jsx)(w.a,{exact:!0,path:"/cart",component:C})]})})})]})]})})},I=function(){return Object(m.jsxs)("p",{className:"border-top text-center pt-3",children:[Object(m.jsx)("span",{className:"ms-1",children:"\xa9"}),Object(m.jsx)("span",{className:"ms-1",children:(new Date).getFullYear()})]})};var M=function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsxs)(p,{children:[Object(m.jsx)("header",{className:"fixed-top",children:Object(m.jsx)(O,{})}),Object(m.jsx)("main",{className:"container-fluid pt-5 flex-fill ",children:Object(m.jsx)(w.a,{path:"/",component:k})}),Object(m.jsx)("footer",{children:Object(m.jsx)(I,{})})]})})},T=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,69)).then((function(e){var c=e.getCLS,n=e.getFID,a=e.getFCP,r=e.getLCP,s=e.getTTFB;c(t),n(t),a(t),r(t),s(t)}))};c(42),c(43),c(44);s.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(b.a,{children:Object(m.jsx)(M,{})})}),document.getElementById("root")),T()}},[[66,1,2]]]);
//# sourceMappingURL=main.ec52c75e.chunk.js.map