function validation(){
    let user = document.getElementById('user').value;
    if(user == ""){
        document.getElementById('username').innerHTML="Please fill the required filled";
        return false;
    }
}