(this["webpackJsonpground-reflections-and-video-textures"]=this["webpackJsonpground-reflections-and-video-textures"]||[]).push([[0],{46:function(e,t,c){},47:function(e,t,c){"use strict";c.r(t);var a=c(33),n=c(6),i=c.n(n),r=c(9),o=c(16),s=c(8),j=c(0),b=c(13),u=c(51),l=c(53),O=c(50),d=c(52),p=c(11);function f(e){var t=e.ready,c=e.clicked,a=e.setClicked;return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{className:"fullscreen bg ".concat(t?"ready":"notready"," ").concat(c&&"clicked"),children:Object(p.jsx)("div",{onClick:function(){return t&&a(!0)},children:t?"click to continue":"loading"})})})}function h(e){var t=Object(u.a)("/model.glb").scene;return Object(p.jsx)("primitive",Object(s.a)({object:t},e))}function x(e){var t=Object(u.a)("/carla-draco.glb").scene;return Object(p.jsx)("primitive",Object(s.a)({object:t},e))}function g(e){var t=e.clicked,c=Object(o.a)(e,["clicked"]),a=Object(n.useState)(!1),u=Object(r.a)(a,2),O=(u[0],u[1],i.a.useRef()),d=Object(n.useState)((function(){return Object.assign(document.createElement("video"),{src:"/final.mp4",crossOrigin:"Anonymous",loop:!0})})),f=Object(r.a)(d,1)[0];return Object(n.useEffect)((function(){t&&f.play()}),[f,t]),Object(b.c)((function(e){var t=e.clock.getElapsedTime();O.current.rotation.x=t})),Object(p.jsxs)(l.a,Object(s.a)(Object(s.a)({font:"/Alibaba-PuHuiTi-H.ttf",fontSize:1,letterSpacing:.1},c),{},{children:["\u6570\u5b57\u60c5\u7eea",Object(p.jsx)("meshBasicMaterial",{toneMapped:!1,children:Object(p.jsx)("videoTexture",{attach:"map",args:[f],encoding:j.sRGBEncoding})}),Object(p.jsxs)(l.a,Object(s.a)(Object(s.a)({ref:O,font:"/Alibaba-PuHuiTi-H.ttf",fontSize:2,up:1,letterSpacing:-.1},c),{},{children:["Social Netword",Object(p.jsx)("meshBasicMaterial",{toneMapped:!1,children:Object(p.jsx)("videoTexture",{attach:"map",args:[f],encoding:j.sRGBEncoding})})]}))]}))}function m(){var e=Object(O.a)(["/SurfaceImperfections003_1K_var1.jpg","/SurfaceImperfections003_1K_Normal.jpg"]),t=Object(r.a)(e,2),c=t[0],a=t[1];return Object(p.jsx)(d.a,{resolution:512,args:[10,10],mirror:.4,mixBlur:8,mixStrength:9,rotation:[-Math.PI/2,0,Math.PI/2],blur:[400,100],children:function(e,t){return Object(p.jsx)(e,Object(s.a)({color:"#6F6F6F",metalness:.4,roughnessMap:c,normalMap:a,normalScale:[1,1]},t))}})}function v(e){var t=e.start,c=e.set,a=Object(n.useState)((function(){return new j.Vector3})),i=Object(r.a)(a,1)[0];return Object(n.useEffect)((function(){return setTimeout((function(){return c(!0)}),500)}),[]),Object(b.c)((function(e){t&&(e.camera.position.lerp(i.set(10*e.mouse.x,3+2.4*e.mouse.y,13),.05),e.camera.lookAt(0,1,0))}))}function S(){var e=Object(n.useState)(!1),t=Object(r.a)(e,2),c=t[0],a=t[1],i=Object(n.useState)(!1),o=Object(r.a)(i,2),j=o[0],u=o[1],l={clicked:c,setClicked:a,ready:j,setReady:u};return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)(b.a,{shadowMap:!0,concurrent:!0,gl:{alpha:!1},pixelRatio:[1,1.5],camera:{position:[0,3,160],fov:25},children:[Object(p.jsx)("color",{attach:"background",args:["black"]}),Object(p.jsx)("fog",{attach:"fog",args:["black",15,20]}),Object(p.jsxs)(n.Suspense,{fallback:null,children:[Object(p.jsxs)("group",{position:[0,-1,0],children:[Object(p.jsx)(h,{castShadow:!0,rotation:[0,Math.PI+.4,0],position:[1.2,0,0],scale:[.46,.46,.46]}),Object(p.jsx)(x,{rotation:[0,Math.PI-.4,0],position:[-1.2,0,0],scale:[.26,.26,.26]}),Object(p.jsx)(g,Object(s.a)(Object(s.a)({},l),{},{position:[0,2.3,-2]})),Object(p.jsx)(m,{receiveShadow:!0})]}),Object(p.jsx)("ambientLight",{intensity:2.5}),Object(p.jsx)("spotLight",{position:[0,10,0],intensity:1.3}),Object(p.jsx)("directionalLight",{castShadow:!0,"shadow-mapSize-height":512,"shadow-mapSize-width":512,position:[-20,0,-10],intensity:1.7}),Object(p.jsx)(v,{start:j&&c,set:u})]})]}),Object(p.jsx)(f,Object(s.a)({},l))]})}c(46);Object(a.render)(Object(p.jsx)(S,{}),document.querySelector("#root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.1eab2e76.chunk.js.map