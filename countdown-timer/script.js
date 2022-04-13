const newYears = "1 jan 2023";

const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

function countdown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();
  
  const totalSeconds = (newYearsDate - currentDate) / 1000;

  const seconds = Math.floor(totalSeconds) % 60;
  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = (Math.floor(totalSeconds / 60) % 24) % 60;

  console.log(days, hours, minutes, seconds);

  daysElement.innerHTML = formatTime(days);
  hoursElement.innerHTML = formatTime(hours);
  minutesElement.innerHTML = formatTime(minutes);
  secondsElement.innerHTML = formatTime(seconds);
}

function formatTime(time){
  return time < 10 ? (`0${time}`) : time;
}

countdown();

setInterval(countdown, 1000);
