(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[4],{274:function(e,t,a){"use strict";var r=a(3),n=a(29);const i={[r.ComposerComponents.content]:{content:e=>{if("string"==typeof e)return e}},[r.ComposerComponents.heading]:{text:"text",headingLevel:"headingLevel"},[r.ComposerComponents.image]:{id:"asset.sys.id",image:"asset.sys.uri",altText:"altText",title:"caption"},[r.ComposerComponents.quote]:{quote:"text",author:"source"},[r.ComposerComponents.subscribeForm]:{title:"title",text:"description",campaignURL:"url"},[r.ComposerComponents.button]:{text:"buttonText",link:["externalLink","internalLink.sys.uri","asset.sys.uri"]},[r.ComposerComponents.form]:{formId:"formId"},[r.ComposerComponents.banner]:{title:"banner.title",text:"banner.description",image:"banner.image.asset.sys.uri",link:"banner.linkURL",linkText:"banner.linkTitle",className:"banner.className"},[r.ComposerComponents.accordion]:{accordions:e=>e.map(e=>Object(n.c)(e,{title:"title",content:"content"}))},[r.ComposerComponents.contentBanner]:{title:"title",content:"content",buttonLabel:["buttonText","internalLink.entryTitle"],buttonLink:["externalLink","internalLink.sys.uri","asset.sys.uri"]},[r.ComposerComponents.articles]:{cards:e=>e.map(e=>Object(n.c)(e,{title:"title",standfirst:"standfirst",readingTime:"readingTime",image:"image.asset.sys.uri",link:"sys.uri",date:"publishedDate",author:{$path:"author",$formatting:{name:"name",title:"prefix",suffix:"suffix"}}}))},[r.ComposerComponents.generalCard]:{cards:e=>e.map(e=>Object(n.c)(e,{title:["title","internalLink.entryTitle"],standfirst:["standfirst","internalLink.standfirst"],image:["image.asset.sys.uri","internalLink.featuredImage.asset.sys.uri","internalLink.headerImage.asset.sys.uri"],link:["linkURL","internalLink.sys.uri"]}))},[r.ComposerComponents.video]:{title:"title",description:"description",source:"youTubeEmbedCode",thumbnail:"thumbnail.asset.sys.uri"},[r.ComposerComponents.videos]:{videos:e=>e.length&&e.map(e=>Object(n.c)(e,{source:"youTubeEmbedCode",description:"description",title:"title",link:"link",thumbnail:"thumbnail.asset.sys.uri"}))},[r.ComposerComponents.testimonials]:{testimonials:e=>e.map(e=>Object(n.c)(e,{quote:"quote",image:"image.asset.sys.uri",author:"author",role:"role",link:"sys.uri",standfirst:["standfirst1","entryDescription"],dontShowButton:"dontShowButton",body:({body:e})=>Object(n.a)(e,i)}))},[r.ComposerComponents.faculty]:{faculty:e=>e.map(e=>Object(n.c)(e,{name:"name",prefix:"prefix",suffix:"suffix",position:"position",shortBio:"shortBio",link:"url",image:"profilePhoto.asset.sys.uri",department:{title:"department.title",description:"department.description"}}))},[r.ComposerComponents.callout]:{content:e=>{if("string"==typeof e)return e}},[r.ComposerComponents.relatedArticle]:{title:"title",standfirst:"standfirst",readingTime:"readingTime",image:"image.asset.sys.uri",link:"sys.uri",date:"publishedDate"},[r.ComposerComponents.tabbedContent]:{tabs:{$path:"tabs",$formatting:{title:"title",content:{$path:"tabContent",$formatting:{title:"title",body:"standfirst",image:"image.asset.sys.uri",alt:"image.altText",link:["linkURL","internalLink.sys.uri"],linkLabel:"linkLabel"}}}}},[r.ComposerComponents.articleWithImage]:{title:"title",text:"text",images:"image",quoteUnderText:"quoteUnderText",quote:"quote.text",author:"quote.source"}};t.a=i},281:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(1),o=a.n(i),s=a(3),l=a(76),m=a(278),c=a(298),d=a(73),p=a(277),u=a(57),g=a(41);const h=({title:e,description:t,source:a})=>n.a.createElement(g.j,{type:"YouTube",title:e,description:t,source:a});h.propTypes={title:o.a.string,description:o.a.string,source:o.a.string};var b=h;const y=e=>n.a.createElement(n.a.Fragment,null,n.a.createElement(b,e));y.propTypes={title:o.a.string};var f=y,k=a(287),x=a(288),v=a(102),E=a(5);var w=E.default.section.withConfig({displayName:"contentBannerstyled__ContentBannerStyled",componentId:"sc-5tq2bk-0"})(["",""],({theme:e})=>Object(E.css)(["padding:4rem 1.6rem;@media ","{padding:6.4rem 1.6rem;}background-color:",";.content-banner__main-content{@media ","{display:grid;grid-template-columns:minmax(32.8rem,auto) minmax(auto,58.8rem);gap:2.4rem;max-width:110rem;margin-left:0;}.content-banner__heading-container{display:flex;flex-direction:column;justify-content:space-between;.content-banner__heading{margin-bottom:4rem;@media ","{margin-bottom:0rem;}}}p{font-size:1.6rem;line-height:3.2rem;margin:0 0 4rem;@media ","{margin:0;}}}"],e.mq.laptop,e.colors.grey2,e.mq.laptop,e.mq.laptop,e.mq.laptop));const _=({title:e,content:t,buttonLabel:a,buttonLink:r})=>{const i=Object(v.a)(),o=["laptop","desktop","largeDesktop"];return n.a.createElement(w,null,n.a.createElement("div",{className:"wrapper"},n.a.createElement("div",{className:"content-banner__main-content"},n.a.createElement("div",{className:"content-banner__heading-container"},n.a.createElement(u.a,{level:"1",size:"3",text:e,className:"content-banner__heading",marker:!0}),o.includes(i)&&r&&n.a.createElement(d.a,{text:a,link:r})),n.a.createElement("div",null,t&&n.a.createElement("p",null,t),!o.includes(i)&&n.a.createElement(d.a,{text:a,link:r})))))};_.propTypes={title:o.a.string,content:o.a.string,buttonLabel:o.a.string,buttonLink:o.a.string};var C=_,N=a(297),q=a(292),T=a(285);var j=E.default.section.withConfig({displayName:"individualOrganisationTogglestyled__IndividualOrganisationToggleStyled",componentId:"sc-1b7zmgu-0"})(["",""],({theme:e})=>Object(E.css)(["padding:8rem 0;.iot-container{@media ","{display:flex;flex-wrap:nowrap;justify-content:space-between;}}"],e.mq.laptop)),O=a(100);var L=E.default.div.withConfig({displayName:"individualOrganisationCardstyled__IndividualOrganisationCardStyled",componentId:"sc-41wtq2-0"})(["",""],({theme:e})=>Object(E.css)(["margin-bottom:4.8rem;text-align:center;color:",";@media ","{width:30%;flex:0 1 30%;padding:0 1.2rem;margin-bottom:0;display:flex;flex-direction:column;}.iot-card__media{display:block;width:100%;height:auto;max-height:28rem;margin-bottom:2.4rem;}.iot-card__title{}.iot-card__body{margin-bottom:2.4rem;text-align:left;@media ","{padding:0 1.2rem;}}.iot-card__button{display:inline-block;width:unset;margin-top:auto;margin-left:auto;margin-right:auto;padding:0.8rem 2.4rem;&:hover,&:focus{background-color:",";color:",";}}"],e.colors.grey7,e.mq.laptop,e.mq.tablet,e.colors.red,e.colors.white));const I=({title:e,image:t,alt:a,body:r,link:i,linkLabel:o})=>n.a.createElement(L,null,n.a.createElement(O.a,{uri:i},n.a.createElement("img",{src:t+"?format=webp&width=480&quality=80",alt:a,className:"iot-card__media"})),n.a.createElement("h3",{className:"iot-card__title"},e),n.a.createElement("p",{className:"iot-card__body"},r),n.a.createElement(d.a,{text:o,link:i,type:"link",colortype:"secondary",bg:"transparent",borderType:"round",className:"iot-card__button"}));I.propTypes={title:o.a.string,image:o.a.string,alt:o.a.string,body:o.a.string,link:o.a.string,linkLabel:o.a.string},I.defaultProps={linkLabel:"View courses"};var S=I;var W=E.default.div.withConfig({displayName:"tabstyled__TabStyled",componentId:"sc-usrqg5-0"})(["",";"],({theme:e})=>Object(E.css)([".tList{margin-left:auto;margin-right:auto;margin-bottom:4rem;@media ","{display:flex;align-items:flex-start;justify-content:space-evenly;max-width:60rem;gap:3rem;}}.tItem{padding:1.6rem;border:0.1rem solid ",";border-radius:6rem;background-color:",";cursor:pointer;width:100%;&:first-of-type{margin-bottom:1rem;}@media ","{margin-bottom:0;}&[aria-selected='true']{background-color:",";color:",";}}"],e.mq.tablet,e.colors.red,e.colors.white,e.mq.tablet,e.colors.red,e.colors.white));const z=({children:e})=>{const[t,a]=Object(r.useState)("tab_0");let i,o={};e&&e.map((e,t)=>{const a="tab_"+t,r={[a]:{label:a,title:e.props.title,content:e.props.children}};Object.assign(o,r)});const s=Object.keys(o).length>1;return o&&s&&(i=Object.keys(o).map(e=>n.a.createElement("button",{role:"tab","aria-selected":t===e?"true":"false",key:e,onClick:()=>a(e),className:"tItem"},o[e].title))),n.a.createElement(n.a.Fragment,null,n.a.createElement(W,null,s&&n.a.createElement("div",{className:"wrapper"},n.a.createElement("div",{className:"tList",role:"tablist","aria-label":"Tabs"},i)),n.a.createElement("div",{role:"tabpanel"},o[t].content)))};z.propTypes={title:o.a.string,children:o.a.node};const B=({title:e,children:t})=>n.a.createElement(n.a.Fragment,null,n.a.createElement("div",null,e),n.a.createElement("div",null,t));B.propTypes={title:o.a.string,children:o.a.node};var P=z;function U(){return(U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}const A=({tabs:e})=>n.a.createElement(j,null,n.a.createElement(P,null,e.map((e,t)=>n.a.createElement(B,U({key:t},e),n.a.createElement("div",{className:"wrapper"},n.a.createElement("div",{className:"iot-container"},e.content.map((e,t)=>n.a.createElement(S,U({key:t},e)))))))));A.propTypes={tabs:o.a.array};var D=A;var F=E.default.div.withConfig({displayName:"articlestyled__ArticleStyled",componentId:"sc-13hpy8w-0"})(["",""],({theme:e})=>Object(E.css)(["padding:1.6rem 1.6rem;background-color:",";@media ","{padding:4.8rem;max-width:68.4rem;box-shadow:0px 0px 32px 0px #00018514;}.text{margin-top:40px;font-weight:400;font-size:1.6rem;line-height:3.2rem;}"],e.colors.white,e.mq.desktop));const H=({className:e,title:t,text:a})=>n.a.createElement(F,{className:e},t&&n.a.createElement(u.a,{level:"2",size:"3",marker:!0,text:t,className:"key-information__header"}),a&&n.a.createElement("div",{className:"text",dangerouslySetInnerHTML:{__html:a}}));var Q=H;H.propTypes={className:o.a.string,title:o.a.string,text:o.a.string};var R=E.default.div.withConfig({displayName:"articleWithImagestyled__articleWithImage",componentId:"sc-y1u0fx-0"})(["",""],({theme:e})=>Object(E.css)(["overflow:hidden;margin:4rem auto;padding:4.5rem 1.6rem;display:flex;flex-direction:column;.article{align-self:stretch;display:flex;flex-direction:column;justify-content:space-between;flex:1 1 auto;@media ","{margin-top:8.4rem;z-index:2;width:80%;}&:nth-child(1n){@media ","{margin-right:-60rem;}}}.images{align-self:stretch;}.quote{margin-top:4rem;order:1;@media ","{margin:7rem 10rem 0 10rem;}}.mobileQuote{display:block;@media ","{display:none;}}.desktopQuote{display:none;@media ","{display:block;}}&:nth-child(odd){background-color:",";.article > div{background-color:",";@media ","{background-color:",";}}@media ","{.articleWrapper{flex-direction:row-reverse;justify-content:flex-end;.quote{margin:7rem 10rem 0 12rem;}}.article{margin-left:-30rem;max-width:100%;@media ","{max-width:55%;}@media ","{max-width:100%;}}}}.articleWrapper{position:relative;@media ","{display:flex;max-width:120rem;width:100%;margin:0 auto;align-items:center;justify-content:center;flex-direction:row;&:nth-child(even){}}}@media ","{margin:8rem auto;}"],e.mq.desktop,e.mq.desktop,e.mq.desktop,e.mq.desktop,e.mq.desktop,e.colors.grey2,e.colors.grey2,e.mq.desktop,e.colors.white,e.mq.desktop,e.mq.desktop,e.mq.xdesktop,e.mq.desktop,e.mq.desktop));const $=E.default.div.withConfig({displayName:"articleWithImagestyled__Modal",componentId:"sc-y1u0fx-1"})(["position:fixed;top:0;left:0;height:100%;width:100%;background-color:rgba(0,0,0);z-index:100;.closeButton{position:fixed;background-color:rgba(0,0,0,0);border:0 solid;top:1.6rem;right:1.6rem;& > svg{width:2.4rem;height:2.4rem;}}"]),M=E.default.img.withConfig({displayName:"articleWithImagestyled__Image",componentId:"sc-y1u0fx-2"})(["margin-top:1.6rem;width:100%;"]),K=E.default.div.withConfig({displayName:"articleWithImagestyled__Wrapper",componentId:"sc-y1u0fx-3"})(["height:100%;overflow:scroll;"]);var V=E.default.div.withConfig({displayName:"imageCarouselstyled__ImageCarouselStyled",componentId:"sc-qizjwx-0"})(["",""],({theme:e})=>Object(E.css)([".mobileImages{margin-top:4rem;position:relative;overflow:hidden;height:40rem;& > img{width:100%;}button.arrow{border:none;background-color:",";width:4rem;height:4rem;border-radius:50%;position:relative;}.expand{border:none;background-color:rgba(0,0,0,0);position:absolute;top:1.6rem;right:1.6rem;z-index:1;svg{stroke:",";}}.nav{display:flex;justify-content:space-between;position:absolute;bottom:1.6rem;left:0;width:100%;padding:0 0.8rem;svg{stroke:red;fill:red;width:4rem;height:4rem;}& > button > .i{display:flex;justify-content:center;align-items:center;width:4rem;height:4rem;position:absolute;top:0;left:0;}.dots{display:flex;width:min-content;justify-content:space-around;align-items:center;& > div:nth-child(n){margin:0 10px;height:8px;width:8px;border-radius:50%;background-color:",";&.active{background-color:red;}}}}@media ","{display:none;}}.desktopImages{display:none;.imageWrapper{display:flex;flex-direction:column;}.primaryWrapper{position:relative;display:flex;justify-content:center;align-items:center;width:80rem;height:80rem;& > img{height:auto;width:100%;}}.imageQuote{align-self:flex-end;}.secondaryWrapper{position:relative;display:flex;justify-content:center;align-items:center;height:39.2rem;width:39.2rem;margin:-23.2rem 5rem 0 auto;& > img{width:39.2rem;height:39.2rem;}@media ","{margin:-23.2rem auto 0 auto;}}@media ","{min-height:80rem;display:block;}@media ","{display:block;}}"],e.colors.white,e.colors.white,e.colors.white,e.mq.desktop,e.mq.desktop,e.mq.desktop,e.mq.xdesktop));const J=({images:e,quote:t,author:a,quoteUnderText:i})=>{const[o,s]=Object(r.useState)(0),[l,m]=Object(r.useState)(!1),c=()=>m(!l);return n.a.createElement(V,null,l&&n.a.createElement($,null,n.a.createElement(K,null,n.a.createElement("button",{className:"closeButton",onClick:c},n.a.createElement(g.e,{type:"close"})),e.map(e=>n.a.createElement(M,{key:e.asset.sys.id,src:e.asset.sys.uri,alt:e.altText})))),n.a.createElement("div",{className:"mobileImages"},n.a.createElement("button",{className:"expand",onClick:c},n.a.createElement(g.e,{type:"expand_image"})),n.a.createElement("img",{src:e[o].asset.sys.uri,alt:e[o].altText}),e.length>1&&n.a.createElement("div",{className:"nav"},n.a.createElement("button",{className:"arrow",onClick:()=>{0===o&&s(e.length-1),0!==o&&s(o-1)}},n.a.createElement(g.e,{type:"chevron_left"})),n.a.createElement("div",{className:"dots"},e.map(t=>{let a=t.asset.sys.id;const r=e[o].asset.sys.id===a;return n.a.createElement("div",{key:a,className:r?"active":"noactive"}," ")})),n.a.createElement("button",{className:"arrow",onClick:()=>{o===e.length-1&&s(0),o!==e.length-1&&s(o+1)}},n.a.createElement(g.e,{type:"chevron_right",style:{cursor:"pointer"}})))),n.a.createElement("div",{className:"desktopImages"},n.a.createElement("div",{className:"imageWrapper"},n.a.createElement("div",{className:"primaryWrapper"},n.a.createElement("img",{src:e[0].asset.sys.uri,alt:e[0].altText,className:"primaryImage"})),e.length>=2&&n.a.createElement("div",{className:"secondaryWrapper"},n.a.createElement("img",{src:e[1].asset.sys.uri,alt:e[1].altText,className:"secondaryImage"})),t&&!i&&n.a.createElement(p.a,{quote:t,author:a,className:"imageQuote quote"}))))};var Y=J;J.propTypes={images:o.a.array,quote:o.a.string,author:o.a.string,quoteUnderText:o.a.bool};const G=({title:e,text:t,images:a,quoteUnderText:r,quote:i,author:o})=>n.a.createElement(R,null,n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"articleWrapper"},n.a.createElement("div",{className:"article"},n.a.createElement(Q,{title:e,text:t}),i&&r&&n.a.createElement(p.a,{quote:i,author:o,className:"desktopQuote quote"})),n.a.createElement("div",{className:"images"},n.a.createElement(Y,{images:a,quote:i,author:o,quoteUnderText:r}))),i&&n.a.createElement(p.a,{quote:i,author:o,className:"mobileQuote quote"})));var X=G;function Z(){return(Z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}G.propTypes={images:o.a.array,quoteUnderText:o.a.bool,title:o.a.string,text:o.a.string,quote:o.a.string,author:o.a.string};const ee=e=>{const{content:t,heading:a,callout:r,video:i,videos:o,quote:h,subscribeForm:b,button:y,accordion:v,image:E,contentBanner:w,form:_,banner:j,card:O,articles:L,testimonials:I,generalCard:S,tabbedContent:W,articleWithImage:z}=s.ComposerComponents;switch(e._type){case t:return n.a.createElement(c.a,e);case a:return n.a.createElement(u.a,e);case r:return n.a.createElement(g.c,e);case i:return n.a.createElement(f,e);case o:return n.a.createElement(k.a,Z({type:"secondary"},e));case h:return n.a.createElement(p.a,e);case b:return n.a.createElement(g.i,Z({className:"subscribe"},e));case y:return n.a.createElement(d.a,Z({className:"button"},e));case v:return n.a.createElement("div",{className:"accordion-group"},n.a.createElement(q.a,e));case E:return n.a.createElement(g.f,e);case w:return n.a.createElement(C,e);case _:return n.a.createElement(x.a,null,n.a.createElement(l.a,e));case j:return n.a.createElement(m.a,e);case O:return n.a.createElement(T.b,e);case L:return n.a.createElement(T.a,Z({title:"Latest articles",uri:"/insights?contentType=article"},e));case I:return n.a.createElement("div",{className:"composer__testimonial-slider"},n.a.createElement("div",{className:"wrapper"},n.a.createElement(N.a,Z({linkText:"View testimonial"},e))));case S:return n.a.createElement(T.a,e);case W:return n.a.createElement(D,e);case z:return n.a.createElement(X,e);default:return null}};ee.propTypes={_type:o.a.string.isRequired};var te=ee;function ae(){return(ae=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}const re=({content:e})=>e&&Array.isArray(e)?n.a.createElement(n.a.Fragment,null,e.map((e,t)=>e._type?n.a.createElement(te,ae({key:t},e)):null)):null;re.propTypes={content:o.a.array};t.a=re},299:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));const{Projects:r}=a(3),n=PROJECTS[0].id===r.lseOnline?"/online-image-library":"/exec-image-library"},302:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(1),o=a.n(i),s=a(57),l=a(73),m=a(5),c=a(299);const d=m.default.div.withConfig({displayName:"homePageHerostyled__HomePageHeroStyled",componentId:"sc-1c6nn2f-0"})(["",""],({theme:e})=>{const t=c.a+"/lse-home-belly.png";return Object(m.css)(["color:",";position:relative;display:flex;flex-direction:column;justify-content:center;min-height:50vh;height:100%;overflow:hidden;&::before{content:'';position:absolute;height:100%;width:100%;right:0;top:0;@media ","{min-height:80rem;background-image:url(",");background-size:50.4rem 100%;background-repeat:no-repeat;background-position:right;}}.hero__wrapper{h1{&.hasMarker{padding-left:calc("," * 2);border-left:0.6rem solid ",";margin-bottom:4rem;@media ","{max-width:66rem;}}}h2{margin-bottom:4rem;}.home-hero__link{color:",";border:0.1rem solid ",";background-color:transparent;}}"],e.colors.white,e.mq.desktop,t,e.grid.gap,e.colors.white,e.mq.tablet,e.colors.white,e.colors.white)}),p=m.default.div.withConfig({displayName:"homePageHerostyled__HeroImageStyled",componentId:"sc-1c6nn2f-1"})(["",""],({theme:e,image:t})=>Object(m.css)(["position:absolute;width:100%;height:100%;background:linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url(","?format=webp&width=800&quality=80) no-repeat;background-position:center center;background-size:cover;z-index:-2;@media ","{background:linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url(","?format=webp&width=1800&quality=80) no-repeat;background-position:center center;background-size:cover;}"],t,e.mq.tablet,t));var u=d,g=a(107);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}const b=({title:e,standfirst:t,image:a,className:r,button:i,showMiniProgrammeFinder:o})=>n.a.createElement(u,{className:r},n.a.createElement("div",{className:"wrapper hero__wrapper"},n.a.createElement("div",null,n.a.createElement(s.a,{text:e,level:"1",size:"1",marker:!0}),t&&n.a.createElement(s.a,{text:t,level:"2",size:"4"})),i&&n.a.createElement("div",{className:"hero__button-container"},n.a.createElement(l.a,h({},i,{className:"home-hero__link"})))),o&&n.a.createElement(g.a,{darkBg:!1}),n.a.createElement(p,{image:a}));b.propTypes={title:o.a.string,standfirst:o.a.string,image:o.a.string,className:o.a.string,button:o.a.object,showMiniProgrammeFinder:o.a.bool};t.a=b}}]);