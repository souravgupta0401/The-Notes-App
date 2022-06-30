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
const dbRef = firebase.database()
const auth = firebase.auth();


let fsignout=0;
//Authentication function to check if any user is logged in
firebase.auth().onAuthStateChanged(function(user) {


if(user){
//Logout Function
document.querySelector('#signout').addEventListener('click', function () {
    auth.signOut()
        .then(() => {
            // Sign-out successful.
            fsignout=1;
            window.alert("You have Logged Out Succesfully.");
            window.location = "index.html";
        }).catch((error) => {
            // An error happened.
            alert(error.message);
        });
});
}
else if(fsignout==0) {
  window.alert("You need to LogIn First.Redirecting to Home Page.");
  window.location="index.html";
}
});
