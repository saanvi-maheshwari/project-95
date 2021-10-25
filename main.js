function login(){
    user_name = document.getElementById("name_input").value; 
    localStorage.setItem("UserName", user_name);
    window.location="room.html";
}