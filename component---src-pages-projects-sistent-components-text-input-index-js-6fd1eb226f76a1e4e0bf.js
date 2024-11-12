"use strict";(self.webpackChunkLayer5=self.webpackChunkLayer5||[]).push([[97],{22514:function(e,t,n){n.d(t,{A:function(){return o}});var i=n(96540);const s=[{id:0,link:"/projects/sistent/about",text:"About Sistent"},{id:1,link:"/projects/sistent/identity/color",text:"Colors"},{id:2,link:"/projects/sistent/identity/color/guidance",text:"Colors"},{id:3,link:"/projects/sistent/identity/color/code",text:"Colors"},{id:4,link:"/projects/sistent/identity/spacing",text:"Spacing"},{id:5,link:"/projects/sistent/identity/spacing/guidance",text:"Spacing"},{id:6,link:"/projects/sistent/identity/spacing/code",text:"Spacing"},{id:7,link:"/projects/sistent/identity/typography",text:"Typography"},{id:8,link:"/projects/sistent/identity/typography/guidance",text:"Typography"},{id:9,link:"/projects/sistent/identity/typography/code",text:"Typography"},{id:10,link:"/projects/sistent/components/button",text:"Button"},{id:10,link:"/projects/sistent/components/button/guidance",text:"Button"},{id:11,link:"/projects/sistent/components/button/code",text:"Button"},{id:12,link:"/projects/sistent/components/text-input",text:"Text Input"},{id:13,link:"/projects/sistent/components/text-input/guidance",text:"Text Input"},{id:14,link:"/projects/sistent/components/text-input/code",text:"Text Input"},{id:15,link:"/projects/sistent/components/paper",text:"Paper"},{id:16,link:"/projects/sistent/components/paper/guidance",text:"Paper"},{id:17,link:"/projects/sistent/components/paper/code",text:"Paper"},{id:18,link:"/projects/sistent/components/popper",text:"Popper"},{id:19,link:"/projects/sistent/components/popper/guidance",text:"Popper"},{id:20,link:"/projects/sistent/components/popper/code",text:"Popper"},{id:21,link:"/projects/sistent/components/text-field",text:"Text Field"},{id:22,link:"/projects/sistent/components/text-field/guidance",text:"Text Field"},{id:23,link:"/projects/sistent/components/text-field/code",text:"Text Field"},{id:24,link:"/projects/sistent/components/button-group",text:"Button Group"},{id:25,link:"/projects/sistent/components/button-group/guidance",text:"Button Group"},{id:26,link:"/projects/sistent/components/button-group/code",text:"Button Group"}];var a=n(96044);var r=n(21250).default.div.withConfig({displayName:"paginationstyle__TocPaginationWrapper",componentId:"sc-isbsjw-0"})(["\n  display: flex;\n  gap: 1rem;\n  justify-content: center;\n  margin: 3rem 2rem 4rem 2rem;\n\n  @media screen and (max-width: 540px) {\n    margin: 0 0 2rem 0;\n    flex-flow: row wrap;\n    gap: 0.3rem;\n  }\n"]);var o=()=>{var e,t;const{0:n,1:o}=(0,i.useState)(0);return(0,i.useEffect)((()=>{const e=window.location.pathname,t=s.findIndex((t=>t.link===e));o(t)}),[]),i.createElement(r,null,n>0?i.createElement(a.default,{$secondary:!0,$url:null===(e=s[n-1])||void 0===e?void 0:e.link},"← Previous"):null,n<s.length-1?i.createElement(a.default,{$primary:!0,$url:null===(t=s[n+1])||void 0===t?void 0:t.link},"Next →"):null)}},86597:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var i=n(96540),s=n(64810),a=n(86462),r=n(58501),o=n(66054),l=n(96044),c=n(9184),d=n(92121);var p=()=>{const e=(0,a.useLocation)(),{isDark:t}=(0,d.G)();return i.createElement(c.p,{title:"Text Input"},i.createElement("div",{className:"content"},i.createElement("a",{id:"Identity"},i.createElement("h2",null,"Text Input")),i.createElement("p",null,"Text inputs are important elements that help users interact with an experience by providing text commands that will in turn return expected results. These commands can range from providing a free range of personal information to entering a limited number of characters for a use case."),i.createElement("div",{className:"filterBtns"},i.createElement(l.default,{className:"/projects/sistent/components/text-input"===e.pathname?"active":"",onClick:()=>(0,s.navigate)("/projects/sistent/components/text-input"),title:"Overview"}),i.createElement(l.default,{className:"/projects/sistent/components/text-input/guidance"===e.pathname?"active":"",onClick:()=>(0,s.navigate)("/projects/sistent/components/text-input/guidance"),title:"Guidance"}),i.createElement(l.default,{className:"/projects/sistent/components/text-input/code"===e.pathname?"active":"",onClick:()=>(0,s.navigate)("/projects/sistent/components/text-input/code"),title:"Code"})),i.createElement("div",{className:"main-content"},i.createElement("p",null,"Text inputs are important elements that help users interact with an experience by providing text commands that will in turn return expected results. These commands can range from providing a free range of personal information to entering a limited number of characters for a use case."),i.createElement("a",{id:"Design"},i.createElement("h2",null,"Design")),i.createElement("p",null,"Instead of various types for use across designs, the text input has just one type to ensure simplicity and efficiency. It is preferable that inputs are as minimal as possible since the sole function that they generally perform is to ensure that users are able to send in data and receive corresponding information."),i.createElement(o.fI,{$Hcenter:!0},i.createElement(r.SistentThemeProvider,{initialMode:t?"dark":"light"},i.createElement(r.Input,{placeholder:"Placeholder goes here",type:"text"}))),i.createElement("a",{id:"Sizes"},i.createElement("h2",null,"Sizes")),i.createElement("p",null,"Since input fields have a responsive width that adjusts depending on the need and use case, size considerations are mostly directed at the height of the field. This means that the size of text inputs adjust only relative to the height of the text field. Because text inputs are mostly used in tandem with buttons, to ensure design consistency, text inputs and buttons have similar size requirements."),i.createElement("h3",null,"56px / 3.5rem"),i.createElement("p",null,"The 56px text input is the first field size. It is the largest text input available for use and it is available for both mobile and desktop resolutions, but it serves in different capacities across these different resolutions."),i.createElement(o.fI,{$Hcenter:!0},i.createElement(r.SistentThemeProvider,{initialMode:t?"dark":"light"},i.createElement(r.Input,{placeholder:"Placeholder goes here",type:"text",size:"medium"}))),i.createElement("h3",null,"48px / 3rem"),i.createElement("p",null,"The 48px text input is the second field size in use and it is available from mobile to desktop resolutions, even though it serves in different capacities across these screen sizes."),i.createElement(o.fI,{$Hcenter:!0},i.createElement(r.SistentThemeProvider,{initialMode:t?"dark":"light"},i.createElement(r.Input,{placeholder:"Placeholder goes here",type:"text",size:"small"}))),i.createElement("p",null,i.createElement("strong",null,"NOTE:")),i.createElement("p",null,"These sizes are being specified with numerical values because though the same size is used across screen resolutions, they have different roles. On desktop for instance, the 56px text input is a the default size, and 48px the small size, while on mobile, 56px is large and 48px is the default size. Preferred text input sizes (height) are usually arrived at through exploration and proper consideration of industry standards and best practices."),i.createElement("a",{id:"Adding Icons"},i.createElement("h2",null,"Adding Icons")),i.createElement("p",null,"Icons can be used often in text inputs to aid in understanding the required parameters for a given field or to provide options that can help to improve the experience as a user navigates a given set of text inputs. Depending on the context, icons can be placed on the left and right at different times or even at the same time. The icons should be aligned to the left or right side of the input field and not to the center, while text remains left aligned."))))};var m=()=>i.createElement(p,null)},9184:function(e,t,n){n.d(t,{p:function(){return p}});var i=n(96540),s=n(91580),a=n(66198),r=n(66054),o=n(22514),l=n(64810);const c=n(21250).default.div.withConfig({displayName:"intra-page__JoinCommunityWrapper",componentId:"sc-q3x19t-0"})(["\n  width: 18rem;\n\n  @media screen and (max-width: 750px) {\n    display: none;\n  }\n\n  @media screen and (min-width: 751px) and (max-width: 1279px) {\n    display: none;\n  }\n  .intra-page {\n    position: sticky;\n    top: 10rem;\n    right: 0rem;\n    margin-right: 1rem;\n    padding-bottom: 5rem;\n    padding-right: 2rem;\n    align-items: left;\n    justify-content: space-around;\n    display: flex;\n    flex-direction: column;\n    overflow: hidden;\n\n    .list {\n      color: #000000;\n    }\n    .active {\n      font-weight: 5000;\n      color: #000000;\n    }\n\n    ul {\n      list-style: none;\n      top: 3rem;\n      li {\n        padding-bottom: 0.5rem;\n        padding-top: 0.5rem;\n      }\n    }\n    @media only screen and (min-width: 1280px) and (max-width: 1350px) {\n      padding-right: 0rem;\n      margin-right: 0rem;\n    }\n    @media only screen and (max-width: 950px) {\n      width: 0;\n      opacity: 0;\n      height: 0;\n      transition: none;\n      visibility: hidden;\n    }\n  }\n\n  .learn {\n    width: 10rem;\n  }\n"]);var d=function(){const{0:e,1:t}=(0,i.useState)([]);(0,i.useEffect)((()=>{const e=document.querySelectorAll(".main-content > a");console.log(e),e&&t(Array.from(e).map((e=>({id:e.id,link:`#${e.id}`,text:e.id}))))}),[]);const{0:n,1:s}=(0,i.useState)(null);return(0,i.useEffect)((()=>{const e=window.location.pathname;s(e)}),[]),i.createElement(c,null,i.createElement("div",{className:"intra-page"},i.createElement("ul",null,e.map((e=>i.createElement("li",{key:e.id,className:"list"},i.createElement(l.Link,{to:`${n}${e.link}`,key:e.id,activeClassName:"active"},e.text)))))))};const p=e=>{let{title:t,children:n}=e;return i.createElement(s.A,null,i.createElement("div",{className:"page-header-section"},i.createElement("h1",null,t)),i.createElement(a.A,null),i.createElement("div",{className:"page-section"},i.createElement(r.mc,null,n," ",i.createElement(o.A,null)),i.createElement(d,null)))}}}]);
//# sourceMappingURL=component---src-pages-projects-sistent-components-text-input-index-js-6fd1eb226f76a1e4e0bf.js.map