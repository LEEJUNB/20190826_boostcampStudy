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

// arguments
function a() {
    // 이 함수가 arguments의 개수 체크하는게 굉장히 중요한 역할을한다.
    // 현재 console.log에 arg[2]를 입력했는데 만약 인자값으로 [2]에 해당되는 값이 없다면 반환값이 없어짐
    // arg는 필요한 경우, 체크를 할 때 쓰는 것이지 지금처럼 코드에서 짜면 의모를 몰라.
    // 특히 인자값이 바뀌는 경우, 변경되는 경우 약한 코드가 되는 것이 arguments
    // arguments를 수정시켜서 값을 바꾸는 것도 좋지 않은 방법
    if(arguments.length < 3) return ;
    console.log('my name is ', arguments[2]);
}
a(1,2,"JB");