!function(){"use strict";var n={426:function(n,t,e){e.d(t,{Z:function(){return w}});var o=e(81),r=e.n(o),i=e(645),a=e.n(i),C=e(667),s=e.n(C),c=new URL(e(529),e.b),l=new URL(e(169),e.b),d=new URL(e(471),e.b),u=new URL(e(17),e.b),p=new URL(e(883),e.b),f=new URL(e(997),e.b),g=a()(r()),h=s()(c),m=s()(l),v=s()(d),x=s()(u),b=s()(p),L=s()(f);g.push([n.id,`.calc {\n  margin: 50px auto;\n  max-width: 300px;\n  height: 500px;\n  border-radius: 20px;\n  font-family: Arial;\n  padding: 18px;\n  overflow: hidden;\n  position: relative;\n}\n\n.calc.dark-them {    \n    background: #3f3e3e;\n    color: #fff;\n}\n\n.calc.light-them {    \n    background: #dad9d9;\n    color: #000000;\n}\n\n.setting-block {\n    max-width: 300px;\n    height: 40px;\n    line-height: 40px;\n    text-align: center;\n    font-size: 1.4rem;\n    cursor: pointer;\n    user-select: none;\n    position: relative;\n}\n.setting {\n    margin: flex;\n    width: 40px;\n    height: 40px;\n    line-height: 40px;\n    text-align: center;\n    font-size: 1.2rem;\n    cursor: pointer;\n    user-select: none;\n    position: absolute;\n    top: 0;\n    left: 0;\n    cursor: pointer;\n    z-index: 500;\n    \n    background-position: center;\n    background-size: cover;\n}\n\n.setting.dark-them {\n    background-image: url(${h});\n}\n\n.setting.light-them {\n    background-image: url(${m});\n}\n\n.setting img {\n    width: 40px;\n}\n\n.calc-screen {\n    height: 60px;\n    padding: 10px 0;\n    margin-bottom: 25px;\n    display: flex;\n    width: 100%;\n    justify-content: end;\n    overflow: hidden;\n}\n\n.calc-screen p {\n    cursor: pointer;\n    user-select: none;\n    text-align: right;\n    font-size: 4rem;\n    margin: 0;\n}\n\n.button {\n    display: grid;\n    grid-template-areas:\n    "ac del plus-minus division"\n    "seven eight nine multi"\n    "four five siz minus"\n    "one two three plus"\n    "zero zero dot equal";\n    grid-gap: 7px;\n    justify-Items: center;\n}\n\n.btn {\n    width: 60px;\n    height: 60px;\n    border-radius: 50%;\n    line-height: 60px;\n    text-align: center;\n    font-size: 1.5rem;\n    cursor: pointer;\n    user-select: none;\n}\n\n.btn.dark-them {\n    background: #272727;\n}\n\n.btn.light-them {\n    background: #8b8b8b;\n}\n\n\n.btn.zero {\n    grid-area: zero;\n    width: 100%;\n    border-radius: 34px;\n}\n\n.btn:hover.dark-them {\n    filter: brightness(120%);\n}\n\n.btn:active.dark-them {\n    filter: brightness(90%);\n} \n\n.btn:hover.light-them {\n    filter: brightness(90%);\n}\n\n.btn:active.light-them {\n    filter: brightness(120%);\n} \n\n.btn.bg-grey.dark-them {\n    background: #8f8e8e;\n}\n\n.btn.bg-grey.light-them {\n    background: #b1afaf;\n}\n\n.btn.bg-orange.dark-them {\n    background: #ff9501;\n}\n\n.btn.bg-orange.light-them {\n    background: #ffae3e;\n}\n\n.settings-menu {\n    border-radius: 20px;\n    position: absolute;\n    width: 250px;\n    height: 536px;\n    top: 0;\n    left: 0;\n}\n.settings-menu.dark-them {\n    background-color: #4e4e4e;\n}\n.settings-menu.light-them {\n    background-color: #c7c5c5;\n}\n.settings-menu._active {\n    opacity: 100;\n    transform: translateX(0);\n    transition: transform 400ms, opacity 300ms;\n}\n.settings-menu._inactive {\n    opacity: 0;\n    transform: translateX(-100%);\n    transition: transform 300ms, opacity 500ms;\n}\n\n.block-panel {\n    max-width: 250px;\n    height: 70px;\n}\n\n.navigation-panel ol {\n  text-decoration: none;\n  list-style: none;\n  padding: 0 8px;\n}\n\n.navi-btn {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: none;\n  border: none;\n  font-family: Arial;\n  font-size: 1.4rem;\n}\n.navi-btn.dark-them {\n  color: #fff;\n}\n\n.sun-btn {\n    background-position: center;\n    background-size: cover;\n    display: inline-block;\n    width: 35px;\n    height: 35px;\n}\n\n.sun-btn.dark-them {\n    background-image: url(${v});\n}\n.sun-btn.light-them {\n    background-image: url(${x});\n}\n\n.moon-btn {\n    background-position: center;\n    background-size: cover;\n    display: inline-block;\n    width: 35px;\n    height: 35px;\n}\n\n.moon-btn.dark-them {\n    background-image: url(${b});\n}\n\n.moon-btn.light-them {\n    background-image: url(${L});\n}\n\n.navi-btn * {\n    pointer-events: none;\n}\n\n.navi-btn:active {\n  filter: brightness(70%);\n} \n\n.navigation-panel img {\n    width: 40px;\n}\n\n/* body {\n    height: 700px;\n    \n    background: linear-gradient(to top left, rgb(255, 0, 0), rgb(73, 71, 71));\n    } */\n\n/* .btn {\n    width: 100px;\n    height: 100px;\n    font-size: 20px;\n    border-radius: 1em;\n    border: 8px solid #4e47b4;\n    transition: background-color 300ms, border 400ms;\n}\n\n.btn:hover {\n    border: 8px solid #b447b4;\n    background-color: rgb(17, 0, 255);\n    box-shadow:7px 6px 14px #000;\n}\n\n.btn-1 {\n    background-color: red;\n}\n\n.btn-2 {\n    background-color: #b45747;\n}\n\n* {\n    margin: 0;\n    box-sizing: border-box;\n    border: none;\n}\n\nbody {\n    font-size: 14px;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    padding: 100px;\n    background-color: blanchedalmond;\n}\n\n.dialog {\n    width: 300px;\n    height: 200px;\n    background-color: aquamarine;\n    position: fixed;\n    z-index: 100;\n    opacity: 0;\n    pointer-events: none;\n    transition: opacity 500ms, transform 500ms;\n    transform: translateX(-100%);\n}\n\n.dialog.active {\n    display: block;\n    pointer-events: all;\n    opacity: 100%;\n    transform: translateX(0);\n}\n\n#text {\n    text-align: right;\n} */\n`,""]);const w=g},645:function(n){n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",o=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),o&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),o&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var C=0;C<this.length;C++){var s=this[C][0];null!=s&&(a[s]=!0)}for(var c=0;c<n.length;c++){var l=[].concat(n[c]);o&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},667:function(n){n.exports=function(n,t){return t||(t={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),t.hash&&(n+=t.hash),/["'() \t\n]|(%20)/.test(n)||t.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:function(n){n.exports=function(n){return n[1]}},379:function(n){var t=[];function e(n){for(var e=-1,o=0;o<t.length;o++)if(t[o].identifier===n){e=o;break}return e}function o(n,o){for(var i={},a=[],C=0;C<n.length;C++){var s=n[C],c=o.base?s[0]+o.base:s[0],l=i[c]||0,d="".concat(c," ").concat(l);i[c]=l+1;var u=e(d),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)t[u].references++,t[u].updater(p);else{var f=r(p,o);o.byIndex=C,t.splice(C,0,{identifier:d,updater:f,references:1})}a.push(d)}return a}function r(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var C=e(i[a]);t[C].references--}for(var s=o(n,r),c=0;c<i.length;c++){var l=e(i[c]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=s}}},569:function(n){var t={};n.exports=function(n,e){var o=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}},216:function(n){n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},565:function(n,t,e){n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},795:function(n){n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var o="";e.supports&&(o+="@supports (".concat(e.supports,") {")),e.media&&(o+="@media ".concat(e.media," {"));var r=void 0!==e.layer;r&&(o+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),o+=e.css,r&&(o+="}"),e.media&&(o+="}"),e.supports&&(o+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},589:function(n){n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}},17:function(n){n.exports="data:image/svg+xml,%3C%3Fxml version=%271.0%27 encoding=%27utf-8%27%3F%3E%3C%21-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --%3E%3Csvg width=%27800px%27 height=%27800px%27 viewBox=%270 0 24 24%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M12 17.75C10.8628 17.75 9.75106 17.4128 8.80547 16.781C7.85989 16.1491 7.1229 15.2511 6.6877 14.2004C6.25249 13.1498 6.13862 11.9936 6.36049 10.8782C6.58235 9.76284 7.12999 8.73829 7.93414 7.93414C8.73829 7.12999 9.76284 6.58235 10.8782 6.36049C11.9936 6.13862 13.1498 6.25249 14.2004 6.6877C15.2511 7.1229 16.1491 7.85989 16.781 8.80547C17.4128 9.75106 17.75 10.8628 17.75 12C17.7474 13.5242 17.1407 14.9852 16.0629 16.0629C14.9852 17.1407 13.5242 17.7474 12 17.75ZM12 7.75C11.1594 7.75 10.3377 7.99926 9.63883 8.46626C8.93992 8.93325 8.39519 9.59701 8.07351 10.3736C7.75184 11.1502 7.66768 12.0047 7.83167 12.8291C7.99565 13.6536 8.40043 14.4108 8.9948 15.0052C9.58917 15.5996 10.3464 16.0044 11.1709 16.1683C11.9953 16.3323 12.8498 16.2482 13.6264 15.9265C14.403 15.6048 15.0668 15.0601 15.5337 14.3612C16.0007 13.6623 16.25 12.8406 16.25 12C16.2474 10.8736 15.7987 9.79417 15.0023 8.99772C14.2058 8.20126 13.1264 7.75264 12 7.75Z%27 fill=%27%23000%27/%3E%3Cpath d=%27M12 5C11.8019 4.99741 11.6126 4.91756 11.4725 4.77747C11.3324 4.63737 11.2526 4.44811 11.25 4.25V2.75C11.25 2.55109 11.329 2.36032 11.4697 2.21967C11.6103 2.07902 11.8011 2 12 2C12.1989 2 12.3897 2.07902 12.5303 2.21967C12.671 2.36032 12.75 2.55109 12.75 2.75V4.25C12.7474 4.44811 12.6676 4.63737 12.5275 4.77747C12.3874 4.91756 12.1981 4.99741 12 5Z%27 fill=%27%23000%27/%3E%3Cpath d=%27M12 22C11.8019 21.9974 11.6126 21.9176 11.4725 21.7775C11.3324 21.6374 11.2526 21.4481 11.25 21.25V19.75C11.25 19.5511 11.329 19.3603 11.4697 19.2197C11.6103 19.079 11.8011 19 12 19C12.1989 19 12.3897 19.079 12.5303 19.2197C12.671 19.3603 12.75 19.5511 12.75 19.75V21.25C12.7474 21.4481 12.6676 21.6374 12.5275 21.7775C12.3874 21.9176 12.1981 21.9974 12 22Z%27 fill=%27%23000%27/%3E%3Cpath d=%27M21.25 12.75H19.75C19.5511 12.75 19.3603 12.671 19.2197 12.5303C19.079 12.3897 19 12.1989 19 12C19 11.8011 19.079 11.6103 19.2197 11.4697C19.3603 11.329 19.5511 11.25 19.75 11.25H21.25C21.4489 11.25 21.6397 11.329 21.7803 11.4697C21.921 11.6103 22 11.8011 22 12C22 12.1989 21.921 12.3897 21.7803 12.5303C21.6397 12.671 21.4489 12.75 21.25 12.75Z%27 fill=%27%23000%27/%3E%3Cpath d=%27M4.25 12.75H2.75C2.55109 12.75 2.36032 12.671 2.21967 12.5303C2.07902 12.3897 2 12.1989 2 12C2 11.8011 2.07902 11.6103 2.21967 11.4697C2.36032 11.329 2.55109 11.25 2.75 11.25H4.25C4.44891 11.25 4.63968 11.329 4.78033 11.4697C4.92098 11.6103 5 11.8011 5 12C5 12.1989 4.92098 12.3897 4.78033 12.5303C4.63968 12.671 4.44891 12.75 4.25 12.75Z%27 fill=%27%23000%27/%3E%3Cpath d=%27M6.50001 7.24995C6.30707 7.2352 6.12758 7.14545 6.00001 6.99995L4.91001 5.99995C4.83844 5.92838 4.78167 5.84341 4.74293 5.7499C4.7042 5.65639 4.68427 5.55617 4.68427 5.45495C4.68427 5.35373 4.7042 5.25351 4.74293 5.16C4.78167 5.06649 4.83844 4.98152 4.91001 4.90995C4.98158 4.83838 5.06655 4.78161 5.16006 4.74287C5.25357 4.70414 5.3538 4.6842 5.45501 4.6842C5.55623 4.6842 5.65645 4.70414 5.74996 4.74287C5.84347 4.78161 5.92844 4.83838 6.00001 4.90995L7.00001 5.99995C7.123 6.13746 7.19099 6.31547 7.19099 6.49995C7.19099 6.68443 7.123 6.86244 7.00001 6.99995C6.87244 7.14545 6.69295 7.2352 6.50001 7.24995Z%27 fill=%27%23000%27/%3E%3Cpath d=%27M18.56 19.31C18.4615 19.3104 18.3638 19.2912 18.2728 19.2534C18.1818 19.2157 18.0993 19.1601 18.03 19.09L17 18C16.9332 17.86 16.9114 17.7028 16.9376 17.5499C16.9638 17.3971 17.0368 17.2561 17.1465 17.1464C17.2561 17.0368 17.3971 16.9638 17.55 16.9376C17.7028 16.9113 17.8601 16.9331 18 17L19.09 18C19.2305 18.1406 19.3094 18.3312 19.3094 18.53C19.3094 18.7287 19.2305 18.9194 19.09 19.06C19.0233 19.1355 18.9419 19.1967 18.8508 19.2397C18.7597 19.2827 18.6607 19.3066 18.56 19.31Z%27 fill=%27%23000%27/%3E%3Cpath d=%27M17.5 7.24995C17.3071 7.2352 17.1276 7.14545 17 6.99995C16.877 6.86244 16.809 6.68443 16.809 6.49995C16.809 6.31547 16.877 6.13746 17 5.99995L18 4.90995C18.1445 4.76541 18.3406 4.6842 18.545 4.6842C18.7494 4.6842 18.9455 4.76541 19.09 4.90995C19.2345 5.05449 19.3158 5.25054 19.3158 5.45495C19.3158 5.65936 19.2345 5.85541 19.09 5.99995L18 6.99995C17.8724 7.14545 17.6929 7.2352 17.5 7.24995Z%27 fill=%27%23000%27/%3E%3Cpath d=%27M5.44001 19.31C5.34147 19.3104 5.24383 19.2912 5.15282 19.2534C5.06181 19.2157 4.97926 19.1601 4.91001 19.09C4.76956 18.9494 4.69067 18.7587 4.69067 18.56C4.69067 18.3612 4.76956 18.1706 4.91001 18.03L6.00001 17C6.13997 16.9331 6.2972 16.9113 6.45006 16.9376C6.60293 16.9638 6.7439 17.0368 6.85357 17.1464C6.96324 17.2561 7.03621 17.3971 7.06244 17.5499C7.08866 17.7028 7.06685 17.86 7.00001 18L6.00001 19.09C5.92728 19.1638 5.83985 19.2216 5.74338 19.2595C5.64691 19.2974 5.54356 19.3146 5.44001 19.31Z%27 fill=%27%23000%27/%3E%3C/svg%3E"},471:function(n){n.exports="data:image/svg+xml,%3C%3Fxml version=%271.0%27 encoding=%27utf-8%27%3F%3E%3C%21-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --%3E%3Csvg width=%27800px%27 height=%27800px%27 viewBox=%270 0 24 24%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M12 17.75C10.8628 17.75 9.75106 17.4128 8.80547 16.781C7.85989 16.1491 7.1229 15.2511 6.6877 14.2004C6.25249 13.1498 6.13862 11.9936 6.36049 10.8782C6.58235 9.76284 7.12999 8.73829 7.93414 7.93414C8.73829 7.12999 9.76284 6.58235 10.8782 6.36049C11.9936 6.13862 13.1498 6.25249 14.2004 6.6877C15.2511 7.1229 16.1491 7.85989 16.781 8.80547C17.4128 9.75106 17.75 10.8628 17.75 12C17.7474 13.5242 17.1407 14.9852 16.0629 16.0629C14.9852 17.1407 13.5242 17.7474 12 17.75ZM12 7.75C11.1594 7.75 10.3377 7.99926 9.63883 8.46626C8.93992 8.93325 8.39519 9.59701 8.07351 10.3736C7.75184 11.1502 7.66768 12.0047 7.83167 12.8291C7.99565 13.6536 8.40043 14.4108 8.9948 15.0052C9.58917 15.5996 10.3464 16.0044 11.1709 16.1683C11.9953 16.3323 12.8498 16.2482 13.6264 15.9265C14.403 15.6048 15.0668 15.0601 15.5337 14.3612C16.0007 13.6623 16.25 12.8406 16.25 12C16.2474 10.8736 15.7987 9.79417 15.0023 8.99772C14.2058 8.20126 13.1264 7.75264 12 7.75Z%27 fill=%27%23f3f3f3%27/%3E%3Cpath d=%27M12 5C11.8019 4.99741 11.6126 4.91756 11.4725 4.77747C11.3324 4.63737 11.2526 4.44811 11.25 4.25V2.75C11.25 2.55109 11.329 2.36032 11.4697 2.21967C11.6103 2.07902 11.8011 2 12 2C12.1989 2 12.3897 2.07902 12.5303 2.21967C12.671 2.36032 12.75 2.55109 12.75 2.75V4.25C12.7474 4.44811 12.6676 4.63737 12.5275 4.77747C12.3874 4.91756 12.1981 4.99741 12 5Z%27 fill=%27%23f3f3f3%27/%3E%3Cpath d=%27M12 22C11.8019 21.9974 11.6126 21.9176 11.4725 21.7775C11.3324 21.6374 11.2526 21.4481 11.25 21.25V19.75C11.25 19.5511 11.329 19.3603 11.4697 19.2197C11.6103 19.079 11.8011 19 12 19C12.1989 19 12.3897 19.079 12.5303 19.2197C12.671 19.3603 12.75 19.5511 12.75 19.75V21.25C12.7474 21.4481 12.6676 21.6374 12.5275 21.7775C12.3874 21.9176 12.1981 21.9974 12 22Z%27 fill=%27%23f3f3f3%27/%3E%3Cpath d=%27M21.25 12.75H19.75C19.5511 12.75 19.3603 12.671 19.2197 12.5303C19.079 12.3897 19 12.1989 19 12C19 11.8011 19.079 11.6103 19.2197 11.4697C19.3603 11.329 19.5511 11.25 19.75 11.25H21.25C21.4489 11.25 21.6397 11.329 21.7803 11.4697C21.921 11.6103 22 11.8011 22 12C22 12.1989 21.921 12.3897 21.7803 12.5303C21.6397 12.671 21.4489 12.75 21.25 12.75Z%27 fill=%27%23f3f3f3%27/%3E%3Cpath d=%27M4.25 12.75H2.75C2.55109 12.75 2.36032 12.671 2.21967 12.5303C2.07902 12.3897 2 12.1989 2 12C2 11.8011 2.07902 11.6103 2.21967 11.4697C2.36032 11.329 2.55109 11.25 2.75 11.25H4.25C4.44891 11.25 4.63968 11.329 4.78033 11.4697C4.92098 11.6103 5 11.8011 5 12C5 12.1989 4.92098 12.3897 4.78033 12.5303C4.63968 12.671 4.44891 12.75 4.25 12.75Z%27 fill=%27%23f3f3f3%27/%3E%3Cpath d=%27M6.50001 7.24995C6.30707 7.2352 6.12758 7.14545 6.00001 6.99995L4.91001 5.99995C4.83844 5.92838 4.78167 5.84341 4.74293 5.7499C4.7042 5.65639 4.68427 5.55617 4.68427 5.45495C4.68427 5.35373 4.7042 5.25351 4.74293 5.16C4.78167 5.06649 4.83844 4.98152 4.91001 4.90995C4.98158 4.83838 5.06655 4.78161 5.16006 4.74287C5.25357 4.70414 5.3538 4.6842 5.45501 4.6842C5.55623 4.6842 5.65645 4.70414 5.74996 4.74287C5.84347 4.78161 5.92844 4.83838 6.00001 4.90995L7.00001 5.99995C7.123 6.13746 7.19099 6.31547 7.19099 6.49995C7.19099 6.68443 7.123 6.86244 7.00001 6.99995C6.87244 7.14545 6.69295 7.2352 6.50001 7.24995Z%27 fill=%27%23f3f3f3%27/%3E%3Cpath d=%27M18.56 19.31C18.4615 19.3104 18.3638 19.2912 18.2728 19.2534C18.1818 19.2157 18.0993 19.1601 18.03 19.09L17 18C16.9332 17.86 16.9114 17.7028 16.9376 17.5499C16.9638 17.3971 17.0368 17.2561 17.1465 17.1464C17.2561 17.0368 17.3971 16.9638 17.55 16.9376C17.7028 16.9113 17.8601 16.9331 18 17L19.09 18C19.2305 18.1406 19.3094 18.3312 19.3094 18.53C19.3094 18.7287 19.2305 18.9194 19.09 19.06C19.0233 19.1355 18.9419 19.1967 18.8508 19.2397C18.7597 19.2827 18.6607 19.3066 18.56 19.31Z%27 fill=%27%23f3f3f3%27/%3E%3Cpath d=%27M17.5 7.24995C17.3071 7.2352 17.1276 7.14545 17 6.99995C16.877 6.86244 16.809 6.68443 16.809 6.49995C16.809 6.31547 16.877 6.13746 17 5.99995L18 4.90995C18.1445 4.76541 18.3406 4.6842 18.545 4.6842C18.7494 4.6842 18.9455 4.76541 19.09 4.90995C19.2345 5.05449 19.3158 5.25054 19.3158 5.45495C19.3158 5.65936 19.2345 5.85541 19.09 5.99995L18 6.99995C17.8724 7.14545 17.6929 7.2352 17.5 7.24995Z%27 fill=%27%23f3f3f3%27/%3E%3Cpath d=%27M5.44001 19.31C5.34147 19.3104 5.24383 19.2912 5.15282 19.2534C5.06181 19.2157 4.97926 19.1601 4.91001 19.09C4.76956 18.9494 4.69067 18.7587 4.69067 18.56C4.69067 18.3612 4.76956 18.1706 4.91001 18.03L6.00001 17C6.13997 16.9331 6.2972 16.9113 6.45006 16.9376C6.60293 16.9638 6.7439 17.0368 6.85357 17.1464C6.96324 17.2561 7.03621 17.3971 7.06244 17.5499C7.08866 17.7028 7.06685 17.86 7.00001 18L6.00001 19.09C5.92728 19.1638 5.83985 19.2216 5.74338 19.2595C5.64691 19.2974 5.54356 19.3146 5.44001 19.31Z%27 fill=%27%23f3f3f3%27/%3E%3C/svg%3E"},169:function(n){n.exports="data:image/svg+xml,%3C%3Fxml version=%271.0%27 encoding=%27utf-8%27%3F%3E%3C%21-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --%3E%3Csvg width=%27800px%27 height=%27800px%27 viewBox=%270 0 24 24%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath opacity=%270.2%27 fill-rule=%27evenodd%27 clip-rule=%27evenodd%27 d=%27M11 3C10.4477 3 10 3.44772 10 4V4.56876C10 4.99658 9.71288 5.36825 9.31776 5.53229C8.9225 5.6964 8.46228 5.63386 8.15966 5.33123L7.75734 4.92891C7.36681 4.53839 6.73365 4.53839 6.34312 4.92891L4.92891 6.34313C4.53838 6.73365 4.53838 7.36681 4.92891 7.75734L5.33123 8.15966C5.63386 8.46229 5.6964 8.9225 5.53229 9.31776C5.36825 9.71288 4.99658 10 4.56877 10L4 10C3.44772 10 3 10.4477 3 11V13C3 13.5523 3.44772 14 4 14H4.56879C4.99659 14 5.36825 14.2871 5.53228 14.6822C5.69638 15.0775 5.63384 15.5377 5.33123 15.8403L4.92889 16.2426C4.53837 16.6331 4.53837 17.2663 4.92889 17.6568L6.34311 19.071C6.73363 19.4616 7.36679 19.4616 7.75732 19.071L8.1596 18.6688C8.46223 18.3661 8.92247 18.3036 9.31774 18.4677C9.71287 18.6317 10 19.0034 10 19.4313V20C10 20.5523 10.4477 21 11 21H13C13.5523 21 14 20.5523 14 20V19.4312C14 19.0034 14.2871 18.6318 14.6822 18.4677C15.0775 18.3036 15.5377 18.3661 15.8403 18.6688L16.2426 19.071C16.6331 19.4616 17.2663 19.4616 17.6568 19.071L19.071 17.6568C19.4616 17.2663 19.4616 16.6331 19.071 16.2426L18.6688 15.8403C18.3661 15.5377 18.3036 15.0775 18.4677 14.6822C18.6318 14.2871 19.0034 14 19.4312 14H20C20.5523 14 21 13.5523 21 13V11C21 10.4477 20.5523 10 20 10L19.4313 10C19.0034 10 18.6317 9.71287 18.4677 9.31774C18.3036 8.92247 18.3661 8.46223 18.6688 8.1596L19.071 7.75734C19.4615 7.36681 19.4616 6.73365 19.071 6.34312L17.6568 4.92891C17.2663 4.53838 16.6331 4.53838 16.2426 4.92891L15.8403 5.33123C15.5377 5.63384 15.0775 5.69638 14.6822 5.53228C14.2871 5.36825 14 4.99659 14 4.56879V4C14 3.44772 13.5523 3 13 3H11ZM12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z%27/%3E%3Cpath d=%27M11 3H13C13.5523 3 14 3.44772 14 4V4.56879C14 4.99659 14.2871 5.36825 14.6822 5.53228C15.0775 5.69638 15.5377 5.63384 15.8403 5.33123L16.2426 4.92891C16.6331 4.53838 17.2663 4.53838 17.6568 4.92891L19.071 6.34312C19.4616 6.73365 19.4615 7.36681 19.071 7.75734L18.6688 8.1596C18.3661 8.46223 18.3036 8.92247 18.4677 9.31774C18.6317 9.71287 19.0034 10 19.4313 10L20 10C20.5523 10 21 10.4477 21 11V13C21 13.5523 20.5523 14 20 14H19.4312C19.0034 14 18.6318 14.2871 18.4677 14.6822C18.3036 15.0775 18.3661 15.5377 18.6688 15.8403L19.071 16.2426C19.4616 16.6331 19.4616 17.2663 19.071 17.6568L17.6568 19.071C17.2663 19.4616 16.6331 19.4616 16.2426 19.071L15.8403 18.6688C15.5377 18.3661 15.0775 18.3036 14.6822 18.4677C14.2871 18.6318 14 19.0034 14 19.4312V20C14 20.5523 13.5523 21 13 21H11C10.4477 21 10 20.5523 10 20V19.4313C10 19.0034 9.71287 18.6317 9.31774 18.4677C8.92247 18.3036 8.46223 18.3661 8.1596 18.6688L7.75732 19.071C7.36679 19.4616 6.73363 19.4616 6.34311 19.071L4.92889 17.6568C4.53837 17.2663 4.53837 16.6331 4.92889 16.2426L5.33123 15.8403C5.63384 15.5377 5.69638 15.0775 5.53228 14.6822C5.36825 14.2871 4.99659 14 4.56879 14H4C3.44772 14 3 13.5523 3 13V11C3 10.4477 3.44772 10 4 10L4.56877 10C4.99658 10 5.36825 9.71288 5.53229 9.31776C5.6964 8.9225 5.63386 8.46229 5.33123 8.15966L4.92891 7.75734C4.53838 7.36681 4.53838 6.73365 4.92891 6.34313L6.34312 4.92891C6.73365 4.53839 7.36681 4.53839 7.75734 4.92891L8.15966 5.33123C8.46228 5.63386 8.9225 5.6964 9.31776 5.53229C9.71288 5.36825 10 4.99658 10 4.56876V4C10 3.44772 10.4477 3 11 3Z%27 stroke=%27%23000%27 stroke-width=%271.5%27/%3E%3Cpath d=%27M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z%27 stroke=%27%23000%27 stroke-width=%271.5%27/%3E%3C/svg%3E"},529:function(n){n.exports="data:image/svg+xml,%3C%3Fxml version=%271.0%27 encoding=%27utf-8%27%3F%3E%3C%21-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --%3E%3Csvg width=%27800px%27 height=%27800px%27 viewBox=%270 0 24 24%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath opacity=%270.2%27 fill-rule=%27evenodd%27 clip-rule=%27evenodd%27 d=%27M11 3C10.4477 3 10 3.44772 10 4V4.56876C10 4.99658 9.71288 5.36825 9.31776 5.53229C8.9225 5.6964 8.46228 5.63386 8.15966 5.33123L7.75734 4.92891C7.36681 4.53839 6.73365 4.53839 6.34312 4.92891L4.92891 6.34313C4.53838 6.73365 4.53838 7.36681 4.92891 7.75734L5.33123 8.15966C5.63386 8.46229 5.6964 8.9225 5.53229 9.31776C5.36825 9.71288 4.99658 10 4.56877 10L4 10C3.44772 10 3 10.4477 3 11V13C3 13.5523 3.44772 14 4 14H4.56879C4.99659 14 5.36825 14.2871 5.53228 14.6822C5.69638 15.0775 5.63384 15.5377 5.33123 15.8403L4.92889 16.2426C4.53837 16.6331 4.53837 17.2663 4.92889 17.6568L6.34311 19.071C6.73363 19.4616 7.36679 19.4616 7.75732 19.071L8.1596 18.6688C8.46223 18.3661 8.92247 18.3036 9.31774 18.4677C9.71287 18.6317 10 19.0034 10 19.4313V20C10 20.5523 10.4477 21 11 21H13C13.5523 21 14 20.5523 14 20V19.4312C14 19.0034 14.2871 18.6318 14.6822 18.4677C15.0775 18.3036 15.5377 18.3661 15.8403 18.6688L16.2426 19.071C16.6331 19.4616 17.2663 19.4616 17.6568 19.071L19.071 17.6568C19.4616 17.2663 19.4616 16.6331 19.071 16.2426L18.6688 15.8403C18.3661 15.5377 18.3036 15.0775 18.4677 14.6822C18.6318 14.2871 19.0034 14 19.4312 14H20C20.5523 14 21 13.5523 21 13V11C21 10.4477 20.5523 10 20 10L19.4313 10C19.0034 10 18.6317 9.71287 18.4677 9.31774C18.3036 8.92247 18.3661 8.46223 18.6688 8.1596L19.071 7.75734C19.4615 7.36681 19.4616 6.73365 19.071 6.34312L17.6568 4.92891C17.2663 4.53838 16.6331 4.53838 16.2426 4.92891L15.8403 5.33123C15.5377 5.63384 15.0775 5.69638 14.6822 5.53228C14.2871 5.36825 14 4.99659 14 4.56879V4C14 3.44772 13.5523 3 13 3H11ZM12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z%27/%3E%3Cpath d=%27M11 3H13C13.5523 3 14 3.44772 14 4V4.56879C14 4.99659 14.2871 5.36825 14.6822 5.53228C15.0775 5.69638 15.5377 5.63384 15.8403 5.33123L16.2426 4.92891C16.6331 4.53838 17.2663 4.53838 17.6568 4.92891L19.071 6.34312C19.4616 6.73365 19.4615 7.36681 19.071 7.75734L18.6688 8.1596C18.3661 8.46223 18.3036 8.92247 18.4677 9.31774C18.6317 9.71287 19.0034 10 19.4313 10L20 10C20.5523 10 21 10.4477 21 11V13C21 13.5523 20.5523 14 20 14H19.4312C19.0034 14 18.6318 14.2871 18.4677 14.6822C18.3036 15.0775 18.3661 15.5377 18.6688 15.8403L19.071 16.2426C19.4616 16.6331 19.4616 17.2663 19.071 17.6568L17.6568 19.071C17.2663 19.4616 16.6331 19.4616 16.2426 19.071L15.8403 18.6688C15.5377 18.3661 15.0775 18.3036 14.6822 18.4677C14.2871 18.6318 14 19.0034 14 19.4312V20C14 20.5523 13.5523 21 13 21H11C10.4477 21 10 20.5523 10 20V19.4313C10 19.0034 9.71287 18.6317 9.31774 18.4677C8.92247 18.3036 8.46223 18.3661 8.1596 18.6688L7.75732 19.071C7.36679 19.4616 6.73363 19.4616 6.34311 19.071L4.92889 17.6568C4.53837 17.2663 4.53837 16.6331 4.92889 16.2426L5.33123 15.8403C5.63384 15.5377 5.69638 15.0775 5.53228 14.6822C5.36825 14.2871 4.99659 14 4.56879 14H4C3.44772 14 3 13.5523 3 13V11C3 10.4477 3.44772 10 4 10L4.56877 10C4.99658 10 5.36825 9.71288 5.53229 9.31776C5.6964 8.9225 5.63386 8.46229 5.33123 8.15966L4.92891 7.75734C4.53838 7.36681 4.53838 6.73365 4.92891 6.34313L6.34312 4.92891C6.73365 4.53839 7.36681 4.53839 7.75734 4.92891L8.15966 5.33123C8.46228 5.63386 8.9225 5.6964 9.31776 5.53229C9.71288 5.36825 10 4.99658 10 4.56876V4C10 3.44772 10.4477 3 11 3Z%27 stroke=%27%23f3f3f3%27 stroke-width=%271.5%27/%3E%3Cpath d=%27M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z%27 stroke=%27%23f3f3f3%27 stroke-width=%271.5%27/%3E%3C/svg%3E"},997:function(n){n.exports="data:image/svg+xml,%3C%3Fxml version=%271.0%27 encoding=%27utf-8%27%3F%3E%3Csvg width=%27800px%27 height=%27800px%27 viewBox=%270 0 25 25%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M19.6065 16.1775C18.9417 16.387 18.234 16.5 17.5 16.5C13.634 16.5 10.5 13.366 10.5 9.5C10.5 7.54163 11.3042 5.77109 12.6004 4.50062C12.567 4.50021 12.5335 4.5 12.5 4.5C8.08172 4.5 4.5 8.08172 4.5 12.5C4.5 16.9183 8.08172 20.5 12.5 20.5C15.5924 20.5 18.275 18.7454 19.6065 16.1775Z%27 stroke=%27%23000%27 stroke-width=%271.2%27/%3E%3C/svg%3E"},883:function(n){n.exports="data:image/svg+xml,%3C%3Fxml version=%271.0%27 encoding=%27utf-8%27%3F%3E%3Csvg width=%27800px%27 height=%27800px%27 viewBox=%270 0 25 25%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M19.6065 16.1775C18.9417 16.387 18.234 16.5 17.5 16.5C13.634 16.5 10.5 13.366 10.5 9.5C10.5 7.54163 11.3042 5.77109 12.6004 4.50062C12.567 4.50021 12.5335 4.5 12.5 4.5C8.08172 4.5 4.5 8.08172 4.5 12.5C4.5 16.9183 8.08172 20.5 12.5 20.5C15.5924 20.5 18.275 18.7454 19.6065 16.1775Z%27 stroke=%27%23f3f3f3%27 stroke-width=%271.2%27/%3E%3C/svg%3E"}},t={};function e(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,exports:{}};return n[o](i,i.exports,e),i.exports}e.m=n,e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,{a:t}),t},e.d=function(n,t){for(var o in t)e.o(t,o)&&!e.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:t[o]})},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.b=document.baseURI||self.location.href,e.nc=void 0,function(){var n=e(379),t=e.n(n),o=e(795),r=e.n(o),i=e(569),a=e.n(i),C=e(565),s=e.n(C),c=e(216),l=e.n(c),d=e(589),u=e.n(d),p=e(426),f={};f.styleTagTransform=u(),f.setAttributes=s(),f.insert=a().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=l(),t()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals;var g="",h="",m="",v=["0","1","2","3","4","5","6","7","8","9","."],x=["-","+","x","/"],b=document.querySelector(".calc-screen p");function L(){h="",m=""}function w(n){var t=n.slice(0,n.length-1);return"-"===t?"":t}var k=document.querySelector("body"),y=document.getElementById("settings-panel");null==k||k.addEventListener("click",(function(n){var t=n.target.getAttribute("name");if("settings-btn"===t&&y)return null!=y&&y.classList.contains("_inactive")?(y.classList.remove("_inactive"),void y.classList.add("_active")):(y.classList.add("_inactive"),void y.classList.remove("_active"));if("light-theme-btn"!==t)if("dark-theme-btn"!==t){if("del"!==t)return"ac"===t?(g="",h="",m="",void(b.textContent=0)):void("+/-"!==t?function(n){if(n.target.classList.contains("btn")&&!n.target.classList.contains("ac")){b.textContent="";var t=n.target.textContent;if(v.includes(t))return""===h&&""===m?(g+=t,console.log(g,h,m),b.textContent=g):(h+=t,b.textContent=h),void console.table(g,h,m);if(x.includes(t))return m=t,b.textContent=m,void console.log(m);if("="===t){""===h&&(h=g);var e=Number(g),o=Number(h);switch(m){case"+":g="".concat(e+o),L();break;case"-":g="".concat(e-o),L();break;case"x":g="".concat(e*o),L();break;case"/":if(0===h)return b.textContent="Ошибка",g="",h="",void(m="");g="".concat(e/o),L()}b.textContent=g,console.table(g,h,m)}}}(n):function(){if(h)return h="".concat(-1*Number(h)),void(b.textContent=h);m||g&&(g="".concat(-1*Number(g)),b.textContent=g)}());""!==h?(h=w(h),b.textContent=""===h?m:h):""!==m?(m="",b.textContent=g):""!==g?(g=w(g),b.textContent=""===g?0:g):b.textContent=0}else document.querySelectorAll(".light-them").forEach((function(n){n.classList.remove("light-them"),n.classList.add("dark-them")}));else document.querySelectorAll(".dark-them").forEach((function(n){n.classList.remove("dark-them"),n.classList.add("light-them")}))}))}()}();