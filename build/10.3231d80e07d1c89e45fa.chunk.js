(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"4baf978c269f7e83ac7b":function(t,e,n){"use strict";n.r(e);var o,i=n("8af190b70a6bc55c6f1b"),r=n.n(i),a=n("0d7f0986bcd2f33d8a2a"),c=n("6938d226fd372a75cbf9"),l=n("4dd2a92e69dcbe1bab10"),u=n("1037a6e0d5914309f74c"),f=n.n(u),s=(n("8a2d1b95e05b6a321e74"),n("b02fe3f80d4238b52f20")),d=n.n(s),p=n("435859b6b76fb67a754a"),b=n.n(p),y=(n("2618892602a0e7905b7d"),n("921c0b8c557fe6ba5da8")),m=n.n(y),h=(n("d7dd51e1bf6bfc2c9c3d"),n("2aea235afd5c55b8b19b")),v=n.n(h),w=n("0d939196e59ed73c94e6"),g=(n("0bc9fc40db0c3d94f9cf"),n("41069c99334ae719cbe9"));function S(t){return(S="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function O(t,e,n,i){o||(o="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=t&&t.defaultProps,a=arguments.length-3;if(e||0===a||(e={children:void 0}),e&&r)for(var c in r)void 0===e[c]&&(e[c]=r[c]);else e||(e=r||{});if(1===a)e.children=i;else if(a>1){for(var l=new Array(a),u=0;u<a;u++)l[u]=arguments[u+3];e.children=l}return{$$typeof:o,type:t,key:void 0===n?null:""+n,ref:null,props:e,_owner:null}}function C(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function D(t,e){return(D=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function j(t,e){return!e||"object"!==S(e)&&"function"!==typeof e?_(t):e}function _(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function R(t){return(R=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function P(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var x,k=O(m.a,{variant:"h5",component:"h3"},void 0,"Complaint Form"),T=O(v.a,{color:"secondary",type:"button"},void 0,"Complaint Details"),E=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&D(t,e)}(r,t);var e,n,o,i=function(t){function e(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}return function(){var n,o=R(t);if(e()){var i=R(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return j(this,n)}}(r);function r(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),P(_(t=i.call(this)),"handleDescriptionChange",(function(e){var n=e.target,o=n.value.length>5,i=t.state.TitleValid&&o;t.setState({description:n.value,DescriptionValid:o,submitDisabled:!i})})),P(_(t),"handleTitleChange",(function(e){var n=e.target,o=n.value.length>7,i=t.state.DescriptionValid&&o;t.setState({title:n.value,TitleValid:o,submitDisabled:!i})})),P(_(t),"onSubmit",(function(e){e.preventDefault();var n=t.state,o=n.title,i=n.description;g.a.auth().onAuthStateChanged((function(e){if(e){var n=g.a.firestore().doc("Drivers/"+e.uid),r=new Date;t.ref.add({title:o,description:i,user:n,status:0,timestamp:r}).then((function(e){t.setState({title:"",description:"",timestamp:"",user:"",status:""}),window.alert("Your Complaint has been Submitted successfully. We will get back to you soon")})).catch((function(t){window.alert("Error adding document: ",t)}))}}))})),t.ref=g.a.firestore().collection("Complaint"),t.state={title:"",description:"",date:"",user:"",submitDisabled:!0,DescriptionValid:!1,TitleValid:!1},t}return e=r,(n=[{key:"render",value:function(){var t=this.state,e=(t.policeman,t.policestation,t.email,t.nic,t.complaint,t.date,this.props),n=e.classes,o=(e.handleSubmit,e.pristine),i=e.reset,r=e.submitting;return e.init,e.clear,O("div",{},void 0,O(b.a,{container:!0,spacing:3,alignItems:"flex-start",direction:"row",justify:"center"},void 0,O(b.a,{item:!0,xs:12,md:6},void 0,O(d.a,{className:n.root},void 0,k,O("div",{className:n.buttonInit},void 0,T,O(v.a,{onClick:this.onReset,type:"submit"},void 0,"Reset")),O("form",{"data-testid":"form",onSubmit:this.onSubmit},void 0,O("div",{},void 0,O(w.Input,{name:"title",id:"title",placeholder:"Voilation Type",label:"title",required:!0,value:this.state.title,onChange:this.handleTitleChange,className:n.field})),O("div",{className:n.field},void 0,O("textarea",{name:"description",id:"description",className:n.field,placeholder:"Complaint",label:"Complaint Details",value:this.state.description,onChange:this.handleDescriptionChange,rows:4})),O("div",{},void 0,O(v.a,{"data-testid":"complaint",variant:"contained",color:"secondary",type:"submit",disabled:this.state.submitDisabled},void 0,"Submit"),O(v.a,{type:"button",disabled:o||r,onClick:i},void 0,"Reset")))))))}}])&&C(e.prototype,n),o&&C(e,o),r}(i.Component);function V(t){return(V="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function N(t,e,n,o){x||(x="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var i=t&&t.defaultProps,r=arguments.length-3;if(e||0===r||(e={children:void 0}),e&&i)for(var a in i)void 0===e[a]&&(e[a]=i[a]);else e||(e=i||{});if(1===r)e.children=o;else if(r>1){for(var c=new Array(r),l=0;l<r;l++)c[l]=arguments[l+3];e.children=c}return{$$typeof:x,type:t,key:void 0===n?null:""+n,ref:null,props:e,_owner:null}}function A(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function F(t,e){return(F=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function I(t,e){return!e||"object"!==V(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function $(t){return($=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var B=N(Object(c.withStyles)((function(t){return{root:{flexGrow:1,padding:30},field:{width:"100%",marginBottom:20},fieldBasic:{width:"100%",marginBottom:20,marginTop:10},inlineWrap:{display:"flex",flexDirection:"row"},buttonInit:{margin:t.spacing(4),textAlign:"center"}}}))(E),{}),G=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&F(t,e)}(r,t);var e,n,o,i=function(t){function e(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}return function(){var n,o=$(t);if(e()){var i=$(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return I(this,n)}}(r);function r(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),i.apply(this,arguments)}return e=r,(n=[{key:"componentDidMount",value:function(){g.a.auth().onAuthStateChanged((function(t){t||(window.location.href="/login")}))}},{key:"render",value:function(){var t=f.a.name+" - Form",e=f.a.desc;return N("div",{},void 0,N(a.Helmet,{},void 0,N("title",{},void 0,t),N("meta",{name:"description",content:e}),N("meta",{property:"og:title",content:t}),N("meta",{property:"og:description",content:e}),N("meta",{property:"twitter:title",content:t}),N("meta",{property:"twitter:description",content:e})),N(l.f,{title:"Complaint",icon:"ios-list-box-outline",desc:""},void 0,N("div",{},void 0,B,N(l.i,{componentName:"containers/Forms/demos/ReduxFormDemo.js"}))))}}])&&A(e.prototype,n),o&&A(e,o),r}(r.a.Component);e.default=Object(c.withStyles)({root:{flexGrow:1}})(G)}}]);