"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[274],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>b});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=a.createContext({}),d=function(e){var r=a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=d(e.components);return a.createElement(s.Provider,{value:r},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(t),m=n,b=p["".concat(s,".").concat(m)]||p[m]||u[m]||o;return t?a.createElement(b,i(i({ref:r},c),{},{components:t})):a.createElement(b,i({ref:r},c))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[p]="string"==typeof e?e:n,i[1]=l;for(var d=2;d<o;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1806:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=t(7462),n=(t(7294),t(3905));const o={sidebar_position:5},i=void 0,l={unversionedId:"Managers/LeaderBoard",id:"Managers/LeaderBoard",title:"LeaderBoard",description:"LeaderBoard Manager",source:"@site/docs/Managers/LeaderBoard.md",sourceDirName:"Managers",slug:"/Managers/LeaderBoard",permalink:"/MooMoo.js/Managers/LeaderBoard",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"GamePlayers",permalink:"/MooMoo.js/Managers/GamePlayers"},next:{title:"Objects",permalink:"/MooMoo.js/Managers/Objects"}},s={},d=[{value:"LeaderBoard Manager",id:"leaderboard-manager",level:2}],c={toc:d};function p(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"leaderboard-manager"},"LeaderBoard Manager"),(0,n.kt)("p",null,"The LeaderBoard Manager is a tool, which provides information about the players that are currently on the leaderboard. This includes details such as their session ID (sid), name, and position."),(0,n.kt)("p",null,"To access the Leaderboard, you can write the following code:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"let LeaderboardManager = MooMoo.LeaderboardManager;\n\n// get all players on the leaderboard\nlet leaderboard = LeaderboardManager.leaderboard;\n")),(0,n.kt)("p",null,"Now, the ",(0,n.kt)("inlineCode",{parentName:"p"},"leaderboard")," variable would be returning a map, where item ",(0,n.kt)("inlineCode",{parentName:"p"},"1")," is the first place, ",(0,n.kt)("inlineCode",{parentName:"p"},"2")," is the second place, and so on. Each item in the map is a ",(0,n.kt)("inlineCode",{parentName:"p"},"Player")," object, which contains information about the player, such as name, sid, and position."),(0,n.kt)("p",null,"It is possible that the leaderboard returns information about a player (including position), but it is not guaranteed that the position is correct."))}p.isMDXComponent=!0}}]);