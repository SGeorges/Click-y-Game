(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e){e.exports=[{id:1,name:"SpongeBob",image:"https://vignette.wikia.nocookie.net/spongebobgalaxy/images/0/07/SpongeBob_SquarePants.png/revision/latest?cb=20171228024014",occupation:"Fry Cook",location:"A Pineapple Under the Sea"},{id:2,name:"Mr. Krabs",image:"https://vignette3.wikia.nocookie.net/vsbattles/images/8/80/Mr._Krabs.png/revision/latest?cb=20150919162131",occupation:"Restaurant Owner",location:"A Giant Anchor"},{id:3,name:"Squidward",image:"https://vignette2.wikia.nocookie.net/fictionalcharacters/images/a/ac/Squidward.png/revision/latest?cb=20131121012626",occupation:"Cashier",location:"An Easter Island Head"},{id:4,name:"Dexter",image:"https://s-media-cache-ak0.pinimg.com/originals/fe/32/49/fe32495d45283cd6860ae122f0aeaad9.png",occupation:"Boy Genius",location:"A Secret Laboratory"},{id:5,name:"Courage",image:"https://vignette4.wikia.nocookie.net/vsbattles/images/3/39/Courage-0.png/revision/latest?cb=20160719055423",occupation:"A Cowardly Dog",location:"Nowhere, Kansas"},{id:6,name:"Doug Funnie",image:"https://vignette1.wikia.nocookie.net/doug/images/3/3b/Doug001.gif/revision/latest?cb=20110807170511",occupation:"Student",location:"Bluffington"},{id:7,name:"Bugs Bunny",image:"https://vignette2.wikia.nocookie.net/deathbattlefanon/images/2/2b/Bugs_Bunny.png/revision/latest?cb=20151206010607",occupation:"Looney Toon",location:"A Rabbit Burrow"},{id:8,name:"Johnny Bravo",image:"http://vignette3.wikia.nocookie.net/p__/images/9/9a/Johnny_Bravo.png/revision/latest?cb=20131031233339&path-prefix=protagonist",occupation:"Ladies Man",location:"Aron City"},{id:9,name:"Tommy Pickles",image:"https://vignette4.wikia.nocookie.net/uncyclopedia/images/e/e4/Tommy_Pickles.png/revision/latest?cb=20110530102641",occupation:"Adventurer",location:"California"},{id:10,name:"Rocko",image:"http://vignette3.wikia.nocookie.net/rockosmodernlife/images/9/9e/Rockos-modern-life-4e582a8f06a41.png/revision/latest?cb=20130522173416",occupation:"Cashier",location:"O-Town, California"},{id:11,name:"Captain Planet",image:"http://vignette2.wikia.nocookie.net/dragon-rap-battles/images/b/b6/Captain_Planet.png/revision/latest?cb=20160911200836",occupation:"Superhero",location:"Earth"},{id:12,name:"Ickis",image:"http://static.tvtropes.org/pmwiki/pub/images/ickis.png",occupation:"Ahhhh! A Real Monster!",location:"Under a City Dump"}]},,,function(e,t,a){e.exports=a(20)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(2),r=a.n(o),c=a(3),s=a(4),l=a(7),m=a(5),u=a(8);a(15);var p=function(e){return i.a.createElement("div",{role:"img","aria-label":"click-item",className:"click-item",onClick:function(){return e.selectChar(e.id)}},i.a.createElement("img",{alt:e.name,src:e.image}))};a(16);var g=function(e){return i.a.createElement("nav",{className:"navbar navbar-light"},i.a.createElement("ul",null,i.a.createElement("li",{className:"brand"},i.a.createElement("a",{href:"/"},"Clicky Game")),i.a.createElement("li",{className:""},e.nav_msg),i.a.createElement("li",null,"Score: ",e.score," | Top Score: ",e.top_score)))};a(17);var d=function(e){return i.a.createElement("div",{className:"wrapper"},e.children)};a(18);var h=function(e){return i.a.createElement("h1",{className:"title"},e.children)},v=a(6),f=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={selected:[],friends_array:[],friends:v,nav_msg:"Click an image to begin!",score:0,top_score:0},a.populateFriendsArray=function(){0===a.state.friends_array.length&&a.state.friends.map(function(e){return a.state.friends_array.push(e)})},a.generateGame=function(){var e=[];a.state.friends.map(function(t){return e.push(t)});for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*e.length),i=e[t];e[t]=e[n],e[n]=i}a.setState({friends_array:e})},a.selectChar=function(e){var t=0,n=a.state.selected;if(n.map(function(a){a===e&&t++}),a.generateGame(),console.log(a.state.friends_array),t>0)a.restart();else{var i=a.state.score+1;a.setState({score:i}),n.push(e),a.setState(n)}},a.restart=function(){var e=a.state.top_score;a.state.score>a.state.top_score&&(e=a.state.score),a.setState({selected:[],nav_msg:"Oh shucks, you've selected that one already",score:0,top_score:e})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return this.populateFriendsArray(),i.a.createElement("div",null,i.a.createElement(g,{nav_msg:this.state.nav_msg,score:this.state.score,top_score:this.state.top_score}),i.a.createElement(d,null,i.a.createElement(h,null,"Click-e-Game"),this.state.friends_array.map(function(t){return i.a.createElement(p,{selectChar:e.selectChar,id:t.id,key:t.id,name:t.name,image:t.image,occupation:t.occupation,location:t.location})})))}}]),t}(n.Component);a(19);r.a.render(i.a.createElement(f,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.8aaf8f3f.chunk.js.map