(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"1ba9ba8ec980a3dd5a90":function(e,t,n){"use strict";n.r(t);var o,i=n("8af190b70a6bc55c6f1b"),r=n("0d7f0986bcd2f33d8a2a"),c=n("2abb2ecfab271efcf057"),a=n.n(c),u=(n("b912ecc4473ae8a2ff0b"),n("f466c6fac21e2bd173f8")),l=n.n(u),s=n("f0d76769f542545382df"),f=n.n(s),d=n("2de20a79156911f204a2"),p=n.n(d),h=n("a289f12938702445a8e7"),v=n.n(h),m=n("e3503e689c47108504eb"),b=n.n(m),y=n("e799c547a20a503b338f"),g=n.n(y),S=(n("346256ae2e49e28d95be"),n("783d92fc378c6d77395d")),w=n.n(S),k=(n("07460803b00a50e0385f"),n("406bdeeb7a41aa3aae72")),T=n("03fb0036f9fdca151d0b"),A=n("41069c99334ae719cbe9");function L(e){return(L="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(e,t,n,i){o||(o="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,c=arguments.length-3;if(t||0===c||(t={children:void 0}),t&&r)for(var a in r)void 0===t[a]&&(t[a]=r[a]);else t||(t=r||{});if(1===c)t.children=i;else if(c>1){for(var u=new Array(c),l=0;l<c;l++)u[l]=arguments[l+3];t.children=u}return{$$typeof:o,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function D(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function P(e,t){return(P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function E(e,t){return!t||"object"!==L(t)&&"function"!==typeof t?N(e):t}function N(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var C=O(p.a,{},void 0,O(v.a,{},void 0,O(f.a,{padding:"default"},void 0,"License Plate "),O(f.a,{align:"right"},void 0,"Fine Amount"),O(f.a,{align:"right"},void 0,"Vechile"),O(f.a,{align:"right"},void 0,"Offenses"),O(f.a,{align:"right"},void 0,"Status"))),F=O(w.a,{}),R=O(w.a,{}),x=O(T.a,{title:"",whiteBg:!0,icon:"",desc:""},void 0,O("div",{},void 0,O(k.a,{}))),X=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}(c,e);var t,n,o,i=function(e){function t(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}return function(){var n,o=_(e);if(t()){var i=_(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return E(this,n)}}(c);function c(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),j(N(e=i.call(this)),"handleRemoveRow",(function(){e.setState((function(e,t){return{Ticket:e.Ticket.slice(1)}}))})),j(N(e),"onSuccess",(function(t,n){console.log(t),A.a.auth().onAuthStateChanged((function(n){var o=A.a.firestore().doc("Drivers/"+n.uid);A.a.firestore().collection("Ticket").where("LicenseNumber","==",t.LicenseNumber).where("Time","==",t.Time).get().then((function(n){n.forEach((function(n){var i=n.id;console.log(i);var r=A.a.firestore().doc("Ticket/"+i),c=t.FineAmount,a=new Date;A.a.firestore().collection("Payment").add({driver:o,ticket:r,amount:c,timeStamp:a,status:"online"}).then((function(t){e.setState({driver:"",ticket:"",amount:"",timeStamp:"",status:""})})),A.a.firestore().collection("Ticket").doc(i).update({Status:"paid"}).then((function(t){e.setState({Status:""})}))}))})),console.log(n.uid),console.log("The payment was succeeded!")}))})),e.state={Ticket:[]},e}return t=c,(n=[{key:"componentDidMount",value:function(){var e=this;A.a.auth().onAuthStateChanged((function(t){if(t){var n=t.uid;A.a.firestore().collection("Drivers").doc(n).get().then((function(t){var n=t.data().LicenseNumber;A.a.firestore().collection("Ticket").where("LicenseNumber","==",n).get().then((function(t){var n=[];t.forEach((function(e){var t=e.data();console.log(e.data().Area._a),n.push(t);var o=(new Date).toLocaleDateString("en-US",{weekday:"short",year:"numeric",month:"short",day:"numeric"});console.log(o)})),e.setState({Ticket:n})}))}))}else window.location.href="/login"}))}},{key:"onSucess",value:function(e){var t=this;console.log(e),A.a.auth().onAuthStateChanged((function(n){var o=A.a.firestore().doc("Drivers/"+n.uid);A.a.firestore().collection("Ticket").where("LicenseNumber","==",e.LicenseNumber).where("Time","==",e.Time).get().then((function(n){n.forEach((function(n){var i=n.id;console.log(i);var r=A.a.firestore().doc("Ticket/"+i),c=e.FineAmount,a=new Date;A.a.firestore().collection("Payment").add({driver:o,ticket:r,amount:c,timeStamp:a,status:"online"}).then((function(e){t.setState({driver:"",ticket:"",amount:"",timeStamp:"",status:""}),window.alert("Payment has been done successfully")})),A.a.firestore().collection("Ticket").doc(i).update({Status:"paid"}).then((function(e){t.setState({Status:""})}))}))})),console.log(n.uid),console.log("The payment was succeeded!")}))}},{key:"clickMe",value:function(e){console.log(e.LicenseNumber),A.a.firestore().collection("Ticket").where("LicenseNumber","==",e.LicenseNumber).where("Time","==",e.Time).get().then((function(e){e.forEach((function(e){var t=e.id;console.log(t),A.a.firestore().collection("Ticket").doc(t).delete()}))}))}},{key:"render",value:function(){var e=this,t=function(e){console.log("The payment was cancelled!",e)},n=function(e){console.log("Error!",e)},o={sandbox:"AenerYjabnjEnZUfu4Fh05OeYpZv1cYFxYIXG5N17LQ6qdx5WWwpr_sXX2X4KWvScd6tm_6RnuKY8mSs",production:"AaWWrMSlrSXr4mcyiJdA1rF3smBtkc0GcCN1-A2oSjaAbJ6CQ1TXLDhKEFQuhFsLl50dANZaC48dBAED"},i="Ticketing veiwing and pay";return this.state.Ticket,O("div",{},void 0,O(r.Helmet,{},void 0,O("title",{},void 0,"Ticket"),O("meta",{name:"description",content:i}),O("meta",{property:"og:title",content:"Ticket"}),O("meta",{property:"og:description",content:i}),O("meta",{property:"twitter:title",content:"Ticket"}),O("meta",{property:"twitter:description",content:i})),O(T.a,{title:"Ticket",whiteBg:!0,icon:"ios-menu-outline",desc:""},void 0,O(a.a,{},void 0,C,O(l.a,{},void 0,this.state.Ticket&&this.state.Ticket.map((function(i,r){return O(v.a,{},void 0,O(f.a,{padding:"default"},void 0,O("strong",{},void 0," ",i.LicensePlate," ")),O(f.a,{align:"right"},void 0,i.FineAmount),O(f.a,{align:"right"},void 0,i.Vehicle),O(f.a,{align:"right",style:{color:"red"}},void 0,O("strong",{},void 0,i.Offences.map((function(e){return O("p",{},void 0,e)})))),O(f.a,{align:"right",style:{color:"green"}},void 0,O("strong",{},void 0,i.Status)),O(f.a,{align:"right"},void 0,"open"===i.Status&&O(b.a,{env:"sandbox",client:o,currency:"USD",total:i.FineAmount,onError:n,onSuccess:e.onSuccess.bind(e,i),onCancel:t}),"reported"===i.Status&&O(g.a,{type:"submit",onClick:e.clickMe.bind(e,i),"aria-label":"delete"},void 0,F,i.status),"closed"===i.Status&&O(g.a,{type:"submit",onClick:e.clickMe.bind(e,i),"aria-label":"delete"},void 0,R)))}))))),x)}}])&&D(t.prototype,n),o&&D(t,o),c}(i.Component);t.default=X}}]);