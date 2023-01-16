//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyAPwLXw6YERtQIpgs0H6C1Z7zoSdM1DTAA",
    authDomain: "let-s-chat-bf156.firebaseapp.com",
    databaseURL: "https://let-s-chat-bf156-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-bf156",
    storageBucket: "let-s-chat-bf156.appspot.com",
    messagingSenderId: "576902023243",
    appId: "1:576902023243:web:cc375e4711fb1af1d5e5ce"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var username=localStorage.getItem("user_name");
var roomname=localStorage.getItem("room_name");

function send(){
var msg=document.getElementById("msg").value;
firebase.database().ref(roomname).push({
    name:username,
    message:msg,
    like:0
});
document.getElementById("msg").value="";
} 

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();

function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";
}