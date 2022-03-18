const appsPageSections = document.querySelectorAll(".apps-page .section-img");
const appsPageCloseBtns = document.querySelectorAll(
  ".apps-page .close-section-btn"
);

appsPageSections.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.target.nextElementSibling.nextElementSibling.classList.remove(
      "scale-zero"
    );
    mainHeader.classList.toggle("header-alt");
  });
});
appsPageCloseBtns.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (!e.target.parentElement.classList.contains("scale-zero")) {
      e.target.parentElement.classList.add("scale-zero");
    }
    mainHeader.classList.remove("header-alt");
  });
});

function appsPageReset() {
  appsPageSections.forEach((item) => {
    if (
      !item.nextElementSibling.nextElementSibling.classList.contains(
        "scale-zero"
      )
    ) {
      item.nextElementSibling.nextElementSibling.classList.add("scale-zero");
    }
  });
}

// Task List App
const taskListApp = document.querySelector(".task-list-container");
const taskForm = document.querySelector(".task-form");
const taskList = document.querySelector(".tasks");
const clearTasks = document.querySelector(".clear-tasks-btn");
const addTaskInput = document.querySelector("#add-task");

document.addEventListener("DOMContentLoaded", getTasks);

taskForm.addEventListener("submit", addTask);

function addTask(e) {
  if (addTaskInput.value === "") {
    alert("Task Title Required");
    e.preventDefault();
  } else {
    const li = document.createElement("li");
    li.classList.add("task-list-item");
    li.appendChild(document.createTextNode(addTaskInput.value));
    const removeTask = document.createElement("a");
    removeTask.classList.add("remove-task");
    removeTask.innerHTML = '<i class="fas fa-times"></i>';
    li.appendChild(removeTask);
    taskList.appendChild(li);

    storeTask(addTaskInput.value);

    addTaskInput.value = "";
  }
  e.preventDefault();
}

function storeTask(task) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function getTasks() {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.classList.add("task-list-item");
    li.appendChild(document.createTextNode(task));
    const removeTask = document.createElement("a");
    removeTask.classList.add("remove-task");
    removeTask.innerHTML = '<i class="fas fa-times"></i>';
    li.appendChild(removeTask);
    taskList.appendChild(li);
  });
}

function removeTask(e) {
  if (e.target.classList.contains("fa-times")) {
    e.target.parentElement.parentElement.remove();
    removeFromStorage(e.target.parentElement.parentElement);
  }
}

