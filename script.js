//Validating the user ID with JavaScript
console.log('connected')

//after load, function that will have the text field focus go to the User ID field.
function firstfocus(){
  var myForm = document.forms["registration"]
  var userid = myForm.elements["userid"];
  userid.focus();
  return true;
}
//function that will validate the User’s ID with the console method, “User ID should not be empty!”

function userid_validation(max,min){
  var myForm = document.forms["registration"]
  var userid = myForm.elements["userid"];
  var userid_len = userid.value.length;
  var passid = myForm.elements["passid"];
//console.log(userid_len)
  if(userid_len == 0){
    console.log("User Id should not empty")
    userid.focus();
    return false;
  }
  passid.focus();
  return true;
}


//Validating the user password with JavaScript
function passid_validation(min,max){
  //var passid = document.registraton.passid;
  var myForm = document.forms["registration"];
  var passid = myForm.elements["passid"];
  var username = myForm.elements["username"];
  var passid_len = passid.value.length;
// wanted to minimum and maximum to password since form had it on the page
// if you wanted to check for minimum and maximum
// passid_len < max || passid_id > min)
  if(passid_len==0){
    console.log('User password should not be empty!');
    passid.focus();
    return false;
  }
  username.focus();
  return true;
}


//validate user's name with Javascript
//review of regular expressions
function allLetter(){
  var myForm = document.forms["registration"];
  var username = myForm.elements["username"];
  var email = myForm.elements["email"];
  var alphaonly = /^[a-zA-Z]+$/;

 if (username.value.match(alphaonly)){
   email.focus();
   return true;
  }else{
    console.log('User’s name should have alphabet characters only!');
    username.focus();
    return false;
  }
}


//one way:convert string to array and loop through array
//second way: reg ex
//another way which done below string manipulation instead of regular expression
function ValidateEmail(){
  var myForm = document.forms["registration"];
  var email = myForm.elements["email"];
  email_str = myForm.elements["email"].value;
  var email_len = email.value.length;


//compare Indexof with lastIndex so there is only one @)
  var startAtIndex = email_str.indexOf('@'); //returns the index of the first occurence of @
  var lastAtIndex = email_str.lastIndexOf('@'); //returns the index of the last occurence of @

//joe@
  if(email_len===0 || startAtIndex <= 1  || startAtIndex !== lastAtIndex){
    console.log('You have entered an invalid email format!')
  }
}

