(this.webpackJsonpweather_app=this.webpackJsonpweather_app||[]).push([[0],{14:function(e,a,t){e.exports=t(38)},19:function(e,a,t){},37:function(e,a,t){e.exports=t.p+"static/media/openweather_api.e08dbce8.png"},38:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(12),m=t.n(r),l=t(2),i=(t(19),t(13)),s=t.n(i),o=function(e){return c.a.createElement("form",{action:"#",onSubmit:e.onSubmit,className:"form"},c.a.createElement("input",{type:"text",value:e.value,onChange:e.onChange,className:"form__input",placeholder:"Insert location",required:!0}),c.a.createElement("button",{className:"form__button"},"Procurar"))},u=function(e){var a=e.weather;return c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card__icon"},c.a.createElement("img",{className:"card__image",src:"https://openweathermap.org/img/wn/".concat(a.weather[0].icon,"@2x.png")}),c.a.createElement("div",{className:"card__description"},a.weather[0].description)),c.a.createElement("div",{className:"card__main"},c.a.createElement("div",{className:"card__main--info"},c.a.createElement("p",{className:"card__city"},a.name),c.a.createElement("p",{className:"card__country"},a.sys.country)),c.a.createElement("div",{className:"card__temperature"},Math.floor(a.main.temp),"\xbaC")),c.a.createElement("div",{className:"card__info"},c.a.createElement("div",{className:"card__humidity"},a.main.humidity,"% of Humidity"),c.a.createElement("div",{className:"card__wind"},"Wind ",a.wind.speed," m/s")))},d=function(){return c.a.createElement("div",{className:"card"},c.a.createElement("h3",{className:"card__empty"},"Search for some locations!"))},p=function(){var e=Object(n.useState)(),a=Object(l.a)(e,2),r=a[0],m=a[1],i=Object(n.useState)(),p=Object(l.a)(i,2),_=p[0],h=p[1],E=Object(n.useState)(!1),f=Object(l.a)(E,2),N=f[0],v=f[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("main",{className:"container"},c.a.createElement("h2",{className:"titulo"},"Search Weather for your Location"),c.a.createElement(o,{onSubmit:function(e){e.preventDefault(),s.a.get("/city",{params:{search:_}}).then((function(e){m(e.data),v(!0)})).catch((function(){return v(!1)}))},value:_,onChange:function(e){return h(e.target.value)}}),N&&""!==_?c.a.createElement(u,{weather:r}):c.a.createElement(d,null)),c.a.createElement("footer",null,c.a.createElement("span",null,"API:"),c.a.createElement("img",{src:t(37),alt:"WeatherStack API"})))};m.a.render(c.a.createElement(p,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.e3b66c7f.chunk.js.map