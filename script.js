// console.log("This is project 4");
const naam = document.getElementById('naam');
const email = document.getElementById('email');
const phone = document.getElementById('phone');

let validNaam = false;
let validEmail = false;
let validPhone = false;
let validVehicle = false;

let submitAlert = document.getElementById("submitAlert");
// console.log(submitAlert);

let submitBtn = document.getElementById("submitBtn");
// console.log(submitBtn);

// console.log(naam, email, phone);
//validate naam
naam.addEventListener('blur', () => {
  // console.log("naam is blurred");

  //we make use of quantifiers and groupings of character set by using the round bracket in the value of regex
  // let regex = /([0-9a-zA-Z]){0,10}/ 

  //Where "n" is 0 or a positive integer, "m" is a positive integer, and m > n, matches at least "n" and at most "m" occurrences of the preceding item "x". For example, /a{1,3}/ matches nothing in "cndy", but a{1,3} matches the "a" in "candy", a{1,3} matches the two "a"'s in "caandy", and a{1,3} matches the first three "a"'s in "caaaaaaandy". Notice that when matching "caaaaaaandy", the match is "aaa", even though the original string had more "a"s in it.

  //Dont use the quantifier {0,10} because then it also starts returning true for the special symbols like # , $ % and so on.
  // let regex = /([0-9a-zA-Z]){5,10}/;    
  //matches at least "5" and at most "10" occurrences of the preceding item "([0-9a-zA-Z])"

  let str = naam.value;

  //A pattern which demands that the input Username string should not contain anything from among these 3 ranges [0-9] [a-z] [A-Z]
  //We are going to use this in our if statement
  let regex1 = /[^(0-9a-zA-Z)]/;
  // let truthValue = regex1.test(str);
  // console.log(truthValue);

  //A pattern which demands that the starting of the input Username string should be an alphabet among these 2 ranges [a-z] [A-Z]
  let regex2 = /^[a-zA-Z]/;

  if (str.length < 10) {
    console.log();
    validNaam = false;
    setErrorMsg(naam, "Minimum 10 characters are required for Username")
  }
  else if (str.length > 16) {
    validNaam = false;
    setErrorMsg(naam, "Username cannot be greater than 16 characters")
    // console.log("Username cannot be greater than 16 characters");
  }
  else if (regex1.test(str) === true) {
    validNaam = false;
    setErrorMsg(naam, "Username should not contain anything except a-z OR A-Z OR 0-9")
    // console.log("Username should not contain anything except a-z OR A-Z OR 0-9");
  }
  else if (regex2.test(str) === false) {
    validNaam = false;
    setErrorMsg(naam, "Username should start with alphabets among A-Z OR among a-z")
    // console.log("Username should start with alphabets among A-Z OR among a-z");
  }
  else {
    validNaam = true;
    setSuccessMsg(naam, "Username is valid");
    // console.log("Username is valid");
  }
});


//validate email
email.addEventListener('blur', () => {
  // console.log("email is blurred")
  //validate email
  let str = email.value;

  let regex1 = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;

  if (regex1.test(str) === false) {
    validEmail = false;
    setErrorMsg(email, "Email address is not valid");
  }
  else {
    validEmail = true;
    setSuccessMsg(email, "Email address is valid");
  }
});

//validate phone number
phone.addEventListener('blur', () => {
  // console.log("phone is blurred")

  let str = phone.value;

  //A pattern that demands that the input mobile number string to not contain anything from 0 to 9
  let regex1 = /[^(0-9)]/;

  if (regex1.test(str) === true) {
    validPhone = false;
    setErrorMsg(phone, "Phone number must only contain the characters from 0 to 9.");
  }
  else if (str.length !== 10) {
    validPhone = false;
    setErrorMsg(phone, "Phone number should contain ten digits.");
  }
  else {
    validPhone = true;
    setSuccessMsg(phone, "Phone number is valid");
  }
});

function setErrorMsg(tagName, Message) {
  parentDivElement = tagName.parentElement;
  // console.log(parentDivElement);
  // console.log(Message);

  let cNodes = parentDivElement.childNodes;
  // console.log(typeof cNodes);
  // console.log(cNodes);
  cNodes[3].classList.remove("is-valid"); //Remove the "is-valid" class ; if by any chance it exists in the input tag
  cNodes[3].classList.add("is-invalid"); //assign the additional class "is-invalid" to the input tag ; in order to make it appear red 

  cNodes[5].innerText = Message; //change the inner text of small tag

  cNodes[5].classList.remove("text-sucess"); //Remove the bootstrap class "text-success" ; if by any chance it exists in the small tag
  cNodes[5].classList.add("text-danger"); //assign the bootstrap class "text-danger" to the small tag ; in order to make the text appear red
}

