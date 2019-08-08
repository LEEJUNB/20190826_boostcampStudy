// const title = document.getElementById("title");
// title.innerHTML = "Hi! JS change innerHTML";
// title.style.color = "red";
// document.title = "I own you now"
// console.dir(title);
// console.dir(document);

// const subtitle = document.querySelector(".subtitle");

const title = document.querySelector("#title");

function handleClick() {
    title.style.color = "red";
}
title.addEventListener("click", handleClick);

const alert_ = alert("ititit");
const age = prompt("How old are you?"); // 변수로해도 자동으로 띄워짐 alert처럼
if(age>18) {
    console.log("you can drink!!!!!29");
} else {
    console.log("you can't");
}