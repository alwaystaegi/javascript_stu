const Time = new Date();
let hh = Time.getHours();
let mm = Time.getMinutes();
let ss = Time.getSeconds();
Time.getMilliseconds();
const Timerid = setInterval(() => {
  document.getElementsByTagName("span")[0].innerText = hh
    .toString()
    .padStart(2, "0");
  document.getElementsByTagName("span")[2].innerText = (
    "00" + mm.toString()
  ).slice(-2);
  document.getElementsByTagName("span")[4].innerText =
    ss.toString().length < 2 ? "0" + ss : ss;
  ss++;

  if (ss == 60) {
    mm += 1;
    ss = 0;
    if (mm == 60) {
      hh += 1;
      mm = 0;
    }
  }
}, 1 * 1000);
