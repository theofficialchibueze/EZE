const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/2015_dodge_charger_srt_hellcat_18_1600x1200.jpg")
 {
    myImage.setAttribute("src", "images/2017_dodge_charger_daytona_14_1600x1200.jpg");
  } else {
    myImage.setAttribute("src", "images/2015_dodge_charger_srt_hellcat_18_1600x1200.jpg");
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
  }
  myButton.onclick = () => {
    setUserName();
  };
  
