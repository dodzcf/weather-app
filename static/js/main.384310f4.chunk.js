(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{12:function(e,t,s){},39:function(e,t,s){},40:function(e,t,s){},41:function(e,t,s){},67:function(e,t,s){},68:function(e,t,s){},69:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s.n(a),r=s(31),j=s.n(r),i=(s(39),s(40),s(13)),b=(s(41),s(0)),l=function(){var e=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("li",{class:"nav-item",children:Object(b.jsx)(i.b,{class:"nav-link",to:"/aboutme",children:"About Me"})}),Object(b.jsx)("li",{class:"nav-item",children:Object(b.jsx)(i.b,{class:"nav-link",to:"/weather-app",children:"Home"})}),Object(b.jsx)("li",{class:"nav-item",children:Object(b.jsx)(i.b,{class:"nav-link",to:"/webinfo",children:"About Website"})})]})};return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("nav",{class:"navbar navbar-expand-lg col ",children:[Object(b.jsx)("button",{class:"navbar-toggler btn btn-success",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)("span",{class:"navbar-toggler-icon"})}),Object(b.jsx)("div",{class:"collapse navbar-collapse justify-content-center",id:"navbarSupportedContent",children:Object(b.jsx)("ul",{class:"navbar-nav",children:Object(b.jsx)(e,{})})})]})})},n=s(15),o=s(21),d=s.n(o),O=s(34),m=s(2),x=(s(9),s(3)),p=s(10),g=function(){var e,t=Object(a.useState)(""),s=Object(m.a)(t,2),c=s[0],r=s[1];localStorage.setItem("city",c);var j=Object(x.e)(),i=function(){var e=Object(O.a)(d.a.mark((function e(t){var s,a,r,i,b,l,n,o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,p.get("http://api.openweathermap.org/data/2.5/weather?q="+c+"&APPID=32f98c45578553132690fc15808f3754");case 3:return s=e.sent,localStorage.setItem("sky",s.data.weather[0].description),a=function(e){return new Promise((function(t){return setTimeout(t,e)}))},localStorage.setItem("city",c),r=s.data.main.temp,i=parseInt(r-273),localStorage.setItem("temp",i+" \xb0C"),b=JSON.stringify(s.data.main.feels_like),l=parseInt(b-273),localStorage.setItem("feels",l+" \xb0C"),n=JSON.stringify(s.data.main.temp_min),o=parseInt(n-273),localStorage.setItem("templow",o+" \xb0C"),localStorage.setItem("windspeed",JSON.stringify(s.data.wind.speed)),e.next=19,a(1e3);case 19:"clear sky"!=localStorage.getItem("sky")&&"clear"!=localStorage.getItem("sky")||(alert("came in clearsky"),j.push("/sun")),"mist"!=localStorage.getItem("sky")&&"fog"!=localStorage.getItem("sky")&&"smoke"!=localStorage.getItem("sky")&&"smog"!=localStorage.getItem("sky")||j.push("/mist"),"haze"==localStorage.getItem("sky")&&j.push("/haze"),"rain"==localStorage.getItem("sky")&&j.push("/rain"),"snow"==localStorage.getItem("sky")&&j.push("/snow"),"overcast clouds"!=localStorage.getItem("sky")&&"Clouds"!=localStorage.getItem("sky")&&"broken clouds"!=localStorage.getItem("sky")||j.push("/clouds");case 25:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsxs)("div",{className:"container d-flex justify-content-center",children:[Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsxs)("div",{className:"jumbotron weatherj ",children:[Object(b.jsx)("h3",{className:"d-flex justify-content-center",children:Object(b.jsx)("u",{children:"Search weather of your City"})}),Object(b.jsx)("br",{}),Object(b.jsxs)("form",{children:[Object(b.jsx)("div",{className:"form-group d-flex justify-content-center",children:Object(b.jsx)("input",(e={type:"email",class:"form-control ",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter City"},Object(n.a)(e,"type","text"),Object(n.a)(e,"value",c),Object(n.a)(e,"onChange",(function(e){return r(e.target.value)})),Object(n.a)(e,"type","text"),e))}),Object(b.jsx)("br",{}),Object(b.jsx)("button",{type:"submit",className:"btn btn-primary submit",value:"Search",onClick:i,children:"Searc"})]})]})]})]})},u=(s(12),s.p+"static/media/thermometer-celsius.e0cf9c31.svg"),h=s.p+"static/media/clear-day.82d493fc.svg",v=s.p+"static/media/thermometer-colder.cbcde59e.svg",f=s.p+"static/media/wind.9499e774.svg",S=(s(10),function(){var e=Object(a.useState)(""),t=Object(m.a)(e,2),s=t[0],c=t[1],r=Object(a.useState)(null),j=Object(m.a)(r,2),i=j[0],l=j[1],n=Object(a.useState)(0),o=Object(m.a)(n,2),d=o[0],O=o[1],x=Object(a.useState)(0),p=Object(m.a)(x,2),g=p[0],S=p[1],y=Object(a.useState)(0),w=Object(m.a)(y,2),I=w[0],N=w[1],k=Object(a.useState)(""),W=Object(m.a)(k,2),T=W[0],C=W[1];return Object(a.useEffect)((function(){c(localStorage.getItem("city")),l(localStorage.getItem("temp")),C(localStorage.getItem("sky")),O(localStorage.getItem("feels")),S(localStorage.getItem("templow")),N(localStorage.getItem("windspeed"))})),Object(b.jsx)("div",{className:"container d-flex justify-content-center",children:Object(b.jsxs)("div",{className:"jumbotron weatherjx",children:[Object(b.jsxs)("h2",{className:"d-flex justify-content-center",children:[s,"'s Weather"]}),Object(b.jsxs)("p",{className:"",children:["Temprature: \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(b.jsx)("img",{src:u,alt:"",id:"tempp"}),i,Object(b.jsx)("br",{}),"Feels Like: \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(b.jsx)("img",{src:u,alt:"",id:"tempp"})," ",d,Object(b.jsx)("br",{}),"Lowest Temprature: ",Object(b.jsx)("img",{src:v,alt:"",id:"tempp"})," ",g,Object(b.jsx)("br",{}),"\xa0\xa0\xa0Sky: \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(b.jsx)("img",{src:h,alt:"",id:"tempp"})," ",T,Object(b.jsx)("br",{}),"Wind Speed:\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(b.jsx)("img",{src:f,alt:"",id:"tempp"})," ",I]})]})})}),y=s.p+"static/media/haze.152867de.svg",w=(s(10),function(){var e=Object(a.useState)(""),t=Object(m.a)(e,2),s=t[0],c=t[1],r=Object(a.useState)(null),j=Object(m.a)(r,2),i=j[0],l=j[1],n=Object(a.useState)(0),o=Object(m.a)(n,2),d=o[0],O=o[1],x=Object(a.useState)(0),p=Object(m.a)(x,2),g=p[0],h=p[1],S=Object(a.useState)(0),w=Object(m.a)(S,2),I=w[0],N=w[1],k=Object(a.useState)(""),W=Object(m.a)(k,2),T=W[0],C=W[1];return Object(a.useEffect)((function(){c(localStorage.getItem("city")),l(localStorage.getItem("temp")),C(localStorage.getItem("sky")),O(localStorage.getItem("feels")),h(localStorage.getItem("templow")),N(localStorage.getItem("windspeed"))})),Object(b.jsx)("div",{className:"container d-flex justify-content-center",children:Object(b.jsxs)("div",{className:"jumbotron weatherjx",children:[Object(b.jsxs)("h2",{className:"d-flex justify-content-center",children:[s,"'s Weather"]}),Object(b.jsxs)("p",{className:"",children:["Temprature: \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(b.jsx)("img",{src:u,alt:"",id:"tempp"}),i,Object(b.jsx)("br",{}),"Feels Like: \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(b.jsx)("img",{src:u,alt:"",id:"tempp"})," ",d,Object(b.jsx)("br",{}),"Lowest Temprature: ",Object(b.jsx)("img",{src:v,alt:"",id:"tempp"})," ",g,Object(b.jsx)("br",{}),"Sky: \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(b.jsx)("img",{src:y,alt:"",id:"tempp"})," ",T,Object(b.jsx)("br",{}),"Wind Speed: \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(b.jsx)("img",{src:f,alt:"",id:"tempp"})," ",I]})]})})}),I=s.p+"static/media/raindrop.87bf8de1.svg",N=(s(10),function(){var e=Object(a.useState)(""),t=Object(m.a)(e,2),s=t[0],c=t[1],r=Object(a.useState)(null),j=Object(m.a)(r,2),i=j[0],l=j[1],n=Object(a.useState)(0),o=Object(m.a)(n,2),d=o[0],O=o[1],x=Object(a.useState)(0),p=Object(m.a)(x,2),g=p[0],h=p[1],S=Object(a.useState)(0),y=Object(m.a)(S,2),w=y[0],N=y[1],k=Object(a.useState)(""),W=Object(m.a)(k,2),T=W[0],C=W[1];return Object(a.useEffect)((function(){c(localStorage.getItem("city")),l(localStorage.getItem("temp")),C(localStorage.getItem("sky")),O(localStorage.getItem("feels")),h(localStorage.getItem("templow")),N(localStorage.getItem("windspeed"))})),Object(b.jsx)("div",{className:"container d-flex justify-content-center",children:Object(b.jsxs)("div",{className:"jumbotron weatherjx",children:[Object(b.jsxs)("h2",{className:"d-flex justify-content-center",children:[s,"'s Weather"]}),Object(b.jsxs)("p",{className:"",children:["Temprature: \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(b.jsx)("img",{src:u,alt:"",id:"tempp"}),i,Object(b.jsx)("br",{}),"Feels Like: \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(b.jsx)("img",{src:u,alt:"",id:"tempp"})," ",d,Object(b.jsx)("br",{}),"Lowest Temprature: ",Object(b.jsx)("img",{src:v,alt:"",id:"tempp"})," ",g,Object(b.jsx)("br",{}),"Sky: \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(b.jsx)("img",{src:I,alt:"",id:"tempp"})," ",T,Object(b.jsx)("br",{}),"Wind Speed: \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(b.jsx)("img",{src:f,alt:"",id:"tempp"})," ",w]})]})})}),k=s.p+"static/media/mist.04c7c2b5.svg",W=(s(10),function(){var e=Object(a.useState)(""),t=Object(m.a)(e,2),s=t[0],c=t[1],r=Object(a.useState)(null),j=Object(m.a)(r,2),i=j[0],l=j[1],n=Object(a.useState)(0),o=Object(m.a)(n,2),d=o[0],O=o[1],x=Object(a.useState)(0),p=Object(m.a)(x,2),g=p[0],h=p[1],S=Object(a.useState)(0),y=Object(m.a)(S,2),w=y[0],I=y[1],N=Object(a.useState)(""),W=Object(m.a)(N,2),T=W[0],C=W[1];return Object(a.useEffect)((function(){c(localStorage.getItem("city")),l(localStorage.getItem("temp")),C(localStorage.getItem("sky")),O(localStorage.getItem("feels")),h(localStorage.getItem("templow")),I(localStorage.getItem("windspeed"))})),Object(b.jsx)("div",{className:"container d-flex justify-content-center",children:Object(b.jsxs)("div",{className:"jumbotron weatherjx",children:[Object(b.jsxs)("h2",{className:"d-flex justify-content-center",children:[s,"'s Weather"]}),Object(b.jsxs)("p",{className:"",children:["Temprature: \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(b.jsx)("img",{src:u,alt:"",id:"tempp"}),i,Object(b.jsx)("br",{}),"Feels Like: \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(b.jsx)("img",{src:u,alt:"",id:"tempp"})," ",d,Object(b.jsx)("br",{}),"Lowest Temprature: ",Object(b.jsx)("img",{src:v,alt:"",id:"tempp"})," ",g,Object(b.jsx)("br",{}),"Sky: \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(b.jsx)("img",{src:k,alt:"",id:"tempp"})," ",T,Object(b.jsx)("br",{}),"Wind Speed: \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(b.jsx)("img",{src:f,alt:"",id:"tempp"})," ",w]})]})})}),T=(s(10),function(){var e=Object(a.useState)(""),t=Object(m.a)(e,2),s=t[0],c=t[1],r=Object(a.useState)(null),j=Object(m.a)(r,2),i=j[0],l=j[1],n=Object(a.useState)(0),o=Object(m.a)(n,2),d=o[0],O=o[1],x=Object(a.useState)(0),p=Object(m.a)(x,2),g=p[0],h=p[1],S=Object(a.useState)(0),y=Object(m.a)(S,2),w=y[0],N=y[1],k=Object(a.useState)(""),W=Object(m.a)(k,2),T=W[0],C=W[1];return Object(a.useEffect)((function(){c(localStorage.getItem("city")),l(localStorage.getItem("temp")),C(localStorage.getItem("sky")),O(localStorage.getItem("feels")),h(localStorage.getItem("templow")),N(localStorage.getItem("windspeed"))})),Object(b.jsx)("div",{className:"container d-flex justify-content-center",children:Object(b.jsxs)("div",{className:"jumbotron weatherjx",children:[Object(b.jsxs)("h2",{className:"d-flex justify-content-center",children:[s,"'s Weather"]}),Object(b.jsxs)("p",{className:"",children:["Temprature: \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(b.jsx)("img",{src:u,alt:"",id:"tempp"}),i,Object(b.jsx)("br",{}),"Feels Like: \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(b.jsx)("img",{src:u,alt:"",id:"tempp"})," ",d,Object(b.jsx)("br",{}),"Lowest Temprature: ",Object(b.jsx)("img",{src:v,alt:"",id:"tempp"})," ",g,Object(b.jsx)("br",{}),"Sky: \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(b.jsx)("img",{src:I,alt:"",id:"tempp"})," ",T,Object(b.jsx)("br",{}),"Wind Speed: \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(b.jsx)("img",{src:f,alt:"",id:"tempp"})," ",w]})]})})}),C=s.p+"static/media/overcast.e49559c8.svg",F=(s(10),function(){var e=Object(a.useState)(""),t=Object(m.a)(e,2),s=t[0],c=t[1],r=Object(a.useState)(null),j=Object(m.a)(r,2),i=j[0],l=j[1],n=Object(a.useState)(0),o=Object(m.a)(n,2),d=o[0],O=o[1],x=Object(a.useState)(0),p=Object(m.a)(x,2),g=p[0],h=p[1],S=Object(a.useState)(0),y=Object(m.a)(S,2),w=y[0],I=y[1],N=Object(a.useState)(""),k=Object(m.a)(N,2),W=k[0],T=k[1];return Object(a.useEffect)((function(){c(localStorage.getItem("city")),l(localStorage.getItem("temp")),T(localStorage.getItem("sky")),O(localStorage.getItem("feels")),h(localStorage.getItem("templow")),I(localStorage.getItem("windspeed"))})),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{className:"container d-flex justify-content-center",children:Object(b.jsxs)("div",{className:"fluid-jumbotron weatherjx",children:[Object(b.jsx)("br",{}),Object(b.jsxs)("h2",{className:"d-flex justify-content-center",children:[s,"'s Weather"]}),Object(b.jsxs)("p",{className:"",children:["Temprature: \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(b.jsx)("img",{src:u,alt:"",id:"tempp"}),i,Object(b.jsx)("br",{}),"Feels Like: \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(b.jsx)("img",{src:u,alt:"",id:"tempp"})," ",d,Object(b.jsx)("br",{}),"Lowest Temprature: ",Object(b.jsx)("img",{src:v,alt:"",id:"tempp"})," ",g,Object(b.jsx)("br",{}),"\xa0\xa0\xa0\xa0 \xa0\xa0\xa0\xa0 Sky: \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(b.jsx)("img",{src:C,alt:"",id:"tempp"})," ",W,Object(b.jsx)("br",{}),"Wind Speed: \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(b.jsx)("img",{src:f,alt:"",id:"tempp"})," ",w]})]})})]})}),L=(s(67),s.p+"static/media/img2.6acf9f91.png"),A=function(){return Object(b.jsxs)("div",{className:"",children:[Object(b.jsxs)("div",{className:"jumbotron aboutj d-flex",children:[Object(b.jsx)("div",{className:"div1 d-flex justify-content-center",children:Object(b.jsx)("img",{className:"avatar",src:L})}),Object(b.jsx)("br",{}),"\xa0",Object(b.jsx)("div",{className:"div2",children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("div",{class:"p-3 mb-2 bg-da ",children:Object(b.jsx)("h2",{children:Object(b.jsx)("u",{children:"Who am I?"})})}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{className:"jumbotron j2",children:Object(b.jsxs)("p",{className:"para",children:["My name is ",Object(b.jsx)("b",{className:"bold",children:"Dawood Zahir"}),". At the time of making this web app, I am currently doing bachelors in ",Object(b.jsx)("b",{className:"bold",children:"Computer Science"})," from ",Object(b.jsx)("b",{className:"bold",children:"FAST NUCES (National University of Computer and Emerging Sciences). "}),Object(b.jsx)("br",{}),"I am a full stack developer using MERN technology for making Web Applications. If you wish to have a wesbsite for yourself, buiseness (E-commerce) or a managmenet system website, or anything from your imagination, feel free to contact me on the given email ( dodxfh@gmail.com ).",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"Swipe below to see my ",Object(b.jsx)("a",{href:"#skills",children:"Skills"}),"."]})})]})})]}),Object(b.jsxs)("div",{className:"container skill",id:"skills",children:[Object(b.jsx)("div",{class:"p-3 mb-2 bg-inf ",children:Object(b.jsx)("h1",{children:Object(b.jsx)("u",{children:"Skills:"})})}),Object(b.jsxs)("div",{className:"jumbotron sk",children:[Object(b.jsx)("h3",{children:Object(b.jsx)("u",{children:"Frameworks"})}),Object(b.jsx)("div",{class:"progress",children:Object(b.jsx)("div",{class:"progress-bar w-25 progress-bar-striped progress-bar-animated bg-danger",role:"progressbar","aria-valuenow":"100","aria-valuemin":"0","aria-valuemax":"100",children:Object(b.jsx)("b",{children:"React Native"})})}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{class:"progress",children:Object(b.jsx)("div",{class:"progress-bar w-50 progress-bar-striped progress-bar-animated bg-secondary",role:"progressbar","aria-valuenow":"100","aria-valuemin":"0","aria-valuemax":"100",children:Object(b.jsx)("b",{children:"Flutter"})})}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{class:"progress",children:Object(b.jsx)("div",{class:"progress-bar w-75 progress-bar-striped progress-bar-animated bg-info",role:"progressbar","aria-valuenow":"100","aria-valuemin":"0","aria-valuemax":"100",children:Object(b.jsx)("b",{children:"ReactJS"})})}),Object(b.jsx)("br",{}),Object(b.jsx)("h3",{children:Object(b.jsx)("u",{children:"Web languages:"})}),Object(b.jsx)("div",{class:"progress",children:Object(b.jsx)("div",{class:"progress-bar w-100 progress-bar-striped progress-bar-animated bg-success",role:"progressbar","aria-valuenow":"100","aria-valuemin":"0","aria-valuemax":"100",children:Object(b.jsx)("b",{children:"HTML"})})}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{class:"progress",children:Object(b.jsx)("div",{class:"progress-bar w-100 progress-bar-striped progress-bar-animated bg-success",role:"progressbar","aria-valuenow":"100","aria-valuemin":"0","aria-valuemax":"100",children:Object(b.jsx)("b",{children:"CSS"})})}),Object(b.jsx)("br",{}),Object(b.jsx)("h3",{children:Object(b.jsx)("u",{children:"Databases:"})}),Object(b.jsx)("div",{class:"progress",children:Object(b.jsx)("div",{class:"progress-bar w-100 progress-bar-striped progress-bar-animated bg-success",role:"progressbar","aria-valuenow":"100","aria-valuemin":"0","aria-valuemax":"100",children:Object(b.jsx)("b",{children:"SQL"})})}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{class:"progress",children:Object(b.jsx)("div",{class:"progress-bar w-100 progress-bar-striped progress-bar-animated bg-success",role:"progressbar","aria-valuenow":"100","aria-valuemin":"0","aria-valuemax":"100",children:Object(b.jsx)("b",{children:"MongoDB"})})}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{class:"progress",children:Object(b.jsx)("div",{class:"progress-bar w-25 progress-bar-striped progress-bar-animated bg-danger",role:"progressbar","aria-valuenow":"100","aria-valuemin":"0","aria-valuemax":"100",children:Object(b.jsx)("b",{children:"Firebase"})})}),Object(b.jsx)("br",{}),Object(b.jsx)("h3",{children:Object(b.jsx)("u",{children:"Programming Languages:"})}),Object(b.jsx)("div",{class:"progress",children:Object(b.jsx)("div",{class:"progress-bar w-100 progress-bar-striped progress-bar-animated bg-success",role:"progressbar","aria-valuenow":"100","aria-valuemin":"0","aria-valuemax":"100",children:Object(b.jsx)("b",{children:"Python"})})}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{class:"progress",children:Object(b.jsx)("div",{class:"progress-bar w-100 progress-bar-striped progress-bar-animated bg-success",role:"progressbar","aria-valuenow":"100","aria-valuemin":"0","aria-valuemax":"100",children:Object(b.jsx)("b",{children:"C++"})})}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{class:"progress",children:Object(b.jsx)("div",{class:"progress-bar w-75 progress-bar-striped progress-bar-animated bg-info",role:"progressbar","aria-valuenow":"100","aria-valuemin":"0","aria-valuemax":"100",children:Object(b.jsx)("b",{children:"Javascript"})})}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{class:"progress",children:Object(b.jsx)("div",{class:"progress-bar w-75 progress-bar-striped progress-bar-animated bg-info",role:"progressbar","aria-valuenow":"100","aria-valuemin":"0","aria-valuemax":"100",children:Object(b.jsx)("b",{children:"PHP"})})}),Object(b.jsx)("br",{})]})]})]})},E=(s(68),s.p+"static/media/react.39b66caa.gif"),P=s.p+"static/media/weather.1a685be8.gif",J=function(){return Object(b.jsxs)("div",{className:"",children:[Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("h1",{className:"d-flex justify-content-center",children:Object(b.jsx)("div",{class:"p-3 mb-2 bgin",children:"How this Website is made?"})}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{className:"container d-flex justify-content-center",children:Object(b.jsxs)("div",{class:"card-deck ",children:[Object(b.jsx)("div",{class:"card abc",children:Object(b.jsxs)("div",{class:"card-body text-center",children:[Object(b.jsx)("img",{className:"reactt",src:E}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("h3",{className:"head",children:Object(b.jsx)("b",{children:"ReactJS"})}),Object(b.jsx)("br",{}),Object(b.jsx)("p",{class:"card-text",children:"This Web-app is made using ReactJS."}),Object(b.jsx)("p",{children:"This Web-App consists of three pages."}),Object(b.jsxs)("li",{children:[Object(b.jsx)("b",{className:"boldd",children:"About Me"})," page has information about the creator of this web-app"]}),Object(b.jsx)("br",{}),Object(b.jsxs)("li",{children:[Object(b.jsx)("b",{className:"boldd",children:"Home"})," page has an input form which will tell you the weather when you click Submit after typing City."]}),Object(b.jsx)("br",{}),Object(b.jsxs)("li",{children:[Object(b.jsx)("b",{className:"boldd",children:"About Website"})," page has information about what components are used in this website. "]})]})}),Object(b.jsx)("div",{class:"card abc",children:Object(b.jsxs)("div",{class:"card-body text-center",children:[Object(b.jsx)("img",{className:"weath",src:P}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("h3",{className:"head",children:Object(b.jsx)("b",{children:"Open Weather"})}),Object(b.jsx)("br",{}),Object(b.jsxs)("p",{class:"card-text",children:["This Web-App is using ",Object(b.jsx)("b",{className:"boldd",children:"Open Weather"}),"'s API. The city is sent to the Open Weather using API and the the API return the JSON document containing information about that city. "]})]})})]})})]})};var M=function(){return localStorage.setItem("token",0),Object(b.jsxs)(i.a,{children:[Object(b.jsx)(l,{}),Object(b.jsx)(x.a,{exact:!0,path:"/weather-app",children:Object(b.jsx)(g,{})}),Object(b.jsx)(x.a,{exact:!0,path:"/sun",children:Object(b.jsx)(S,{})}),Object(b.jsx)(x.a,{exact:!0,path:"/haze",children:Object(b.jsx)(w,{})}),Object(b.jsx)(x.a,{exact:!0,path:"/rain",children:Object(b.jsx)(N,{})}),Object(b.jsx)(x.a,{exact:!0,path:"/mist",children:Object(b.jsx)(W,{})}),Object(b.jsx)(x.a,{exact:!0,path:"/snow",children:Object(b.jsx)(T,{})}),Object(b.jsx)(x.a,{exact:!0,path:"/clouds",children:Object(b.jsx)(F,{})}),Object(b.jsx)(x.a,{exact:!0,path:"/aboutme",children:Object(b.jsx)(A,{})}),Object(b.jsx)(x.a,{exact:!0,path:"/webinfo",children:Object(b.jsx)(J,{})})]})},D=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,70)).then((function(t){var s=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,j=t.getTTFB;s(e),a(e),c(e),r(e),j(e)}))};j.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(M,{})}),document.getElementById("root")),D()},9:function(e,t,s){}},[[69,1,2]]]);
//# sourceMappingURL=main.384310f4.chunk.js.map