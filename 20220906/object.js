const name = "망고"; //*문자열 변수
const price = 10000;

const product = {
  //!변수명={}== 객체형 변수
  제품명: "7d 건조망고",
  유형: "당절임",
  성분: "망고,설탕,치자황색소",
  원산지: "필리핀",
  1234: 5678, //! 객체형 변수에서 숫자이름== 키값으로 되어서 product.1234가 아닌 product[1234]로 사용
  "제품 유형": "먹는 거",
};

console.log(product);
console.log(product.성분);
console.log(product["제품명"]);
//console.log(product.1234);
console.log(product[1234]);
//console.log(product."제품 유형");
console.log(product["제품 유형"]);

const site = {
  사이트명: "네이버",
  url: "https://www.naver.com",
};
const board = {
  제품명: "유니버셜 웨이트 타로카드",
  장르: "점술",
  연령제한: "9세 이상",
  가격: "3700",
  "제품 구성": "메이저22장+마이너56장+한글설명서",
  제조사: " U.S.Games",
  상품번호: 114843600,
  옵션: ["v1", "v2", "v3"],
  판매처: site,
  상태: "good",
  printBrand: function (myname) {
    console.log(myname + "이 좋아하는 브랜드는" + this.제조사 + "입니다.");
  },
  printmodel: (myname) => {
    //console.log(`${myname}이 선호하는 상태는 ${this.상태}입니다. `);
    //!화살표함수로 this를 사용하면 object window를 가리킨다, so 객체에서는 화살표함수를 잘 사용하지 않음
  },
};

const products = [board, board, board, board];
console.log(products);
const 내쇼핑몰 = {
  제품들: products,
};
console.log(products);

// console.log(typeof "hello world");
// const str = "hello world";
// console.log(typeof str);
// const str2 = new String("hello world");
// console.log(typeof str2);

const str = "                     동해물과 백두산이 마르고 닳도록 ";

console.log(str.trim()); //?trim()=>처음과 끝의 공백을 제거
console.log(str.trim().split(" "));
// console.log(board);
// console.log(board.판매처.url);

// board.printBrand("효택");
// board.printmodel("효택");
// //const json = JSON.stringify(product); //!객체를 문자열로
// const json = JSON.stringify(board.판매처, null, 4); //!stringify를 이쁘게 만듬...?

// const obj = JSON.parse(json); //! 문자열을 객체로
// //console.log(json);
// //console.log(obj);

// //console.log(typeof product);

// console.log(typeof console);

//!아래처럼 console에도 존재하지 않는 함수를 만들 수도 있음
// console.printf = function (str) {
//   console.log(`[info] ${str}`);
// };

// console.printf("내가 만든 출력함수 1");
// console.log(board.옵션);
// board.옵션.type = "수량";
// board.length = 1;
// console.log(board.옵션);
// console.log(board.옵션);

String.prototype.toPrint = function () {
  console.log(`[2022-09-06] ${this.valueOf()}`);
};

str.toPrint();
console.log("s");

board.제품명.toPrint();
console.log(typeof ["a", "b", "c"].toString() + typeof ["a", "b", "c"]);
console.log(Math.abs(-100));
console.log(Math.min(1, 2, 3, 4, 5, 555, 552));

const arr = [10, 20, 30, 40, 50];

const max = Math.max(...arr);
console.log(max);
const rand = Number((Math.random() * 10).toFixed(2));
console.log(rand);
