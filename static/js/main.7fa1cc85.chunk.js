(this.webpackJsonpmemorygame=this.webpackJsonpmemorygame||[]).push([[0],{13:function(e,a,t){"use strict";t.r(a);var c=t(0),r=t.n(c),s=t(2),i=t.n(s),n=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"navbar fixed-top navbar-light bg-light"},r.a.createElement("h1",{className:"navbar-brand"},"Memory Clicky Game")))},l=t(3),o=t(4),d=t(6),m=t(5),g=t(7),u=[{id:1,src:"./assets/img/001.gif",clicked:!1},{id:2,src:"./assets/img/002.gif",clicked:!1},{id:3,src:"./assets/img/003.gif",clicked:!1},{id:4,src:"./assets/img/004.gif",clicked:!1},{id:5,src:"./assets/img/005.gif",clicked:!1},{id:6,src:"./assets/img/006.gif",clicked:!1},{id:7,src:"./assets/img/007.gif",clicked:!1},{id:8,src:"./assets/img/008.gif",clicked:!1},{id:9,src:"./assets/img/009.gif",clicked:!1},{id:10,src:"./assets/img/010.gif",clicked:!1},{id:11,src:"./assets/img/011.gif",clicked:!1},{id:12,src:"./assets/img/012.gif",clicked:!1},{id:13,src:"./assets/img/013.gif",clicked:!1},{id:14,src:"./assets/img/014.gif",clicked:!1},{id:15,src:"./assets/img/015.gif",clicked:!1},{id:16,src:"./assets/img/016.gif",clicked:!1}],f=function(e){var a=e.score,t=e.topScore;return r.a.createElement("div",{className:"jumbotron jumbotron-fluid"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"display-4"},"Clicky Game!"),r.a.createElement("h2",{className:"display-6"},"Score: ",a,"|Top Score: ",t),r.a.createElement("p",{className:"lead"},"Click on an image to earn points, but don't click on any image more than once!")))},k={width:"120px",padding:"7px"},p=function(e){var a=e.handleCardClick,t=e.characters;return r.a.createElement(r.a.Fragment,null,t.map((function(e){return r.a.createElement("div",{key:e.id,className:"card",style:k},r.a.createElement("img",{className:"card-img-top",src:e.src,alt:"",onClick:function(){return a(e)},onMouseOver:function(){return console.log(e.clicked)}}))})))},h=function(e){for(var a,t,c=e.length;c;)t=Math.floor(Math.random()*c--),a=e[c],e[c]=e[t],e[t]=a;return e},C=function(e){function a(){var e,t;Object(l.a)(this,a);for(var c=arguments.length,r=new Array(c),s=0;s<c;s++)r[s]=arguments[s];return(t=Object(d.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={characters:h(u),score:0,topScore:0},t.handleCardClick=function(e){e.clicked?t.CardClicked():(e.clicked=!0,t.CardNotClicked())},t.CardNotClicked=function(){var e=t.state,a=e.score,c=e.topScore,r=e.characters,s=a+1,i=s>c?s:c;t.setState({characters:h(r),topScore:i,score:s})},t.CardClicked=function(){var e=t.state.characters.map((function(e){return e.clicked=!1,e}));t.setState({characters:h(e),score:0})},t}return Object(g.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,{score:this.state.score,topScore:this.state.topScore}),r.a.createElement("div",{style:E},r.a.createElement(p,{characters:this.state.characters,score:this.state.score,handleCardClick:this.handleCardClick})))}}]),a}(c.Component),E={display:"grid",gridTemplateColumns:"repeat(4,100px)",gridGap:"25px",alignItems:"center"},v=C,y=function(){return r.a.createElement("div",{className:"container-fluid",style:{paddingTop:"100px"}},r.a.createElement(n,null),r.a.createElement(v,null),r.a.createElement("div",null,"rules body"),r.a.createElement("div",null,"footer"))};i.a.render(r.a.createElement(y,null),document.getElementById("root"))},8:function(e,a,t){e.exports=t(13)}},[[8,1,2]]]);
//# sourceMappingURL=main.7fa1cc85.chunk.js.map