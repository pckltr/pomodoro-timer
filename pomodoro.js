const executeOrder66 = () => {
  const outputEl = document.getElementById("output");
  const counterEl = document.getElementById("counter");
  const startButton = document.getElementById("startButton");
  const resetButton = document.getElementById("resetButton");
  const emojiArr = [
    "🙂",
    "😀",
    "😃",
    "😄",
    "😁",
    "😆",
    "😊",
    "☺️",
    "🤗",
    "😌",
    "😮",
    "😲",
    "🥴",
    "🥱",
    "😴",
    "🥳",
    "🥳",
  ];
  const DEFAULT_START_SECONDS = 60 * 30;
  const DEFAULT_BREAK_SECONDS = 60 * 5;
  let seconds = DEFAULT_START_SECONDS;
  let startFilePlayed = false;
  let counter = 0;
  let timeout;

  const changeOutput = (seconds) => {
    const mm = Math.floor(seconds / 60);
    const ss = seconds % 60;
    outputEl.value = `${mm < 10 ? "0" : ""}${mm}:${ss < 10 ? "0" : ""}${ss}`;
  };

  const updateCounter = (cntr) => {
    counterEl.value = `${cntr} ${cntr < emojiArr.length ? emojiArr[cntr] : ""}`;
  };

  const playAudioFile = (file) => {
    var audio = new Audio(file);
    audio.play();
    startFilePlayed = true;
  };

  const timer = () => {
    if (seconds > 0) {
      if (!startFilePlayed) {
        playAudioFile("timeToWork.mp3");
      }
      seconds--;
      if (seconds == DEFAULT_BREAK_SECONDS) {
        outputEl.classList.add("break");
        playAudioFile("timeForABreak.mp3");
      }
      changeOutput(seconds);
      timeout = setTimeout(timer, 1000);
    } else {
      resetTimer();
      timer();
      updateCounter(++counter);
    }
  };

  const resetTimer = () => {
    clearTimeout(timeout);
    seconds = DEFAULT_START_SECONDS;
    startFilePlayed = false;
    outputEl.classList.remove("break");
    changeOutput(seconds);
  };

  startButton.addEventListener("click", () => {
    resetTimer();
    timer();
  });

  resetButton.addEventListener("click", () => resetTimer());

  changeOutput(seconds);
};

document.addEventListener("DOMContentLoaded", () => executeOrder66());
