const products = [
  {
    제품명: "탐사수",
    가격: 500,
    무게: 50,
  },
  {
    제품명: "임연수",
    가격: 3500,
    무게: 100,
  },
  {
    제품명: "김치",
    가격: 30000,
    무게: 3000,
  },
  {
    제품명: "배",
    가격: 2500,
    무게: 150,
  },
  {
    제품명: "초콜릿",
    가격: 230,
    무게: 11,
  },
  {
    제품명: "과자",
    가격: 154,
    무게: 23,
  },
  {
    제품명: "송아지",
    가격: 50000000,
    무게: 500000,
  },
];
const sortfn = (arr1, arr2) => {
  if (arr1.가격 < arr2.가격) {
    return 1;
  } else if (arr1.가격 > arr2.가격) return -1;
  else return 0;
};
products.sort(sortfn);
console.log(products);

products.sort(function (a, b) {
  // console.log(JSON.stringify(a), JSON.stringify(b), products);

  if (a.제품명 > b.제품명) return 1;
  else if (a.제품명 < b.제품명) return -1;
  else return 0;
});

console.log(products);
