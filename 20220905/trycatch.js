//     //try catch finally
// const arr= 100;

//     try{
// val=200;

//     }
//     catch(error){
// console.error(error);

//     }
//     finally{
//         console.log(`finally 문:${val}`);
//     }

function number(num) {
  if (typeof num !== "number") {
    throw new Error("오류가 발생했습니다.");
  } else if (0 > num) {
    //* throw new Error("1");
    throw {
      name: "wrong type err",
      message: "숫자 값을 입력해야 합니다.",
    };
    //throw "0이상의 값을 입력해주세요.";
    //오류
  } else if (100 < num) {
    throw "100 이상의 값을 입력해주세요.";
    //오류
  } else return num;
}
try {
  console.log(number(-1));
} catch (err) {
  console.error(`${JSON.stringify(err)}`);
}
