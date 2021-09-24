(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{45:function(e,t,a){},46:function(e,t,a){},92:function(e,t,a){"use strict";a.r(t);var s=a(1),r=a.n(s),c=a(11),n=a.n(c),i=(a(45),a(46),a(12)),l={navbar:{logo:"Web Dev Portfolio \ud83d\udcbb",links:[{text:"Projects",to:"myProjects"},{text:"About Me",to:"aboutMe"},{text:"Contact",to:"myContact"}]},header:{img:"/assets/headshot.png",text:["Hello there!","My name is Jared Donovan.","I am a "],typical:["full-stack web developer. \ud83d\udda5",2e3,"UI/UX designer. \ud83c\udf86",2e3,"database/API manager. \ud83d\uddc4",2e3,"lifelong tech nerd. \ud83d\udd76",2e3,"sports junkie. \ud83c\udfc8",2e3],btnText:"More About Me"},projects:{priceTracker:{images:["/assets/tcgtracker-SC2.png","/assets/tcgtracker-SC1.png","/assets/tcgtracker-SC3.png","/assets/tcgtracker-SC4.png"],title:"TCG Price Tracker",description:"An unofficial Pok\xe9mon Trading Card Game card-search application that allows the user to save their favorite cards and keep track of their prices.",role:"Front-end lead",technologies:"HTML, CSS, JavaScript, jQuery, Materialize",github:"https://github.com/Project01-TCG-Price-Tracker/TCG_Price_Tracker",deployed:"https://project01-tcg-price-tracker.github.io/TCG_Price_Tracker/"},quizzard:{images:["/assets/quizzard-SC1.png","/assets/quizzard-SC2.png","/assets/quizzard-SC3.png","/assets/quizzard-SC4.png"],title:"Quizzard",description:"A MERN stack, progressive web app that allows users to create and take quizzes of their own design. Quizzes are sorted by popularity, and recent scores are displayed on the quiz page. Users can also search for quizzes by name, author, or tags.",role:"Front-end lead",technologies:"MongoDB, Express.js, React.js, Node.js, TailwindCSS, PopperJS",github:"https://github.com/Quizzard-Dev/Quizzard",deployed:"https://quizzardweb.herokuapp.com/"},calendae:{images:["/assets/calendae-SC2.png","/assets/calendae-SC1.png","/assets/calendae-SC3.png","/assets/calendae-SC4.png"],title:"Calendae",description:"A simple social media site for planning casual events easier. Users add events to the database and other viewers can see the details.",role:"Lead designer",technologies:"Handlebars.js, CSS, JavaScript, Node.js, Express, Bulma, MySQL, Sequelize",github:"https://github.com/JTJ-Calendae/Calendae",deployed:"https://tjj-calendae.herokuapp.com/"},techBlog:{images:["/assets/techtalk-SC2.png","/assets/techtalk-SC1.png","/assets/techtalk-SC3.png","/assets/techtalk-SC4.png"],title:"Tech Talk",description:"A tech blog site where users can log up to post tech-related posts and articles. Allows users to update or delete their posts, and the ability to leave comments on posts.",role:"Lead designer/programmer",technologies:"Handlebars.js, CSS, JavaScript, Node.js, Express, MySQL, Sequelize",github:"https://github.com/jdono100/MVC_Tech-Blog",deployed:"https://jd-tech-talk.herokuapp.com/"}},aboutMe:{image:"/assets/cats.png",paragraphs:["If you haven't guessed already, my name is Jared Donovan and I'm a junior level full-stack web developer that currently resides in the Chicagoland area.","I'm passionate for client-side design & functionality but have solid experience working with back-end databases and APIs.","I recently graduated from Northwestern University's Full-Stack Web Development Boot Camp and the class equipped me with a firm understanding of the MERN stack.","There are new technologies and languages I am learning every day and I continue to develop projects using an agile workflow.","Some more fun stuff: I love sports, working out, going to the beach, playing games with friends,"]},contact:{links:{linkedin:"https://www.linkedin.com/in/jared-donovan/",github:"https://github.com/jdono100",twitter:"https://twitter.com/jaredonovan"},resume:"/Jared_Donovan_resume.pdf"}},o=a(39),d=a(0),j=function(e){var t=e.isOpen,a=document.querySelector(".bm-menu-wrap");t?a.setAttribute("aria-hidden",!1):a.setAttribute("aria-hidden",!0),document.querySelector("#logobtn").addEventListener("click",(function(){t?a.setAttribute("aria-hidden",!1):a.setAttribute("aria-hidden",!0)}))},x=function(){return Object(d.jsx)(o.slide,{right:!0,customCrossIcon:!1,onStateChange:j,children:Object(d.jsx)("ul",{children:l.navbar.links.map((function(e,t){return Object(d.jsx)(i.Link,{to:e.to,smooth:!0,children:Object(d.jsx)("li",{children:Object(d.jsx)("button",{className:"py-4 inline-block cursor-pointer hover:text-yellow-800 ",children:e.text})},t)},t)}))})})};function h(){return Object(s.useEffect)((function(){var e=document.querySelector(".bm-menu-wrap");e&&e.setAttribute("aria-hidden",!0)}),[]),Object(d.jsx)("nav",{className:"w-full fixed z-10",style:{background:"#291F1E"},children:Object(d.jsxs)("div",{className:"flex items-center justify-between mx-auto w-11/12 py-3 text-yellow-400",children:[Object(d.jsx)("button",{id:"logobtn",onClick:function(){return i.animateScroll.scrollToTop()},className:"transition duration-200 hover:text-yellow-800 text-xl font-semibold",children:l.navbar.logo}),Object(d.jsx)("div",{className:"hidden md:flex",children:l.navbar.links.map((function(e,t){return Object(d.jsx)(i.Link,{to:e.to,smooth:!0,children:Object(d.jsx)("li",{className:"mr-4 inline-block p-4 text-sm transition duration-200 hover:text-yellow-800",children:e.text},t)},t)}))}),Object(d.jsx)("div",{className:"md:hidden flex items-center",children:Object(d.jsx)(x,{})})]})})}var m=a(15),b=a(25),u=(a(37),a(40));function p(){var e=Object(s.useState)(!1),t=Object(m.a)(e,2),a=t[0],r=t[1];return Object(s.useEffect)((function(){r(!0)}),[]),Object(d.jsx)("div",{className:"min-h-screen flex items-center justify-center",style:{background:"#332625"},children:Object(d.jsxs)("div",{className:"w-10/12 flex flex-col md:flex-row-reverse items-center justify-between",children:[Object(d.jsx)("div",{className:"w-full md:w-2/5",style:{opacity:"60%"},children:Object(d.jsx)(b.LazyLoadImage,{src:l.header.img,effect:"blur",className:"rounded-lg z-0"})}),Object(d.jsxs)("div",{className:"text-yellow-400 text-center md:text-left",children:[Object(d.jsxs)("h2",{className:"".concat(a?"":"translate-y-10 opacity-0"," transform transition duration-1000 ease-in-out text-3xl md:text-4xl lg:text-5xl font-bold"),children:[l.header.text[0],Object(d.jsx)("br",{}),l.header.text[1]]}),Object(d.jsxs)("h2",{className:"".concat(a?"":"translate-y-10 opacity-0"," transform transition duration-1000 ease-in-out font-bold text-xl text-yellow-300"),children:[l.header.text[2]," ",Object(d.jsx)(u.a,{steps:l.header.typical,loop:1/0,className:"inline-block"})]}),Object(d.jsx)(i.Link,{to:"aboutMe",smooth:!0,children:Object(d.jsx)("button",{className:"bg-gradient-to-r text-gray-900 hover:text-gray-600 transition duration-200 from-yellow-400 via-orange-500 to-red-500 px-10 py-3 text-xl mt-5 rounded-lg",children:l.header.btnText})})]})]})})}var g=a(17),f=a.n(g),y=a(5),O=(a(88),a(4)),v=a(7),w=a(14),N=l.projects;function k(){var e=Object(s.useState)(0),t=Object(m.a)(e,2),a=t[0],r=t[1],c={initialIndex:1,autoPlay:3e3,wrapAround:!0,prevNextButtons:!1,contain:!0},n=N.priceTracker.images.map((function(e){return Object(d.jsx)("img",{src:e,alt:""},e)})),i=N.quizzard.images.map((function(e){return Object(d.jsx)("img",{src:e,alt:""},e)})),l=N.calendae.images.map((function(e){return Object(d.jsx)("img",{src:e,alt:""},e)})),o=N.techBlog.images.map((function(e){return Object(d.jsx)("img",{src:e,alt:""},e)}));return Object(d.jsx)("div",{className:"text-center w-full md:w-3/5",children:Object(d.jsxs)(y.d,{className:"mx-auto text-yellow-300",selectedTabClassName:"text-yellow-500 rounded-t-md bg-gray-500",selectedIndex:a,onSelect:function(e){return r(e)},children:[Object(d.jsxs)(y.b,{children:[Object(d.jsx)(y.a,{children:N.priceTracker.title}),Object(d.jsx)(y.a,{children:N.quizzard.title}),Object(d.jsx)(y.a,{children:N.calendae.title}),Object(d.jsx)(y.a,{children:N.techBlog.title})]}),Object(d.jsxs)(y.c,{children:[Object(d.jsx)(f.a,{className:"carousel overflow-hidden",elementType:"div",options:c,disableImagesLoaded:!1,children:n}),Object(d.jsx)("p",{className:"text-yellow-500 text-sm mt-2",children:N.priceTracker.description}),Object(d.jsxs)("p",{className:"text-yellow-600 text-sm mt-2",children:["Role: ",N.priceTracker.role]}),Object(d.jsxs)("p",{className:"text-yellow-700 text-sm mt-2",children:["Tech Used: ",N.priceTracker.technologies]}),Object(d.jsxs)("p",{className:"space-x-2 mt-2",children:[Object(d.jsx)("a",{rel:"noreferrer",className:"text-gray-600 transition duration-200 hover:text-gray-400",target:"_blank",href:N.priceTracker.github,children:Object(d.jsx)(O.a,{icon:v.a,size:"2x"})}),Object(d.jsx)("a",{rel:"noreferrer",className:"text-gray-600 transition duration-200 hover:text-gray-400",target:"_blank",href:N.priceTracker.deployed,children:Object(d.jsx)(O.a,{icon:w.b,size:"2x"})})]})]}),Object(d.jsxs)(y.c,{children:[Object(d.jsx)(f.a,{className:"carousel overflow-hidden",elementType:"div",options:c,disableImagesLoaded:!1,children:i}),Object(d.jsx)("p",{className:"text-yellow-500 text-sm mt-2",children:N.quizzard.description}),Object(d.jsxs)("p",{className:"text-yellow-600 text-sm mt-2",children:["Role: ",N.quizzard.role]}),Object(d.jsxs)("p",{className:"text-yellow-700 text-sm mt-2",children:["Tech Used: ",N.quizzard.technologies]}),Object(d.jsxs)("p",{className:"space-x-2 mt-2",children:[Object(d.jsx)("a",{rel:"noreferrer",className:"text-gray-600 transition duration-200 hover:text-gray-400",target:"_blank",href:N.quizzard.github,children:Object(d.jsx)(O.a,{icon:v.a,size:"2x"})}),Object(d.jsx)("a",{rel:"noreferrer",className:"text-gray-600 transition duration-200 hover:text-gray-400",target:"_blank",href:N.quizzard.deployed,children:Object(d.jsx)(O.a,{icon:w.b,size:"2x"})})]})]}),Object(d.jsxs)(y.c,{children:[Object(d.jsx)(f.a,{className:"carousel overflow-hidden",elementType:"div",options:c,disableImagesLoaded:!1,children:l}),Object(d.jsx)("p",{className:"text-sm mt-2",children:N.calendae.description}),Object(d.jsxs)("p",{className:"text-sm mt-2",children:["Role: ",N.calendae.role]}),Object(d.jsxs)("p",{className:"text-sm mt-2",children:["Tech Used: ",N.calendae.technologies]}),Object(d.jsxs)("p",{className:"space-x-2 mt-2",children:[Object(d.jsx)("a",{rel:"noreferrer",className:"text-gray-600 transition duration-200 hover:text-gray-400",target:"_blank",href:N.calendae.github,children:Object(d.jsx)(O.a,{icon:v.a,size:"2x"})}),Object(d.jsx)("a",{rel:"noreferrer",className:"text-gray-600 transition duration-200 hover:text-gray-400",target:"_blank",href:N.calendae.deployed,children:Object(d.jsx)(O.a,{icon:w.b,size:"2x"})})]})]}),Object(d.jsxs)(y.c,{children:[Object(d.jsx)(f.a,{className:"carousel overflow-hidden",elementType:"div",options:c,disableImagesLoaded:!1,children:o}),Object(d.jsx)("p",{className:"text-sm mt-2",children:N.techBlog.description}),Object(d.jsxs)("p",{className:"text-sm mt-2",children:["Role: ",N.techBlog.role]}),Object(d.jsxs)("p",{className:"text-sm mt-2",children:["Tech Used: ",N.techBlog.technologies]}),Object(d.jsxs)("p",{className:"space-x-2 mt-2",children:[Object(d.jsx)("a",{rel:"noreferrer",className:"text-gray-600 transition duration-200 hover:text-gray-400",target:"_blank",href:N.techBlog.github,children:Object(d.jsx)(O.a,{icon:v.a,size:"2x"})}),Object(d.jsx)("a",{rel:"noreferrer",className:"text-gray-600 transition duration-200 hover:text-gray-400",target:"_blank",href:N.techBlog.deployed,children:Object(d.jsx)(O.a,{icon:w.b,size:"2x"})})]})]})]})})}function z(){return Object(d.jsx)("div",{id:"myProjects",className:"min-h-screen z-30 flex items-center justify-center",style:{background:"#332C28"},children:Object(d.jsx)(k,{})})}function S(){return Object(d.jsx)("div",{id:"aboutMe",className:"min-h-screen flex items-center justify-center",style:{background:"#362E2A"},children:Object(d.jsxs)("div",{className:"rounded-xl p-4 h-4/5 text-xl text-yellow-600 w-10/12 flex flex-col md:flex-row-reverse items-center justify-between",style:{background:"#28221f"},children:[Object(d.jsx)("div",{className:"w-3/5 md:w-2/5",style:{opacity:"60%"},children:Object(d.jsx)(b.LazyLoadImage,{src:l.aboutMe.image,effect:"blur",className:"rounded-md pl-1"})}),Object(d.jsxs)("div",{className:"text-center md:text-left",children:[Object(d.jsx)("p",{children:l.aboutMe.paragraphs[0]}),Object(d.jsx)("p",{className:"pt-3 text-yellow-500",children:l.aboutMe.paragraphs[1]}),Object(d.jsx)("p",{className:"pt-3 text-yellow-400",children:l.aboutMe.paragraphs[2]}),Object(d.jsx)("p",{className:"pt-3 text-yellow-300",children:l.aboutMe.paragraphs[3]})]})]})})}var C=a(3),T=a.n(C),q=a(13);function M(){var e=Object(s.useState)("Send"),t=Object(m.a)(e,2),a=t[0],r=t[1],c=function(){var e=Object(q.a)(T.a.mark((function e(t){var a,s,c,n,i,l,o;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),r("Sending..."),a=t.target.elements,s=a.name,c=a.email,n=a.message,i={name:s.value,email:c.value,message:n.value},console.log(i),e.next=7,fetch("http://localhost:3001/contact",{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify(i)});case 7:return l=e.sent,r("Send"),e.next=11,l.json();case 11:o=e.sent,alert(o.status);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsx)("div",{id:"myContact",className:"min-h-screen flex items-center justify-center",style:{background:"#3a312c"},children:Object(d.jsxs)("div",{className:"w-4/5 space-x-2 flex flex-col md:flex-row items-center justify-between",children:[Object(d.jsxs)("div",{className:"mb-10 text-center p-4 md:p-10 rounded-xl bg-black",children:[Object(d.jsx)("h1",{className:"text-4xl md:text-5xl font-bold text-yellow-500",children:"Links"}),Object(d.jsxs)("div",{className:"mt-8 space-x-4",children:[Object(d.jsx)("a",{className:"text-gray-500 transition duration-200 hover:text-gray-300",target:"_blank",rel:"noreferrer",href:l.contact.links.github,children:Object(d.jsx)(O.a,{icon:v.b,size:"4x"})}),Object(d.jsx)("a",{className:"text-gray-500 transition duration-200 hover:text-gray-300",target:"_blank",rel:"noreferrer",href:l.contact.links.linkedin,children:Object(d.jsx)(O.a,{icon:v.c,size:"4x"})}),Object(d.jsx)("a",{className:"text-gray-500 transition duration-200 hover:text-gray-300",target:"_blank",rel:"noreferrer",href:l.contact.links.twitter,children:Object(d.jsx)(O.a,{icon:v.d,size:"4x"})})]}),Object(d.jsx)("div",{className:"mt-4",children:Object(d.jsxs)("a",{href:l.contact.resume,className:"text-xl md:text-2xl text-yellow-300 hover:text-yellow-200 transition duration-200",download:!0,children:["Download My Resume"," ",Object(d.jsx)(O.a,{icon:w.a})]})})]}),Object(d.jsxs)("div",{className:"p-4 md:p-10 rounded-xl text-center space-y-4 bg-black",children:[Object(d.jsx)("h1",{className:"text-4xl mb-5 md:text-5xl font-bold text-yellow-500",children:"Contact Me"}),Object(d.jsxs)("form",{className:"space-y-4",onSubmit:c,children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:"name",className:"pr-8 text-white",children:"Name:"}),Object(d.jsx)("input",{className:"bg-gray-300 p-3 rounded-lg",type:"text",id:"name",required:!0})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:"email",className:"pr-9 text-white",children:"Email:"}),Object(d.jsx)("input",{className:"bg-gray-300 p-3 rounded-lg",type:"text",id:"email",required:!0})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:"message",className:"text-white",children:"Message:"}),Object(d.jsx)("textarea",{className:"bg-gray-300 p-3 w-full h-40 rounded-lg",type:"text",id:"message",required:!0})]}),Object(d.jsx)("button",{className:"bg-gradient-to-r text-gray-900 hover:text-gray-600 transition duration-200 from-yellow-400 via-orange-500 to-red-500 px-10 py-3 text-xl mt-5 rounded-lg",type:"submit",children:a})]})]})]})})}var I=function(){return Object(d.jsxs)("div",{id:"appDiv",className:"overflow-hidden",children:[Object(d.jsx)(h,{}),Object(d.jsxs)("div",{id:"contentDiv",children:[Object(d.jsx)(p,{}),Object(d.jsx)(z,{}),Object(d.jsx)(S,{}),Object(d.jsx)(M,{})]})]})},L=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,93)).then((function(t){var a=t.getCLS,s=t.getFID,r=t.getFCP,c=t.getLCP,n=t.getTTFB;a(e),s(e),r(e),c(e),n(e)}))};n.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(I,{})}),document.getElementById("root")),L()}},[[92,1,2]]]);
//# sourceMappingURL=main.6129c3d5.chunk.js.map