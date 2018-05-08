const daysContainer = document.getElementById('days');
const hoursContainer = document.getElementById('hours');
const minsContainer = document.getElementById('mins');
const secsContainer = document.getElementById('secs');

const deadline = '2019-05-04 GMT+01:00';

function getRemainingTime(endtime) {
  let time = Date.parse(endtime) - Date.parse(new Date());
  let seconds = Math.floor((time / 1000) % 60);
  let minutes = Math.floor((time / 1000 / 60) % 60);
  let hours = Math.floor((time / (1000 * 60 * 60)) % 24);
  let days = Math.floor(time / (1000 * 60 * 60 * 24));
  return {
    total: time,
    days,
    hours,
    minutes,
    seconds
  };
}

const remainingTime = getRemainingTime(deadline);

daysContainer.innerHTML = remainingTime.days;
hoursContainer.innerHTML = remainingTime.hours;
minsContainer.innerHTML = remainingTime.minutes;
secsContainer.innerHTML = remainingTime.seconds;

const countdown = setInterval(function() {
  const remainingTime = getRemainingTime(deadline);

  daysContainer.innerHTML = remainingTime.days;
  hoursContainer.innerHTML = remainingTime.hours;
  minsContainer.innerHTML = remainingTime.minutes;
  secsContainer.innerHTML = remainingTime.seconds;
  if (remainingTime <= 0) {
    clearInterval(countdown);
  }
}, 1000);