function removeFromStorage(li) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.forEach((task, index) => {
    if (li.textContent === task) {
      tasks.splice(index, 1);
    }
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

taskList.addEventListener("click", removeTask);

clearTasks.addEventListener("click", () => {
  taskList.innerHTML = "";
  localStorage.clear();
});

// Blackjack
const deck = [
  {
    value: 11,
    img: "media/img/PNG-cards-1.3/ace_of_hearts.png",
  },
  {
    value: 10,
    img: "media/img/PNG-cards-1.3/king_of_hearts.png",
  },
  {
    value: 10,
    img: "media/img/PNG-cards-1.3/queen_of_hearts.png",
  },
  {
    value: 10,
    img: "media/img/PNG-cards-1.3/jack_of_hearts.png",
  },
  {
    value: 10,
    img: "media/img/PNG-cards-1.3/10_of_hearts.png",
  },
  {
    value: 9,
    img: "media/img/PNG-cards-1.3/9_of_hearts.png",
  },
  {
    value: 8,
    img: "media/img/PNG-cards-1.3/8_of_hearts.png",
  },
  {
    value: 7,
    img: "media/img/PNG-cards-1.3/7_of_hearts.png",
  },
  {
    value: 6,
    img: "media/img/PNG-cards-1.3/6_of_hearts.png",
  },
  {
    value: 5,
    img: "media/img/PNG-cards-1.3/5_of_hearts.png",
  },
  {
    value: 4,
    img: "media/img/PNG-cards-1.3/4_of_hearts.png",
  },
  {
    value: 3,
    img: "media/img/PNG-cards-1.3/3_of_hearts.png",
  },
  {
    value: 2,
    img: "media/img/PNG-cards-1.3/2_of_hearts.png",
  },
  {
    value: 11,
    img: "media/img/PNG-cards-1.3/ace_of_spades.png",
  },
  {
    value: 10,
    img: "media/img/PNG-cards-1.3/king_of_spades.png",
  },
  {
    value: 10,
    img: "media/img/PNG-cards-1.3/queen_of_spades.png",
  },
  {
    value: 10,
    img: "media/img/PNG-cards-1.3/jack_of_spades.png",
  },
  {
    value: 10,
    img: "media/img/PNG-cards-1.3/10_of_spades.png",
  },
  {
    value: 9,
    img: "media/img/PNG-cards-1.3/9_of_spades.png",
  },
  {
    value: 8,
    img: "media/img/PNG-cards-1.3/8_of_spades.png",
  },
  {
    value: 7,
    img: "media/img/PNG-cards-1.3/7_of_spades.png",
  },
  {
    value: 6,
    img: "media/img/PNG-cards-1.3/6_of_spades.png",
  },
  {
    value: 5,
    img: "media/img/PNG-cards-1.3/5_of_spades.png",
  },
  {
    value: 4,
    img: "media/img/PNG-cards-1.3/4_of_spades.png",
  },
  {
    value: 3,
    img: "media/img/PNG-cards-1.3/3_of_spades.png",
  },
  {
    value: 2,
    img: "media/img/PNG-cards-1.3/2_of_spades.png",
  },
  {
    value: 11,
    img: "media/img/PNG-cards-1.3/ace_of_diamonds.png",
  },
  {
    value: 10,
    img: "media/img/PNG-cards-1.3/king_of_diamonds.png",
  },
  {
    value: 10,
    img: "media/img/PNG-cards-1.3/queen_of_diamonds.png",
  },
  {
    value: 10,
    img: "media/img/PNG-cards-1.3/jack_of_diamonds.png",
  },
  {
    value: 10,
    img: "media/img/PNG-cards-1.3/10_of_diamonds.png",
  },
  {
    value: 9,
    img: "media/img/PNG-cards-1.3/9_of_diamonds.png",
  },
  {
    value: 8,
    img: "media/img/PNG-cards-1.3/8_of_diamonds.png",
  },
  {
    value: 7,
    img: "media/img/PNG-cards-1.3/7_of_diamonds.png",
  },
  {
    value: 6,
    img: "media/img/PNG-cards-1.3/6_of_diamonds.png",
  },
  {
    value: 5,
    img: "media/img/PNG-cards-1.3/5_of_diamonds.png",
  },
  {
    value: 4,
    img: "media/img/PNG-cards-1.3/4_of_diamonds.png",
  },
  {
    value: 3,
    img: "media/img/PNG-cards-1.3/3_of_diamonds.png",
  },
  {
    value: 2,
    img: "media/img/PNG-cards-1.3/2_of_diamonds.png",
  },
  {
    value: 11,
    img: "media/img/PNG-cards-1.3/ace_of_clubs.png",
  },
  {
    value: 10,
    img: "media/img/PNG-cards-1.3/king_of_clubs.png",
  },
  {
    value: 10,
    img: "media/img/PNG-cards-1.3/queen_of_clubs.png",
  },
  {
    value: 10,
    img: "media/img/PNG-cards-1.3/jack_of_clubs.png",
  },
  {
    value: 10,
    img: "media/img/PNG-cards-1.3/10_of_clubs.png",
  },
  {
    value: 9,
    img: "media/img/PNG-cards-1.3/9_of_clubs.png",
  },
  {
    value: 8,
    img: "media/img/PNG-cards-1.3/8_of_clubs.png",
  },
  {
    value: 7,
    img: "media/img/PNG-cards-1.3/7_of_clubs.png",
  },
  {
    value: 6,
    img: "media/img/PNG-cards-1.3/6_of_clubs.png",
  },
  {
    value: 5,
    img: "media/img/PNG-cards-1.3/5_of_clubs.png",
  },
  {
    value: 4,
    img: "media/img/PNG-cards-1.3/4_of_clubs.png",
  },
  {
    value: 3,
    img: "media/img/PNG-cards-1.3/3_of_clubs.png",
  },
  {
    value: 2,
    img: "media/img/PNG-cards-1.3/2_of_clubs.png",
  },
];
const dCard1 = document.querySelector(".dealer-card-1");
const dCard2 = document.querySelector(".dealer-card-2");
const dCard3 = document.querySelector(".dealer-card-3");
const dCard4 = document.querySelector(".dealer-card-4");
const dCard5 = document.querySelector(".dealer-card-5");
const pCard1 = document.querySelector(".player-card-1");
const pCard2 = document.querySelector(".player-card-2");
const pCard3 = document.querySelector(".player-card-3");
const pCard4 = document.querySelector(".player-card-4");
const pCard5 = document.querySelector(".player-card-5");

const playingCards = document.querySelectorAll(
  ".blackjack-game-container .card"
);

const gameOver = document.querySelector(".gameover");
const gameResult = document.querySelector(".game-result");

const hit = document.querySelector(".hit");
const stand = document.querySelector(".stand");
const startGameBtn = document.querySelector(".start");

const newGameBtn = document.querySelector(".new-game");

let dealerSum = 0;
let playerSum = 0;

let randIndex;
let currentDeck;

let hitClicked = false;

startGameBtn.addEventListener("click", startGame);
newGameBtn.addEventListener("click", startGame);

hit.addEventListener("click", () => {
  if (hitClicked == false) {
    setPCard3();
    hitClicked = true;
    if (playerSum == 21) {
      gameOver.classList.toggle("scale-zero");
      gameResult.innerText = "You got Blackjack! You win!";
    } else if (playerSum > 21) {
      gameOver.classList.toggle("scale-zero");
      gameResult.innerText = "Player bust. You lose.";
    }
  } else if (hitClicked) {
    setPCard4();
    if (playerSum == 21) {
      gameOver.classList.toggle("scale-zero");
      gameResult.innerText = "You got Blackjack! You win!";
    } else if (playerSum > 21) {
      gameOver.classList.toggle("scale-zero");
      gameResult.innerText = "Player bust. You lose.";
    }
  } else if (
    hitClicked &&
    pCard4.src != "media/img/PNG-cards-1.3/back-of-card.png"
  ) {
    setPCard5();
    if (playerSum == 21) {
      gameOver.classList.toggle("scale-zero");
      gameResult.innerText = "You got Blackjack! You win!";
    } else if (playerSum > 21) {
      gameOver.classList.toggle("scale-zero");
      gameResult.innerText = "Player bust. You lose.";
    }
  }
});
stand.addEventListener("click", () => {
  setDCard2();
  if (dealerSum == 21) {
    gameOver.classList.toggle("scale-zero");
    gameResult.innerText = "Dealer got Blackjack. You lose.";
  } else if (dealerSum > 21) {
    gameOver.classList.toggle("scale-zero");
    gameResult.innerText = "Dealer bust. You win!";
  } else if (dealerSum > playerSum) {
    gameOver.classList.toggle("scale-zero");
    gameResult.innerText = "Dealer wins.";
  } else if (dealerSum <= playerSum) {
    setDCard3();
    if (dealerSum == 21) {
      gameOver.classList.toggle("scale-zero");
      gameResult.innerText = "Dealer got Blackjack. You lose.";
    } else if (dealerSum > 21) {
      gameOver.classList.toggle("scale-zero");
      gameResult.innerText = "Dealer bust. You win!";
    } else if (dealerSum > playerSum) {
      gameOver.classList.toggle("scale-zero");
      gameResult.innerText = "Dealer wins.";
    } else if (dealerSum <= playerSum) {
      setDCard4();
      if (dealerSum == 21) {
        gameOver.classList.toggle("scale-zero");
        gameResult.innerText = "Dealer got Blackjack. You lose.";
      } else if (dealerSum > 21) {
        gameOver.classList.toggle("scale-zero");
        gameResult.innerText = "Dealer bust. You win!";
      } else if (dealerSum > playerSum) {
        gameOver.classList.toggle("scale-zero");
        gameResult.innerText = "Dealer wins.";
      } else if (dealerSum <= playerSum) {
        setDCard5();
        if (dealerSum == 21) {
          gameOver.classList.toggle("scale-zero");
          gameResult.innerText = "Dealer got Blackjack. You lose.";
        } else if (dealerSum > 21) {
          gameOver.classList.toggle("scale-zero");
          gameResult.innerText = "Dealer bust. You win!";
        } else if (dealerSum > playerSum) {
          gameOver.classList.toggle("scale-zero");
          gameResult.innerText = "Dealer wins.";
        }
      }
    }
  }
});

function gameReset() {
  dealerSum = 0;
  playerSum = 0;
  if (!gameOver.classList.contains("scale-zero")) {
    gameOver.classList.toggle("scale-zero");
  }
  currentDeck = [...deck];
  hitClicked = false;
  playingCards.forEach((card) => {
    card.setAttribute("src", "media/img/PNG-cards-1.3/back-of-card.png");
  });
}

function startGame() {
  gameReset();
  setDCard1();
  setPCard1();
  setPCard2();
  if (playerSum == 21) {
    gameOver.classList.toggle("scale-zero");
    gameResult.innerText = "You got Blackjack! You win!";
  } else if (playerSum > 21) {
    gameOver.classList.toggle("scale-zero");
    gameResult.innerText = "Player bust. You lose.";
  } else if (dealerSum == 21) {
    gameOver.classList.toggle("scale-zero");
    gameResult.innerText = "Dealer got Blackjack. You Lose.";
  }
}

function setDCard1() {
  const { cardImg, cardValue } = getRandCard();
  dCard1.setAttribute("src", cardImg);
  dealerSum += cardValue;
  updateDeck();
}
function setDCard2() {
  const { cardImg, cardValue } = getRandCard();
  dCard2.setAttribute("src", cardImg);
  dealerSum += cardValue;
  updateDeck();
}
function setDCard3() {
  const { cardImg, cardValue } = getRandCard();
  dCard3.setAttribute("src", cardImg);
  dealerSum += cardValue;
  updateDeck();
}
function setDCard4() {
  const { cardImg, cardValue } = getRandCard();
  dCard4.setAttribute("src", cardImg);
  dealerSum += cardValue;
  updateDeck();
}
function setDCard5() {
  const { cardImg, cardValue } = getRandCard();
  dCard4.setAttribute("src", cardImg);
  dealerSum += cardValue;
  updateDeck();
}
function setPCard1() {
  const { cardImg, cardValue } = getRandCard();
  pCard1.setAttribute("src", cardImg);
  playerSum += cardValue;
  updateDeck();
}
function setPCard2() {
  const { cardImg, cardValue } = getRandCard();
  pCard2.setAttribute("src", cardImg);
  playerSum += cardValue;
  updateDeck();
}
function setPCard3() {
  const { cardImg, cardValue } = getRandCard();
  pCard3.setAttribute("src", cardImg);
  playerSum += cardValue;
  updateDeck();
}
function setPCard4() {
  const { cardImg, cardValue } = getRandCard();
  pCard4.setAttribute("src", cardImg);
  playerSum += cardValue;
  updateDeck();
}
function setPCard5() {
  const { cardImg, cardValue } = getRandCard();
  pCard5.setAttribute("src", cardImg);
  playerSum += cardValue;
  updateDeck();
}

function getRandCard() {
  randIndex = Math.floor(Math.random() * currentDeck.length);
  return {
    cardImg: currentDeck[randIndex].img,
    cardValue: currentDeck[randIndex].value,
  };
}

function updateDeck() {
  return currentDeck.splice(randIndex, 1);
}

// News APP
const newsInput = document.querySelector("#news-input");
const newsSubmit = document.querySelector(".news-submit");
const newsList = document.querySelector(".news-list");
const newsForm = document.querySelector(".news-form");
const searchTerm = document.querySelector(".search-term");

function getNews(e) {
  const keyword = newsInput.value;
  const apiKey = "7d846c5d829b42af8f61f7a9b2db8fd3";
  e.preventDefault();
  fetch(`https://newsapi.org/v2/everything?q=${keyword}&apiKey=${apiKey}`)
    .then((response) => response.json())
    .then((data) => displayNews(data));
}
function displayNews(data) {
  searchTerm.innerText = '"' + newsInput.value + '"';
  newsList.innerHTML = "";
  newsInput.value = "";
  data.articles.forEach((article) => {
    let li = document.createElement("li");
    let img = document.createElement("img");
    let div = document.createElement("div");
    let h4 = document.createElement("h4");
    let h5 = document.createElement("h5");
    let h6 = document.createElement("h6");
    let a = document.createElement("a");

    li.classList.add("news-item");
    img.setAttribute("src", article.urlToImage);
    h4.innerText = article.title;
    h5.innerText = article.author;
    h6.innerText = article.source.name;
    a.setAttribute("href", article.url);
    a.setAttribute("target", "_blank");
    a.innerText = "View Article";

    div.appendChild(h4);
    div.appendChild(h5);
    div.appendChild(h6);
    div.appendChild(a);
    li.appendChild(img);
    li.appendChild(div);
    newsList.appendChild(li);
  });
}

newsForm.addEventListener("submit", getNews);
