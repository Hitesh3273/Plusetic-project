// loadNavbar.js
// fetch('navbar.html')
//   .then(response => response.text())
//   .then(data => {
//     document.getElementById('navbar-container').innerHTML = data;
//   });




function showInfo(){
     document.getElementById('miniInfo').classList.toggle('hidden');
}

 fetch('Sections/header.html')
 .then(response=>response.text())
 .then(data=>{document.getElementById('Navbar').innerHTML=data}); 


 fetch('Sections/body.html')
 .then(response=>response.text())
 .then(data=>{document.getElementById('Body').innerHTML = data});

 fetch('Sections/madeSec.html')
 .then(response=>response.text())
 .then(data=>{document.getElementById('section').innerHTML = data});

 fetch('Sections/monitorSec.html')
 .then(response=>response.text())
 .then(data=>{document.getElementById('monitor').innerHTML=data});

 fetch('Sections/alert.html')
 .then(response=>response.text())
 .then(data=>{document.getElementById('Alert').innerHTML=data});

 fetch('Sections/StatusPages.html')
 .then(response=>response.text())
 .then(data=>{document.getElementById('Status').innerHTML=data});

 fetch('Sections/offers.html')
 .then(response=>response.text())
 .then(data=>{document.getElementById('Offers').innerHTML=data});

 fetch('Sections/Certificate.html')
 .then(response=>response.text())
 .then(data=>{document.getElementById('Certificate').innerHTML=data});

 fetch('Sections/WorkIntro.html')
 .then(response=>response.text())
 .then(data=>{document.getElementById('WorkIntro').innerHTML = data});

 fetch('Sections/Personalized.html')
 .then(response=>response.text())
 .then(data=>{document.getElementById('Personalize').innerHTML=data});

 fetch('Sections/Status_Badge.html')
 .then(response=>response.text())
 .then(data=>{document.getElementById('statubadge').innerHTML=data});

 fetch('Sections/Journey.html')
 .then(response=>response.text())
 .then(data=>{document.getElementById('Journey').innerHTML=data});

 fetch('Sections/Review.html')
 .then(response=>response.text())
 .then(data=>{document.getElementById('reviews').innerHTML = data})

 fetch('Sections/getAccount.html')
 .then(response=>response.text())
 .then(data=>{document.getElementById('GetAcnt').innerHTML = data});

 fetch('Sections/Footer.html')
 .then(response=>response.text())
 .then(data=>{document.getElementById('Footer').innerHTML = data});
 

 