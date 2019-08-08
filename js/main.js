// const title = document.getElementById("title");
// title.innerHTML = "Hi! JS change innerHTML";
// title.style.color = "red";
// document.title = "I own you now"
// console.dir(title);
// console.dir(document);

// const subtitle = document.querySelector(".subtitle");

// function01
// const title = document.querySelector("#title");

// function handleClick() {
//     title.style.color = "red";
// }
// title.addEventListener("click", handleClick);

// const age = prompt("How old are you?"); // auto
// if(age>18) {
//     console.log("you can drink!!!!!29");
// } else {
//     console.log("you can't");
// }


// function02

const title = document.querySelector("#title");
const BASE_COLOR = "rgb(127, 140, 141)"; // 우선 CSS에서 지정한 title의 color를 없애고 입력해야한다.
const OTHER_COLOR = "red"; // 이 색상값은 style.color처럼 red, blue로 입력하지 않고 실제 숫자 값으로 입력

function handleClick() {
    const currentColor = title.style.color; // title을 클릭했을 때 지금가진색상을 가져옴
    console.log(currentColor); // rgb(127, 140, 141) 이 나타날 것임
    if (currentColor === BASE_COLOR) { // 만약 현재의 색깔이 기본색과 같다면 다른 색상으로 변경한다.
        title.style.color = OTHER_COLOR;
        console.log(currentColor);
    } else {
        title.style.color = BASE_COLOR;
        console.log(currentColor);
    }
}

function init() { // BASE_COLOR로만 셋팅된다.
    title.style.color = BASE_COLOR;
    title.addEventListener("click", handleClick);
}

init(); 