// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
  apiKey: "AIzaSyBQo5Ru_TWMwpuDcm9g3wst9JlbNw78Dcg",
  authDomain: "fungames-report-app.firebaseapp.com",
  databaseURL: "https://fungames-report-app-default-rtdb.firebaseio.com",
  projectId: "fungames-report-app",
  storageBucket: "fungames-report-app.appspot.com",
  messagingSenderId: "299705488127",
  appId: "1:299705488127:web:9847de1f0aab487a13f2ca",
  measurementId: "G-969QJJ8ER2",
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('Report Game States Io');

function reset() {
  document.getElementById("contactForm").reset();
}

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
  e.preventDefault();

  // Get values
  var kategori = getInputVal('kategori');
  var message = getInputVal('message');

  // Save message
  saveMessage(kategori, message);

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
function saveMessage(kategori, message) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    kategori: kategori,
    message: message,
  });
}