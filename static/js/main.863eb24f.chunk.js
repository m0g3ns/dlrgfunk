(this.webpackJsonpdlrgfunk=this.webpackJsonpdlrgfunk||[]).push([[0],{32:function(e,t,a){e.exports=a.p+"static/media/trash.ea3322d7.svg"},33:function(e,t,a){e.exports=a.p+"static/media/check.3a7e9691.svg"},34:function(e,t,a){e.exports=a(58)},57:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(30),i=a.n(s),c=a(7),o=a(8),l=a(10),u=a(9),h=a(27),m=a(5),d=a(6),p=a(19),g=a.n(p);a(42),a(44),a(48);g.a.initializeApp({apiKey:"AIzaSyCYsI4H3EdRmbjgL5pos2pdHVUmP2S2Hkk",authDomain:"dlrgfunk.firebaseapp.com",databaseURL:"https://dlrgfunk.firebaseio.com",projectId:"dlrgfunk"});var f=g.a.auth,b=g.a.database(),v=g.a.firestore();var E=function(){return r.a.createElement("header",null,r.a.createElement("nav",{className:"navbar navbar-expand-sm fixed-top navbar-light bg-light"},r.a.createElement(d.b,{className:"navbar-brand",to:"/dlrgfunk/"},"DLRG Funk"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse justify-content-end",id:"navbarNavAltMarkup"},f().currentUser?r.a.createElement("div",{className:"navbar-nav"},r.a.createElement(d.b,{className:"nav-item nav-link mr-3 training",to:"/dlrgfunk/join"},"\xdcbung"),r.a.createElement("button",{className:"btn btn-primary mr-3",onClick:function(){return f().signOut()}},"Ausloggen")):r.a.createElement("div",{className:"navbar-nav"},r.a.createElement(d.b,{className:"nav-item nav-link mr-3",to:"/dlrgfunk/login"},"Einloggen"),r.a.createElement(d.b,{className:"nav-item nav-link mr-3",to:"/dlrgfunk/signup"},"Registrieren")))))};var k=function(){return r.a.createElement("footer",{className:"pt-5"},r.a.createElement("div",{className:"container text-center"},r.a.createElement("p",null,"\xa9 Mogens Mei\xdfner 2020"),r.a.createElement("p",null,"Basierend auf einem Tutorial von\xa0",r.a.createElement("a",{href:"https://github.com/Dunebook",target:"_blank",rel:"noopener noreferrer"},"Dunebook"))))},y=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"home"},r.a.createElement(E,null),r.a.createElement("section",null,r.a.createElement("div",{className:"jumbotron jumbotron-fluid py-5"},r.a.createElement("div",{className:"container text-center py-5"},r.a.createElement("h1",{className:"display-4"},"Willkommen zu DLRG Online Funk\xfcbungen"),r.a.createElement("p",{className:"lead"},"Ein Programm um Erfahrung im Funken au\xdferhalb des Wachdiensts zu sammeln."),this.props.authenticated?r.a.createElement("div",{className:"mt-4"},r.a.createElement(d.b,{className:"btn btn-primary px-5 mr-3",to:"/dlrgfunk/join"},"\xdcbung beitreten")):r.a.createElement("div",{className:"mt-4"},r.a.createElement(d.b,{className:"btn btn-primary px-5 mr-3",to:"/dlrgfunk/signup"},"Registrieren"),r.a.createElement(d.b,{className:"btn px-5",to:"/dlrgfunk/login"},"Einloggen"))))),r.a.createElement(k,null))}}]),a}(n.Component),S=a(16),w=a(1),N=a.n(w),x=a(4),O=a(3),j=["+","-","*"],C=["e Hose","e Jacke","e M\xfctze"," T-Shirt"," Paar Handschuhe"];function B(e){var t=Date.now()-new Date(e).getTime(),a=new Date(t);return Math.abs(a.getUTCFullYear()-1970)}var z=["Restdruck auf Sauerstoffflasche betr\xe4gt 20 bar","2 WG e-klar","Auf unserem Turmrucksack fehlen 2 K\xfchlpacks und ein Verbandp\xe4ckchen gro\xdf","Wir haben eine Wassertemperatur von 18\xb0C gemessen","Vor Turm 4 befindet sich ein Motorboot innerhalb der Badezone",'Ein Badegast meldet eine gest\xfcrzte Person auf der Promenade in H\xf6he der Bar "Wir haben nichts"'];var M=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).redirect=function(){return r.a.createElement(m.a,{to:{pathname:"/dlrgfunk/join"}})},n.state={user:f().currentUser,chats:[],station:n.getStation(),content:"",readError:null,writeError:null,successMessage:"",errorMessage:"",loadingChats:!1,redirect:!1,otherStations:[],selectedValues:[],persons:[],docId:"",wantingMore:!1},n.change=n.change.bind(Object(O.a)(n)),n.handleCalc=n.handleCalc.bind(Object(O.a)(n)),n.handlePerson=n.handlePerson.bind(Object(O.a)(n)),n.handleAlarm=n.handleAlarm.bind(Object(O.a)(n)),n.handleBridge=n.handleBridge.bind(Object(O.a)(n)),n.handleDelete=n.handleDelete.bind(Object(O.a)(n)),n.handleChange=n.handleChange.bind(Object(O.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(O.a)(n)),n.handleWantingMore=n.handleWantingMore.bind(Object(O.a)(n)),n.myRef=r.a.createRef(),n}return Object(o.a)(a,[{key:"getStation",value:function(){return void 0!==this.props.location.state?this.props.location.state.station:{data:{}}}},{key:"componentDidMount",value:function(){var e=Object(x.a)(N.a.mark((function e(){var t,a,n,r=this;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({readError:null,loadingChats:!0}),t=!0,a=v.collection("cities/".concat(this.props.location.state.city.id,"/stations")),e.next=5,a.where("uid","==",this.state.user.uid).get().then((function(e){e.forEach((function(e){t=!1,r.setState({docId:e.id})}))})).catch((function(e){t=!0,console.error(e)}));case 5:if(this.setState({redirect:t}),!t){e.next=8;break}return e.abrupt("return");case 8:if(this.stationUpdateListener=a.doc(this.state.station.id).onSnapshot((function(e){e.data().uid!==r.state.user.uid&&r.setState({redirect:!0})})),""!==this.state.station.data.Bezeichnung){e.next=15;break}return e.next=12,a.where("Bezeichnung",">","").get().then((function(e){var t=[];e.forEach((function(e){t.push(e.data())})),t.sort((function(e,t){return e.Bezeichnung<t.Bezeichnung?-1:e.Bezeichnung>=t.Bezeichnung?1:0})),r.setState({otherStations:t})}));case 12:return this.listener=a.where("Bezeichnung",">","").onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(e.data())})),t.sort((function(e,t){return e.Bezeichnung<t.Bezeichnung?-1:e.Bezeichnung>=t.Bezeichnung?1:0})),r.setState({otherStations:t})})),e.next=15,v.collection("persons").get().then((function(e){var t=[];e.forEach((function(e){t.push(e.data())})),r.setState({persons:t})}));case 15:if(n=this.myRef.current,""!==this.state.station.data.Bezeichnung)try{b.ref("chats/"+this.props.location.state.city.data.name+"/"+this.state.station.data.Bezeichnung).on("value",(function(e){var t=[];e.forEach((function(e){t.push(e.val())})),t.sort((function(e,t){return e.timestamp-t.timestamp})),r.setState({chats:t}),n.scrollBy(0,n.scrollHeight),r.setState({loadingChats:!1})}))}catch(s){this.setState({readError:s.message,loadingChats:!1})}else this.setState({loadingChats:!1});case 17:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){"function"===typeof this.listener&&this.listener(),"function"===typeof this.stationUpdateListener&&this.stationUpdateListener(),""!==this.state.station.data.Bezeichnung&&b.ref("chats/"+this.props.location.state.city.data.name+"/"+this.state.station.data.Bezeichnung).off()}},{key:"handleChange",value:function(e){this.setState({content:e.target.value})}},{key:"handleSubmit",value:function(){var e=Object(x.a)(N.a.mark((function e(t){var a,n=this;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==t&&t.preventDefault(),""!==this.state.content){e.next=3;break}return e.abrupt("return");case 3:this.setState({writeError:null}),a=this.myRef.current||null;try{this.state.selectedValues.map(function(){var e=Object(x.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.ref("chats/"+n.props.location.state.city.data.name+"/"+t.replace(new RegExp(/(\s\((.*)\))/),"")).push({receiver:t.replace(new RegExp(/(\s\((.*)\))/),""),content:n.state.content,timestamp:Date.now(),uid:n.state.user.uid}).then((function(){var e="Die Nachricht an "+t.replace(new RegExp(/(\s\((.*)\))/),"")+" wurde erfolgreich gesendet!";n.setState({successMessage:e})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),this.setState({content:""}),null!=a&&a.scrollBy(0,a.scrollHeight)}catch(r){this.setState({writeError:r.message})}case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"handlePerson",value:function(){var e=Object(x.a)(N.a.mark((function e(){var t,a,n=this;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(1!==this.state.persons.length){e.next=3;break}return e.next=3,v.collection("persons").get().then((function(e){var t=[];e.forEach((function(e){t.push(e.data())})),n.setState({persons:t})}));case 3:t=this.state.persons[Math.round(Math.random()*(this.state.persons.length-1))],-1!==this.state.persons.indexOf(t)&&this.setState({persons:Object(S.a)(this.state.persons.filter((function(e){return e.lastname!==t.lastname})))}),a="Ein besorgter Badegast kommt zu dir: Gesucht wird ".concat(t.firstname," ").concat(t.lastname,", ").concat(B(t.birthday)," Jahre alt, ").concat(t.height," cm gro\xdf und tr\xe4gt ein").concat(C[Math.round(Math.random()*(C.length-1))]," in der Farbe ").concat(t.color,". Gib diese Suchmeldung an den Adler Bietigheim weiter!"),this.setState({content:a});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleCalc",value:function(){var e="L\xf6se folgende Rechenaufgabe und melde sowohl Aufgabe als auch Ergebnis an den Adler "+this.state.station.data.Ort+": "+function(){var e=Math.round(100*Math.random()),t=Math.round(100*Math.random());return e+" "+j[Math.round(Math.random()*(j.length-1))]+" "+t}();this.setState({content:e})}},{key:"handleDelete",value:function(){var e=Object(x.a)(N.a.mark((function e(){var t=this;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.state.selectedValues.forEach(function(){var e=Object(x.a)(N.a.mark((function e(a){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.ref("chats/"+t.props.location.state.city.data.name+"/"+a.replace(new RegExp(/(\s\((.*)\))/),"")).set(null).then((function(){var e="Die Nachrichten von "+a.replace(new RegExp(/(\s\((.*)\))/),"")+" wurden erfolgreich gel\xf6scht!";t.setState({successMessage:e})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleBridge",value:function(){var e=this;if(1===this.state.selectedValues.length){var t=this.state.otherStations.filter((function(t){return""!==t.name&&e.state.selectedValues[0].replace(new RegExp(/(\s\((.*)\))/),"")!==t.Bezeichnung}));if(0!==t.length){var a=t[Math.round(Math.random()*(t.length-1))],n="Du hast mehrfach versucht den Adler Bietigheim anzufunken, jedoch bist du au\xdfer Reichweite. Gl\xfccklicherweise bist du in Reichweite von "+a.Bezeichnung+". Mache eine Funkbr\xfccke \xfcber "+a.Bezeichnung+" und \xfcbermittle folgende Nachricht an den Adler Bietigheim: "+z[Math.round(Math.random()*(z.length-1))];this.setState({content:n})}else this.setState({errorMessage:"Es muss einen \xdcbertr\xe4ger / 2 besetzte Stationen geben!"})}else this.setState({errorMessage:"Nur eine Station ausw\xe4hlen!"})}},{key:"handleAlarm",value:function(){this.setState({content:"Alarm! Du entdeckst eine Person s\xfcdlich der Badeinsel. Die Person droht unterzugehen! Dein Kamerad ist ins Wasser gegangen! Melde die Lage umgehend an den Adler Bietigheim!"})}},{key:"handleWantingMore",value:function(){var e=Object(x.a)(N.a.mark((function e(){var t;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=v.collection("cities/".concat(this.props.location.state.city.id,"/stations")),e.next=3,t.doc(this.state.docId).update({wantingMore:!0});case 3:this.setState({wantingMore:!0}),setTimeout(function(){t.doc(this.state.docId).update({wantingMore:!1}),this.setState({wantingMore:!1})}.bind(this),1e4);case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"formatTime",value:function(e){var t=new Date(e),a=t.getMinutes();return a<10&&(a="0"+a),"".concat(t.getDate(),".").concat(t.getMonth()+1,".").concat(t.getFullYear()," ").concat(t.getHours(),":").concat(a)}},{key:"change",value:function(e){var t=[];Object(S.a)(e.target.selectedOptions).forEach((function(e){t.push(e.value)})),this.setState({selectedValues:t})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(E,null),r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"content"},this.state.redirect?this.redirect():"",r.a.createElement("h3",null,"Du bist\xa0",this.state.station.data.Rufname+" "+this.state.station.data.Ort+" "+this.state.station.data.Bezeichnung),""!==this.state.station.data.Bezeichnung?r.a.createElement("div",{className:"chat-area",ref:this.myRef},this.state.loadingChats?r.a.createElement("div",{className:"spinner-border text-success",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")):"",this.state.chats.slice(-2).map((function(t){if(""===t.content)return"";var a=Date.now()-t.timestamp<3e3,n=t.content.includes("Alarm!");return r.a.createElement("p",{key:t.timestamp,className:"chat-bubble "+(a?"new ":"")+(n?"alarm":""),onClick:a?function(e){e.target.classList.remove("new")}:function(){}},t.content,r.a.createElement("br",null),r.a.createElement("span",{className:"chat-time float-right"},e.formatTime(t.timestamp)))})),r.a.createElement("br",null),this.state.wantingMore?"":r.a.createElement("button",{className:"btn btn-success",onClick:this.handleWantingMore},"Ich w\xfcrde gerne eine Aufgabe bekommen!")):r.a.createElement("form",{onSubmit:this.handleSubmit,className:"mx-3"},r.a.createElement("div",{className:"form-group select"},r.a.createElement("select",{multiple:!0,className:"form-control",onChange:this.change},this.state.otherStations.map((function(e){return r.a.createElement("option",{key:e.Ort+e.Bezeichnung,className:e.wantingMore?"wantingMore":""},e.Bezeichnung,""!==e.name?" (".concat(e.name,")"):"")})))),r.a.createElement("div",{className:"buttonColumn"},r.a.createElement("button",{className:"btn btn-warning px-5 mb-2",onClick:this.handleCalc},"Rechenaufgabe"),r.a.createElement("button",{className:"btn btn-warning px-5 mb-2",onClick:this.handlePerson},"Personensuche"),r.a.createElement("button",{className:"btn btn-warning px-5 mb-2",onClick:this.handleBridge},"Funkbr\xfccke"),r.a.createElement("button",{className:"btn btn-warning px-5 mb-2",onClick:this.handleAlarm},"Alarm")),r.a.createElement("br",null),r.a.createElement("button",{className:"btn btn-danger px-5 mb-2",onClick:this.handleDelete},"Chat l\xf6schen"),r.a.createElement("textarea",{className:"form-control",name:"content",onChange:this.handleChange,value:this.state.content}),this.state.writeError?r.a.createElement("p",{className:"text-danger"},this.state.writeError):null,r.a.createElement("button",{type:"submit",className:"btn btn-submit px-5 mt-4"},"Absenden")),""!==this.state.successMessage?r.a.createElement("div",{className:"alert alert-success"},"(",setTimeout(function(){this.setState({successMessage:""})}.bind(this),5e3),")\xa0",this.state.successMessage):"",""!==this.state.errorMessage?r.a.createElement("div",{className:"alert alert-danger"},"(",setTimeout(function(){this.setState({errorMessage:""})}.bind(this),5e3),")\xa0",this.state.errorMessage):"",r.a.createElement("div",{className:"py-5 mx-3 info"},"Eingeloggt als:"," ",r.a.createElement("strong",{className:"text-info"},this.state.user.email)))))}}]),a}(n.Component),R=a(15);function A(){var e=new f.GoogleAuthProvider;return f().signInWithPopup(e)}function I(){var e=new f.GithubAuthProvider;return f().signInWithPopup(e)}function D(){return f().signInAnonymously()}var W=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).state={error:null,email:"",password:""},e.handleChange=e.handleChange.bind(Object(O.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(O.a)(e)),e.googleSignIn=e.googleSignIn.bind(Object(O.a)(e)),e.githubSignIn=e.githubSignIn.bind(Object(O.a)(e)),e}return Object(o.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(R.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(){var e=Object(x.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),this.setState({error:""}),e.prev=2,e.next=5,a=this.state.email,n=this.state.password,f().createUserWithEmailAndPassword(a,n);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),this.setState({error:e.t0.message});case 10:case"end":return e.stop()}var a,n}),e,this,[[2,7]])})));return function(t){return e.apply(this,arguments)}}()},{key:"googleSignIn",value:function(){var e=Object(x.a)(N.a.mark((function e(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),this.setState({error:e.t0.message});case 8:case"end":return e.stop()}}),e,this,[[0,5]])})));return function(){return e.apply(this,arguments)}}()},{key:"githubSignIn",value:function(){var e=Object(x.a)(N.a.mark((function e(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),this.setState({error:e.t0.message});case 8:case"end":return e.stop()}}),e,this,[[0,5]])})));return function(){return e.apply(this,arguments)}}()},{key:"anonSignIn",value:function(){var e=Object(x.a)(N.a.mark((function e(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),this.setState({error:e.t0.message});case 8:case"end":return e.stop()}}),e,this,[[0,5]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement(E,null),r.a.createElement("form",{className:"mt-5 py-5 px-5",onSubmit:this.handleSubmit},r.a.createElement("h1",null,"Registrieren im",r.a.createElement(d.b,{className:"title ml-2",to:"/dlrgfunk/"},"DLRG Online Funk")),r.a.createElement("p",{className:"lead"},"F\xfcll die Felder unten aus um dich zu registrieren."),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-control signupmail",placeholder:"Email",name:"email",type:"email",onChange:this.handleChange,value:this.state.email})),r.a.createElement("div",{className:"form-group signupmail"},r.a.createElement("input",{className:"form-control signupmail",placeholder:"Password",name:"password",onChange:this.handleChange,value:this.state.password,type:"password"})),r.a.createElement("div",{className:"form-group"},this.state.error?r.a.createElement("p",{className:"text-danger"},this.state.error):null,r.a.createElement("button",{className:"btn btn-primary px-5 signupbtn",type:"submit"},"Registrieren")),r.a.createElement("p",null,"Du kannst dich auch mit folgenden Anbietern registrieren:"),r.a.createElement("button",{className:"btn btn-danger mr-2 signupbtn",type:"button",onClick:this.googleSignIn},"Registrieren mit Google"),r.a.createElement("button",{className:"btn btn-secondary mr-2 signupbtn",type:"button",onClick:this.githubSignIn},"Registrieren mit GitHub"),r.a.createElement("button",{className:"btn btn-dark loginbtn",type:"button",onClick:this.anonSignIn},"Anonym Anmelden"),r.a.createElement("hr",null),r.a.createElement("p",null,"Du hast dich schon registriert?"," ",r.a.createElement(d.b,{to:"/dlrgfunk/login"},"Login"))))}}]),a}(n.Component),P=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).state={error:null,email:"",password:""},e.handleChange=e.handleChange.bind(Object(O.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(O.a)(e)),e.googleSignIn=e.googleSignIn.bind(Object(O.a)(e)),e.githubSignIn=e.githubSignIn.bind(Object(O.a)(e)),e}return Object(o.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(R.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(){var e=Object(x.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),this.setState({error:""}),e.prev=2,e.next=5,a=this.state.email,n=this.state.password,f().signInWithEmailAndPassword(a,n);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),this.setState({error:e.t0.message});case 10:case"end":return e.stop()}var a,n}),e,this,[[2,7]])})));return function(t){return e.apply(this,arguments)}}()},{key:"googleSignIn",value:function(){var e=Object(x.a)(N.a.mark((function e(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),this.setState({error:e.t0.message});case 8:case"end":return e.stop()}}),e,this,[[0,5]])})));return function(){return e.apply(this,arguments)}}()},{key:"githubSignIn",value:function(){var e=Object(x.a)(N.a.mark((function e(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),this.setState({error:e.t0.message});case 8:case"end":return e.stop()}}),e,this,[[0,5]])})));return function(){return e.apply(this,arguments)}}()},{key:"anonSignIn",value:function(){var e=Object(x.a)(N.a.mark((function e(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),this.setState({error:e.t0.message});case 8:case"end":return e.stop()}}),e,this,[[0,5]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement(E,null),r.a.createElement("form",{className:"mt-5 py-5 px-5",autoComplete:"off",onSubmit:this.handleSubmit},r.a.createElement("h1",null,"Anmelden im",r.a.createElement(d.b,{className:"title ml-2",to:"/dlrgfunk/"},"DLRG Online Funk")),r.a.createElement("p",{className:"lead"},"F\xfclle die Felder unten aus, um dich einzuloggen."),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-control loginmail",placeholder:"Email",name:"email",type:"email",onChange:this.handleChange,value:this.state.email})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-control loginmail",placeholder:"Passwort",name:"password",onChange:this.handleChange,value:this.state.password,type:"password"})),r.a.createElement("div",{className:"form-group"},this.state.error?r.a.createElement("p",{className:"text-danger"},this.state.error):null,r.a.createElement("button",{className:"btn btn-primary px-5 loginbtn",type:"submit"},"Anmelden")),r.a.createElement("p",null,"Du kannst dich auch mit folgenden Anbietern anmelden:"),r.a.createElement("button",{className:"btn btn-danger mr-2 loginbtn",type:"button",onClick:this.googleSignIn},"Anmelden mit Google"),r.a.createElement("button",{className:"btn btn-secondary mr-2 loginbtn",type:"button",onClick:this.githubSignIn},"Anmelden mit GitHub"),r.a.createElement("button",{className:"btn btn-dark loginbtn",type:"button",onClick:this.anonSignIn},"Anonym Anmelden"),r.a.createElement("hr",null),r.a.createElement("p",null,"Noch keinen Account?"," ",r.a.createElement(d.b,{to:"/dlrgfunk/signup"},"Registrieren"))))}}]),a}(n.Component),L=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).updateInput=function(e){n.setState(Object(R.a)({},e.target.name,e.target.value))},n.state={user:f().currentUser,readError:null,writeError:null,firstname:"",lastname:"",birthday:"",color:"",height:""},n.handleSubmit=n.handleSubmit.bind(Object(O.a)(n)),n.myRef=r.a.createRef(),n}return Object(o.a)(a,[{key:"handleSubmit",value:function(){var e=Object(x.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),this.setState({writeError:null}),e.prev=2,e.next=5,v.collection("persons").add({birthday:this.state.birthday,color:this.state.color,firstname:this.state.firstname,lastname:this.state.lastname,height:this.state.height});case 5:this.setState({birthday:"",color:"",firstname:"",lastname:"",height:""}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),this.setState({writeError:e.t0.message});case 11:case"end":return e.stop()}}),e,this,[[2,8]])})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(E,null),r.a.createElement("form",{onSubmit:this.handleSubmit,className:"mx-3 teacher"},r.a.createElement("input",{className:"form-control",type:"text",name:"firstname",placeholder:"Vorname",onChange:this.updateInput,value:this.state.firstname}),r.a.createElement("br",null),r.a.createElement("input",{className:"form-control",type:"text",name:"lastname",placeholder:"Nachname",onChange:this.updateInput,value:this.state.lastname}),r.a.createElement("br",null),r.a.createElement("input",{className:"form-control",type:"number",name:"height",placeholder:"Gr\xf6\xdfe in cm",onChange:this.updateInput,value:this.state.height}),r.a.createElement("br",null),r.a.createElement("input",{className:"form-control",type:"date",name:"birthday",placeholder:"Geburtstag",onChange:this.updateInput,value:this.state.birthday}),r.a.createElement("br",null),r.a.createElement("input",{className:"form-control",type:"text",name:"color",placeholder:"Farbe",onChange:this.updateInput,value:this.state.color}),r.a.createElement("br",null),this.state.writeError?r.a.createElement("p",{className:"text-danger"},this.state.writeError):null,r.a.createElement("button",{type:"submit",className:"btn btn-submit px-5 mt-4"},"Absenden")),r.a.createElement("div",{className:"py-5 mx-3"},"Eingeloggt als:"," ",r.a.createElement("strong",{className:"text-info"},this.state.user.email)))}}]),a}(n.Component),G=function(){return r.a.createElement("h1",null,"404 - Diese Seite wurde nicht gefunden")},F=a(32),U=a.n(F),T=a(33),H=a.n(T),V=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).updateInput=function(e){n.setState(Object(R.a)({},e.target.name,e.target.value))},n.redirect=function(){return r.a.createElement(m.a,{to:{pathname:"/dlrgfunk/chat",state:{station:n.props.station,city:n.props.city}}})},n.state={user:f().currentUser,username:"",errorWrite:"",redirect:!1},n.updateInput=n.updateInput.bind(Object(O.a)(n)),n.redirect=n.redirect.bind(Object(O.a)(n)),n.linkClicked=n.linkClicked.bind(Object(O.a)(n)),n.ref=r.a.createRef(),n}return Object(o.a)(a,[{key:"linkClicked",value:function(){var e=Object(x.a)(N.a.mark((function e(t){var a,n,r,s,i=this;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===this.state.username||this.state.user.uid===this.props.station.data.uid||""!==this.props.station.data.uid){e.next=20;break}return a=!1,n=v.collection("cities/".concat(this.props.city.id,"/stations")),r=n.doc(this.props.station.id),e.next=6,n.where("uid","==",this.state.user.uid).get().then((function(e){e.forEach((function(e){i.setState({errorWrite:"Bitte zuerst aus der anderen Sitzung ausloggen!"}),a=!0}))}));case 6:if(!a){e.next=8;break}return e.abrupt("return");case 8:return e.next=10,r.get().then((function(e){var t=e.data();""===t.uid&&""===t.name||(a=!0)}));case 10:if(!a){e.next=12;break}return e.abrupt("return");case 12:if(""!==this.props.station.data.Bezeichnung){e.next=16;break}if("1234"===prompt("Admin Passwort")){e.next=16;break}return e.abrupt("return");case 16:return e.next=18,r.update({uid:this.state.user.uid,name:this.state.username}).then((function(e){i.setState({redirect:!0})})).catch((function(e){i.setState({errorWrite:e}),t.preventDefault()}));case 18:e.next=28;break;case 20:if(this.state.user.uid!==this.props.station.data.uid||!Object(S.a)(t.currentTarget.classList).includes("joinBtn")){e.next=24;break}this.setState({redirect:!0}),e.next=28;break;case 24:if(this.state.user.uid!==this.props.station.data.uid){e.next=28;break}return s=v.collection("cities/".concat(this.props.city.id,"/stations")).doc(this.props.station.id),e.next=28,s.update({uid:"",name:""}).then((function(e){i.setState({username:""})})).catch((function(e){i.setState({errorWrite:e}),t.preventDefault()}));case 28:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return""!==this.state.errorWrite&&(alert(this.state.errorWrite),this.setState({errorWrite:""})),r.a.createElement("div",{className:"funkteilnehmer"},this.state.redirect?this.redirect():"",r.a.createElement("span",null,this.props.station.data.Rufname+" "+this.props.station.data.Ort+" "+this.props.station.data.Bezeichnung),r.a.createElement("input",{className:"funk-name form-control",type:"text",name:"username",placeholder:"Name",onChange:this.updateInput,value:""!==this.props.station.data.uid?this.props.station.data.name:this.state.username,disabled:""!==this.props.station.data.uid?"disabled":""}),r.a.createElement("button",{className:this.props.station.data.uid!==this.state.user.uid?""!==this.props.station.data.uid?"btn btn-primary px-5 ml-3 disabled":"btn btn-primary px-5 ml-3":"btn btn-danger delete",onClick:this.linkClicked,disabled:""!==this.props.station.data.uid&&this.props.station.data.uid!==this.state.user.uid?"disabled":""},this.props.station.data.uid!==this.state.user.uid?"Beitreten":r.a.createElement("img",{src:U.a,alt:"trash"})),this.props.station.data.uid===this.state.user.uid?r.a.createElement("button",{className:"btn btn-success joinBtn",onClick:this.linkClicked},r.a.createElement("img",{src:H.a,alt:"check"})):"")}}]),a}(r.a.Component),J=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={user:f().currentUser,city:n.getCity(),stations:[],readError:null,writeError:null,loadingStations:!1,newRufname:"Adler",newOrt:n.getCityName(),newBezeichnung:""},n.handleChange=n.handleChange.bind(Object(O.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(O.a)(n)),n.myRef=r.a.createRef(),n}return Object(o.a)(a,[{key:"getCity",value:function(){return void 0!==this.props.location.state?this.props.location.state.city:null}},{key:"getCityName",value:function(){return void 0!==this.props.location.state?this.props.location.state.city.data.name:null}},{key:"getAdmin",value:function(){var e=this;return this.state.stations.forEach((function(t){if(t.uid===e.state.user.uid&&""===t.Bezeichnung)return!0})),!1}},{key:"componentDidMount",value:function(){var e=Object(x.a)(N.a.mark((function e(){var t=this;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({readError:null,loadingStations:!0}),e.prev=1,e.next=4,v.collection("cities/".concat(this.state.city.id,"/stations")).get().then((function(e){var a=[];e.forEach((function(e){a.push({id:e.id,data:e.data(),input:""})})),a.sort((function(e,t){return e.data.Bezeichnung<t.data.Bezeichnung?-1:e.data.Bezeichnung>=t.data.Bezeichnung?1:0})),t.setState({stations:a}),t.setState({loadingStations:!1})}));case 4:this.listener=v.collection("cities/".concat(this.state.city.id,"/stations")).where("Bezeichnung",">=","").onSnapshot((function(e){var a=[];e.forEach((function(e){a.push({id:e.id,data:e.data(),input:""})})),a.sort((function(e,t){return e.Bezeichnung<t.Bezeichnung?-1:e.Bezeichnung>=t.Bezeichnung?1:0})),t.setState({stations:a})})),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),this.setState({readError:e.t0.message,loadingChats:!1});case 10:case"end":return e.stop()}}),e,this,[[1,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){"function"===typeof this.listener&&this.listener()}},{key:"handleChange",value:function(e){this.setState(Object(R.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(){var e=Object(x.a)(N.a.mark((function e(t){var a=this;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),this.setState({writeError:null}),e.prev=2,""!==this.state.newBezeichnung){e.next=5;break}return e.abrupt("return");case 5:v.collection("cities").doc(this.state.city.id).collection("stations").add({Rufname:this.state.newRufname,Ort:this.state.newOrt,Bezeichnung:this.state.newBezeichnung,uid:"",name:""}).then((function(){a.setState({stations:[].concat(Object(S.a)(a.state.stations),[{id:Date.now(),data:{Rufname:a.state.newRufname,Ort:a.state.newOrt,Bezeichnung:a.state.newBezeichnung,uid:"",name:"",wantingMore:!1}}])})})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),this.setState({writeError:e.t0.message});case 11:case"end":return e.stop()}}),e,this,[[2,8]])})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(E,null),r.a.createElement("div",{className:"join"},null===this.state.city?r.a.createElement(m.a,{to:"/dlrgfunk/city"}):"",this.state.loadingStations?r.a.createElement("div",{className:"spinner-border text-success",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")):this.state.stations.map((function(t){return r.a.createElement(V,{key:t.id,city:e.state.city,station:t})})),"6GD9eEtrrLZfwThwQtPEFKtQLqA3"===this.state.user.uid?r.a.createElement("form",{onSubmit:this.handleSubmit,className:"addForm"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Rufname",r.a.createElement("input",{type:"text",className:"form-control addBtn",name:"newRufname",value:this.state.newRufname,onChange:this.handleChange,disabled:!0}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Ort",r.a.createElement("input",{type:"text",className:"form-control addBtn",name:"newOrt",value:this.state.newOrt||"",onChange:this.handleChange,disabled:!0}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Bezeichnung",r.a.createElement("input",{type:"text",className:"form-control addBtn",name:"newBezeichnung",value:this.state.newBezeichnung,onChange:this.handleChange}))),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Hinzuf\xfcgen")):""))}}]),a}(n.Component),K=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).redirect=function(){return r.a.createElement(m.a,{to:{pathname:"/dlrgfunk/join",state:{city:n.props.city}}})},n.state={user:f().currentUser,redirect:!1},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"input-group city"},this.state.redirect?this.redirect():"",r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("div",{className:"input-group-text"},this.props.city.data.name)),r.a.createElement("button",{className:"form-control cityJoinBtn btn-success","aria-describedby":"btnGroupAddon",onClick:function(){e.setState({redirect:!0})}},"Beitreten"))}}]),a}(r.a.Component),Y=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={user:f().currentUser,cities:[],readError:null,writeError:null,loadingCities:!1},n.myRef=r.a.createRef(),n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=Object(x.a)(N.a.mark((function e(){var t=this;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({readError:null,loadingCities:!0});try{v.collection("cities").get().then((function(e){var a=[];e.forEach((function(e){a.push({id:e.id,data:e.data()})})),a.sort(),t.setState({cities:a}),t.setState({loadingCities:!1})}))}catch(a){this.setState({readError:a.message,loadingCities:!1})}case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.cities.map((function(e){return r.a.createElement(K,{key:e.id,city:e})}));return r.a.createElement("div",null,r.a.createElement(E,null),r.a.createElement("div",{className:"cities"},this.state.loadingCities?r.a.createElement("div",{className:"spinner-border text-success",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")):e))}}]),a}(n.Component);a(57);function Q(e){var t=e.component,a=e.authenticated,n=Object(h.a)(e,["component","authenticated"]);return r.a.createElement(m.b,Object.assign({},n,{render:function(e){return!0===a?r.a.createElement(t,e):r.a.createElement(m.a,{to:{pathname:"/dlrgfunk/login",state:{from:e.location}}})}}))}function q(e){var t=e.component,a=e.authenticated,n=Object(h.a)(e,["component","authenticated"]);return r.a.createElement(m.b,Object.assign({},n,{render:function(e){return!1===a?r.a.createElement(t,e):r.a.createElement(m.a,{to:"/dlrgfunk/city"})}}))}var Z=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).state={authenticated:!1,loading:!0},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;f().onAuthStateChanged((function(t){t?e.setState({authenticated:!0,loading:!1}):e.setState({authenticated:!1,loading:!1})}))}},{key:"render",value:function(){var e=this;return!0===this.state.loading?r.a.createElement("div",{className:"spinner-border text-success spinner-center",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")):r.a.createElement(d.a,null,r.a.createElement(m.d,null,r.a.createElement(m.b,{exact:!0,path:"/dlrgfunk/",render:function(t){return r.a.createElement(y,Object.assign({},t,{authenticated:e.state.authenticated}))}}),r.a.createElement(Q,{path:"/dlrgfunk/teacher",authenticated:this.state.authenticated,component:L}),r.a.createElement(Q,{path:"/dlrgfunk/join",authenticated:this.state.authenticated,component:J}),r.a.createElement(Q,{path:"/dlrgfunk/city",authenticated:this.state.authenticated,component:Y}),r.a.createElement(Q,{path:"/dlrgfunk/chat",authenticated:this.state.authenticated,component:M}),r.a.createElement(q,{path:"/dlrgfunk/signup",authenticated:this.state.authenticated,component:W}),r.a.createElement(q,{path:"/dlrgfunk/login",authenticated:this.state.authenticated,component:P}),r.a.createElement(m.b,{component:G})))}}]),a}(n.Component),_=document.getElementById("root");i.a.render(r.a.createElement(Z,null),_)}},[[34,1,2]]]);
//# sourceMappingURL=main.863eb24f.chunk.js.map