const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const title = document.getElementById("question");
const resetBtn = document.getElementById("resetBtn");
const canvas = document.getElementById("canvas");
const getNameDialog = document.getElementById("dialogName");
const nameInput = document.getElementById("nameInput");
const enterBtn = document.getElementById("enter");
const jsConfetti = new JSConfetti();
let playerName;

getNameDialog.showModal();

const getPlayerName = () => {
  if (nameInput.value.trim() != "") {
    playerName = nameInput.value;
    return true;
  } else {
    alert("Please Enter You Name:");
    return false;
  }
};
const changePostion = () => {
  const maxX = window.innerWidth - noBtn.offsetWidth;
  const maxY = window.innerHeight - noBtn.offsetHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
};

const yesIDo = () => {
  title.innerText = `I Know It ${playerName} ❤️`;
  noBtn.classList.add("hidden");
  yesBtn.classList.add("hidden");
  jsConfetti
    .addConfetti({
      emojis: ["❤️", "🌸", "🌸", "🌸"],
      emojiSize: 50,
      confettiNumber: 70,
    })
    .then(() => {
      setTimeout(() => {
        resetBtn.classList.remove("hidden");
      }, 300);
    });
};

const resetfunction = () => {
  title.innerText = "Do You Love Me?";
  getNameDialog.showModal();
  nameInput.value = "";
  noBtn.classList.remove("hidden");
  noBtn.style.left = "40%";
  noBtn.style.top = "50%";
  yesBtn.classList.remove("hidden");
  resetBtn.classList.add("hidden");
  noBtn.addEventListener("mouseenter", changePostion);
};

document.addEventListener("keydown", (e) => {
  if (e.key === "r" || e.key === "ق") {
    noBtn.removeEventListener("mouseenter", changePostion);
  } else if (e.key === "a" || e.key === "ش") {
    noBtn.addEventListener("mouseenter", changePostion);
  }
});
enterBtn.addEventListener("click", () => {
  const isNamaeValid = getPlayerName();
  if (isNamaeValid) {
    getNameDialog.close();
  }
});
yesBtn.addEventListener("click", yesIDo);
noBtn.addEventListener("mouseenter", changePostion);
resetBtn.addEventListener("click", resetfunction);
