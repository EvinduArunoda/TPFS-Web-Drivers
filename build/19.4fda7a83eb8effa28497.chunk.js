(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{a5e146f1f3de3987ce62:function(e,t,n){"use strict";n.r(t);var i,r=n("8af190b70a6bc55c6f1b"),o=n.n(r),a=(n("8a2d1b95e05b6a321e74"),n("0d939196e59ed73c94e6")),l=n("921c0b8c557fe6ba5da8"),s=n.n(l),c=n("711f9393a7bdb8588a8c"),u=n("41069c99334ae719cbe9");function d(e){return(d="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t,n,r){i||(i="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),t&&o)for(var l in o)void 0===t[l]&&(t[l]=o[l]);else t||(t=o||{});if(1===a)t.children=r;else if(a>1){for(var s=new Array(a),c=0;c<a;c++)s[c]=arguments[c+3];t.children=s}return{$$typeof:i,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function p(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e,t){return!t||"object"!==d(t)&&"function"!==typeof t?b(e):t}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var v=f(a.Grid,{item:!0},void 0,f(c.Face,{})),g=f("label",{},void 0,"Email address"),w=f("strong",{},void 0,"Useremail:"),S=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(o,e);var t,n,i,r=function(e){function t(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}return function(){var n,i=h(e);if(t()){var r=h(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return y(this,n)}}(o);function o(e){var t,n,i,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),t=r.call(this,e),n=b(t),a=function(e){var n=e.target,i=!(0===n.value.length),r=n.value.includes("@"),o=n.value.includes(".com"),a=i&&r&&o,l=a;t.setState({email:n.value,emailValid:a,submitDisabled:!l})},(i="handleEmailChange")in n?Object.defineProperty(n,i,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[i]=a,t.resetpassword=t.resetpassword.bind(b(t)),t.handleEmailChange=t.handleEmailChange.bind(b(t)),t.state={email:"",EmailFormat:!0,emailValid:!0,submitDisabled:!0},t}return t=o,(n=[{key:"resetpassword",value:function(){u.a.auth().sendPasswordResetEmail(this.state.email).then((function(){console.log("email sent!"),window.location.href="/sendlink"})).catch((function(e){}))}},{key:"render",value:function(){this.state,this.state.showPassword;var e=this.props.classes;return f(a.Paper,{className:e.padding},void 0,f(s.a,{variant:"h4",className:e.title,gutterBottom:!0},void 0,"TPFS-Driver Reset Paasword"),f("div",{className:e.margin},void 0,f(a.Grid,{container:!0,spacing:8,alignItems:"flex-end"},void 0,v,f(a.Grid,{item:!0,md:!0,sm:!0,xs:!0},void 0,g,f(a.Input,{id:"email",label:"email",type:"email",placeholder:"Email",onChange:this.handleEmailChange,value:this.state.email,fullWidth:!0,autoFocus:!0,required:!0}),f("div",{},void 0,!this.state.emailValid&&f("span",{style:{color:"red"}},void 0,"Invalid Email")))),f(a.Grid,{container:!0,spacing:8,alignItems:"flex-end"},void 0,f(a.Grid,{item:!0,md:!0,sm:!0,xs:!0},void 0,f("p",{style:{color:"black"}},void 0,w),f("p",{style:{color:"grey"}},void 0,"A reset email link will be send to your email address. Use that link for reset your password"),f("p",{style:{color:"grey"}},void 0,"The email you given should be the user email you have been registered"))),f(a.Grid,{container:!0,justify:"center",style:{marginTop:"10px"}},void 0,f(a.Button,{"data-testid":"reset",disabled:this.state.submitDisabled,type:"submit",variant:"outlined",onClick:this.resetpassword,color:"primary",style:{textTransform:"none"}},void 0,"Send Reset Link"))))}}])&&p(t.prototype,n),i&&p(t,i),o}(o.a.Component);t.default=Object(a.withStyles)((function(e){return{margin:{margin:e.spacing(2)},padding:{padding:e.spacing(1)}}}))(S)}}]);