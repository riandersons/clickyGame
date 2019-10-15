(this["webpackJsonpclicky-game"]=this["webpackJsonpclicky-game"]||[]).push([[0],[,,,,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"image":"/assets/images/beth.png","clicked":false},{"id":2,"image":"/assets/images/birdperson.png","clicked":false},{"id":3,"image":"/assets/images/evilmorty.png","clicked":false},{"id":4,"image":"/assets/images/gianthead.png","clicked":false},{"id":5,"image":"/assets/images/goldenford.png","clicked":false},{"id":6,"image":"/assets/images/jerry.png","clicked":false},{"id":7,"image":"/assets/images/jessica.png","clicked":false},{"id":8,"image":"/assets/images/meeseeks.png","clicked":false},{"id":9,"image":"/assets/images/morty.png","clicked":false},{"id":10,"image":"/assets/images/mr.png","clicked":false},{"id":11,"image":"/assets/images/rick.png","clicked":false},{"id":12,"image":"/assets/images/summer.png","clicked":false}]')},function(e,t,a){e.exports=a(22)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),i=a.n(c),o=a(8),s=a(1),l=a(2),u=a(4),m=a(3),f=a(5),d=(a(15),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={message:"",animating:!1},a.renderMessage=function(){switch(a.state.message){case"correct":return"You guessed correctly!";case"incorrect":return"You guessed incorrectly!";default:return"Click an image to begin!"}},a}return Object(f.a)(t,e),Object(l.a)(t,[{key:"componentDidUpdate",value:function(e,t){var a=e.score,n=e.topScore,r={animating:!0};r.message=0===a&&0===n?"":0===a&&n>0?"incorrect":"correct",a===this.props.score&&this.state.message===r.message||this.setState(r)}},{key:"render",value:function(){var e=this;return r.a.createElement("li",{className:this.state.animating?this.state.message:"",onAnimationEnd:function(){return e.setState({animating:!1})}},this.renderMessage())}}]),t}(n.Component));a(16);var g=function(e){return r.a.createElement("nav",{className:"navbar"},r.a.createElement("ul",null,r.a.createElement("li",{className:"brand"},r.a.createElement("a",{href:"/"},"Clicky Game")),r.a.createElement(d,{score:e.score,topScore:e.topScore}),r.a.createElement("li",null,"Score: ",e.score," | Top Score: ",e.topScore)))};a(17);var h=function(){return r.a.createElement("header",{className:"header"},r.a.createElement("h1",null,"Clicky Game!"),r.a.createElement("h2",null,"Click on an image to earn points, but don't click on any more than once!"))};a(18);var p=function(e){return r.a.createElement("main",{className:"container"},e.children)};a(19);var v=function(e){return r.a.createElement("div",{role:"img","aria-label":"click item",onClick:function(){return e.handleClick(e.id)},style:{backgroundImage:'url("'.concat(e.image,'")')},className:"click-item".concat(e.shake?" shake":"")})};a(20);var k=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"bottom"},"Clicky Game! ",r.a.createElement("img",{alt:"react",src:"assets/images/react.svg"})))},b=a(9);function y(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function w(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?y(a,!0).forEach((function(t){Object(o.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):y(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var E=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={data:b,score:0,topScore:0},a.handleCorrectGuess=function(e){var t=a.state,n=t.topScore,r=t.score+1,c=Math.max(r,n);a.setState({data:a.shuffleData(e),score:r,topScore:c})},a.handleIncorrectGuess=function(e){a.setState({data:a.resetData(e),score:0})},a.resetData=function(e){var t=e.map((function(e){return w({},e,{clicked:!1})}));return a.shuffleData(t)},a.shuffleData=function(e){for(var t=e.length-1;t>0;){var a=Math.floor(Math.random()*(t+1)),n=e[t];e[t]=e[a],e[a]=n,t--}return e},a.handleItemClick=function(e){var t=!1,n=a.state.data.map((function(a){var n=w({},a);return n.id===e&&(n.clicked||(n.clicked=!0,t=!0)),n}));t?a.handleCorrectGuess(n):a.handleIncorrectGuess(n)},a}return Object(f.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.setState({data:this.shuffleData(this.state.data)})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(g,{score:this.state.score,topScore:this.state.topScore}),r.a.createElement(h,null),r.a.createElement(p,null,this.state.data.map((function(t){return r.a.createElement(v,{key:t.id,id:t.id,shake:!e.state.score&&e.state.topScore,handleClick:e.handleItemClick,image:t.image})}))),r.a.createElement(k,null))}}]),t}(n.Component);var O=function(){return r.a.createElement(E,null)},j=(a(21),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function S(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(r.a.createElement(O,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");j?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):S(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):S(e)}))}}()}],[[10,1,2]]]);
//# sourceMappingURL=main.1aaf9de5.chunk.js.map