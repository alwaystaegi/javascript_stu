const Time = new Date();
let hh = Time.getHours();
let mm = Time.getMinutes();
let ss = Time.getSeconds();
Time.getMilliseconds();
const Timerid = setInterval(() => {
  console.log(
    `현재 시간: ${hh.toString().padStart(2, "0")}시${(
      "00" + mm.toString()
    ).slice(-2)}분${ss.toString().length < 2 ? "0" + ss : ss}초`
  );
  ss++;
  if (ss % 10 === 0) {
    if (confirm("시계를 종료하시겠습니까?") == true) {
      console.log("시계를 종료합니다.");
      clearInterval(Timerid);
    } else {
      console.log("시계를 유지합니다");
      hh = new Date().getHours();
      mm = new Date().getMinutes();
      ss = new Date().getSeconds();
    }
  }

  if (ss == 60) {
    mm += 1;
    ss = 0;
    if (mm == 60) {
      hh += 1;
      mm = 0;
    }
  }
}, 1 * 1000);
