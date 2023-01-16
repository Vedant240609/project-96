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
 //ADD YOUR FIREBASE LINKS HERE
 username=localStorage.getItem("user_name");
 document.getElementById("user_name").innerHTML="Welcome "+username;
  
 function addroom(){
 var room_name=document.getElementById("room_name").value;
 localStorage.setItem("room_name", room_name);
 firebase.database().ref("/").child(room_name).update({
       purpose:"Hello!"
 });
 window.location="kwitter_page.html";
 } 
 
 function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
        Room_names = childKey;
       //Start code
 console.log(Room_names);
 var row="<div class='room_name' id='"+Room_names+"' onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
 document.getElementById("output").innerHTML+=row;
       //End code
       });});}
 getData();
 function redirectToRoomName(name){
       console.log(name);
       localStorage.setItem("room_name", name);
       window.location="kwitter_page.html";
 }
 function logout(){
   localStorage.removeItem("room_name");
   localStorage.remove    
 }