function setSuccessMsg(tagName, Message) {
  parentDivElement = tagName.parentElement;
  // console.log(parentDivElement);
  // console.log(Message);

  let cNodes = parentDivElement.childNodes;
  // console.log(typeof cNodes);
  // console.log(cNodes);
  cNodes[3].classList.remove("is-invalid"); //Remove the "is-invalid" class ; if by any chance it exists in the input tag
  cNodes[3].classList.add("is-valid"); //assign the additional class "is-valid" to the input tag ; in order to make it appear green

  cNodes[5].innerText = Message; //Change the inner text of small tag (in case of username). Change the inner text of div tag (in case of email address and phone number)

  cNodes[5].classList.remove("text-danger"); //remove the bootstrap class "text-danger" if by any chance it exists in the small tag
  cNodes[5].classList.add("text-success"); //assign the bootstrap class "text-success" to the small tag ; in order to make the text appear green
}

//validate the vehicle select option
let vehicleName = document.getElementById("vehicleName");

vehicleName.addEventListener('blur', function () {
  let str = "Select Your Car";

  // console.log("vehicleName is blurred");
  // console.log(vehicleName.value);
  // console.log(typeof (vehicleName.value));
  let vehicleErrorMsg = document.getElementById("vehicleErrorMsg");

  if (vehicleName.value === str) {
    validVehicle = false;
    vehicleName.classList.remove("is-valid");
    vehicleName.classList.add("is-invalid");
    vehicleErrorMsg.classList.add("text-danger");
    vehicleErrorMsg.innerText = "Please select at least one vehicle."

  }
  else {
    validVehicle = true;
    vehicleName.classList.remove("is-invalid");
    vehicleName.classList.add("is-valid");
    vehicleErrorMsg.innerText = "";
  }
})

//Behaviour for submit button
submitBtn.addEventListener('click', function (event) {
  event.preventDefault(); //to prevent the page from reloading ; after clicking on the 'submit' button

  if ((validNaam && validEmail && validPhone && validVehicle) === true) {
    submitAlert.classList.remove("alert-danger");
    submitAlert.classList.add("alert-success");

    let cNodes = submitAlert.childNodes;
    // console.log(typeof cNodes);
    // console.log(cNodes);

    //referring to strong tag
    cNodes[1].innerText = "Success!";
    cNodes[1].classList.remove("text-danger");
    cNodes[1].classList.add("text-success");

    //referring to text node
    cNodes[2].data = " Form has been submitted successfully.";
    submitAlert.classList.remove("text-danger");
    submitAlert.classList.add("text-success");

    //showing the alert component on the screen
    submitAlert.classList.add("show");
  }
  else if ((validNaam && validEmail && validPhone) !== true) {
    submitAlert.classList.remove("alert-success");
    submitAlert.classList.add("alert-danger");

    let cNodes = submitAlert.childNodes;
    // console.log(typeof cNodes);
    // console.log(cNodes);

    //referring to strong tag
    cNodes[1].innerText = "Failure!";
    cNodes[1].classList.remove("text-success");
    cNodes[1].classList.add("text-danger");

    //referring to text node
    cNodes[2].data = " Form has not been submitted ; because either of username or email address or phone number is not correct.";
    submitAlert.classList.remove("text-success");
    submitAlert.classList.add("text-danger");

    //showing the alert component on the screen
    submitAlert.classList.add("show");
  }
  else if ((validNaam && validEmail && validPhone) === true && validVehicle === false) {
    submitAlert.classList.remove("alert-success");
    submitAlert.classList.add("alert-danger");

    let cNodes = submitAlert.childNodes;
    // console.log(typeof cNodes);
    // console.log(cNodes);

    //referring to strong tag
    cNodes[1].innerText = "Failure!";
    cNodes[1].classList.remove("text-success");
    cNodes[1].classList.add("text-danger");

    //referring to text node
    cNodes[2].data = " Also check whether you have at least selected one vehicle.";
    submitAlert.classList.remove("text-success");
    submitAlert.classList.add("text-danger");

    //showing the alert component on the screen
    submitAlert.classList.add("show");
  }

});

//Behaviour of close button of the alert component
let alertCloseButton = document.getElementById("alertCloseButton");

alertCloseButton.addEventListener('click', function () {
  submitAlert.classList.remove("show");

});