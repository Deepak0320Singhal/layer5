"use strict";(self.webpackChunkLayer5=self.webpackChunkLayer5||[]).push([[8537],{22514:function(e,t,l){l.d(t,{A:function(){return d}});var n=l(96540);const i=[{id:0,link:"/projects/sistent/about",text:"About Sistent"},{id:1,link:"/projects/sistent/identity/color",text:"Colors"},{id:2,link:"/projects/sistent/identity/color/guidance",text:"Colors"},{id:3,link:"/projects/sistent/identity/color/code",text:"Colors"},{id:4,link:"/projects/sistent/identity/spacing",text:"Spacing"},{id:5,link:"/projects/sistent/identity/spacing/guidance",text:"Spacing"},{id:6,link:"/projects/sistent/identity/spacing/code",text:"Spacing"},{id:7,link:"/projects/sistent/identity/typography",text:"Typography"},{id:8,link:"/projects/sistent/identity/typography/guidance",text:"Typography"},{id:9,link:"/projects/sistent/identity/typography/code",text:"Typography"},{id:10,link:"/projects/sistent/components/button",text:"Button"},{id:10,link:"/projects/sistent/components/button/guidance",text:"Button"},{id:11,link:"/projects/sistent/components/button/code",text:"Button"},{id:12,link:"/projects/sistent/components/text-input",text:"Text Input"},{id:13,link:"/projects/sistent/components/text-input/guidance",text:"Text Input"},{id:14,link:"/projects/sistent/components/text-input/code",text:"Text Input"},{id:15,link:"/projects/sistent/components/paper",text:"Paper"},{id:16,link:"/projects/sistent/components/paper/guidance",text:"Paper"},{id:17,link:"/projects/sistent/components/paper/code",text:"Paper"},{id:18,link:"/projects/sistent/components/popper",text:"Popper"},{id:19,link:"/projects/sistent/components/popper/guidance",text:"Popper"},{id:20,link:"/projects/sistent/components/popper/code",text:"Popper"},{id:21,link:"/projects/sistent/components/text-field",text:"Text Field"},{id:22,link:"/projects/sistent/components/text-field/guidance",text:"Text Field"},{id:23,link:"/projects/sistent/components/text-field/code",text:"Text Field"},{id:24,link:"/projects/sistent/components/button-group",text:"Button Group"},{id:25,link:"/projects/sistent/components/button-group/guidance",text:"Button Group"},{id:26,link:"/projects/sistent/components/button-group/code",text:"Button Group"}];var a=l(96044);var r=l(21250).default.div.withConfig({displayName:"paginationstyle__TocPaginationWrapper",componentId:"sc-isbsjw-0"})(["\n  display: flex;\n  gap: 1rem;\n  justify-content: center;\n  margin: 3rem 2rem 4rem 2rem;\n\n  @media screen and (max-width: 540px) {\n    margin: 0 0 2rem 0;\n    flex-flow: row wrap;\n    gap: 0.3rem;\n  }\n"]);var d=()=>{var e,t;const{0:l,1:d}=(0,n.useState)(0);return(0,n.useEffect)((()=>{const e=window.location.pathname,t=i.findIndex((t=>t.link===e));d(t)}),[]),n.createElement(r,null,l>0?n.createElement(a.default,{$secondary:!0,$url:null===(e=i[l-1])||void 0===e?void 0:e.link},"← Previous"):null,l<i.length-1?n.createElement(a.default,{$primary:!0,$url:null===(t=i[l+1])||void 0===t?void 0:t.link},"Next →"):null)}},98478:function(e,t,l){l.r(t),l.d(t,{default:function(){return u}});var n=l(96540),i=l(64810),a=l(86462),r=l(58501),d=l(96044),o=l(9184),s=l(92121);var c=()=>{const e=(0,a.useLocation)(),{isDark:t}=(0,s.G)();return n.createElement(o.p,{title:"TextField"},n.createElement("div",{className:"content"},n.createElement("a",{id:"Identity"},n.createElement("h2",null,"Text Field")),n.createElement("p",null,"The TextField component is a versatile input field used to capture user input in forms and user interfaces. It can handle a variety of input types, such as text, numbers, emails, and passwords, and offers built-in styling and validation features."),n.createElement("div",{className:"filterBtns"},n.createElement(d.default,{className:"/projects/sistent/components/text-field"===e.pathname?"active":"",onClick:()=>(0,i.navigate)("/projects/sistent/components/text-field"),title:"Overview"}),n.createElement(d.default,{className:"/projects/sistent/components/text-field/guidance"===e.pathname?"active":"",onClick:()=>(0,i.navigate)("/projects/sistent/components/text-field/guidance"),title:"Guidance"}),n.createElement(d.default,{className:"/projects/sistent/components/text-field/code"===e.pathname?"active":"",onClick:()=>(0,i.navigate)("/projects/sistent/components/text-field/code"),title:"Code"})),n.createElement("div",{className:"main-content"},n.createElement("p",null,"A Text fileds allow user to enter and edit any text. It mostly present in Forms or dialogue box in UI. TextField are crucial and integral elements in an interface. It allows to get data from enetered user."),n.createElement("a",{id:"Form Props"},n.createElement("h2",null,"Form Props")),n.createElement("p",null,"Standard form attributes are supported, for example required, disabled, type, etc. HelperText attributes is used to give context about a field's input, such as how the input will be used."),n.createElement(r.SistentThemeProvider,{initialMode:t?"dark":"light"},n.createElement(r.Box,{component:"form",sx:{"& .MuiTextField-root":{m:1,width:"25ch"}},noValidate:!0,autoComplete:"off"},n.createElement("div",null,n.createElement(r.TextField,{required:!0,id:"outlined-required",label:"Required",defaultValue:"Hello World"}),n.createElement(r.TextField,{disabled:!0,id:"outlined-disabled",label:"Disabled",defaultValue:"Hello World"}),n.createElement(r.TextField,{id:"outlined-password-input",label:"Password",type:"password",autoComplete:"current-password"}),n.createElement(r.TextField,{id:"outlined-number",label:"Number",type:"number"}),n.createElement(r.TextField,{id:"outlined-search",label:"Search field",type:"search"}),n.createElement(r.TextField,{id:"outlined-helperText",label:"Helper text",defaultValue:"Default Value",helperText:"Some important text"})),n.createElement("div",null,n.createElement(r.TextField,{required:!0,id:"filled-required",label:"Required",defaultValue:"Hello World",variant:"filled"}),n.createElement(r.TextField,{disabled:!0,id:"filled-disabled",label:"Disabled",defaultValue:"Hello World",variant:"filled"}),n.createElement(r.TextField,{id:"filled-password-input",label:"Password",type:"password",autoComplete:"current-password",variant:"filled"}),n.createElement(r.TextField,{id:"filled-number",label:"Number",type:"number",variant:"filled"}),n.createElement(r.TextField,{id:"filled-search",label:"Search field",type:"search",variant:"filled"}),n.createElement(r.TextField,{id:"filled-helperText",label:"Helper text",defaultValue:"Default Value",helperText:"Some important text",variant:"filled"})),n.createElement("div",null,n.createElement(r.TextField,{required:!0,id:"standard-required",label:"Required",defaultValue:"Hello World",variant:"standard"}),n.createElement(r.TextField,{disabled:!0,id:"standard-disabled",label:"Disabled",defaultValue:"Hello World",variant:"standard"}),n.createElement(r.TextField,{id:"standard-password-input",label:"Password",type:"password",autoComplete:"current-password",variant:"standard"}),n.createElement(r.TextField,{id:"standard-number",label:"Number",type:"number",variant:"standard"}),n.createElement(r.TextField,{id:"standard-search",label:"Search field",type:"search",variant:"standard"}),n.createElement(r.TextField,{id:"standard-helperText",label:"Helper text",defaultValue:"Default Value",helperText:"Some important text",variant:"standard"})))),n.createElement("a",{id:"Validation"},n.createElement("h2",null,"Validation")),n.createElement("p",null,"The error property toggles the error state. The helperText prop can then be used to provide feedback to the user about the error. As shown below it can be used with variant such as outlined (default), filled, and standard."),n.createElement(r.SistentThemeProvider,{initialMode:t?"dark":"light"},n.createElement(r.Box,{component:"form",sx:{"& .MuiTextField-root":{m:1,width:"25ch"}},noValidate:!0,autoComplete:"off"},n.createElement("div",null,n.createElement(r.TextField,{error:!0,id:"outlined-error",label:"Error",defaultValue:"Hello World"}),n.createElement(r.TextField,{error:!0,id:"outlined-error-helper-text",label:"Error",defaultValue:"Hello World",helperText:"Incorrect entry."})),n.createElement("div",null,n.createElement(r.TextField,{error:!0,id:"filled-error",label:"Error",defaultValue:"Hello World",variant:"filled"}),n.createElement(r.TextField,{error:!0,id:"filled-error-helper-text",label:"Error",defaultValue:"Hello World",helperText:"Incorrect entry.",variant:"filled"})),n.createElement("div",null,n.createElement(r.TextField,{error:!0,id:"standard-error",label:"Error",defaultValue:"Hello World",variant:"standard"}),n.createElement(r.TextField,{error:!0,id:"standard-error-helper-text",label:"Error",defaultValue:"Hello World",helperText:"Incorrect entry.",variant:"standard"})))),n.createElement("a",{id:"Multiline"},n.createElement("h2",null,"Multiline")),n.createElement("p",null,"The multiline prop transforms the text field into a TextareaAutosize element. Unless the rows prop is set, the height of the text field dynamically matches its content (using TextareaAutosize). You can use the minRows and maxRows props to bound it."),n.createElement(r.SistentThemeProvider,{initialMode:t?"dark":"light"},n.createElement(r.Box,{component:"form",sx:{"& .MuiTextField-root":{m:1,width:"25ch"}},noValidate:!0,autoComplete:"off"},n.createElement("div",null,n.createElement(r.TextField,{id:"outlined-multiline-flexible",label:"Multiline",multiline:!0,maxRows:4}),n.createElement(r.TextField,{id:"outlined-textarea",label:"Multiline Placeholder",placeholder:"Placeholder",multiline:!0}),n.createElement(r.TextField,{id:"outlined-multiline-static",label:"Multiline",multiline:!0,rows:4,defaultValue:"Default Value"})),n.createElement("div",null,n.createElement(r.TextField,{id:"filled-multiline-flexible",label:"Multiline",multiline:!0,maxRows:4,variant:"filled"}),n.createElement(r.TextField,{id:"filled-textarea",label:"Multiline Placeholder",placeholder:"Placeholder",multiline:!0,variant:"filled"}),n.createElement(r.TextField,{id:"filled-multiline-static",label:"Multiline",multiline:!0,rows:4,defaultValue:"Default Value",variant:"filled"})),n.createElement("div",null,n.createElement(r.TextField,{id:"standard-multiline-flexible",label:"Multiline",multiline:!0,maxRows:4,variant:"standard"}),n.createElement(r.TextField,{id:"standard-textarea",label:"Multiline Placeholder",placeholder:"Placeholder",multiline:!0,variant:"standard"}),n.createElement(r.TextField,{id:"standard-multiline-static",label:"Multiline",multiline:!0,rows:4,defaultValue:"Default Value",variant:"standard"})))),n.createElement("div",{style:{paddingTop:"10px"}},n.createElement("a",{id:"Sizes"},n.createElement("h2",null,"Sizes")),n.createElement("p",null,"TextField can have small or normal field sizes. According the requirement it can be adjusted."),n.createElement(r.SistentThemeProvider,{initialMode:t?"dark":"light"},n.createElement(r.Box,{component:"form",sx:{"& .MuiTextField-root":{m:1,width:"25ch"}},noValidate:!0,autoComplete:"off"},n.createElement("div",null,n.createElement(r.TextField,{label:"Size",id:"outlined-size-small",defaultValue:"Small",size:"small"}),n.createElement(r.TextField,{label:"Size",id:"outlined-size-normal",defaultValue:"Normal"})),n.createElement("div",null,n.createElement(r.TextField,{label:"Size",id:"filled-size-small",defaultValue:"Small",variant:"filled",size:"small"}),n.createElement(r.TextField,{label:"Size",id:"filled-size-normal",defaultValue:"Normal",variant:"filled"})),n.createElement("div",null,n.createElement(r.TextField,{label:"Size",id:"standard-size-small",defaultValue:"Small",size:"small",variant:"standard"}),n.createElement(r.TextField,{label:"Size",id:"standard-size-normal",defaultValue:"Normal",variant:"standard"}))))),n.createElement("div",{style:{paddingTop:"10px"}},n.createElement("a",{id:"Full Width"},n.createElement("h2",null,"Full Width")),n.createElement("p",null,"FullWidth attribute can be used to make the input take up the full width of its container."),n.createElement(r.SistentThemeProvider,{initialMode:t?"dark":"light"},n.createElement(r.Box,{sx:{width:600,maxWidth:"100%"}},n.createElement(r.TextField,{fullWidth:!0,label:"fullWidth",id:"fullWidth"})))))))};var u=()=>n.createElement(c,null)},9184:function(e,t,l){l.d(t,{p:function(){return u}});var n=l(96540),i=l(91580),a=l(66198),r=l(66054),d=l(22514),o=l(64810);const s=l(21250).default.div.withConfig({displayName:"intra-page__JoinCommunityWrapper",componentId:"sc-q3x19t-0"})(["\n  width: 18rem;\n\n  @media screen and (max-width: 750px) {\n    display: none;\n  }\n\n  @media screen and (min-width: 751px) and (max-width: 1279px) {\n    display: none;\n  }\n  .intra-page {\n    position: sticky;\n    top: 10rem;\n    right: 0rem;\n    margin-right: 1rem;\n    padding-bottom: 5rem;\n    padding-right: 2rem;\n    align-items: left;\n    justify-content: space-around;\n    display: flex;\n    flex-direction: column;\n    overflow: hidden;\n\n    .list {\n      color: #000000;\n    }\n    .active {\n      font-weight: 5000;\n      color: #000000;\n    }\n\n    ul {\n      list-style: none;\n      top: 3rem;\n      li {\n        padding-bottom: 0.5rem;\n        padding-top: 0.5rem;\n      }\n    }\n    @media only screen and (min-width: 1280px) and (max-width: 1350px) {\n      padding-right: 0rem;\n      margin-right: 0rem;\n    }\n    @media only screen and (max-width: 950px) {\n      width: 0;\n      opacity: 0;\n      height: 0;\n      transition: none;\n      visibility: hidden;\n    }\n  }\n\n  .learn {\n    width: 10rem;\n  }\n"]);var c=function(){const{0:e,1:t}=(0,n.useState)([]);(0,n.useEffect)((()=>{const e=document.querySelectorAll(".main-content > a");console.log(e),e&&t(Array.from(e).map((e=>({id:e.id,link:`#${e.id}`,text:e.id}))))}),[]);const{0:l,1:i}=(0,n.useState)(null);return(0,n.useEffect)((()=>{const e=window.location.pathname;i(e)}),[]),n.createElement(s,null,n.createElement("div",{className:"intra-page"},n.createElement("ul",null,e.map((e=>n.createElement("li",{key:e.id,className:"list"},n.createElement(o.Link,{to:`${l}${e.link}`,key:e.id,activeClassName:"active"},e.text)))))))};const u=e=>{let{title:t,children:l}=e;return n.createElement(i.A,null,n.createElement("div",{className:"page-header-section"},n.createElement("h1",null,t)),n.createElement(a.A,null),n.createElement("div",{className:"page-section"},n.createElement(r.mc,null,l," ",n.createElement(d.A,null)),n.createElement(c,null)))}}}]);
//# sourceMappingURL=component---src-pages-projects-sistent-components-text-field-index-js-8f2d72eccaa91b88d0f1.js.map