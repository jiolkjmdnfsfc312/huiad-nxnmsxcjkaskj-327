const firebaseConfig = {
  apiKey: "AIzaSyCxvi0GS281tQDpmH0krCPtQLTlH-osugc",
  authDomain: "fungamesid-view-app.firebaseapp.com",
  databaseURL: "https://fungamesid-view-app-default-rtdb.firebaseio.com",
  projectId: "fungamesid-view-app",
  storageBucket: "fungamesid-view-app.appspot.com",
  messagingSenderId: "1072146287569",
  appId: "1:1072146287569:web:2e8ee65f0b19d00037eef0",
  measurementId: "G-TWE8QVJSWN"
     };
     firebase.initializeApp(firebaseConfig);
     
     const hitCounter = document.getElementById("hit-counter");
     hitCounter.style.display = "none";
     
     const db = firebase.database().ref("View Game Parking Jam Out");
     db.on("value", (snapshot) => {
       hitCounter.textContent = snapshot.val();  
     });
     
     db.transaction(
       (totalHits) => totalHits + 1,
       (error) => {
         if (error) {
           console.log(error);
         } else {
           hitCounter.style.display = "inline-block";
         }
       }
     );
     
     const userCookieName = "returningVisitor";
     checkUserCookie(userCookieName);
     
     function checkUserCookie(userCookieName) {
       const regEx = new RegExp(userCookieName, "g");
       const cookieExists = document.cookie.match(regEx);
       if (cookieExists != null) {
         hitCounter.style.display = "inline-block";
       } else {
         createUserCookie(userCookieName);
         db.transaction(
           (totalHits) => totalHits + 1,
           (error) => {
             if (error) {
               console.log(error);
             } else {
               hitCounter.style.display = "inline-block";
             }
           }
         );
       }
     }
     
     function createUserCookie(userCookieName) {
       const userCookieValue = "Yes";
       const userCookieDays = 7;
       let expiryDate = new Date();
       expiryDate.setDate(expiryDate.getDate() + userCookieDays);
       document.cookie =
         userCookieName +
         "=" +
         userCookieValue +
         "; expires=" +
         expiryDate.toGMTString() +
         "path=/";
     }

var swiper = new Swiper( '.swiper-container.two', {
		pagination: '.swiper-pagination',
		paginationClickable: true,
		effect: 'coverflow',
		loop: true,
		centeredSlides: true,
		slidesPerView: 'auto',
		coverflow: {
			rotate: 0,
			stretch: 100,
			depth: 150,
			modifier: 1.5,
			slideShadows : false,
		}
} );