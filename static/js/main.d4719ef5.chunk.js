(this.webpackJsonpfiregram=this.webpackJsonpfiregram||[]).push([[0],{16:function(e,t,a){e.exports=a(27)},21:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(14),i=a.n(o),l=(a(21),a(2)),c=a(8),s=function(){var e=Object(n.useState)({autor:"Tim Walker",phrase:"Only photograph what you love."}),t=Object(l.a)(e,2),a=t[0],o=t[1];return Object(n.useEffect)((function(){var e=0;setInterval((function(){e===c.data.length&&(e=0);var t=c.data[e];o({autor:t.autor,phrase:t.quote}),e+=1}),25e3)}),[]),r.a.createElement("div",{className:"title"},r.a.createElement("h1",null,"Firegram"),r.a.createElement("div",{className:"quote"},r.a.createElement("p",{className:"phrase"},'"',a.phrase,'"'),r.a.createElement("span",null,"\u2014 ",a.autor)))},u=a(9),m=a.n(u),d=a(15),p=a(5);a(28),a(23);p.initializeApp({apiKey:"AIzaSyBcD-XLTqvlqC6uqMpVd_wxXIM0iq2N0DQ",authDomain:"ninja-firegram-5046b.firebaseapp.com",databaseURL:"https://ninja-firegram-5046b.firebaseio.com",projectId:"ninja-firegram-5046b",storageBucket:"ninja-firegram-5046b.appspot.com",messagingSenderId:"353746793288",appId:"1:353746793288:web:743dc687a2a4b7fdab397d"});var h=p.storage(),g=p.firestore(),f=p.firestore.FieldValue.serverTimestamp,v=function(e){var t=Object(n.useState)(0),a=Object(l.a)(t,2),r=a[0],o=a[1],i=Object(n.useState)(null),c=Object(l.a)(i,2),s=c[0],u=c[1],p=Object(n.useState)(null),v=Object(l.a)(p,2),b=v[0],E=v[1];return Object(n.useEffect)((function(){var t=h.ref(e.name),a=g.collection("images");t.put(e).on("state_changed",(function(e){var t=e.bytesTransferred/e.totalBytes*100;o(t)}),(function(e){u(e)}),Object(d.a)(m.a.mark((function e(){var n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getDownloadURL();case 2:n=e.sent,r=f(),a.add({url:n,createdAt:r}),E(n);case 6:case"end":return e.stop()}}),e)}))))}),[e]),{progress:r,url:b,error:s}},b=a(3),E=function(e){var t=e.file,a=e.setFile,o=v(t),i=o.url,l=o.progress;return Object(n.useEffect)((function(){i&&a(null)}),[i,a]),r.a.createElement(b.a.div,{className:"progress-bar",initial:{width:0},animate:{width:l+"%"}})},y=function(){var e=Object(n.useState)(null),t=Object(l.a)(e,2),a=t[0],o=t[1],i=Object(n.useState)(null),c=Object(l.a)(i,2),s=c[0],u=c[1],m=["image/png","image/jpeg"];return r.a.createElement("form",null,r.a.createElement("label",null,r.a.createElement("input",{type:"file",onChange:function(e){var t=e.target.files[0];t&&m.includes(t.type)?(o(t),u("")):(o(null),u("Please selecte an image file (png or jpeg)"))}}),r.a.createElement("span",null,"+")),r.a.createElement("div",{className:"output"},s&&r.a.createElement("div",{className:"error"},s),a&&r.a.createElement("div",null,a.name),a&&r.a.createElement(E,{file:a,setFile:o})))},j=a(10),O=function(e){var t=Object(n.useState)([]),a=Object(l.a)(t,2),r=a[0],o=a[1];return Object(n.useEffect)((function(){var t=g.collection(e).orderBy("createdAt","desc").onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(Object(j.a)(Object(j.a)({},e.data()),{},{id:e.id}))})),o(t)}));return function(){return t()}}),[e]),{docs:r}},S={hover:{opacity:1}},w={rest:{opacity:0},animate:{opacity:1,transition:{duration:1}}},I={rest:{opacity:0,y:"100vh"},hover:{opacity:1,y:0,transition:{duration:.5}}},k=function(e){var t=e.setSelectedImg,a=e.deleteSelectedImage,n=O("images").docs;return r.a.createElement("div",{className:"img-grid"},n&&n.map((function(e){return r.a.createElement(b.a.div,{className:"img-wrap",key:e.id,initial:"rest",whileHover:"hover",animate:"animate",layout:!0,variants:S,onClick:function(){return t(e.url)}},r.a.createElement(b.a.img,{className:"img",src:e.url,alt:"uploaded img",variants:w}),r.a.createElement(b.a.ul,{variants:I,className:"function-tabs"},r.a.createElement("li",{className:"tab",onClick:function(t){t.stopPropagation(),a(e.id)}},"delete"),r.a.createElement("li",{className:"tab",onClick:function(t){t.stopPropagation(),function(e){var t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}(e.url)}},"copy link")))})))},N=function(e){var t=e.selectedImg,a=e.setSelectedImg;return r.a.createElement(b.a.div,{className:"backdrop",onClick:function(e){e.target.classList.contains("backdrop")&&a(null)},initial:{opacity:0},animate:{opacity:1}},r.a.createElement(b.a.img,{src:t,alt:"enlarged pic",initial:{scale:.5},animate:{scale:1},transition:{ease:"easeOut",duration:.4}}))},q=function(e){var t=e.deletedImg,a=e.deleteSelectedImage;return r.a.createElement("div",{className:"backdrop"},r.a.createElement("div",{className:"delete-modal"},r.a.createElement("div",{className:"modal-wrap"},r.a.createElement("p",null,"Do you really want to delete an image?"),r.a.createElement("div",{className:"buttons"},r.a.createElement("div",{className:"button delete",onClick:function(){return e=t,a(null),void g.collection("images").doc(e).delete().then((function(){console.log("Document successfully deleted!")})).catch((function(e){console.error("Error removing document: ",e)}));var e}},"DELETE"),r.a.createElement("div",{className:"button cancel",onClick:function(e){e.target.classList.contains("cancel")&&a(null)}},"CANCEL")))))};var A=function(){var e=Object(n.useState)(null),t=Object(l.a)(e,2),a=t[0],o=t[1],i=Object(n.useState)(null),c=Object(l.a)(i,2),u=c[0],m=c[1];return r.a.createElement("div",{className:"App"},r.a.createElement(s,null),r.a.createElement(y,null),r.a.createElement(k,{deleteSelectedImage:m,setSelectedImg:o}),a&&r.a.createElement(N,{selectedImg:a,setSelectedImg:o}),u&&r.a.createElement(q,{deletedImg:u,deleteSelectedImage:m}))};i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(A,null)),document.getElementById("root"))},8:function(e){e.exports=JSON.parse('{"data":[{"autor":"Alfred Stieglitz","quote":"In photography there is a reality so subtle that it becomes more real than reality."},{"autor":"Robert Frank","quote":"There is one thing the photograph must contain, the humanity of the moment."},{"autor":" Ralph Hattersley","quote":"We are making photographs to understand what our lives mean to us."},{"autor":"Ansel Adams","quote":"You don\u2019t take a photograph, you make it."},{"autor":"Edward Steichen","quote":"A portrait is not made in the camera but on either side of it."},{"autor":"Andy Warhol","quote":"The best thing about a picture is that it never changes, even when the people in it do."},{"autor":"Sam Abell","quote":"Essentially what photography is is life lit up."},{"autor":"Gilles Peress","quote":"I don\u2019t trust words. I trust pictures."},{"autor":"Marc Riboud","quote":"Taking pictures is savoring life intensely, every hundredth of a second."},{"autor":"Ambrose Bierce","quote":"Photograph: a picture painted by the sun without instruction in art.\u201d"},{"autor":"Ansel Adams","quote":"There are always two people in every picture: the photographer and the viewer."},{"autor":"Richard Avedon","quote":"All photographs are accurate. None of them is the truth."},{"autor":"Susan Sontag","quote":"Today everything exists to end in a photograph."},{"autor":"August Sander","quote":"In photography there are no shadows that cannot be illuminated."},{"autor":"Wynn Bullock","quote":"When I photograph, what I\u2019m really doing is seeking answers to things."},{"autor":"Yousuf Karsh","quote":"Character, like a photograph, develops in darkness."},{"autor":"Imogen Cunningham","quote":"Which of my photographs is my favorite? The one I\u2019m going to take tomorrow."}]}')}},[[16,1,2]]]);
//# sourceMappingURL=main.d4719ef5.chunk.js.map