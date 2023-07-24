const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

const formatTimeUnit = (timeUnit) => {
  return timeUnit < 10 ? `0${timeUnit}` : timeUnit;
};

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  let timerInterval;

  return (seconds) => {
    let remainingSeconds = seconds;
    
    clearInterval(timerInterval);

    const updateTimer = () => {
      if (remainingSeconds < 0) {
        clearInterval(timerInterval);
        return;
      }

      const hours = Math.floor(remainingSeconds / 3600);
      const minutes = Math.floor((remainingSeconds % 3600) / 60);
      const secs = remainingSeconds % 60;

      timerEl.textContent = `${formatTimeUnit(hours)}:${formatTimeUnit(minutes)}:${formatTimeUnit(secs)}`;
      remainingSeconds--;
    };

    timerInterval = setInterval(updateTimer, 1000);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  inputEl.value = inputEl.value.split('').filter(char => !isNaN(char)).join('');
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});
