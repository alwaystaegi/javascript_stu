//* 함수선언 방식에 대한 학습
//* 함수선언방식 1: function a()
//* 함수선언방식 2: let a= function(){}
//* 함수선언방식 3: let a=() =>{}

console.log("라이브 서버 작동중");

//* 함수 선언방식에 대한 학습
// function main(a, b, c) {
//   console.log(`a값은 ${a}입니다.`);
//   console.log(`b값은 ${b}입니다.`);
//   console.log(`c값은 ${c}입니다.`);
//   console.log("");
// }
// main(1, 2, 3);
// let main2 = function () {
//   console.log("두번째 함수 입니다");
// };
// main2();
// main2 = function () {
//   console.log("재 정의된 함수입니다.");
// };
// main2();

// const main3 = () => {
//   console.log("세번째 함수");
// };

//todo prompt에 대한 학습:
//* 문자열을 입력받는 함수
// console.log(prompt("좋아하는 과일명은??:", "포도"));

// let fruits = prompt("좋아하는 과일명은??:", "포도");

// console.log(fruits);
// let val = confirm(fruits);
// console.log(val);
// if (val === true) {
//   console.log("확인.");
// } else {
//   console.log("취소");
// }
// main();
//  main();
//  console.log(typeof main);
//  console.log(typeof 1234);
// console, log(typeof "1234");
//  console.log(typeof [1, 2, 3, 4]);

//  const obj = { a: 1, b: 2, c: 3 };

//  console.log(typeof obj);

// function sum(a, b) {
//   return a + b;
// }

// console.log(sum(3, 4));
// const sum2 = function (a, b) {
//   return a + b;
// };
// console.log(sum2(4, 6));

//*Array 사용법에 대한 학습
//*min/max값 구하기: 여러 요소를 받는게 아니라 하나의 배열로 받는다는 가정
//* array.length:(배열의 크기를 값으로 받음) 그만큼 for루프로 돌림

//* ...a(배열방식중 하나)에 대한 학습
// const min = (arr) => {
//   var result = arr[0];
//   console.log(`첫번째 값==${result}`);
//   for (var i = 0; i < arr.length; i++) {
//     if (result > arr[i]) result = arr[i];
//   }
//   return result;
// };

//* ...a(배열방식중 하나)에 대한 학습
// const min = (...items) => {
//   console.log(items);
// };
// console.log("min값");
// const input = [1234, 162, 124, 292, 199];
// console.log(min(1234, 162, 124, 292, 199));

// console.log("hello" + "aaa" + "bsbs");

// const myPrint = (...data) => {
//   console.log(...data);

//*join== 각 배열의 요소를 "" 안의 문자(?)와 함께 합쳐서 출력
//   console.log(data.join(","));

//   var msg = data[0];
//   for (var i = 1; i < data.length; i++) {
//     msg += data[i];
//   }
//   console.log(msg);
// };

// myPrint("안녕", "하세요", "new data");

// const strInput = "안녕,하세요,new Data";

//*split=== join의 반대 "" 안의 문자를 바탕으로 배열을 만듬
// console.log(strInput.split(","));

//*max value 얻기
// const max = (array) => {
//   var result = array[0];
//   for (var i = 0; i < array.length; i++) {
//     if (result < array[i]) result = array[i];
//   }

//   return result;
// };

// console.log("max 값 찾기:");
// console.log(max(input));
