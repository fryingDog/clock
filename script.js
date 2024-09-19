let seconds = 0;
let minutes = 0;
let hours = 0;
let intervalId;

function startTimer() {
  intervalId = setInterval(updateTimer, 1000);
}

function stopTimer() {
  clearInterval(intervalId);
}

function resetTimer() {
  clearInterval(intervalId);
  seconds = 0;
  minutes = 0;
  hours = 0;
  document.getElementById("timer").innerText = "00:00:00";
}

function updateTimer() {
  seconds++;
  if (seconds === 60) {
    minutes++;
    seconds = 0;
  }
  if (minutes === 60) {
    hours++;
    minutes = 0;
  }
  const formattedSeconds = seconds.toString().padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedHours = hours.toString().padStart(2, "0");
  document.getElementById("timer").innerText = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("stop").addEventListener("click", stopTimer);
document.getElementById("reset").addEventListener("click", resetTimer);









function dailyTask(targetHour, targetMinute) {
  setInterval(() => {
    const now = new Date();
    
    if (now.getHours() === targetHour && now.getMinutes() === targetMinute) {
      console.log('毎日指定時刻に処理を実行します。');
      document.GetelementByID(warning).innertext='給食を早く準備しよう!'
    }
  }, 60000); // 1分ごとにチェック
}

// 実行する時間を設定（例: 毎日15時30分）
dailyTask(12, 45);
