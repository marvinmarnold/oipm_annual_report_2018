(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{145:function(e,t,a){"use strict";a.r(t);var n=a(7),i=a.n(n),o=a(0),r=a.n(o),l=a(358),s=a(359),c=a(360),u=a(362),d=a(363),m=a(192),p=a(176),f=(a(169),a(199)),h=a(201),g=a(203),y=a(205),b=function(e){function t(){var t;return(t=e.call(this)||this).state={},t}i()(t,e);var a=t.prototype;return a.renderNav=function(){return r.a.createElement(l.a,{className:"mt-4",vertical:!0},r.a.createElement(s.a,null,r.a.createElement(c.a,{href:"/complaints-highlights",className:"text-white"},"Complaints and allegations by year")),r.a.createElement(s.a,null,r.a.createElement(c.a,{href:"/allegations-analysis",className:"text-white"},"Allegation analysis")),r.a.createElement(s.a,null,r.a.createElement(c.a,{href:"/complaints-analysis",className:"text-white"},"Complaint analysis")),r.a.createElement(s.a,null,r.a.createElement(c.a,{href:"/complaints-fourth",className:"text-white"},"4th amendment complaints")),r.a.createElement(s.a,null,r.a.createElement(c.a,{href:"/complaints-anonymous",className:"text-white"},"Anonymous complaints")),r.a.createElement(s.a,null,r.a.createElement(c.a,{href:"/complaints-discipline",className:"text-white"},"Discipline")))},a.renderAllegationsOutcomes=function(){return r.a.createElement("div",{id:"allegations-outcomes"},r.a.createElement(u.a,null,r.a.createElement(d.a,null)),r.a.createElement(u.a,null,r.a.createElement(d.a,null,r.a.createElement("h5",{className:"text-center"},"FIGURE 4: MOST COMMON ALLEGATIONS"),r.a.createElement(f.a,null),r.a.createElement("h4",null,"Allegation Analysis"),r.a.createElement("p",null,"Allegations are different from complaints. Within one complaint may be multiple allegations of misconduct. According to NOPD data, the two most common complaint allegations in 2018, representing roughly 75% of all allegations, were: “neglect of duty,” and “professionalism”. Similar to findings analyzed of other departments, complaints tend to originate from civilian interactions."),r.a.createElement("p",null,"The dispositions of the complaints filed in 2018 are illustrated in the figure 4: “Most Common Allegations.” This figure illustrates that the most common allegation of “Neglect of Duty” is also the allegation most frequently marked “sustained”. This is consistent with 2017 findings."),r.a.createElement("p",null,"Complaint allegations have shifted slightly from 2017. While “neglect of duty” and “professionalism” remained the most common allegations, the third most common switched from “instructions from an authoritative source” in 2017 to “adherence to law” in 2018. While there was not a significant percentage change in “adherence to law” allegations between 2017 and 2018, “instructions from an authoritative source” allegations decreased by almost sixty (60) allegations, or over 3%."),r.a.createElement("p",null,"There was a disciplinary matrix change implemented in March of 2018, as a result, there was a policy shift to more accurately determine the appropriate charge between neglect of duty and instructions from an authoritative source. This resulted in a change in PIB practice resulting in more charges of neglect of duty in 2018."))),r.a.createElement(u.a,null,r.a.createElement(d.a,null,r.a.createElement("h5",{className:"text-center"},"FIGURE 5: NOPD ALLEGATION FINDINGS"),r.a.createElement(h.a,null),r.a.createElement("p",null,"In 2018, the most common sustained allegation is “neglect of duty” at 52%, mostly unchanged since 2017."),r.a.createElement("h5",{className:"text-center"},"FIGURE 6: MOST SUSTAINED ALLEGATIONS"),r.a.createElement(g.a,null),r.a.createElement("p",null,"These totals are based on sustained allegations only."),r.a.createElement("h5",{className:"text-center"},"FIGURE 7: ALLEGATIONS BY SOURCE"),r.a.createElement(y.a,null),r.a.createElement("p",null,"This classification of each allegation is complimentary to and consistent with the Public vs Rank Initiated classification that each allegation also receives. In 2018, 62% of allegations are classified as the public initiated. Of the 62% of allegations made by the public, approximately 55.5% of those allegations were classified as initiated by a civilian, which means a member of the public was the source of the complaint and a member of the public submitted a complaint in person to a NOPD employee. Moving forward, the OIPM and the NOPD is going to examine this public initiated category (type) to better identify the source of the complaint. The goal is to better differentiate the data from website complaints, OIPM referrals, and civilian complaints to confidently determine in the data what is coming from a public source."))))},a.render=function(){return r.a.createElement(p.a,{title:"Allegation analysis",nav:this.renderNav(),body:r.a.createElement("div",null,r.a.createElement(u.a,null,r.a.createElement(d.a,null,r.a.createElement("h1",{className:"mt-5 text-center"},"2018 Annual Report"),r.a.createElement("h2",{className:"mb-5 text-center"},"Complaints,Commendations & Disciplinary Proceedings"))),this.renderAllegationsOutcomes(),r.a.createElement(u.a,{className:"text-center"},r.a.createElement(d.a,{className:"py-5"},r.a.createElement(m.a,{size:"lg",color:"secondary",className:"mx-3 my-2"},r.a.createElement("a",{href:"/complaints-highlights",className:"text-white"},"< Complaints and allegations by year")),r.a.createElement(m.a,{size:"lg",color:"success",className:"my-2"},r.a.createElement("a",{href:"/complaints-analysis",className:"text-white"},"Next: Complaints analysis >")))))})},t}(r.a.Component);t.default=b},166:function(e,t,a){"use strict";var n=a(7),i=a.n(n),o=a(0),r=a.n(o),l=(a(33),a(190)),s=a.n(l),c=a(191),u=function(e){function t(){var t;return(t=e.call(this)||this).state={},t}i()(t,e);var a=t.prototype;return a.genResponsiveConfig=function(e){var t=e;return t.responsive=!0,t},a.genResponsiveLayout=function(e){var t="Times New Roman, monospace";if(this.props.layoutOverride){var a=this.props.layoutOverride;return a.font={},a.font.family=t,a}var n=e;return n.legend={x:0,y:this.props.yoffset||-.35},n.font={},n.font.family=t,n},a.renderLoading=function(){return r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement(c.MoonLoader,{loading:!0,size:6,sizeUnit:"rem"}))},a.render=function(){var e=this;return this.props.data?r.a.createElement(s.a,{data:this.props.data,layout:this.genResponsiveLayout(this.props.layout),config:this.genResponsiveConfig(this.props.config),onInitialized:function(t){return e.setState(t)},onUpdate:function(t){return e.setState(t)},useResizeHandler:!0,style:{width:"100%"}}):this.renderLoading()},t}(r.a.Component);t.a=u},167:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),i=a.n(n),o=a(4),r=a.n(o),l=a(33),s=a.n(l);a.d(t,"a",function(){return s.a});a(170);var c=i.a.createContext({}),u=function(e){return i.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func}},169:function(e,t,a){"use strict";var n=a(174),i=a(0),o=a.n(i),r=a(4),l=a.n(r),s=a(189),c=a.n(s);function u(e){var t=e.description,a=e.lang,i=e.meta,r=e.keywords,l=e.title,s=n.data.site,u=t||s.siteMetadata.description;return o.a.createElement(c.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:l},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:u}].concat(r.length>0?{name:"keywords",content:r.join(", ")}:[]).concat(i)})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=u},170:function(e,t,a){var n;e.exports=(n=a(171))&&n.default||n},171:function(e,t,a){"use strict";a.r(t);a(36);var n=a(0),i=a.n(n),o=a(4),r=a.n(o),l=a(55),s=a(2),c=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},t.default=c},172:function(e){e.exports={data:{site:{siteMetadata:{title:"OIPM 2018 Annual Report"}}}}},173:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFeklEQVQ4y12UCUzTdxTH/1i3hJjpjmTuyDbd4UZQ51yyzDl1ynTZFMYmUScYRUVRAUEu8aggCFIRgRbklIHaKndLtSooVEq5ihdUiFylQC9Ki4AHPX7f/fs3HvMlL3nv/X7vk98vv+/vUT1dNymHPTE2O1FOftSrBsDhzrRPp/0dYGQaUMl6dY9HYq1T9809To5YUR36rDhhUDi9hJhdbJZR/x6NIV/W3ie71trRUyxVGC7ekJtEdbIBiaxaIW+qEKiVZ4Pt98NcnvcpawKfMTT9DUwwoZfPuaNskp6vklvZ/BpsS78Ej7gLWByei6WReVgWeQaLwnLxRwwfW9KEiMwXIquEP3lVkiTpvLF9joNxuzrEibp7r4q5wpimdm3mlXrM3ppqd/VPtS4M4FkXh2baVkTl2iPyJfagTJHd7UCufVFIhs11e7J1lneC9W2PYzZ2diHUTRG+DkbT1fCpVEtL+RRHMqoWr4k7J4KLP9e2JCyL0CDidjCPROZfITxxPTgltfBNEpAvfWLJFxuiyWyvw8R5+T7LjmPpGOvO2uhg3K1PYVHNDXwGONItcE+8IMK83Rn0SfLIykN5WBGZBbfwDITlCLH/jBhLgtPg6puAOZti8bX3UTL9t0jL3pRCWAxXvB2MB+2lLEpel80Ate2n3TkXKvD93mz7Av9k8rlPLD7bGI0PN7DxS0Q61rBzMGvTUcz3S8Q3m4/ho78PkWkrwy2hvCLgcTsDVPfKWZSslssANW2p7sfPF+ODtbH29dF5JJBbgiOFEvBEMsScvwpvzjkEnS7Dwl1J+JaGBqWVkK/+OWoJSS+jFTXCAPW6LhZ1TXiIAfbKo9wP8rLgvGq/vbL+Hmnq6EdbnwZBmeVQG8zo15vwZNKCpaFcJJfU0BCQhdsSLcHpQkfMAIfNBhYlvhjIAO9X+7nvT+Fi5l8xdllbNxE3KlHZpESasA6FNQqUN7ShTaVFkfQ26tt70aDsI596sS0R2ZIXwNGJRyyqnB/GyKarZrt7MCcZiwMy7J1qLaEbkFEpw4KAk1gTewaiZiW4ojpHMzgXr0Pc0E5m/B5uicplgD4Ohmls9OUv6qze6rk3MQk/7uLZjxZcJjEFEqyNzYerPweecfk4UHAZXvEFiKJf25Odi9CMcuL86z7LgdxLNG+Ckc3AQN+bVMG/p993JHfK3dwikk/B42CBbedJAdmWJEAArxQH8i/BL7UIO7nF2J5SBJ/j57GVXlvLPkOW7+VZgtKKgUnV5hcnq6m97qUeMid01MUc3h0bR8shjsz3TSAuWxIwfwcH82ifvzMRP4ekYlUkDxticrE7mU9CuUXEL+EsSaY/g26wUz84pD3b2qpYSZWWCj4xjozpzNpWxGdmWn/amYxVwafIOnYW9pziEw5fAkFVI260tKOjbxC9QwYyqB8h2mETBnRG+4DeNPn4yVPodTqLVCr9gWpubtmo02k7hnRGqLQjNo3BZFHrRqz6kVH7+MQjutGMQcMoUevMxGgeh85oQr9m2N7Rb7R2DRppST2ERm982tPdJW5RKFYz15aIKz5WDWhMPVoz1MNjUOlH0T1kRnuf0Sq788BW1XCHFF66SdjZFbat8XyrbzwfeWXlaJHld+lVjX6dnd1raMwbFULhbMcAdfL0CXNqu3trwbhJ62EcNq1TKUVH5NWcwZyiQvwZlYlZ6+Mx0zMG3/mdgH9CCrIL4nR1l8MOd5a99xb1usUdP8FM5tctZxc1o1qwepuwKFiakh1tTc2Jm7wmOtTYUxcYCP2Sd5/v61LWTO3qVrFKy8uo0rKyZ0P2VEoK1Xrr1pR+tZql6u9n9an6/jfmH0qXzR2Xuc19tVYlOsLquBnBAKSVYZSoiMvU/wPTtJD2vfnAgQAAAABJRU5ErkJggg==",width:64,height:64,src:"/static/514407e789c3ef441ae1eb659a89e514/d4bcd/oipm-icon.png",srcSet:"/static/514407e789c3ef441ae1eb659a89e514/d4bcd/oipm-icon.png 1x,\n/static/514407e789c3ef441ae1eb659a89e514/35746/oipm-icon.png 1.5x,\n/static/514407e789c3ef441ae1eb659a89e514/a2862/oipm-icon.png 2x,\n/static/514407e789c3ef441ae1eb659a89e514/d1d11/oipm-icon.png 3x"}}}}}},174:function(e){e.exports={data:{site:{siteMetadata:{title:"OIPM 2018 Annual Report",description:"Data analysis for New Orleans Office of the Independent Police Monitor's 2018 Annual Report.",author:"Marvin Arnold"}}}}},175:function(e,t,a){"use strict";var n=a(172),i=a(0),o=a.n(i),r=a(4),l=a.n(r),s=a(167),c=(a(35),a(34)),u=a.n(c),d=a(7),m=a.n(d),p=a(354),f=a(355),h=a(356),g=a(357),y=a(358),b=a(359),x=a(360),v=(a(185),a(173)),E=a(186),w=a.n(E),N=function(){return o.a.createElement(s.b,{query:"2390269856",render:function(e){return o.a.createElement(w.a,{fixed:e.placeholderImage.childImageSharp.fixed})},data:v})},A=function(e){function t(t){var a;return(a=e.call(this,t)||this).toggleNavbar=a.toggleNavbar.bind(u()(a)),a.state={collapsed:!0},a}m()(t,e);var a=t.prototype;return a.toggleNavbar=function(){this.setState({collapsed:!this.state.collapsed})},a.normalizePath=function(e){return e.replace(/\/+/g,"/")},a.withPrefix=function(e){return this.normalizePath("/"+e)},a.render=function(){return o.a.createElement("div",null,o.a.createElement(p.a,{color:"dark",light:!0,expand:"md",dark:!0},o.a.createElement(f.a,{href:this.withPrefix("/")},o.a.createElement(N,null)),o.a.createElement(h.a,{onClick:this.toggleNavbar.bind(this)}),o.a.createElement(g.a,{isOpen:this.state.collapsed,navbar:!0},o.a.createElement(y.a,{className:"ml-auto",navbar:!0},o.a.createElement(b.a,null,o.a.createElement(x.a,{href:this.withPrefix("/force")},"Use of Force")),o.a.createElement(b.a,null,o.a.createElement(x.a,{href:this.withPrefix("/complaints-highlights")},"Complaints & Misconduct")),o.a.createElement(b.a,null,o.a.createElement(x.a,{href:this.withPrefix("/mediation")},"Mediation")),o.a.createElement(b.a,null,o.a.createElement(x.a,{href:this.withPrefix("/officers")},"Officer Demographics")),o.a.createElement(b.a,null,o.a.createElement(x.a,{href:"https://nolaipm.gov"},"OIPM Home"))))))},t}(o.a.Component),k=function(e){var t=e.siteTitle;return o.a.createElement("header",null,o.a.createElement(A,{siteTitle:t}))};k.propTypes={siteTitle:l.a.string},k.defaultProps={siteTitle:""};var F=k,M=(a(187),a(188),function(e){var t=e.children;return o.a.createElement(s.b,{query:"755544856",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(F,{siteTitle:e.site.siteMetadata.title}),o.a.createElement("div",null,o.a.createElement("main",null,t),o.a.createElement("footer",null)))},data:n})});M.propTypes={children:l.a.node.isRequired};t.a=M},176:function(e,t,a){"use strict";a.d(t,"a",function(){return m});var n=a(7),i=a.n(n),o=a(0),r=a.n(o),l=a(361),s=a(362),c=a(363),u=a(175),d=a(169),m=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){return r.a.createElement(u.a,null,r.a.createElement(d.a,{title:this.props.title}),r.a.createElement(l.a,{fluid:!0},r.a.createElement(s.a,null,r.a.createElement(c.a,{className:"bg-secondary",xs:"12",lg:"2",md:"3"},r.a.createElement("h4",{className:"mt-5"},"Jump to..."),this.props.nav),r.a.createElement(c.a,{xs:"12",lg:"10",md:"9"},this.props.body))))},t}(r.a.Component)},192:function(e,t,a){"use strict";var n=a(177),i=a(178),o=a(181),r=a(182),l=a(0),s=a.n(l),c=a(4),u=a.n(c),d=a(179),m=a.n(d),p=a(180),f={active:u.a.bool,"aria-label":u.a.string,block:u.a.bool,color:u.a.string,disabled:u.a.bool,outline:u.a.bool,tag:p.i,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),onClick:u.a.func,size:u.a.string,children:u.a.node,className:u.a.string,cssModule:u.a.object,close:u.a.bool},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(r.a)(Object(r.a)(a))),a}Object(o.a)(t,e);var a=t.prototype;return a.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},a.render=function(){var e=this.props,t=e.active,a=e["aria-label"],o=e.block,r=e.className,l=e.close,c=e.cssModule,u=e.color,d=e.outline,f=e.size,h=e.tag,g=e.innerRef,y=Object(i.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);l&&void 0===y.children&&(y.children=s.a.createElement("span",{"aria-hidden":!0},"×"));var b="btn"+(d?"-outline":"")+"-"+u,x=Object(p.f)(m()(r,{close:l},l||"btn",l||b,!!f&&"btn-"+f,!!o&&"btn-block",{active:t,disabled:this.props.disabled}),c);y.href&&"button"===h&&(h="a");var v=l?"Close":null;return s.a.createElement(h,Object(n.a)({type:"button"===h&&y.onClick?"button":void 0},y,{className:x,ref:g,onClick:this.onClick,"aria-label":a||v}))},t}(s.a.Component);h.propTypes=f,h.defaultProps={color:"secondary",tag:"button"},t.a=h},199:function(e,t,a){"use strict";var n=a(7),i=a.n(n),o=a(0),r=a.n(o),l=a(166),s=a(200),c=function(e){function t(){var t;return(t=e.call(this)||this).state={},t}i()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e={data:s.data,layout:s.layout,config:s.config};this.setState(e)},a.render=function(){return r.a.createElement(l.a,{data:this.state.data,layout:this.state.layout,layoutOverride:this.state.layout,config:this.state.config,yoffset:-1})},t}(r.a.Component);t.a=c},200:function(e){e.exports={visdat:{"27e82a72f12e":["function () ","plotlyVisDat"]},cur_data:"27e82a72f12e",attrs:{"27e82a72f12e":{labels:{},values:{},textposition:"inside",textinfo:"label+value+percent",insidetextfont:{color:"#FFFFFF"},name:"Top allegations",alpha_stroke:1,sizes:[10,100],spans:[1,20],type:"pie"}},layout:{margin:{b:40,l:60,t:25,r:10},hovermode:"compare",showlegend:!0},source:"A",config:{modeBarButtonsToAdd:[],cloud:!1},data:[{labels:["Adherence to law","Courtesy","Instructions from authoritative source","Neglect of duty","Other","Professionalism","Unauthorized force","Verbal intimidation"],values:[82,18,39,698,152,311,18,10],textposition:["inside","inside","inside","inside","inside","inside","inside","inside"],textinfo:"label+value+percent",insidetextfont:{color:"#FFFFFF"},name:"Top allegations",type:"pie",marker:{color:"rgba(31,119,180,1)",line:{color:"rgba(31,119,180,1)"}},frame:null}],highlight:{on:"plotly_click",persistent:!1,dynamic:!1,selectize:!1,opacityDim:.2,selected:{opacity:1},debounce:0},base_url:"https://plot.ly"}},201:function(e,t,a){"use strict";var n=a(7),i=a.n(n),o=a(0),r=a.n(o),l=a(166),s=a(202),c=function(e){function t(){var t;return(t=e.call(this)||this).state={},t}i()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e={data:s.data,layout:s.layout,config:s.config};this.setState(e)},a.render=function(){return r.a.createElement(l.a,{data:this.state.data,layout:this.state.layout,layoutOverride:this.state.layout,config:this.state.config,yoffset:-1})},t}(r.a.Component);t.a=c},202:function(e){e.exports={visdat:{"27e839827016":["function () ","plotlyVisDat"]},cur_data:"27e839827016",attrs:{"27e839827016":{alpha_stroke:1,sizes:[10,100],spans:[1,20],x:{},y:{},type:"bar",name:{},color:{},inherit:!0}},layout:{margin:{b:150,l:60,t:25,r:10},barmode:"stack",hovermode:"compare",xaxis:{domain:[0,1],automargin:!0,title:"Allegation Finding",dtick:1,showgrid:!1,type:"category",categoryorder:"array",categoryarray:["Data inconsistency","DI-2","Exonerated","Mediation","NFIM","Not Sustained","Pending","Sustained","Unfounded"]},yaxis:{domain:[0,1],automargin:!0,title:"Number of allegations",showgrid:!0},showlegend:!0},source:"A",config:{modeBarButtonsToAdd:[],cloud:!1},data:[{x:["Exonerated","NFIM","Not Sustained","Pending","Sustained","Unfounded"],y:[3,4,8,30,15,22],type:"bar",name:"Adherence to law",marker:{color:"rgba(102,194,165,1)",line:{color:"rgba(102,194,165,1)"}},textfont:{color:"rgba(102,194,165,1)"},error_y:{color:"rgba(102,194,165,1)"},error_x:{color:"rgba(102,194,165,1)"},xaxis:"x",yaxis:"y",frame:null},{x:["Data inconsistency","DI-2","Exonerated","Mediation","Not Sustained","Sustained","Unfounded"],y:[1,1,1,2,3,5,5],type:"bar",name:"Courtesy",marker:{color:"rgba(252,141,98,1)",line:{color:"rgba(252,141,98,1)"}},textfont:{color:"rgba(252,141,98,1)"},error_y:{color:"rgba(252,141,98,1)"},error_x:{color:"rgba(252,141,98,1)"},xaxis:"x",yaxis:"y",frame:null},{x:["DI-2","Exonerated","Pending","Sustained","Unfounded"],y:[4,3,2,19,11],type:"bar",name:"Instructions from authoritative source",marker:{color:"rgba(141,160,203,1)",line:{color:"rgba(141,160,203,1)"}},textfont:{color:"rgba(141,160,203,1)"},error_y:{color:"rgba(141,160,203,1)"},error_x:{color:"rgba(141,160,203,1)"},xaxis:"x",yaxis:"y",frame:null},{x:["Data inconsistency","DI-2","Exonerated","Mediation","NFIM","Not Sustained","Pending","Sustained","Unfounded"],y:[6,37,101,6,20,70,25,252,181],type:"bar",name:"Neglect of duty",marker:{color:"rgba(231,138,195,1)",line:{color:"rgba(231,138,195,1)"}},textfont:{color:"rgba(231,138,195,1)"},error_y:{color:"rgba(231,138,195,1)"},error_x:{color:"rgba(231,138,195,1)"},xaxis:"x",yaxis:"y",frame:null},{x:["Data inconsistency","Exonerated","NFIM","Not Sustained","Pending","Sustained","Unfounded"],y:[10,10,34,18,6,37,37],type:"bar",name:"Other",marker:{color:"rgba(166,216,84,1)",line:{color:"rgba(166,216,84,1)"}},textfont:{color:"rgba(166,216,84,1)"},error_y:{color:"rgba(166,216,84,1)"},error_x:{color:"rgba(166,216,84,1)"},xaxis:"x",yaxis:"y",frame:null},{x:["Data inconsistency","DI-2","Exonerated","Mediation","NFIM","Not Sustained","Pending","Sustained","Unfounded"],y:[1,3,41,30,31,51,6,36,112],type:"bar",name:"Professionalism",marker:{color:"rgba(255,217,47,1)",line:{color:"rgba(255,217,47,1)"}},textfont:{color:"rgba(255,217,47,1)"},error_y:{color:"rgba(255,217,47,1)"},error_x:{color:"rgba(255,217,47,1)"},xaxis:"x",yaxis:"y",frame:null},{x:["Exonerated","NFIM","Not Sustained","Pending","Sustained","Unfounded"],y:[2,1,1,2,3,9],type:"bar",name:"Unauthorized force",marker:{color:"rgba(229,196,148,1)",line:{color:"rgba(229,196,148,1)"}},textfont:{color:"rgba(229,196,148,1)"},error_y:{color:"rgba(229,196,148,1)"},error_x:{color:"rgba(229,196,148,1)"},xaxis:"x",yaxis:"y",frame:null},{x:["Exonerated","Mediation","Not Sustained","Unfounded"],y:[1,1,4,4],type:"bar",name:"Verbal intimidation",marker:{color:"rgba(179,179,179,1)",line:{color:"rgba(179,179,179,1)"}},textfont:{color:"rgba(179,179,179,1)"},error_y:{color:"rgba(179,179,179,1)"},error_x:{color:"rgba(179,179,179,1)"},xaxis:"x",yaxis:"y",frame:null}],highlight:{on:"plotly_click",persistent:!1,dynamic:!1,selectize:!1,opacityDim:.2,selected:{opacity:1},debounce:0},base_url:"https://plot.ly"}},203:function(e,t,a){"use strict";var n=a(7),i=a.n(n),o=a(0),r=a.n(o),l=a(166),s=a(204),c=function(e){function t(){var t;return(t=e.call(this)||this).state={},t}i()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e={data:s.data,layout:s.layout,config:s.config};this.setState(e)},a.render=function(){return r.a.createElement(l.a,{data:this.state.data,layout:this.state.layout,layoutOverride:this.state.layout,config:this.state.config,yoffset:-1})},t}(r.a.Component);t.a=c},204:function(e){e.exports={visdat:{"27e85fcba69a":["function () ","plotlyVisDat"]},cur_data:"27e85fcba69a",attrs:{"27e85fcba69a":{labels:{},values:{},textposition:"inside",textinfo:"label+value+percent",insidetextfont:{color:"#FFFFFF"},name:"Top sustained",alpha_stroke:1,sizes:[10,100],spans:[1,20],type:"pie"}},layout:{margin:{b:40,l:60,t:25,r:10},hovermode:"compare",showlegend:!0},source:"A",config:{modeBarButtonsToAdd:[],cloud:!1},data:[{labels:["Adherence to law","Courtesy","Instructions from authoritative source","Neglect of duty","Other","Professionalism","Unauthorized force","Verbal intimidation"],values:[20,5,25,296,52,46,3,1],textposition:["inside","inside","inside","inside","inside","inside","inside","inside"],textinfo:"label+value+percent",insidetextfont:{color:"#FFFFFF"},name:"Top sustained",type:"pie",marker:{color:"rgba(31,119,180,1)",line:{color:"rgba(31,119,180,1)"}},frame:null}],highlight:{on:"plotly_click",persistent:!1,dynamic:!1,selectize:!1,opacityDim:.2,selected:{opacity:1},debounce:0},base_url:"https://plot.ly"}},205:function(e,t,a){"use strict";var n=a(7),i=a.n(n),o=a(0),r=a.n(o),l=a(166),s=a(206),c=function(e){function t(){var t;return(t=e.call(this)||this).state={},t}i()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e={data:s.data,layout:s.layout,config:s.config};this.setState(e)},a.render=function(){return r.a.createElement(l.a,{data:this.state.data,layout:this.state.layout,layoutOverride:this.state.layout,config:this.state.config,yoffset:-1})},t}(r.a.Component);t.a=c},206:function(e){e.exports={visdat:{"27e83717aab6":["function () ","plotlyVisDat"]},cur_data:"27e83717aab6",attrs:{"27e83717aab6":{labels:{},values:{},textposition:"inside",textinfo:"label+value+percent",insidetextfont:{color:"#FFFFFF"},name:"Allegations by source",alpha_stroke:1,sizes:[10,100],spans:[1,20],type:"pie"}},layout:{margin:{b:40,l:60,t:25,r:10},hovermode:"closest",showlegend:!0},source:"A",config:{modeBarButtonsToAdd:[],cloud:!1},data:[{labels:["Community member","NOPD employee","OIPM","Other","Website"],values:[739,497,45,1,46],textposition:["inside","inside","inside","inside","inside"],textinfo:"label+value+percent",insidetextfont:{color:"#FFFFFF"},name:"Allegations by source",type:"pie",marker:{color:"rgba(31,119,180,1)",line:{color:"rgba(31,119,180,1)"}},frame:null}],highlight:{on:"plotly_click",persistent:!1,dynamic:!1,selectize:!1,opacityDim:.2,selected:{opacity:1},debounce:0},base_url:"https://plot.ly"}}}]);
//# sourceMappingURL=component---src-pages-allegations-analysis-js-7449427f34c922f4018a.js.map