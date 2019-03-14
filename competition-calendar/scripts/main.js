var myImage = document.querySelector('img');
const SDGF_IMG = 'images/sdgf.png';
const PDGA_IMG = 'images/pdga.png';
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === PDGA_IMG) {
      myImage.setAttribute ('src',SDGF_IMG);
    } else {
      myImage.setAttribute ('src',PDGA_IMG);
    }
}
/*var iceCream = 'chocolate';
if (iceCream === 'chocolate') {
  alert('Yay, I love chocolate ice cream! ' + multiply(3, 2));    
} else {
  alert('Awwww, but chocolate is my favorite...');    
}*/

function multiply(num1,num2) {
    return num1 * num2;
}

/*document.querySelector('h1').onclick = function() {
    alert('Ouch! Stop poking me!');
}*/

myHeading = document.querySelector('h1')
const intialHeading = myHeading.textContent
const USERNAME_STORAGE = 'name'
function getAndStoreNameFromUser() {
    var myName = prompt('Please enter your name.');
    if (myName) {
        localStorage.setItem(USERNAME_STORAGE, myName);
    }
    return myName
}
function getStoredName() {
    return localStorage.getItem(USERNAME_STORAGE);
}

function appendToHeading(name, heading) {
    heading.textContent = intialHeading + " for " + name;
}

function addUserNameToHeading(heading){ 
    var storedName = getStoredName()
    if(!storedName) {
        storedName = getAndStoreNameFromUser();
    } 
    if (storedName) {
        appendToHeading(getStoredName(), heading);
    }
} 

document.querySelector('button').onclick = function() {
    getAndStoreNameFromUser();
    appendToHeading(getStoredName(), myHeading);
}

addUserNameToHeading(myHeading);