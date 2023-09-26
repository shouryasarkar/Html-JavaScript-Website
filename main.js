// This querySelector is going to grab the reference to the heading 
// const myHeading = document.querySelector("h1");
// //The textContent is going to change the content of the heading 
// myHeading.textContent = "Hello world!";


// let variable = document.querySelector("h1");
// alert("Hello!");


let myimage = document.querySelector("img");
myimage.onclick = () => {
    const mysrc = myimage.getAttribute("src");
    if (mysrc === "firefox-icon.png"){
        myimage.setAttribute("src", "firefox2.png");
    }else{
        myimage.setAttribute("src", "firefox-icon.png");
    }
}


// Storing the the button and the h1 inside seperate variables 
let mybutton = document.querySelector("button");
let myHeading = document.querySelector("h1");


// The setUsername func contains a prompt func which will display a dialogue box
// This promp func shows a dialogue box and stores that data inside a variable after clickking ok.
function setUserName() {
    let myName = prompt("Please enter your name:");
    if(!myName){
        setUserName();
    }else{
        localStorage.setItem("name", myName);
        myHeading.innerHTML = `Mozilla is cool, ` + myName;
    }
}

// The first line contains a negation operator with ! to check wheather the name data exists.
if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    let storedName = localStorage.getItem("name");
    myHeading.innerHTML = `Mozilla is cool, ` + storedName;
}

mybutton.onclick = function(){
    setUserName();
}