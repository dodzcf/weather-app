(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{12:function(e,t,s){},39:function(e,t,s){},40:function(e,t,s){},41:function(e,t,s){},67:function(e,t,s){},68:function(e,t,s){},69:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s.n(c),r=s(31),j=s.n(r),i=(s(39),s(40),s(13)),l=(s(41),s(0)),b=function(){var e=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("li",{class:"nav-item",children:Object(l.jsx)(i.b,{class:"nav-link",to:"/aboutme",children:"About Me"})}),Object(l.jsx)("li",{class:"nav-item",children:Object(l.jsx)(i.c,{class:"nav-link",to:"/",children:"Home"})}),Object(l.jsx)("li",{class:"nav-item",children:Object(l.jsx)(i.b,{class:"nav-link",to:"/webinfo",children:"About Website"})})]})};return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("nav",{class:"navbar navbar-expand-lg col ",children:[Object(l.jsx)("button",{class:"navbar-toggler btn btn-success",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(l.jsx)("span",{class:"navbar-toggler-icon"})}),Object(l.jsx)("div",{class:"collapse navbar-collapse justify-content-center",id:"navbarSupportedContent",children:Object(l.jsx)("ul",{class:"navbar-nav",children:Object(l.jsx)(e,{})})})]})})},n=s(15),o=s(21),d=s.n(o),O=s(34),m=s(2),x=(s(9),s(3)),g=s(10),p=function(){var e,t=Object(c.useState)(""),s=Object(m.a)(t,2),a=s[0],r=s[1];localStorage.setItem("city",a);var j=Object(x.e)(),i=function(){var e=Object(O.a)(d.a.mark((function e(t){var s,c,r,i,l,b,n,o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return alert(localStorage.getItem("city")),t.preventDefault(),e.next=4,g.get("http://api.openweathermap.org/data/2.5/weather?q="+a+"&APPID=32f98c45578553132690fc15808f3754");case 4:return s=e.sent,c=function(e){return new Promise((function(t){return setTimeout(t,e)}))},localStorage.setItem("city",a),r=s.data.main.temp,i=parseInt(r-273),localStorage.setItem("temp",i+" \xb0C"),l=JSON.stringify(s.data.main.feels_like),b=parseInt(l-273),localStorage.setItem("feels",b+" \xb0C"),n=JSON.stringify(s.data.main.temp_min),o=parseInt(n-273),localStorage.setItem("templow",o+" \xb0C"),localStorage.setItem("windspeed",JSON.stringify(s.data.wind.speed)),localStorage.setItem("sky",s.data.weather[0].description),e.next=20,c(1e3);case 20:"clear sky"!=localStorage.getItem("sky")&&"clear"!=localStorage.getItem("sky")||j.push("/sun"),"mist"!=localStorage.getItem("sky")&&"fog"!=localStorage.getItem("sky")&&"smoke"!=localStorage.getItem("sky")&&"smog"!=localStorage.getItem("sky")||j.push("/mist"),"haze"==localStorage.getItem("sky")&&j.push("/haze"),"rain"==localStorage.getItem("sky")&&j.push("/rain"),"snow"==localStorage.getItem("sky")&&j.push("/snow"),"overcast clouds"!=localStorage.getItem("sky")&&"Clouds"!=localStorage.getItem("sky")&&"broken clouds"!=localStorage.getItem("sky")||j.push("/clouds");case 26:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsxs)("div",{className:"container d-flex justify-content-center",children:[Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsxs)("div",{className:"jumbotron weatherj ",children:[Object(l.jsx)("h3",{className:"d-flex justify-content-center",children:Object(l.jsx)("u",{children:"Search weather of your City"})}),Object(l.jsx)("br",{}),Object(l.jsxs)("form",{className:"",children:[Object(l.jsx)("div",{className:"form-group d-flex justify-content-center",children:Object(l.jsx)("input",(e={type:"email",class:"form-control ",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter City"},Object(n.a)(e,"type","text"),Object(n.a)(e,"value",a),Object(n.a)(e,"onChange",(function(e){return r(e.target.value)})),Object(n.a)(e,"type","text"),e))}),Object(l.jsx)("br",{}),Object(l.jsx)("input",{type:"submit",className:"btn btn-primary submit",value:"Search",onClick:i})]})]})]})]})},u=(s(12),s.p+"static/media/thermometer-celsius.e0cf9c31.svg"),h=s.p+"static/media/clear-day.82d493fc.svg",v=s.p+"static/media/thermometer-colder.cbcde59e.svg",f=s.p+"static/media/wind.9499e774.svg",S=(s(10),function(){var e=Object(c.useState)(""),t=Object(m.a)(e,2),s=t[0],a=t[1],r=Object(c.useState)(null),j=Object(m.a)(r,2),i=j[0],b=j[1],n=Object(c.useState)(0),o=Object(m.a)(n,2),d=o[0],O=o[1],x=Object(c.useState)(0),g=Object(m.a)(x,2),p=g[0],S=g[1],y=Object(c.useState)(0),w=Object(m.a)(y,2),I=w[0],N=w[1],k=Object(c.useState)(""),W=Object(m.a)(k,2),T=W[0],C=W[1];return Object(c.useEffect)((function(){a(localStorage.getItem("city")),b(localStorage.getItem("temp")),C(localStorage.getItem("sky")),O(localStorage.getItem("feels")),S(localStorage.getItem("templow")),N(localStorage.getItem("windspeed"))})),Object(l.jsx)("div",{className:"container d-flex justify-content-center",children:Object(l.jsxs)("div",{className:"jumbotron weatherjx",children:[Object(l.jsxs)("h2",{className:"d-flex justify-content-center",children:[s,"'s Weather"]}),Object(l.jsxs)("p",{className:"",children:["Temprature: \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(l.jsx)("img",{src:u,alt:"",id:"tempp"}),i,Object(l.jsx)("br",{}),"Feels Like: \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(l.jsx)("img",{src:u,alt:"",id:"tempp"})," ",d,Object(l.jsx)("br",{}),"Lowest Temprature: ",Object(l.jsx)("img",{src:v,alt:"",id:"tempp"})," ",p,Object(l.jsx)("br",{}),"\xa0\xa0\xa0Sky: \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(l.jsx)("img",{src:h,alt:"",id:"tempp"})," ",T,Object(l.jsx)("br",{}),"Wind Speed:\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(l.jsx)("img",{src:f,alt:"",id:"tempp"})," ",I]})]})})}),y=s.p+"static/media/haze.152867de.svg",w=(s(10),function(){var e=Object(c.useState)(""),t=Object(m.a)(e,2),s=t[0],a=t[1],r=Object(c.useState)(null),j=Object(m.a)(r,2),i=j[0],b=j[1],n=Object(c.useState)(0),o=Object(m.a)(n,2),d=o[0],O=o[1],x=Object(c.useState)(0),g=Object(m.a)(x,2),p=g[0],h=g[1],S=Object(c.useState)(0),w=Object(m.a)(S,2),I=w[0],N=w[1],k=Object(c.useState)(""),W=Object(m.a)(k,2),T=W[0],C=W[1];return Object(c.useEffect)((function(){a(localStorage.getItem("city")),b(localStorage.getItem("temp")),C(localStorage.getItem("sky")),O(localStorage.getItem("feels")),h(localStorage.getItem("templow")),N(localStorage.getItem("windspeed"))})),Object(l.jsx)("div",{className:"container d-flex justify-content-center",children:Object(l.jsxs)("div",{className:"jumbotron weatherjx",children:[Object(l.jsxs)("h2",{className:"d-flex justify-content-center",children:[s,"'s Weather"]}),Object(l.jsxs)("p",{className:"",children:["Temprature: \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(l.jsx)("img",{src:u,alt:"",id:"tempp"}),i,Object(l.jsx)("br",{}),"Feels Like: \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(l.jsx)("img",{src:u,alt:"",id:"tempp"})," ",d,Object(l.jsx)("br",{}),"Lowest Temprature: ",Object(l.jsx)("img",{src:v,alt:"",id:"tempp"})," ",p,Object(l.jsx)("br",{}),"Sky: \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(l.jsx)("img",{src:y,alt:"",id:"tempp"})," ",T,Object(l.jsx)("br",{}),"Wind Speed: \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(l.jsx)("img",{src:f,alt:"",id:"tempp"})," ",I]})]})})}),I=s.p+"static/media/raindrop.87bf8de1.svg",N=(s(10),function(){var e=Object(c.useState)(""),t=Object(m.a)(e,2),s=t[0],a=t[1],r=Object(c.useState)(null),j=Object(m.a)(r,2),i=j[0],b=j[1],n=Object(c.useState)(0),o=Object(m.a)(n,2),d=o[0],O=o[1],x=Object(c.useState)(0),g=Object(m.a)(x,2),p=g[0],h=g[1],S=Object(c.useState)(0),y=Object(m.a)(S,2),w=y[0],N=y[1],k=Object(c.useState)(""),W=Object(m.a)(k,2),T=W[0],C=W[1];return Object(c.useEffect)((function(){a(localStorage.getItem("city")),b(localStorage.getItem("temp")),C(localStorage.getItem("sky")),O(localStorage.getItem("feels")),h(localStorage.getItem("templow")),N(localStorage.getItem("windspeed"))})),Object(l.jsx)("div",{className:"container d-flex justify-content-center",children:Object(l.jsxs)("div",{className:"jumbotron weatherjx",children:[Object(l.jsxs)("h2",{className:"d-flex justify-content-center",children:[s,"'s Weather"]}),Object(l.jsxs)("p",{className:"",children:["Temprature: \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(l.jsx)("img",{src:u,alt:"",id:"tempp"}),i,Object(l.jsx)("br",{}),"Feels Like: \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(l.jsx)("img",{src:u,alt:"",id:"tempp"})," ",d,Object(l.jsx)("br",{}),"Lowest Temprature: ",Object(l.jsx)("img",{src:v,alt:"",id:"tempp"})," ",p,Object(l.jsx)("br",{}),"Sky: \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(l.jsx)("img",{src:I,alt:"",id:"tempp"})," ",T,Object(l.jsx)("br",{}),"Wind Speed: \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(l.jsx)("img",{src:f,alt:"",id:"tempp"})," ",w]})]})})}),k=s.p+"static/media/mist.04c7c2b5.svg",W=(s(10),function(){var e=Object(c.useState)(""),t=Object(m.a)(e,2),s=t[0],a=t[1],r=Object(c.useState)(null),j=Object(m.a)(r,2),i=j[0],b=j[1],n=Object(c.useState)(0),o=Object(m.a)(n,2),d=o[0],O=o[1],x=Object(c.useState)(0),g=Object(m.a)(x,2),p=g[0],h=g[1],S=Object(c.useState)(0),y=Object(m.a)(S,2),w=y[0],I=y[1],N=Object(c.useState)(""),W=Object(m.a)(N,2),T=W[0],C=W[1];return Object(c.useEffect)((function(){a(localStorage.getItem("city")),b(localStorage.getItem("temp")),C(localStorage.getItem("sky")),O(localStorage.getItem("feels")),h(localStorage.getItem("templow")),I(localStorage.getItem("windspeed"))})),Object(l.jsx)("div",{className:"container d-flex justify-content-center",children:Object(l.jsxs)("div",{className:"jumbotron weatherjx",children:[Object(l.jsxs)("h2",{className:"d-flex justify-content-center",children:[s,"'s Weather"]}),Object(l.jsxs)("p",{className:"",children:["Temprature: \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(l.jsx)("img",{src:u,alt:"",id:"tempp"}),i,Object(l.jsx)("br",{}),"Feels Like: \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(l.jsx)("img",{src:u,alt:"",id:"tempp"})," ",d,Object(l.jsx)("br",{}),"Lowest Temprature: ",Object(l.jsx)("img",{src:v,alt:"",id:"tempp"})," ",p,Object(l.jsx)("br",{}),"Sky: \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(l.jsx)("img",{src:k,alt:"",id:"tempp"})," ",T,Object(l.jsx)("br",{}),"Wind Speed: \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(l.jsx)("img",{src:f,alt:"",id:"tempp"})," ",w]})]})})}),T=(s(10),function(){var e=Object(c.useState)(""),t=Object(m.a)(e,2),s=t[0],a=t[1],r=Object(c.useState)(null),j=Object(m.a)(r,2),i=j[0],b=j[1],n=Object(c.useState)(0),o=Object(m.a)(n,2),d=o[0],O=o[1],x=Object(c.useState)(0),g=Object(m.a)(x,2),p=g[0],h=g[1],S=Object(c.useState)(0),y=Object(m.a)(S,2),w=y[0],N=y[1],k=Object(c.useState)(""),W=Object(m.a)(k,2),T=W[0],C=W[1];return Object(c.useEffect)((function(){a(localStorage.getItem("city")),b(localStorage.getItem("temp")),C(localStorage.getItem("sky")),O(localStorage.getItem("feels")),h(localStorage.getItem("templow")),N(localStorage.getItem("windspeed"))})),Object(l.jsx)("div",{className:"container d-flex justify-content-center",children:Object(l.jsxs)("div",{className:"jumbotron weatherjx",children:[Object(l.jsxs)("h2",{className:"d-flex justify-content-center",children:[s,"'s Weather"]}),Object(l.jsxs)("p",{className:"",children:["Temprature: \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(l.jsx)("img",{src:u,alt:"",id:"tempp"}),i,Object(l.jsx)("br",{}),"Feels Like: \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(l.jsx)("img",{src:u,alt:"",id:"tempp"})," ",d,Object(l.jsx)("br",{}),"Lowest Temprature: ",Object(l.jsx)("img",{src:v,alt:"",id:"tempp"})," ",p,Object(l.jsx)("br",{}),"Sky: \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(l.jsx)("img",{src:I,alt:"",id:"tempp"})," ",T,Object(l.jsx)("br",{}),"Wind Speed: \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(l.jsx)("img",{src:f,alt:"",id:"tempp"})," ",w]})]})})}),C=s.p+"static/media/overcast.e49559c8.svg",F=(s(10),function(){var e=Object(c.useState)(""),t=Object(m.a)(e,2),s=t[0],a=t[1],r=Object(c.useState)(null),j=Object(m.a)(r,2),i=j[0],b=j[1],n=Object(c.useState)(0),o=Object(m.a)(n,2),d=o[0],O=o[1],x=Object(c.useState)(0),g=Object(m.a)(x,2),p=g[0],h=g[1],S=Object(c.useState)(0),y=Object(m.a)(S,2),w=y[0],I=y[1],N=Object(c.useState)(""),k=Object(m.a)(N,2),W=k[0],T=k[1];return Object(c.useEffect)((function(){a(localStorage.getItem("city")),b(localStorage.getItem("temp")),T(localStorage.getItem("sky")),O(localStorage.getItem("feels")),h(localStorage.getItem("templow")),I(localStorage.getItem("windspeed"))})),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("div",{className:"container d-flex justify-content-center",children:Object(l.jsxs)("div",{className:"fluid-jumbotron weatherjx",children:[Object(l.jsx)("br",{}),Object(l.jsxs)("h2",{className:"d-flex justify-content-center",children:[s,"'s Weather"]}),Object(l.jsxs)("p",{className:"",children:["Temprature: \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(l.jsx)("img",{src:u,alt:"",id:"tempp"}),i,Object(l.jsx)("br",{}),"Feels Like: \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(l.jsx)("img",{src:u,alt:"",id:"tempp"})," ",d,Object(l.jsx)("br",{}),"Lowest Temprature: ",Object(l.jsx)("img",{src:v,alt:"",id:"tempp"})," ",p,Object(l.jsx)("br",{}),"\xa0\xa0\xa0\xa0 \xa0\xa0\xa0\xa0 Sky: \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(l.jsx)("img",{src:C,alt:"",id:"tempp"})," ",W,Object(l.jsx)("br",{}),"Wind Speed: \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(l.jsx)("img",{src:f,alt:"",id:"tempp"})," ",w]})]})})]})}),L=(s(67),s.p+"static/media/img2.6acf9f91.png"),A=function(){return Object(l.jsxs)("div",{className:"",children:[Object(l.jsxs)("div",{className:"jumbotron aboutj d-flex",children:[Object(l.jsx)("div",{className:"div1 d-flex justify-content-center",children:Object(l.jsx)("img",{className:"avatar",src:L})}),Object(l.jsx)("br",{}),"\xa0",Object(l.jsx)("div",{className:"div2",children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("div",{class:"p-3 mb-2 bg-da ",children:Object(l.jsx)("h2",{children:Object(l.jsx)("u",{children:"Who am I?"})})}),Object(l.jsx)("br",{}),Object(l.jsx)("div",{className:"jumbotron j2",children:Object(l.jsxs)("p",{className:"para",children:["My name is ",Object(l.jsx)("b",{className:"bold",children:"Dawood Zahir"}),". At the time of making this web app, I am currently doing bachelors in ",Object(l.jsx)("b",{className:"bold",children:"Computer Science"})," from ",Object(l.jsx)("b",{className:"bold",children:"FAST NUCES (National University of Computer and Emerging Sciences). "}),Object(l.jsx)("br",{}),"I am a full stack developer using MERN technology for making Web Applications. If you wish to have a wesbsite for yourself, buiseness (E-commerce) or a managmenet system website, or anything from your imagination, feel free to contact me on the given email ( dodxfh@gmail.com ).",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"Swipe below to see my ",Object(l.jsx)("a",{href:"#skills",children:"Skills"}),"."]})})]})})]}),Object(l.jsxs)("div",{className:"container skill",id:"skills",children:[Object(l.jsx)("div",{class:"p-3 mb-2 bg-inf ",children:Object(l.jsx)("h1",{children:Object(l.jsx)("u",{children:"Skills:"})})}),Object(l.jsxs)("div",{className:"jumbotron sk",children:[Object(l.jsx)("h3",{children:Object(l.jsx)("u",{children:"Frameworks"})}),Object(l.jsx)("div",{class:"progress",children:Object(l.jsx)("div",{class:"progress-bar w-25 progress-bar-striped progress-bar-animated bg-danger",role:"progressbar","aria-valuenow":"100","aria-valuemin":"0","aria-valuemax":"100",children:Object(l.jsx)("b",{children:"React Native"})})}),Object(l.jsx)("br",{}),Object(l.jsx)("div",{class:"progress",children:Object(l.jsx)("div",{class:"progress-bar w-50 progress-bar-striped progress-bar-animated bg-secondary",role:"progressbar","aria-valuenow":"100","aria-valuemin":"0","aria-valuemax":"100",children:Object(l.jsx)("b",{children:"Flutter"})})}),Object(l.jsx)("br",{}),Object(l.jsx)("div",{class:"progress",children:Object(l.jsx)("div",{class:"progress-bar w-75 progress-bar-striped progress-bar-animated bg-info",role:"progressbar","aria-valuenow":"100","aria-valuemin":"0","aria-valuemax":"100",children:Object(l.jsx)("b",{children:"ReactJS"})})}),Object(l.jsx)("br",{}),Object(l.jsx)("h3",{children:Object(l.jsx)("u",{children:"Web languages:"})}),Object(l.jsx)("div",{class:"progress",children:Object(l.jsx)("div",{class:"progress-bar w-100 progress-bar-striped progress-bar-animated bg-success",role:"progressbar","aria-valuenow":"100","aria-valuemin":"0","aria-valuemax":"100",children:Object(l.jsx)("b",{children:"HTML"})})}),Object(l.jsx)("br",{}),Object(l.jsx)("div",{class:"progress",children:Object(l.jsx)("div",{class:"progress-bar w-100 progress-bar-striped progress-bar-animated bg-success",role:"progressbar","aria-valuenow":"100","aria-valuemin":"0","aria-valuemax":"100",children:Object(l.jsx)("b",{children:"CSS"})})}),Object(l.jsx)("br",{}),Object(l.jsx)("h3",{children:Object(l.jsx)("u",{children:"Databases:"})}),Object(l.jsx)("div",{class:"progress",children:Object(l.jsx)("div",{class:"progress-bar w-100 progress-bar-striped progress-bar-animated bg-success",role:"progressbar","aria-valuenow":"100","aria-valuemin":"0","aria-valuemax":"100",children:Object(l.jsx)("b",{children:"SQL"})})}),Object(l.jsx)("br",{}),Object(l.jsx)("div",{class:"progress",children:Object(l.jsx)("div",{class:"progress-bar w-100 progress-bar-striped progress-bar-animated bg-success",role:"progressbar","aria-valuenow":"100","aria-valuemin":"0","aria-valuemax":"100",children:Object(l.jsx)("b",{children:"MongoDB"})})}),Object(l.jsx)("br",{}),Object(l.jsx)("div",{class:"progress",children:Object(l.jsx)("div",{class:"progress-bar w-25 progress-bar-striped progress-bar-animated bg-danger",role:"progressbar","aria-valuenow":"100","aria-valuemin":"0","aria-valuemax":"100",children:Object(l.jsx)("b",{children:"Firebase"})})}),Object(l.jsx)("br",{}),Object(l.jsx)("h3",{children:Object(l.jsx)("u",{children:"Programming Languages:"})}),Object(l.jsx)("div",{class:"progress",children:Object(l.jsx)("div",{class:"progress-bar w-100 progress-bar-striped progress-bar-animated bg-success",role:"progressbar","aria-valuenow":"100","aria-valuemin":"0","aria-valuemax":"100",children:Object(l.jsx)("b",{children:"Python"})})}),Object(l.jsx)("br",{}),Object(l.jsx)("div",{class:"progress",children:Object(l.jsx)("div",{class:"progress-bar w-100 progress-bar-striped progress-bar-animated bg-success",role:"progressbar","aria-valuenow":"100","aria-valuemin":"0","aria-valuemax":"100",children:Object(l.jsx)("b",{children:"C++"})})}),Object(l.jsx)("br",{}),Object(l.jsx)("div",{class:"progress",children:Object(l.jsx)("div",{class:"progress-bar w-75 progress-bar-striped progress-bar-animated bg-info",role:"progressbar","aria-valuenow":"100","aria-valuemin":"0","aria-valuemax":"100",children:Object(l.jsx)("b",{children:"Javascript"})})}),Object(l.jsx)("br",{}),Object(l.jsx)("div",{class:"progress",children:Object(l.jsx)("div",{class:"progress-bar w-75 progress-bar-striped progress-bar-animated bg-info",role:"progressbar","aria-valuenow":"100","aria-valuemin":"0","aria-valuemax":"100",children:Object(l.jsx)("b",{children:"PHP"})})}),Object(l.jsx)("br",{})]})]})]})},E=(s(68),s.p+"static/media/react.39b66caa.gif"),P=s.p+"static/media/weather.1a685be8.gif",J=function(){return Object(l.jsxs)("div",{className:"",children:[Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("h1",{className:"d-flex justify-content-center",children:Object(l.jsx)("div",{class:"p-3 mb-2 bgin",children:"How this Website is made?"})}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("div",{className:"container d-flex justify-content-center",children:Object(l.jsxs)("div",{class:"card-deck ",children:[Object(l.jsx)("div",{class:"card abc",children:Object(l.jsxs)("div",{class:"card-body text-center",children:[Object(l.jsx)("img",{className:"reactt",src:E}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("h3",{className:"head",children:Object(l.jsx)("b",{children:"ReactJS"})}),Object(l.jsx)("br",{}),Object(l.jsx)("p",{class:"card-text",children:"This Web-app is made using ReactJS."}),Object(l.jsx)("p",{children:"This Web-App consists of three pages."}),Object(l.jsxs)("li",{children:[Object(l.jsx)("b",{className:"boldd",children:"About Me"})," page has information about the creator of this web-app"]}),Object(l.jsx)("br",{}),Object(l.jsxs)("li",{children:[Object(l.jsx)("b",{className:"boldd",children:"Home"})," page has an input form which will tell you the weather when you click Submit after typing City."]}),Object(l.jsx)("br",{}),Object(l.jsxs)("li",{children:[Object(l.jsx)("b",{className:"boldd",children:"About Website"})," page has information about what components are used in this website. "]})]})}),Object(l.jsx)("div",{class:"card abc",children:Object(l.jsxs)("div",{class:"card-body text-center",children:[Object(l.jsx)("img",{className:"weath",src:P}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("h3",{className:"head",children:Object(l.jsx)("b",{children:"Open Weather"})}),Object(l.jsx)("br",{}),Object(l.jsxs)("p",{class:"card-text",children:["This Web-App is using ",Object(l.jsx)("b",{className:"boldd",children:"Open Weather"}),"'s API. The city is sent to the Open Weather using API and the the API return the JSON document containing information about that city. "]})]})})]})})]})};var M=function(){return localStorage.setItem("token",0),Object(l.jsxs)(i.a,{children:[Object(l.jsx)(b,{}),Object(l.jsx)(x.a,{exact:!0,path:"/",children:Object(l.jsx)(p,{})}),Object(l.jsx)(x.a,{exact:!0,path:"/sun",children:Object(l.jsx)(S,{})}),Object(l.jsx)(x.a,{exact:!0,path:"/haze",children:Object(l.jsx)(w,{})}),Object(l.jsx)(x.a,{exact:!0,path:"/rain",children:Object(l.jsx)(N,{})}),Object(l.jsx)(x.a,{exact:!0,path:"/mist",children:Object(l.jsx)(W,{})}),Object(l.jsx)(x.a,{exact:!0,path:"/snow",children:Object(l.jsx)(T,{})}),Object(l.jsx)(x.a,{exact:!0,path:"/clouds",children:Object(l.jsx)(F,{})}),Object(l.jsx)(x.a,{exact:!0,path:"/aboutme",children:Object(l.jsx)(A,{})}),Object(l.jsx)(x.a,{exact:!0,path:"/webinfo",children:Object(l.jsx)(J,{})})]})},D=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,70)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,j=t.getTTFB;s(e),c(e),a(e),r(e),j(e)}))};j.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(M,{})}),document.getElementById("root")),D()},9:function(e,t,s){}},[[69,1,2]]]);
//# sourceMappingURL=main.19e85620.chunk.js.map