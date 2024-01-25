// Image switcher code

let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'snack.jpg') {
    myImage.setAttribute ('src','breakfast.jpg');
  }
  else if(mySrc === 'breakfast.jpg') {
      myImage.setAttribute ('src','sport.jpg');}
  else if(mySrc === 'images/sport.jpg') {
        myImage.setAttribute ('src','images/matcha.jpg');
  }
  else if(mySrc === 'matcha.jpg') {
    myImage.setAttribute ('src','sport2.jpg');
  }
  else if(mySrc === 'sport2.jpg') {
    myImage.setAttribute ('src','snack.jpg');
  } else {
    // myImage.setAttribute ('src','images/snack.jpg');
  }
}

alert("Hi, welcome! ");

// Personalized welcome message code
function goToAnotherPage() {
  // Change the location to the desired HTML page
  window.location.href = "wellness.html";
}

// Personalized welcome message code
function goBacktoPage() {
  // Change the location to the desired HTML page
  window.location.href = "index.html";
}

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
