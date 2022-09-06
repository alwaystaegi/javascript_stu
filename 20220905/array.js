//*indexOf("val") : val이 첫번째로 등장하는 위치값을 반환,if 없다면 -1반환
//*indexOf("val",num):num번째 위치부터 검색시작

//*startsWith("val"): 문자열이 val로 시작할경우 true 반환
//*startsWith("val",num): num부터~~
//*endsWith("val") val로 끝나면 true반환
//*endsWith("val",num) num번째 인덱스까지의 문자열이 val로 끝나면 true반환
// const filterfn1 = (value, idx, arr) =>
//?value[0] === "이";
//?value === "이" ? true : false;
//?value.indexOf("도", 1) === 1 ? true : false;
//?value.startsWith("이") ? true : false;
//value.endsWith("준") ? true : false;
//value.endsWith("도", 2) ? true : false;

// const filterRes = arr1.filter(filterfn1);

// let arr2 = ["바비킴", "김영훈"];
// arr1.push(...arr2);
// console.log(arr1);
// arr1.pop();
// console.log(arr1);
// console.log(filterRes);

// arr1.reverse();

// console.log(arr1);

//*reduce
const arr = [2, 4, 6, 8, 10];
const reducefn = (acc, cur, idx, src) => {
  console.log(`acc:${acc}/cur: ${cur} / idx: ${idx} . src: ${src}`);
  return acc + cur;
};
const result = arr.reduce(reducefn);
//const result = arr.reduce(reducefn,0) //*reduce 2번째 인자: 누산기의 초기값을 2번째 인자로 설정
const sum = (arr) => {
  res = 0;
  for (let i = 0; i < arr.length; i++) res += arr[i];
  return res;
};
let res1;

console.log(sum(arr));
console.log(result);
