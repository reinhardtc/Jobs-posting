(this["webpackJsonpjob-posting"]=this["webpackJsonpjob-posting"]||[]).push([[0],{103:function(e,t,s){"use strict";s.r(t);var a,c,r,n=s(1),l=s.n(n),i=s(76),d=s.n(i),o=(s(92),s(20)),m=s(85),x=s(116),j=s(117),b=s(115),u=s(84),h=s(13),p=s(15),g=s(114),f=s(119),O=s(120),y=s(60),v=s(77),N=s(78),w=s(66),k=new(function(){function e(){Object(v.a)(this,e)}return Object(N.a)(e,[{key:"getProfile",value:function(){return Object(w.a)(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return Object(w.a)(e).exp<Date.now()/1e3}catch(t){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}()),S=s.p+"static/media/logo.3319f12e.png",C=s(46),E=s(72),I=s(83),L=s.p+"static/media/hero.0bcb5de0.png",D=s(2),$=function(){return Object(D.jsxs)("div",{children:[Object(D.jsx)("main",{className:"mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28",children:Object(D.jsxs)("div",{className:"sm:text-center lg:text-left",children:[Object(D.jsxs)("h1",{className:"text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-5xl",children:[Object(D.jsx)("span",{className:"block xl:inline text-gray-600",children:"Need a gig?"})," ",Object(D.jsx)("span",{className:"block cust-orange xl:inline",children:"You are in the right place!"})]}),Object(D.jsx)("p",{className:"mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0",children:"Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua."}),Object(D.jsxs)("div",{className:"mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start",children:[Object(D.jsx)("div",{className:"rounded-md shadow",children:Object(D.jsx)("a",{children:Object(D.jsx)(h.c,{exact:!0,to:"/Signup",className:"btn-main-yellow w-full flex items-center justify-center px-8 py-3 border border-transparent text-base rounded-md text-white font-bold bg-cust-orange hover:bg-red-400 md:py-4 md:text-lg md:px-10 nav-link",replace:!0,children:"Sign up"})})}),Object(D.jsx)("div",{className:"mt-3 sm:mt-0 sm:ml-3",children:Object(D.jsx)("a",{children:Object(D.jsx)(h.c,{exact:!0,to:"/Login",className:"nav-link w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-bold rounded-md text-gray-600 bg-gray-100 hover:bg-gray-200 md:py-4 md:text-lg md:px-10",replace:!0,children:"Login"})})})]})]})}),Object(D.jsx)("div",{className:"hero-img lg:absolute lg:inset-y-60 lg:right-12 lg:w-7/12",children:Object(D.jsx)("img",{src:L})})]})},F=s(34),T=s.n(F),q=s(44),P=s(38),z=s(36),A=s(58),M=s(121),V=s(59),B=s(118),H=Object(B.a)(a||(a=Object(V.a)(["\n    mutation login($email: String!, $password: String!) {\n        login(email: $email, password: $password) {\n            token\n            user {\n                _id\n            }\n        }\n    }\n"]))),J=Object(B.a)(c||(c=Object(V.a)(["\n    mutation addUser(\n        $firstName: String!\n        $lastName: String!\n        $email: String!\n        $password: String!\n    ) {\n        addUser(\n            firstName: $firstName\n            lastName: $lastName\n            email: $email\n            password: $password\n        ) {\n            token\n            user {\n                _id\n            }\n        }\n    }\n"]))),R=Object(B.a)(r||(r=Object(V.a)(["\n  mutation addJob(\n    $title: String\n    $price: String\n    $description: String\n    $location: String\n  ) {\n    addJob(\n      title: $title\n      price: $price\n      description: $description\n      location: $location\n    ) {\n      _id\n      title\n      price\n      description\n      location\n    }\n  }\n"]))),_=function(){var e=Object(n.useState)({firstName:"",lastName:"",email:"",password:""}),t=Object(z.a)(e,2),s=t[0],a=t[1],c=Object(M.a)(J),r=Object(z.a)(c,1)[0],l=function(e){var t=e.target,c=t.name,r=t.value;a(Object(o.a)(Object(o.a)({},s),{},Object(P.a)({},c,r)))},i=function(){var e=Object(q.a)(T.a.mark((function e(t){var a,c;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log(s,"test123"),e.prev=2,e.next=5,r({variables:Object(o.a)({},s)});case 5:a=e.sent,c=a.data,console.log(c,"TEST"),k.login(c.addUser.token),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(D.jsx)("div",{children:Object(D.jsx)("div",{className:"md:mt-20 sm:mt-5 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8",children:Object(D.jsxs)("div",{className:"max-w-md w-full space-y-8",children:[Object(D.jsxs)("div",{children:[Object(D.jsx)("h2",{className:"mt-6 text-center text-3xl font-extrabold text-gray-700",children:"Create your account"}),Object(D.jsx)("p",{className:"mt-2 text-center text-sm text-gray-600",children:"Please fill out all the fields"})]}),Object(D.jsxs)("form",{className:"mt-8 space-y-6",onSubmit:i,children:[Object(D.jsx)("input",{type:"hidden",name:"remember",defaultValue:"true"}),Object(D.jsxs)("div",{className:"rounded-md shadow-sm -space-y-px",children:[Object(D.jsxs)("div",{children:[Object(D.jsx)("label",{htmlFor:"firstname",className:"sr-only",children:"First Name"}),Object(D.jsx)("input",{id:"firstName",name:"firstName",type:"firstName",autoComplete:"firstName",required:!0,className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-gray-400 focus:border-gray-400 focus:z-10 sm:text-sm",placeholder:"First Name",onChange:l})]}),Object(D.jsxs)("div",{children:[Object(D.jsx)("label",{htmlFor:"lastname",className:"sr-only",children:"Last Name"}),Object(D.jsx)("input",{id:"lastName",name:"lastName",type:"lastName",autoComplete:"lastName",required:!0,className:"mt-1 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-gray-400 focus:border-gray-400 focus:z-10 sm:text-sm",placeholder:"Last Name",onChange:l})]}),Object(D.jsxs)("div",{children:[Object(D.jsx)("label",{htmlFor:"email",className:"sr-only",children:"Email"}),Object(D.jsx)("input",{id:"email",name:"email",type:"email",autoComplete:"email",required:!0,className:"appearance-none mt-1 rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-gray-400 focus:border-gray-400 focus:z-10 sm:text-sm",placeholder:"Email address",onChange:l})]}),Object(D.jsxs)("div",{children:[Object(D.jsx)("label",{htmlFor:"password",className:"sr-only",children:"Password"}),Object(D.jsx)("input",{id:"password",name:"password",type:"password",autoComplete:"current-password",required:!0,className:"appearance-none mt-1 rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-gray-400 focus:border-gray-400 focus:z-10 sm:text-sm",placeholder:"Password",onChange:l})]})]}),Object(D.jsx)("div",{className:"flex justify-center",children:Object(D.jsxs)("button",{type:"submit",className:"bg-blue-500 hover:bg-blue-400 font-extrabold group relative w-80 flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500",children:[Object(D.jsx)("span",{className:"absolute left-0 inset-y-0 flex items-center pl-3",children:Object(D.jsx)(A.a,{className:"lock-icon h-5 w-5 text-white text-blue-500","aria-hidden":"true"})}),"Sign up"]})})]})]})})})},U=function(e){var t=Object(n.useState)({email:"",password:""}),s=Object(z.a)(t,2),a=s[0],c=s[1],r=Object(M.a)(H),l=Object(z.a)(r,2),i=l[0],d=l[1].error,m=function(e){var t=e.target,s=t.name,r=t.value;c(Object(o.a)(Object(o.a)({},a),{},Object(P.a)({},s,r)))},x=function(){var e=Object(q.a)(T.a.mark((function e(t){var s,r;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,i({variables:Object(o.a)({},a)});case 4:s=e.sent,r=s.data,k.login(r.login.token),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0);case 12:c({email:"",password:""});case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(D.jsx)("div",{className:"md:mt-20 sm:mt-5 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8",children:Object(D.jsxs)("div",{className:"max-w-md w-full space-y-8",children:[Object(D.jsxs)("div",{children:[Object(D.jsx)("h2",{className:"mt-6 text-center text-3xl font-extrabold text-gray-700",children:"Sign in to your account"}),Object(D.jsx)(h.a,{children:Object(D.jsxs)("p",{className:"mt-2 text-center text-sm text-gray-600",children:["Don't have an account yet?"," ",Object(D.jsx)(h.c,{exact:!0,to:"/Signup",className:"nav-link",replace:!0,children:Object(D.jsx)("a",{href:"#",className:"text-blue-400 font-medium",children:"Create one!"})}),Object(D.jsx)(p.c,{children:Object(D.jsx)(p.a,{path:"/Signup",component:_})})]})})]}),Object(D.jsxs)("form",{className:"mt-8 space-y-6",onSubmit:x,children:[Object(D.jsx)("input",{type:"hidden",name:"remember",defaultValue:"true"}),Object(D.jsxs)("div",{className:"rounded-md shadow-sm -space-y-px",children:[Object(D.jsxs)("div",{children:[Object(D.jsx)("label",{htmlFor:"email",className:"sr-only",children:"Email address"}),Object(D.jsx)("input",{id:"email",name:"email",type:"email",autoComplete:"email",required:!0,className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-gray-400 focus:border-gray-400 focus:z-10 sm:text-sm",placeholder:"Email address",onChange:m})]}),Object(D.jsxs)("div",{children:[Object(D.jsx)("label",{htmlFor:"password",className:"sr-only",children:"Password"}),Object(D.jsx)("input",{id:"password",name:"password",type:"password",autoComplete:"current-password",required:!0,className:"appearance-none mt-1 rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-gray-400 focus:border-gray-400 focus:z-10 sm:text-sm",placeholder:"Password",onChange:m})]}),d&&Object(D.jsx)("p",{className:"ml-3 text-sm text-red-500",children:"Invalid email or password."})]}),Object(D.jsx)("div",{className:"flex justify-center",children:Object(D.jsxs)("button",{type:"submit",className:"bg-blue-500 font-extrabold group relative w-80 flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300",children:[Object(D.jsx)("span",{className:"absolute left-0 inset-y-0 flex items-center pl-3",children:Object(D.jsx)(A.a,{className:"lock-icon h-5 w-5 text-white text-blue-500","aria-hidden":"true"})}),"Sign in"]})})]})]})})},G=function(){return Object(D.jsx)("div",{className:"",children:Object(D.jsx)(U,{})})},Q=function(){return Object(D.jsx)("div",{children:Object(D.jsx)(_,{})})},Y=function(){return Object(D.jsxs)("div",{className:"mt-10 w-3/5 mx-auto px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 sm:content-around",children:[Object(D.jsxs)("p",{className:"cust-font mb-16 mt-3 lg:text-3xl text-center text-base text-gray-500 sm:mt-5 sm:text-lg  mx-auto md:mt-5 md:text-xl ",children:["We are here to help you with all your needs!",Object(D.jsx)("br",{})," Choose what you want to do:"]}),Object(D.jsxs)("div",{className:"mt-5 sm:mt-8 sm:flex justify-around",children:[Object(D.jsxs)("div",{className:"grid justify-items-center",children:[Object(D.jsx)("div",{className:"w-60 mt-3 sm:mt-0",children:Object(D.jsx)("a",{children:Object(D.jsx)(h.b,{exact:!0,to:"/JobPosting",className:"btn-main-yellow font-bold flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-lg text-gray-600 md:py-4 md:text-lg md:px-10 nav-link",replace:!0,children:"I need help"})})}),Object(D.jsxs)("p",{className:"mt-3 lg:text-base text-center text-base text-gray-500 sm:mt-5 sm:text-lg  mx-auto md:mt-5 md:text-xl justify-center border-opacity-0",children:["Create listing. Set your price.",Object(D.jsx)("br",{})," Choose between hundreds of gigs!"]})]}),Object(D.jsxs)("div",{className:"grid justify-items-center",children:[Object(D.jsx)("div",{className:"w-60 mt-3 sm:mt-0",children:Object(D.jsx)("a",{children:Object(D.jsx)(h.b,{exact:!0,to:"/Dashboard",className:"btn-main-orange font-bold nav-link w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-lg text-gray-600 md:py-4 md:text-lg md:px-10",replace:!0,children:"I want to help"})})}),Object(D.jsxs)("p",{className:"mt-3 lg:text-base text-center text-base text-gray-500 sm:mt-5 sm:text-lg  mx-auto md:mt-5 md:text-xl justify-center ",children:["Need some cash? Easy-peasy!",Object(D.jsx)("br",{})," Your money just 3 clicks away!"]})]})]})]})},W=s.p+"static/media/map-img-placeholder.91872d17.png",K=function(){return Object(D.jsxs)("div",{children:[Object(D.jsx)("div",{}),Object(D.jsx)("div",{className:"mt-5 w-full md:w-9/12 m-auto",children:Object(D.jsxs)("div",{className:"flex border border-gray-200 shadow-lg sm:rounded-lg sm:overflow-hidden",children:[Object(D.jsxs)("div",{className:"flex-1 px-4 py-5 bg-white space-y-6 sm:p-6",children:[Object(D.jsxs)("div",{children:[Object(D.jsxs)("div",{className:"flex justify-between block text-xl font-medium text-gray-700",children:[Object(D.jsx)("p",{children:"MOVING HELPER NEEDED"}),Object(D.jsx)("p",{className:"cust-font",children:"$20/H"})]}),Object(D.jsxs)("div",{className:"mt-1 flex",children:[Object(D.jsxs)("div",{children:[Object(D.jsxs)("div",{className:"flex mt-2 w-40",children:[Object(D.jsx)("span",{className:"inline-block h-10 w-10 rounded-full overflow-hidden bg-gray-100",children:Object(D.jsx)("svg",{className:"h-full w-full text-gray-300",fill:"currentColor",viewBox:"0 0 24 24",children:Object(D.jsx)("path",{d:"M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"})})}),Object(D.jsx)("p",{className:"flex items-center cust-font ml-3",children:"David R."})]}),Object(D.jsx)("p",{className:"mt-2 text-sm text-gray-500",children:"\u2714 Verified user"}),Object(D.jsx)("p",{className:"mt-1 text-sm text-gray-500",children:"(512)-555-2233"})]}),Object(D.jsx)("div",{className:"\r flex-initial mt-1 block w-full sm:text-sm border\r border-gray-200 rounded-lg",children:Object(D.jsx)("p",{className:"py-2 px-3 text-gray-800",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown"})})]})]}),Object(D.jsxs)("div",{className:"flex justify-between",children:[Object(D.jsx)("div",{className:"flex text-xs cust-font",children:Object(D.jsx)("p",{className:"flex items-end",children:"Date posted: 8-23-2021"})}),Object(D.jsxs)("div",{className:"flex items-center",children:[Object(D.jsx)("button",{type:"button",className:"btn-main-yellow py-2.5 px-5 border border-none shadow-md rounded-lg text-sm leading-4 font-bold text-gray-700 focus:outline-none focus:ring-none",children:"Request this job"}),Object(D.jsx)("button",{type:"button",className:"ml-2 bg-gray-300 py-2 px-3 border border-none shadow-md rounded-lg leading-4 hover:bg-gray-400 focus:outline-none focus:ring-none",children:Object(D.jsx)(C.b,{className:"h-5 w-5 text-gray-600"})})]})]})]}),Object(D.jsx)("div",{className:"m-auto mr-5 map",children:Object(D.jsx)("img",{src:W,className:"rounded-lg h-auto w-44"})})]})}),Object(D.jsx)("div",{className:"mt-5 w-full md:w-9/12 m-auto",children:Object(D.jsxs)("div",{className:"flex border border-gray-200 shadow-lg sm:rounded-lg sm:overflow-hidden",children:[Object(D.jsxs)("div",{className:"flex-1 px-4 py-5 bg-white space-y-6 sm:p-6",children:[Object(D.jsxs)("div",{children:[Object(D.jsxs)("div",{className:"flex justify-between block text-xl font-medium text-gray-700",children:[Object(D.jsx)("p",{children:"MOVING HELPER NEEDED"}),Object(D.jsx)("p",{className:"cust-font",children:"$20/H"})]}),Object(D.jsxs)("div",{className:"mt-1 flex",children:[Object(D.jsxs)("div",{children:[Object(D.jsxs)("div",{className:"mt-2 flex w-40",children:[Object(D.jsx)("span",{className:"inline-block h-10 w-10 rounded-full overflow-hidden bg-gray-100",children:Object(D.jsx)("svg",{className:"h-full w-full text-gray-300",fill:"currentColor",viewBox:"0 0 24 24",children:Object(D.jsx)("path",{d:"M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"})})}),Object(D.jsx)("p",{className:"flex items-center cust-font ml-3",children:"David R."})]}),Object(D.jsx)("p",{className:"mt-2 text-sm text-gray-500",children:"\u2714 Verified user"}),Object(D.jsx)("p",{className:"mt-1 text-sm text-gray-500",children:"(512)-555-2233"})]}),Object(D.jsx)("div",{className:"\r flex-initial mt-1 block w-full sm:text-sm border\r border-gray-200 rounded-lg",children:Object(D.jsx)("p",{className:"py-2 px-3 text-gray-800",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown"})})]})]}),Object(D.jsxs)("div",{className:"flex justify-between",children:[Object(D.jsx)("div",{className:"flex text-xs cust-font",children:Object(D.jsx)("p",{className:"flex items-end",children:"Date posted: 8-23-2021"})}),Object(D.jsxs)("div",{className:"flex items-center",children:[Object(D.jsx)("button",{type:"button",className:"btn-main-yellow py-2.5 px-5 border border-none shadow-md rounded-lg text-sm leading-4 font-bold text-gray-700 focus:outline-none focus:ring-none",children:"Request this job"}),Object(D.jsx)("button",{type:"button",className:"ml-2 bg-gray-300 py-2 px-3 border border-none shadow-md rounded-lg text-sm leading-4 font-bold text-gray-700 hover:bg-gray-400 focus:outline-none focus:ring-none",children:Object(D.jsx)(C.b,{className:"h-5 w-5 text-gray-600"})})]})]})]}),Object(D.jsx)("div",{className:"m-auto mr-5 map",children:Object(D.jsx)("img",{src:W,className:"rounded-lg h-auto w-44"})})]})}),Object(D.jsx)("div",{className:"mt-5 w-full md:w-9/12 m-auto",children:Object(D.jsxs)("div",{className:"flex border border-gray-200 shadow-lg sm:rounded-lg sm:overflow-hidden",children:[Object(D.jsxs)("div",{className:"flex-1 px-4 py-5 bg-white space-y-6 sm:p-6",children:[Object(D.jsxs)("div",{children:[Object(D.jsxs)("div",{className:"flex justify-between block text-xl font-medium text-gray-700",children:[Object(D.jsx)("p",{children:"MOVING HELPER NEEDED"}),Object(D.jsx)("p",{className:"cust-font",children:"$20/H"})]}),Object(D.jsxs)("div",{className:"mt-1 flex",children:[Object(D.jsxs)("div",{children:[Object(D.jsxs)("div",{className:"mt-2 flex w-40",children:[Object(D.jsx)("span",{className:"inline-block h-10 w-10 rounded-full overflow-hidden bg-gray-100",children:Object(D.jsx)("svg",{className:"h-full w-full text-gray-300",fill:"currentColor",viewBox:"0 0 24 24",children:Object(D.jsx)("path",{d:"M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"})})}),Object(D.jsx)("p",{className:"flex items-center cust-font ml-3",children:"David R."})]}),Object(D.jsx)("p",{className:"mt-2 text-sm text-gray-500",children:"\u2714 Verified user"}),Object(D.jsx)("p",{className:"mt-1 text-sm text-gray-500",children:"(512)-555-2233"})]}),Object(D.jsx)("div",{className:"\r flex-initial mt-1 block w-full sm:text-sm border\r border-gray-200 rounded-lg",children:Object(D.jsx)("p",{className:"py-2 px-3 text-gray-800",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown"})})]})]}),Object(D.jsxs)("div",{className:"flex justify-between",children:[Object(D.jsx)("div",{className:"flex text-xs cust-font",children:Object(D.jsx)("p",{className:"flex items-end",children:"Date posted: 8-23-2021"})}),Object(D.jsxs)("div",{className:"flex items-center",children:[Object(D.jsx)("button",{type:"button",className:"btn-main-yellow py-2.5 px-5 border border-none shadow-md rounded-lg text-sm leading-4 font-bold text-gray-700 focus:outline-none focus:ring-none",children:"Request this job"}),Object(D.jsx)("button",{type:"button",className:"ml-2 bg-gray-300 py-2 px-3 border border-none shadow-md rounded-lg text-sm leading-4 font-bold text-gray-700 hover:bg-gray-400 focus:outline-none focus:ring-none",children:Object(D.jsx)(C.b,{className:"h-5 w-5 text-gray-600 "})})]})]})]}),Object(D.jsx)("div",{className:"m-auto mr-5 map",children:Object(D.jsx)("img",{src:W,className:"rounded-lg h-auto w-44"})})]})})]})},X=function(){return Object(D.jsx)("div",{children:Object(D.jsx)("p",{children:"Settings page"})})},Z=(s.p,function(){var e=Object(n.useState)({title:"",price:"",description:"",location:""}),t=Object(z.a)(e,2),s=t[0],a=t[1],c=Object(M.a)(R),r=Object(z.a)(c,1)[0],l=function(e){var t=e.target,c=t.name,r=t.value;a(Object(o.a)(Object(o.a)({},s),{},Object(P.a)({},c,r)))},i=function(){var e=Object(q.a)(T.a.mark((function e(t){var c,n;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log(s,"test123"),e.prev=2,e.next=5,r({variables:Object(o.a)({},s)});case 5:c=e.sent,n=c.data,console.log(n,"TEST"),a({title:"",price:"",description:"",location:""}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(D.jsx)("div",{children:Object(D.jsx)("form",{onSubmit:i,action:"#",method:"POST",children:Object(D.jsxs)("div",{className:"mt-5 w-full md:w-9/12 m-auto",children:[Object(D.jsxs)("div",{className:"job-details",children:[Object(D.jsxs)("div",{className:"flex",children:[Object(D.jsxs)("div",{className:"w-2/12",children:[Object(D.jsx)("p",{className:"text-center font-bold text-lg text-gray-700 mx-5 py-0.5 rounded-xl shadow-md bg-cust-yellow",children:"01."}),Object(D.jsxs)("div",{className:"py-4 flex divide-x-4 divide-gray-200 h-full",children:[Object(D.jsx)("div",{className:"flex-1"}),Object(D.jsx)("div",{className:"flex-1"})]})]}),Object(D.jsxs)("div",{className:"my-2 w-full mx-auto",children:[Object(D.jsx)("p",{className:"font-bold text-gray-700",children:"JOB DETAILS"}),Object(D.jsx)("p",{className:"text-gray-500 mt-1",children:"Add a detailed description"}),Object(D.jsxs)("div",{className:"",children:[Object(D.jsxs)("div",{className:"flex mt-5",children:[Object(D.jsxs)("div",{className:"flex-1 mr-3",children:[Object(D.jsx)("label",{htmlFor:"title",className:"block text-sm font-medium text-gray-700",children:"Title"}),Object(D.jsx)("div",{className:"mt-1",children:Object(D.jsx)("input",{type:"text",name:"title",id:"title",className:"focus:ring-gray-400 focus:border-gray-400  w-full rounded-none rounded-md sm:text-sm border-gray-300",placeholder:"Job title",value:s.title,onChange:l})})]}),Object(D.jsxs)("div",{className:"flex-1 ml-3",children:[Object(D.jsx)("label",{htmlFor:"price",className:"text-sm font-medium text-gray-700",children:"Price"}),Object(D.jsx)("input",{type:"text",name:"price",id:"price",className:"focus:ring-gray-400 focus:border-gray-400 w-full rounded-none rounded-md sm:text-sm border-gray-300",placeholder:"Set your price",value:s.price,onChange:l})]})]}),Object(D.jsxs)("div",{className:"w-full mt-3",children:[Object(D.jsx)("label",{htmlFor:"description",className:"block text-sm font-medium text-gray-700",children:"Description"}),Object(D.jsx)("div",{className:"mt-1",children:Object(D.jsx)("textarea",{id:"description",name:"description",rows:3,className:"shadow-sm focus:ring-gray-400 focus:border-gray-400 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md",placeholder:"",value:s.description,onChange:l})})]})]})]})]}),Object(D.jsx)("div",{})]}),Object(D.jsx)("div",{className:"location mt-10",children:Object(D.jsxs)("div",{className:"flex",children:[Object(D.jsxs)("div",{className:"w-2/12",children:[Object(D.jsx)("p",{className:"text-center font-bold text-lg text-gray-700 mx-5 py-0.5 rounded-xl shadow-md bg-gray-300",children:"02."}),Object(D.jsxs)("div",{className:"py-4 flex divide-x-4 divide-gray-200 h-full",children:[Object(D.jsx)("div",{className:"flex-1"}),Object(D.jsx)("div",{className:"flex-1"})]})]}),Object(D.jsxs)("div",{className:"my-2 w-full mx-auto",children:[Object(D.jsx)("p",{className:"font-bold text-gray-700",children:"LOCATION"}),Object(D.jsx)("p",{className:"text-gray-500 mt-1",children:"Enter the Address of the Job"}),Object(D.jsx)("div",{className:"",children:Object(D.jsx)("div",{className:"mt-1",children:Object(D.jsx)("textarea",{id:"location",name:"location",rows:3,className:"shadow-sm focus:ring-gray-400 focus:border-gray-400 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md",placeholder:"",value:s.location,onChange:l})})})]})]})}),Object(D.jsx)("div",{className:"submit mt-5",children:Object(D.jsxs)("div",{className:"flex items-center",children:[Object(D.jsx)("div",{className:"w-2/12",children:Object(D.jsx)("p",{className:"text-center font-bold text-lg text-gray-700 mx-5 py-0.5 rounded-xl shadow-md bg-gray-300",children:"03."})}),Object(D.jsx)("div",{className:"flex w-full",children:Object(D.jsx)("button",{type:"submit",className:"my-2 mx-auto  text-center font-bold text-gray-700 btn-main-orange py-2 px-24 rounded-xl shadow-lg hover:bg-red-400",children:"Submit"})})]})})]})})})}),ee=function(){return Object(D.jsx)(h.a,{children:Object(D.jsx)(g.a,{as:"nav",children:function(e){var t=e.open;return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(g.a.Panel,{className:"sm:hidden",children:Object(D.jsxs)("div",{className:"px-2 pt-2 pb-3 space-y-1",children:[Object(D.jsx)("a",{href:"#about",className:"text-gray-300 hover:bg-gray-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium",children:Object(D.jsx)(h.c,{exact:!0,to:"/",className:"nav-link",replace:!0,children:"About"})},"about"),Object(D.jsx)("a",{className:"text-gray-300 hover:bg-gray-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium",children:Object(D.jsx)(h.c,{exact:!0,to:"/",className:"nav-link",replace:!0,children:"Contact Us"})},"contact"),Object(D.jsx)("a",{href:"#faq",className:"text-gray-300 hover:bg-gray-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium",children:Object(D.jsx)(h.c,{exact:!0,to:"/",className:"nav-link",replace:!0,children:"FAQ"})},"faq"),Object(D.jsx)("a",{className:"text-gray-300 hover:bg-gray-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium",children:Object(D.jsx)(h.c,{exact:!0,to:"/Login",className:"nav-link",replace:!0,children:"Login"})},"login")]})}),Object(D.jsx)("div",{children:k.loggedIn()?Object(D.jsxs)(D.Fragment,{children:[Object(D.jsxs)("div",{className:"relative flex justify-between",children:[Object(D.jsxs)("div",{className:"flex items-center h-16",children:[Object(D.jsxs)(f.a,{as:"div",className:"ml-0 relative ",children:[Object(D.jsx)("div",{children:Object(D.jsx)(f.a.Button,{className:"rounded-br-lg p-4 bg-gray-500 flex focus:outline-none",children:Object(D.jsx)(y.a,{className:"h-8 text-gray-200",children:Object(D.jsx)("span",{className:"sr-only",children:"Open user menu"})})})}),Object(D.jsx)("div",{className:"",children:Object(D.jsx)(O.a,{as:n.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:Object(D.jsxs)(f.a.Items,{className:"h-screen origin-top-left absolute left-0 w-16 py-1 bg-gray-300 bg-opacity-25 focus:outline-none",children:[Object(D.jsx)(f.a.Item,{children:Object(D.jsx)("a",{children:Object(D.jsx)(h.c,{exact:!0,to:"/",className:"block px-4 py-2 text-sm text-gray-700",replace:!0,children:Object(D.jsx)(E.a,{className:"my-2 h-8 w-8 text-gray-600 hover:text-gray-700"})})},"home-page")}),Object(D.jsx)(f.a.Item,{children:Object(D.jsx)("a",{children:Object(D.jsx)(h.c,{exact:!0,to:"/Dashboard",className:"block px-4 py-2 text-sm text-gray-700",replace:!0,children:Object(D.jsx)(C.a,{className:"my-2 h-7 w-8 text-gray-600 hover:text-gray-700"})})},"settings")}),Object(D.jsx)(f.a.Item,{children:Object(D.jsx)("a",{children:Object(D.jsx)(h.c,{exact:!0,to:"/Settings",className:"block px-4 py-2 text-sm text-gray-700",replace:!0,children:Object(D.jsx)(E.b,{className:"my-2 h-8 w-8 text-gray-600 hover:text-gray-700"})})},"settings")}),Object(D.jsx)(f.a.Item,{children:Object(D.jsx)("li",{className:"block px-4 py-2 text-sm text-gray-700",onClick:k.logout,children:Object(D.jsx)(I.a,{className:"my-2 h-8 w-8 text-gray-600 hover:text-gray-700"})})})]})})})]}),Object(D.jsx)("div",{className:"ml-5 mt-2",children:Object(D.jsx)("img",{className:" h-14",src:S,alt:"Logo"})})]}),Object(D.jsxs)("div",{className:"relative flex mt-3 mr-14 items-center",children:[Object(D.jsx)("div",{className:"mr-5",children:Object(D.jsxs)("div",{children:[Object(D.jsx)("p",{className:"cust-font font-bold text-gray-600",children:"NICOLAS CAGE"}),Object(D.jsx)("p",{className:"text-gray-500 flex justify-end",children:"\u2605\u2605\u2605\u2606\u2606"})]})}),Object(D.jsx)("div",{className:"border rounded-full border-gray-300",children:Object(D.jsx)("span",{className:"flex inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100",children:Object(D.jsx)("svg",{className:"h-full w-full text-gray-300",fill:"currentColor",viewBox:"0 0 24 24",children:Object(D.jsx)("path",{d:"M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"})})})})]})]}),Object(D.jsx)("div",{className:"object-center",children:Object(D.jsxs)(p.c,{children:[Object(D.jsx)(p.a,{exact:!0,path:"/",component:Y}),Object(D.jsx)(p.a,{path:"/Dashboard",component:K}),Object(D.jsx)(p.a,{path:"/Settings",component:X}),Object(D.jsx)(p.a,{path:"/JobPosting",component:Z})]})})]}):Object(D.jsxs)("div",{children:[Object(D.jsx)("div",{className:"max-w-7xl mx-auto px-2 sm:px-6 lg:px-8",children:Object(D.jsxs)("div",{className:"relative flex items-center justify-between h-16",children:[Object(D.jsx)("div",{className:"absolute inset-y-0 left-0 flex items-center sm:hidden",children:Object(D.jsxs)(g.a.Button,{className:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",children:[Object(D.jsx)("span",{className:"sr-only",children:"Open main menu"}),t?Object(D.jsx)(y.b,{className:"block h-6 w-6","aria-hidden":"true"}):Object(D.jsx)(y.a,{className:"block h-6 w-6","aria-hidden":"true"})]})}),Object(D.jsx)("div",{className:"sm:block sm:ml-auto sm:mr-auto",children:Object(D.jsx)("img",{className:" h-12",src:S,alt:"Logo"})}),Object(D.jsx)("div",{className:"flex-1 flex items-center justify-center sm:items-stretch sm:justify-end",children:Object(D.jsx)("div",{className:"hidden sm:block sm:ml-6",children:Object(D.jsx)("div",{className:"flex space-x-4",children:Object(D.jsxs)("div",{children:[Object(D.jsx)("a",{href:"#about",children:Object(D.jsx)(h.c,{exact:!0,to:"/",className:"nav-link text-gray-600 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium",replace:!0,children:"About"})},"about"),Object(D.jsx)("a",{children:Object(D.jsx)(h.c,{exact:!0,to:"/",className:"nav-link text-gray-600 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium",replace:!0,children:"Contact Us"})},"about"),Object(D.jsx)("a",{href:"#faq",children:Object(D.jsx)(h.c,{exact:!0,to:"/",className:"nav-link text-gray-600 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium",replace:!0,children:"FAQ"})},"about"),Object(D.jsx)("a",{children:Object(D.jsx)(h.c,{exact:!0,to:"/Login",className:"nav-link text-gray-600 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium",replace:!0,children:"Login"})},"about")]})})})})]})}),Object(D.jsx)("div",{className:"object-center",children:Object(D.jsxs)(p.c,{children:[Object(D.jsx)(p.a,{exact:!0,path:"/",component:$}),Object(D.jsx)(p.a,{path:"/Login",component:G}),Object(D.jsx)(p.a,{path:"/Signup",component:Q})]})})]})})]})}})})},te=s.p+"static/media/city.239e8bd6.png",se=function(){return Object(D.jsx)("div",{children:Object(D.jsx)("img",{className:"bg-bottom bg-city w-full",src:te})})},ae=Object(m.a)({uri:"/graphql"}),ce=Object(u.a)((function(e,t){var s=t.headers,a=localStorage.getItem("id_token");return{headers:Object(o.a)(Object(o.a)({},s),{},{authorization:a?"Bearer ".concat(a):""})}})),re=new x.a({link:ce.concat(ae),cache:new j.a});var ne=function(){return Object(D.jsxs)(b.a,{client:re,children:[Object(D.jsx)(ee,{}),Object(D.jsx)(se,{})]})},le=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,123)).then((function(t){var s=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,n=t.getTTFB;s(e),a(e),c(e),r(e),n(e)}))};d.a.render(Object(D.jsx)(l.a.StrictMode,{children:Object(D.jsx)(ne,{})}),document.getElementById("root")),le()},92:function(e,t,s){}},[[103,1,2]]]);
//# sourceMappingURL=main.272acbc3.chunk.js.map