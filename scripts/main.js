// Store a reference to the <h1> in a variable
// const myHeading = document.querySelector("h1");
// // Update the text content of the <h1>
// myHeading.textContent = "Hello world!";
const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/dog.jpeg") {
    myImage.setAttribute("src", "images/bats.jpeg");
  } else {
    myImage.setAttribute("src", "images/dog.jpeg");
  }
});
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Doggos R cool, ${myName}`;
  }
}

// function setUserName() {
//   const myName = prompt("Please enter your name.");
//   // const string = "whyyyyyyyyy";
//   // if(myName === "") {
//   //   localStorage.setItem("name", string);
//   // }
//   localStorage.setItem("name", myName);
//   myHeading.textContent = `Mozilla is cool, ${myName}`;
// }

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Doggos are cool, ${storedName}`;
}

myButton.addEventListener("click", () => {
  setUserName();
});