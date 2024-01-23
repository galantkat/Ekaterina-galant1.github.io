// Image switcher code

let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'snack.jpg') {
    myImage.setAttribute ('src','breakfast.jpg');
  }
  else if(mySrc === 'images/breakfast.jpg') {
      myImage.setAttribute ('src','sport.jpg');}
  else if(mySrc === 'sport.jpg') {
        myImage.setAttribute ('src','matcha.jpg');
  }
  else if(mySrc === 'matcha.jpg') {
    myImage.setAttribute ('src','sport2.jpg');
  }
  else if(mySrc === 'sport2.jpg') {
    myImage.setAttribute ('src','syrnik.jpg');
  } else {
    myImage.setAttribute ('src','snack.jpg');
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
