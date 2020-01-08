(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{147:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a.n(n),o=a(0),i=a.n(o),l=a(358),c=a(359),s=a(360),m=a(362),u=a(363),d=a(192),p=a(176),f=(a(169),a(218)),h=function(e){function t(){var t;return(t=e.call(this)||this).state={},t}r()(t,e);var a=t.prototype;return a.renderNav=function(){return i.a.createElement(l.a,{className:"mt-4",vertical:!0},i.a.createElement(c.a,null,i.a.createElement(s.a,{href:"/complaints-highlights",className:"text-white"},"Complaints and allegations by year")),i.a.createElement(c.a,null,i.a.createElement(s.a,{href:"/allegations-analysis",className:"text-white"},"Allegation analysis")),i.a.createElement(c.a,null,i.a.createElement(s.a,{href:"/complaints-analysis",className:"text-white"},"Complaint analysis")),i.a.createElement(c.a,null,i.a.createElement(s.a,{href:"/complaints-fourth",className:"text-white"},"4th amendment complaints")),i.a.createElement(c.a,null,i.a.createElement(s.a,{href:"/complaints-anonymous",className:"text-white"},"Anonymous complaints")),i.a.createElement(c.a,null,i.a.createElement(s.a,{href:"/complaints-discipline",className:"text-white"},"Discipline")))},a.renderAnonymous=function(){return i.a.createElement("div",{id:"complaints-anonymous"},i.a.createElement(m.a,null,i.a.createElement(u.a,null,i.a.createElement("h5",{className:"text-center"},"FIGURE 15: ANONYMOUS COMPLAINTS"),i.a.createElement(f.a,null),i.a.createElement("p",null,"This chart of anonymous complaints captures when the complainant chooses not to give his or her name. Of the three anonymous complaints in 2018, two remain pending; the third was found to have No Formal Investigation Merited (NFIM). These findings are similar to those from 2017, where only 1 of 10 anonymous complaints was sustained."),i.a.createElement("p",null,"Similar to 4 th Amendment complaints, there is no clear way to use NOPD’s data to identify anonymous complaints from nameless complainants in the data. The results may not reflect the actual number of anonymous complaints."))))},a.render=function(){return i.a.createElement(p.a,{title:"Anonymous complaints",nav:this.renderNav(),body:i.a.createElement("div",null,i.a.createElement(m.a,null,i.a.createElement(u.a,null,i.a.createElement("h1",{className:"mt-5 text-center"},"2018 Annual Report"),i.a.createElement("h2",{className:"mb-5 text-center"},"Complaints, Commendations & Disciplinary Proceedings"))),this.renderAnonymous(),i.a.createElement(m.a,{className:"text-center"},i.a.createElement(u.a,{className:"py-5"},i.a.createElement(d.a,{size:"lg",color:"secondary",className:"mx-3 my-2"},i.a.createElement("a",{href:"/complaints-fourth",className:"text-white"},"< Previous: 4th amendment complaints")),i.a.createElement(d.a,{size:"lg",color:"success",className:"my-2"},i.a.createElement("a",{href:"/complaints-discipline",className:"text-white"},"Next: Discipline >")))))})},t}(i.a.Component);t.default=h},166:function(e,t,a){"use strict";var n=a(7),r=a.n(n),o=a(0),i=a.n(o),l=(a(33),a(190)),c=a.n(l),s=a(191),m=function(e){function t(){var t;return(t=e.call(this)||this).state={},t}r()(t,e);var a=t.prototype;return a.genResponsiveConfig=function(e){var t=e;return t.responsive=!0,t},a.genResponsiveLayout=function(e){var t="Times New Roman, monospace";if(this.props.layoutOverride){var a=this.props.layoutOverride;return a.font={},a.font.family=t,a}var n=e;return n.legend={x:0,y:this.props.yoffset||-.35},n.font={},n.font.family=t,n},a.renderLoading=function(){return i.a.createElement("div",{className:"d-flex justify-content-center"},i.a.createElement(s.MoonLoader,{loading:!0,size:6,sizeUnit:"rem"}))},a.render=function(){var e=this;return this.props.data?i.a.createElement(c.a,{data:this.props.data,layout:this.genResponsiveLayout(this.props.layout),config:this.genResponsiveConfig(this.props.config),onInitialized:function(t){return e.setState(t)},onUpdate:function(t){return e.setState(t)},useResizeHandler:!0,style:{width:"100%"}}):this.renderLoading()},t}(i.a.Component);t.a=m},167:function(e,t,a){"use strict";a.d(t,"b",function(){return m});var n=a(0),r=a.n(n),o=a(4),i=a.n(o),l=a(33),c=a.n(l);a.d(t,"a",function(){return c.a});a(170);var s=r.a.createContext({}),m=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},169:function(e,t,a){"use strict";var n=a(174),r=a(0),o=a.n(r),i=a(4),l=a.n(i),c=a(189),s=a.n(c);function m(e){var t=e.description,a=e.lang,r=e.meta,i=e.keywords,l=e.title,c=n.data.site,m=t||c.siteMetadata.description;return o.a.createElement(s.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:m},{property:"og:title",content:l},{property:"og:description",content:m},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:m}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})}m.defaultProps={lang:"en",meta:[],keywords:[]},m.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=m},170:function(e,t,a){var n;e.exports=(n=a(171))&&n.default||n},171:function(e,t,a){"use strict";a.r(t);a(36);var n=a(0),r=a.n(n),o=a(4),i=a.n(o),l=a(55),c=a(2),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},172:function(e){e.exports={data:{site:{siteMetadata:{title:"OIPM 2018 Annual Report"}}}}},173:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFeklEQVQ4y12UCUzTdxTH/1i3hJjpjmTuyDbd4UZQ51yyzDl1ynTZFMYmUScYRUVRAUEu8aggCFIRgRbklIHaKndLtSooVEq5ihdUiFylQC9Ki4AHPX7f/fs3HvMlL3nv/X7vk98vv+/vUT1dNymHPTE2O1FOftSrBsDhzrRPp/0dYGQaUMl6dY9HYq1T9809To5YUR36rDhhUDi9hJhdbJZR/x6NIV/W3ie71trRUyxVGC7ekJtEdbIBiaxaIW+qEKiVZ4Pt98NcnvcpawKfMTT9DUwwoZfPuaNskp6vklvZ/BpsS78Ej7gLWByei6WReVgWeQaLwnLxRwwfW9KEiMwXIquEP3lVkiTpvLF9joNxuzrEibp7r4q5wpimdm3mlXrM3ppqd/VPtS4M4FkXh2baVkTl2iPyJfagTJHd7UCufVFIhs11e7J1lneC9W2PYzZ2diHUTRG+DkbT1fCpVEtL+RRHMqoWr4k7J4KLP9e2JCyL0CDidjCPROZfITxxPTgltfBNEpAvfWLJFxuiyWyvw8R5+T7LjmPpGOvO2uhg3K1PYVHNDXwGONItcE+8IMK83Rn0SfLIykN5WBGZBbfwDITlCLH/jBhLgtPg6puAOZti8bX3UTL9t0jL3pRCWAxXvB2MB+2lLEpel80Ate2n3TkXKvD93mz7Av9k8rlPLD7bGI0PN7DxS0Q61rBzMGvTUcz3S8Q3m4/ho78PkWkrwy2hvCLgcTsDVPfKWZSslssANW2p7sfPF+ODtbH29dF5JJBbgiOFEvBEMsScvwpvzjkEnS7Dwl1J+JaGBqWVkK/+OWoJSS+jFTXCAPW6LhZ1TXiIAfbKo9wP8rLgvGq/vbL+Hmnq6EdbnwZBmeVQG8zo15vwZNKCpaFcJJfU0BCQhdsSLcHpQkfMAIfNBhYlvhjIAO9X+7nvT+Fi5l8xdllbNxE3KlHZpESasA6FNQqUN7ShTaVFkfQ26tt70aDsI596sS0R2ZIXwNGJRyyqnB/GyKarZrt7MCcZiwMy7J1qLaEbkFEpw4KAk1gTewaiZiW4ojpHMzgXr0Pc0E5m/B5uicplgD4Ohmls9OUv6qze6rk3MQk/7uLZjxZcJjEFEqyNzYerPweecfk4UHAZXvEFiKJf25Odi9CMcuL86z7LgdxLNG+Ckc3AQN+bVMG/p993JHfK3dwikk/B42CBbedJAdmWJEAArxQH8i/BL7UIO7nF2J5SBJ/j57GVXlvLPkOW7+VZgtKKgUnV5hcnq6m97qUeMid01MUc3h0bR8shjsz3TSAuWxIwfwcH82ifvzMRP4ekYlUkDxticrE7mU9CuUXEL+EsSaY/g26wUz84pD3b2qpYSZWWCj4xjozpzNpWxGdmWn/amYxVwafIOnYW9pziEw5fAkFVI260tKOjbxC9QwYyqB8h2mETBnRG+4DeNPn4yVPodTqLVCr9gWpubtmo02k7hnRGqLQjNo3BZFHrRqz6kVH7+MQjutGMQcMoUevMxGgeh85oQr9m2N7Rb7R2DRppST2ERm982tPdJW5RKFYz15aIKz5WDWhMPVoz1MNjUOlH0T1kRnuf0Sq788BW1XCHFF66SdjZFbat8XyrbzwfeWXlaJHld+lVjX6dnd1raMwbFULhbMcAdfL0CXNqu3trwbhJ62EcNq1TKUVH5NWcwZyiQvwZlYlZ6+Mx0zMG3/mdgH9CCrIL4nR1l8MOd5a99xb1usUdP8FM5tctZxc1o1qwepuwKFiakh1tTc2Jm7wmOtTYUxcYCP2Sd5/v61LWTO3qVrFKy8uo0rKyZ0P2VEoK1Xrr1pR+tZql6u9n9an6/jfmH0qXzR2Xuc19tVYlOsLquBnBAKSVYZSoiMvU/wPTtJD2vfnAgQAAAABJRU5ErkJggg==",width:64,height:64,src:"/static/514407e789c3ef441ae1eb659a89e514/d4bcd/oipm-icon.png",srcSet:"/static/514407e789c3ef441ae1eb659a89e514/d4bcd/oipm-icon.png 1x,\n/static/514407e789c3ef441ae1eb659a89e514/35746/oipm-icon.png 1.5x,\n/static/514407e789c3ef441ae1eb659a89e514/a2862/oipm-icon.png 2x,\n/static/514407e789c3ef441ae1eb659a89e514/d1d11/oipm-icon.png 3x"}}}}}},174:function(e){e.exports={data:{site:{siteMetadata:{title:"OIPM 2018 Annual Report",description:"Data analysis for New Orleans Office of the Independent Police Monitor's 2018 Annual Report.",author:"Marvin Arnold"}}}}},175:function(e,t,a){"use strict";var n=a(172),r=a(0),o=a.n(r),i=a(4),l=a.n(i),c=a(167),s=(a(35),a(34)),m=a.n(s),u=a(7),d=a.n(u),p=a(354),f=a(355),h=a(356),y=a(357),g=a(358),b=a(359),E=a(360),v=(a(185),a(173)),x=a(186),w=a.n(x),A=function(){return o.a.createElement(c.b,{query:"2390269856",render:function(e){return o.a.createElement(w.a,{fixed:e.placeholderImage.childImageSharp.fixed})},data:v})},N=function(e){function t(t){var a;return(a=e.call(this,t)||this).toggleNavbar=a.toggleNavbar.bind(m()(a)),a.state={collapsed:!0},a}d()(t,e);var a=t.prototype;return a.toggleNavbar=function(){this.setState({collapsed:!this.state.collapsed})},a.normalizePath=function(e){return e.replace(/\/+/g,"/")},a.withPrefix=function(e){return this.normalizePath("/"+e)},a.render=function(){return o.a.createElement("div",null,o.a.createElement(p.a,{color:"dark",light:!0,expand:"md",dark:!0},o.a.createElement(f.a,{href:this.withPrefix("/")},o.a.createElement(A,null)),o.a.createElement(h.a,{onClick:this.toggleNavbar.bind(this)}),o.a.createElement(y.a,{isOpen:this.state.collapsed,navbar:!0},o.a.createElement(g.a,{className:"ml-auto",navbar:!0},o.a.createElement(b.a,null,o.a.createElement(E.a,{href:this.withPrefix("/force")},"Use of Force")),o.a.createElement(b.a,null,o.a.createElement(E.a,{href:this.withPrefix("/complaints-highlights")},"Complaints & Misconduct")),o.a.createElement(b.a,null,o.a.createElement(E.a,{href:this.withPrefix("/mediation")},"Mediation")),o.a.createElement(b.a,null,o.a.createElement(E.a,{href:this.withPrefix("/officers")},"Officer Demographics")),o.a.createElement(b.a,null,o.a.createElement(E.a,{href:"https://nolaipm.gov"},"OIPM Home"))))))},t}(o.a.Component),k=function(e){var t=e.siteTitle;return o.a.createElement("header",null,o.a.createElement(N,{siteTitle:t}))};k.propTypes={siteTitle:l.a.string},k.defaultProps={siteTitle:""};var C=k,M=(a(187),a(188),function(e){var t=e.children;return o.a.createElement(c.b,{query:"755544856",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(C,{siteTitle:e.site.siteMetadata.title}),o.a.createElement("div",null,o.a.createElement("main",null,t),o.a.createElement("footer",null)))},data:n})});M.propTypes={children:l.a.node.isRequired};t.a=M},176:function(e,t,a){"use strict";a.d(t,"a",function(){return d});var n=a(7),r=a.n(n),o=a(0),i=a.n(o),l=a(361),c=a(362),s=a(363),m=a(175),u=a(169),d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement(m.a,null,i.a.createElement(u.a,{title:this.props.title}),i.a.createElement(l.a,{fluid:!0},i.a.createElement(c.a,null,i.a.createElement(s.a,{className:"bg-secondary",xs:"12",lg:"2",md:"3"},i.a.createElement("h4",{className:"mt-5"},"Jump to..."),this.props.nav),i.a.createElement(s.a,{xs:"12",lg:"10",md:"9"},this.props.body))))},t}(i.a.Component)},192:function(e,t,a){"use strict";var n=a(177),r=a(178),o=a(181),i=a(182),l=a(0),c=a.n(l),s=a(4),m=a.n(s),u=a(179),d=a.n(u),p=a(180),f={active:m.a.bool,"aria-label":m.a.string,block:m.a.bool,color:m.a.string,disabled:m.a.bool,outline:m.a.bool,tag:p.i,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),onClick:m.a.func,size:m.a.string,children:m.a.node,className:m.a.string,cssModule:m.a.object,close:m.a.bool},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(i.a)(Object(i.a)(a))),a}Object(o.a)(t,e);var a=t.prototype;return a.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},a.render=function(){var e=this.props,t=e.active,a=e["aria-label"],o=e.block,i=e.className,l=e.close,s=e.cssModule,m=e.color,u=e.outline,f=e.size,h=e.tag,y=e.innerRef,g=Object(r.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);l&&void 0===g.children&&(g.children=c.a.createElement("span",{"aria-hidden":!0},"×"));var b="btn"+(u?"-outline":"")+"-"+m,E=Object(p.f)(d()(i,{close:l},l||"btn",l||b,!!f&&"btn-"+f,!!o&&"btn-block",{active:t,disabled:this.props.disabled}),s);g.href&&"button"===h&&(h="a");var v=l?"Close":null;return c.a.createElement(h,Object(n.a)({type:"button"===h&&g.onClick?"button":void 0},g,{className:E,ref:y,onClick:this.onClick,"aria-label":a||v}))},t}(c.a.Component);h.propTypes=f,h.defaultProps={color:"secondary",tag:"button"},t.a=h},218:function(e,t,a){"use strict";var n=a(7),r=a.n(n),o=a(0),i=a.n(o),l=a(166),c=a(219),s=function(e){function t(){var t;return(t=e.call(this)||this).state={},t}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e={data:c.data,layout:c.layout,config:c.config};this.setState(e)},a.render=function(){return i.a.createElement(l.a,{data:this.state.data,layout:this.state.layout,layoutOverride:this.state.layout,config:this.state.config,yoffset:-1})},t}(i.a.Component);t.a=s},219:function(e){e.exports={visdat:{"27e86dbdbc3e":["function () ","plotlyVisDat"]},cur_data:"27e86dbdbc3e",attrs:{"27e86dbdbc3e":{x:{},y:{},name:{},color:{},alpha_stroke:1,sizes:[10,100],spans:[1,20],type:"bar"}},layout:{margin:{b:100,l:60,t:25,r:100},xaxis:{domain:[0,1],automargin:!0,title:"Anonymous complaints by outcome",showgrid:!1,type:"category",categoryorder:"array",categoryarray:["Anon - Explicit"]},yaxis:{domain:[0,1],automargin:!0,title:"Number of complaints"},barmode:"stack",hovermode:"compare",showlegend:!0},source:"A",config:{modeBarButtonsToAdd:[],cloud:!1},data:[{x:["Anon - Explicit"],y:[1],name:"NFIM",type:"bar",marker:{color:"rgba(102,194,165,1)",line:{color:"rgba(102,194,165,1)"}},textfont:{color:"rgba(102,194,165,1)"},error_y:{color:"rgba(102,194,165,1)"},error_x:{color:"rgba(102,194,165,1)"},xaxis:"x",yaxis:"y",frame:null},{x:["Anon - Explicit"],y:[1],name:"Pending",type:"bar",marker:{color:"rgba(252,141,98,1)",line:{color:"rgba(252,141,98,1)"}},textfont:{color:"rgba(252,141,98,1)"},error_y:{color:"rgba(252,141,98,1)"},error_x:{color:"rgba(252,141,98,1)"},xaxis:"x",yaxis:"y",frame:null},{x:["Anon - Explicit"],y:[3],name:"Sustained",type:"bar",marker:{color:"rgba(141,160,203,1)",line:{color:"rgba(141,160,203,1)"}},textfont:{color:"rgba(141,160,203,1)"},error_y:{color:"rgba(141,160,203,1)"},error_x:{color:"rgba(141,160,203,1)"},xaxis:"x",yaxis:"y",frame:null},{x:["Anon - Explicit"],y:[2],name:"Unfounded",type:"bar",marker:{color:"rgba(231,138,195,1)",line:{color:"rgba(231,138,195,1)"}},textfont:{color:"rgba(231,138,195,1)"},error_y:{color:"rgba(231,138,195,1)"},error_x:{color:"rgba(231,138,195,1)"},xaxis:"x",yaxis:"y",frame:null}],highlight:{on:"plotly_click",persistent:!1,dynamic:!1,selectize:!1,opacityDim:.2,selected:{opacity:1},debounce:0},base_url:"https://plot.ly"}}}]);
//# sourceMappingURL=component---src-pages-complaints-anonymous-js-e125f012b1eeac4ad707.js.map