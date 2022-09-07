//*디폴트 인자를 주는 방법:: 함수의 인자옆에 "= val"입력 //C++과 동일
const sample = (name, 시급 = 9620, 근무시간 = 4) => {
  /*if (name === "" || name === undefined) {
    if(!name){
    */

  //*만약 예외처리를 한다면...?
  //*ver.num->
  //*1.숫자가 아니거나 방법:: if(typeof(변수)!=='number')   숫자가 아니라면
  //* 2.0보나 작거나 같을때   if(0>=변수) 상수를 좌측에 두는것이 컴파일할때 안전하다.
  //*why?? 만약 등호(<,>)가 오류로 인해 빠진다면 변수에는 0이 대입될 가능성이 있다. but 0은 대입되지 않음
  //*3.최저시급보다 작을 때
  //*4.undefined일때
  //*5. 만약 문자열을 입력한 경우

  //todo 예외처리 ver1
  if (!name) {
    console.log("이름을 입력해주세요");
  } else {
    console.log(`이름은 :${name}`);
    if (typeof 시급 !== "number") {
      console.log(`숫자를 입력해주세요`);
    } else {
      if (9620 > 시급) {
        console.log("최저시급은 9620입니다.");
      } else {
        console.log(`시급은 :${시급.toLocaleString()}`);
        console.log(`근무시간은 : ${근무시간.toLocaleString()}`);
        console.log(`하루 일당은 : ${(시급 * 근무시간).toLocaleString()}`);
      }
    }
  }
};

//todo 예외처리 ver2
if (typeof 시급 === "number") {
  if (9620 > 시급) {
    //*~~~~~~
  } else if (typeof 시급 === "string") {
    //*Number(변수)=== 변수를 number로 타입캐스팅
    if (Number(시급) > 시급) {
    }
  }
}
const typecheck = (val) => {
  if (typeof val !== "number") {
    return false;
  } else {
    return true;
  }
};
//todo
const myfunc = (type, ...arr) => {
  let result = arr[0];
  if (arr.every(typecheck) === true) {
    if (type === "min") {
      console.log(arr);
      for (var i = 0; i < arr.length; i++) {
        console.log(i);
        if (result > arr[i]) {
          result = arr[i];
        }
      }
    } else if (type == "max") {
      console.log(arr.length);
      for (var i = 0; i < arr.length; i++) {
        if (result < arr[i]) result = arr[i];
      }
    } else result = "min or max를 입력해주세요";
  } else result = "숫자로 된 배열을 입력해주세요";

  return result;
};

var input = (1, 2, 3, 4, 5, 6, 7, 8, 9);
var input2 = (1, "a", 2, 3, 4, "C");
console.log(myfunc("min", input));
console.log(myfunc("max", input));
console.log(myfunc("min", "hisjkx"));
console.log(myfunc("min", input2));
// sample("효택");
// sample("알바야", 10000, 2);
// sample("알바2", 3000000, 3);
// sample("new ma", -1, 2);
// sample("new s", "a", 1);

// sample("");
