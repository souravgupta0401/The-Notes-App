let form = document.querySelector('#form');
  var firebaseConfig = {
  apiKey: "AIzaSyCZk5-WD7yaFBQmJG1BIEMo7BpQj4Jtwgo",
  authDomain: "notes-app-48859.firebaseapp.com",
  projectId: "notes-app-48859",
  storageBucket: "notes-app-48859.appspot.com",
  messagingSenderId: "127518958572",
  appId: "1:127518958572:web:0ae6a90b804e78e82256c9",
  measurementId: "G-F5F2KB08DQ"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const auth = firebase.auth();

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    let email = form.elements.email.value;
    let password = form.elements.password.value;

    auth.createUserWithEmailAndPassword(email, password)
        .then(cred => {
            form.reset();
            window.alert("Successfully Registered");
            window.location.href = "index.html";
        })
        .catch(err => {
            alert(err.message);
        })
});
