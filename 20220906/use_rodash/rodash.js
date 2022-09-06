const result = _.sortBy(products, ["가격"]);
console.log(result);
console.log(_.orderBy(products, ["가격", "무게"], ["desc", "desc"]));
