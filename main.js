// Image switcher code

let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/snack.jpg') {
    myImage.setAttribute ('src','images/breakfast.jpg');
  }
  else if(mySrc === 'images/breakfast.jpg') {
      myImage.setAttribute ('src','images/sport.jpg');}
  else if(mySrc === 'images/sport.jpg') {
        myImage.setAttribute ('src','images/matcha.jpg');
  }
  else if(mySrc === 'images/matcha.jpg') {
    myImage.setAttribute ('src','images/sport2.jpg');
  }
  else if(mySrc === 'images/sport2.jpg') {
    myImage.setAttribute ('src','images/syrnik.jpg');
  } else {
    myImage.setAttribute ('src','images/snack.jpg');
  }
}

alert("Hi, welcome! ");

// Personalized welcome message code

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Welcome, ' + myName + "!";
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Welcome, ' + storedName + "!";
}

myButton.onclick = function() {
  setUserName();
}