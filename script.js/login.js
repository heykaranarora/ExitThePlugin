function valid() {
    var phone = document.getElementById("phone");
    var pass = document.getElementById("pass");
    var cp=document.getElementById("confirm pass");
    if  (phone.value == "") {
        alert("Please Enter The Phone Number")
        document.getElementById("phone").style.border = '2px solid red';
        document.getElementById("phone error").innerHTML="Please Enter The Phone Number";
        return false;
    }
    else if  (phone.value.length != 10) {
        alert(" Phone Number is Incorrect")
        document.getElementById("phone").style.border = '2px solid red';
        document.getElementById("phone error").innerHTML="Phone Number is Incorrect";
        return false;
    }
    else if (isNaN(phone.value)) {
        alert("Please Enter Phone Number in numeric")
        document.getElementById("phone").style.border = "2px red solid";
           document.getElementById("phone error").innerHTML="Please Enter Phone Number in numeric"
        return false;
    }
    else if (pass.value=="") {
        alert("Please enter the password")
        document.getElementById("pass").style.border = '2px solid red';
        document.getElementById("pass error").innerHTML='"Please enter the password';
        return false;
    }
    else if (pass.value < 6) {
        alert("Please enter the password ccorrectly")
        document.getElementById("pass").style.border = '2px solid red';
        document.getElementById("pass error").innerHTML="Please enter the password correctly";
        return false;
    }
    else if(pass.value!=cp.value){
        alert("Password and confirm password doesn't match")
        document.getElementById("confirm pass").style.border = '2px solid red';
        document.getElementById("confirm error").innerHTML="Please enter confirm password correctly";
        return false;
    }
    else {
        alert("succesfuly submitted");
    }
}