var firebaseConfig = {
    apiKey: "AIzaSyBoLyEArdCZ_eUZwoeRDwhWv6hbWoZBDkc",
    authDomain: "kwitter-project-58201.firebaseapp.com",
    databaseURL: "https://kwitter-project-58201-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-58201",
    storageBucket: "kwitter-project-58201.appspot.com",
    messagingSenderId: "776517735738",
    appId: "1:776517735738:web:1366da148c2a0db7cd2c03"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  username = localStorage.getItem("UserName");
document.getElementById("welcome_name").innerHTML = "Welcome " + username + " !";
function add_room() {
  room_name = document.getElementById("room_name").value;
  localStorage.setItem("Room Name", room_name);

  firebase.database().ref("/").child(room_name).update({
    purpose: "Adding Room Name"
  });

  window.location="page.html";
}

function logout() {
  localStorage.removeItem("UserName");
  localStorage.removeItem("Room Name");
  window.location = "index.html";
}

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;
            
console.log("Room Names= "+Room_names);

row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>"
     document.getElementById("output").innerHTML += row; 

    });
  });
}
getData();

function redirectToRoomName(name_chosen){
console.log("room name chose = "+name_chosen);
localStorage.setItem("Room Name",name_chosen);
window.location="kwitter_page.html";
}