"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[311],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,k=p["".concat(u,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(k,c(c({ref:t},l),{},{components:n})):r.createElement(k,c({ref:t},l))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},254:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={},c="Packet Manager",i={unversionedId:"Managers/PacketManager",id:"Managers/PacketManager",title:"Packet Manager",description:"The Packet Manager is a class that is used to count and manage the number of packets. It has a number of read-only properties and methods that can be used to monitor the number of packets sent and determine if the connection is in danger of being disconnected due to sending too many packets.",source:"@site/docs/Managers/PacketManager.md",sourceDirName:"Managers",slug:"/Managers/PacketManager",permalink:"/MooMoo.js/Managers/PacketManager",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Packet Interceptor",permalink:"/MooMoo.js/Managers/PacketInterceptor"},next:{title:"ServerManager",permalink:"/MooMoo.js/Managers/ServerManager"}},u={},s=[{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2},{value:"<code>addPacket(): number</code>",id:"addpacket-number",level:3},{value:"<code>getKickPercentagePerMinute(): number</code>",id:"getkickpercentageperminute-number",level:3},{value:"<code>getKickPercentagePerSecond(): number</code>",id:"getkickpercentagepersecond-number",level:3},{value:"<code>getPacketCountPerMinute(): number</code>",id:"getpacketcountperminute-number",level:3},{value:"<code>getPacketCountPerSecond(): number</code>",id:"getpacketcountpersecond-number",level:3},{value:"<code>getPacketTime(): number</code>",id:"getpackettime-number",level:3},{value:"Example",id:"example",level:2}],l={toc:s};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"packet-manager"},"Packet Manager"),(0,a.kt)("p",null,"The Packet Manager is a class that is used to count and manage the number of packets. It has a number of read-only properties and methods that can be used to monitor the number of packets sent and determine if the connection is in danger of being disconnected due to sending too many packets."),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"packetCountPerMinute: number")," - The number of packets sent per minute."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"packetCountPerSecond: number")," - The number of packets sent per second."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"packetTime: number")," - The time in seconds until the packet count per minute is reset."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"packetLimitPerMinute: number")," - The limit of packets that can be sent per minute."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"packetLimitPerSecond: number")," - The limit of packets that can be sent per second.")),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"addpacket-number"},(0,a.kt)("inlineCode",{parentName:"h3"},"addPacket(): number")),(0,a.kt)("p",null,"This method is used to add a packet to the packet count. It should be called every time a packet is sent over the websocket."),(0,a.kt)("h3",{id:"getkickpercentageperminute-number"},(0,a.kt)("inlineCode",{parentName:"h3"},"getKickPercentagePerMinute(): number")),(0,a.kt)("p",null,"This method returns the percentage of packets that have been sent over the packet limit per minute. A value of 5400 or greater indicates that the connection is in danger of being disconnected."),(0,a.kt)("h3",{id:"getkickpercentagepersecond-number"},(0,a.kt)("inlineCode",{parentName:"h3"},"getKickPercentagePerSecond(): number")),(0,a.kt)("p",null,"This method returns the percentage of packets that have been sent over the packet limit per second. A value of 120 or greater indicates that the connection is in danger of being disconnected."),(0,a.kt)("h3",{id:"getpacketcountperminute-number"},(0,a.kt)("inlineCode",{parentName:"h3"},"getPacketCountPerMinute(): number")),(0,a.kt)("p",null,"This method returns the current packet count per minute. 5400 is the maximum safe limit, if its close or above, you should be careful."),(0,a.kt)("h3",{id:"getpacketcountpersecond-number"},(0,a.kt)("inlineCode",{parentName:"h3"},"getPacketCountPerSecond(): number")),(0,a.kt)("p",null,"This method returns the current packet count per second. 120 is the maximum safe limit, if its close or above, you should be careful."),(0,a.kt)("h3",{id:"getpackettime-number"},(0,a.kt)("inlineCode",{parentName:"h3"},"getPacketTime(): number")),(0,a.kt)("p",null,"This method returns the current packet time."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"Here is an example of how to use the Packet Manager:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'let packetManager = MooMoo.packetManager;\n\nfor (let i = 0; i < 200; i++) {\n    MooMoo.sendPacket("pp")\n}\n\nconsole.log(packetManager.getPacketCountPerMinute()); // 200\nconsole.log(packetManager.getPacketCountPerSecond()); // 200\nconsole.log(packetManager.getKickPercentagePerMinute()); // (200/5400)*100 = 3.7%\nconsole.log(packetManager.getKickPercentagePerSecond()); // (200/120)*100 = 166.7%\n')),(0,a.kt)("p",null,"As you can see, the percentage of packets sent over the limit is very low, so it is safe to send more packets.\nBut the packet count per second is very high, so you are very likely to be kicked."))}p.isMDXComponent=!0}}]);