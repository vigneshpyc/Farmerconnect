function login(){
    var username = document.getElementById("userinput").value;
    var password = document.getElementById("password").value;
    if(username == "vicky" && password =="1234"){
        alert("Login Successfully")
    }
    else{
        alert("!Invalid username and password")
    }
}