const Time = new Date();
let hh = Time.getHours();
let mm = Time.getMinutes();
let ss = Time.getSeconds();
const Timerid = setInterval(() => {
  document.querySelector(".hour").innerText = hh.toString().padStart(2, "0");
  document.querySelector(".min").innerText = ("00" + mm.toString()).slice(-2);
  document.querySelector(".sec").innerText =
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
