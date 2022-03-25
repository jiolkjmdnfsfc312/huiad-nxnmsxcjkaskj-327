// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
    apiKey: "AIzaSyCSdoYwAd5IHNPXO1a5OCSiYWpORLUzyPI",
  authDomain: "fungamesid.firebaseapp.com",
  databaseURL: "https://fungamesid-default-rtdb.firebaseio.com",
  projectId: "fungamesid",
  storageBucket: "fungamesid.appspot.com",
  messagingSenderId: "288362351127",
  appId: "1:288362351127:web:1def18b6d7e9695d982a52",
  measurementId: "G-HGSY5WTSGZ",
  };
  firebase.initializeApp(config);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('Contact Footer Menu');
  
  function reset() {
    document.getElementById("contactForm").reset();
  }
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e) {
    e.preventDefault();
  
    // Get values
    var email = getInputVal('email');
    var name = getInputVal('name');
    var message = getInputVal('message');
  
    // Save message
    saveMessage(email, name, message);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function() {
      document.querySelector('.alert').style.display = 'none';
    }, 5000);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id) {
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(email, name, message) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      email: email,
      name: name,
      message: message,
    });
  }