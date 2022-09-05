const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(self);
//?function callback
// const call3Times = (callback) => {
//   for (let i = 0; i < 3; i++)
//     console.log(typeof callback);
//     callback(i);
// };
// const myPrint = (idx) => {
//   console.log(`${idx}번째 함수 호출`);
// };
// call3Times(myPrint);

//*foreach callback
// const sunmoonfn = (value, index, arr) => {
//   console.log(`val=${value},idx=${index},arr=${arr}`);
// };
// const forEachResult = arr.forEach(sunmoonfn);
// console.log(forEachResult);

//*map callback
// const sunmoonfn = (value, idx, arr) => {
//   console.log(`[${idx}] ${value}`);
//   return value * value;
// };

// const mapResult = arr.map(sunmoonfn);
// console.log(mapResult);

//*filter callback
// const filterfn = (value, idx, arr) => {
//   console.log(`[${idx}] ${value}`);
//   return value % 2 === 0;
// };
// const filterResult = arr.filter(filterfn);
// console.log(filterResult);

//*filter by name with callback
const arr1 = [
  "강석원",
  "박종훈",
  "윤승준",
  "이슬비",
  "이정윤",
  "이종석",
  "이진우",
  "장효택",
  "정도현",
  "최도원",
  "최승준",
];

//*indexOf("val") : val이 첫번째로 등장하는 위치값을 반환,if 없다면 -1반환
//*indexOf("val",num):num번째 위치부터 검색시작

//*startsWith("val"): 문자열이 val로 시작할경우 true 반환
//*startsWith("val",num): num부터~~
//*endsWith("val") val로 끝나면 true반환
//*endsWith("val",num) num번째 인덱스까지의 문자열이 val로 끝나면 true반환
const filterfn1 = (value, idx, arr) =>
  //?value[0] === "이";
  //?value === "이" ? true : false;
  //?value.indexOf("도", 1) === 1 ? true : false;
  //?value.startsWith("이") ? true : false;
  //value.endsWith("준") ? true : false;
  value.endsWith("도", 2) ? true : false;

const filterRes = arr1.filter(filterfn1);

let arr2 = ["바비킴", "김영훈"];
arr1.push(...arr2);
console.log(arr1);
arr1.pop();
console.log(arr1);
console.log(filterRes);

arr1.reverse();

console.log(arr1);
