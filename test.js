// 함수 선언문
// function Name(firstname) {
//     var myname = "jisu";
//     return myname + " " + firstname;
// }
// console.log(Name("Junb"));

// 함수 표현식
function printName(firstname) {
    //함수 표현식 : 변수값에 함수 표현식을 담아 놓은 것
    var inner = function() { 
        return 'inner!!!';
    }
    var result = inner();
    console.log("name is " + result);
}
printName();