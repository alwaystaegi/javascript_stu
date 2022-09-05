let Check = () => {
  var year = prompt("오늘 연도를 입력하세요", new Date().getFullYear());
  if ((year % 4 === 0 && year % 100 != 0) || year % 400 === 0) {
    console.log(true);
  } else console.log(false);
};
Check();
