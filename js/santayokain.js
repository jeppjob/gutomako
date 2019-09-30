const randomFoodText = document.getElementById("randomfoodtext");
const foodResult = document.getElementById("foodresult");

const showResult = document.querySelector(".showresult");

//buttons
const pickBtn = document.getElementById("pickbtn");
const spinBtn = document.getElementById("spinbtn");
const resetBtn = document.getElementById("resetbtn");

const check1 = document.getElementById("check1");
const check2 = document.getElementById("check2");

const searchBtn = document.getElementById("searchfood");

let userInput = [];

const fastFood = [
  "Mcdo",
  "Jollibee",
  "KFC",
  "Chowking",
  "Greenwich",
  "Pizza Hut",
  "Yellow Cab",
  "Tokyo Tokyo",
  "Goldilocks",
  "Mang Inasal",
  "Bon Chon",
  "Tapa King",
  "Karate Kid",
  "S&R",
  "Popeyes",
  "Wendy's",
  "Tropical Hut"
];

const restaurants = [
  "Adobo Connection",
  "Max's",
  "Kuya J",
  "Hukad",
  "Gerry's Grill",
  "Giligans",
  "Cabalen",
  "Burgoo",
  "Classic Savory",
  "Hapchan",
  "Kenny Rogers",
  "Mesa",
  "Pancake House",
  "Pepper Lunch",
  "Racks",
  "Shaykeys",
  "TGIFridays",
  "North Park"
];

let timer = 100;
let slowDown = false;
let allIn = fastFood.concat(restaurants);

// Food Randomizer

function randomFoodChoice() {
  if (check1.checked == true && check2.checked != true) {
    allIn = fastFood;
  }
  if (check1.checked != true && check2.checked == true) {
    allIn = restaurants;
  }
  let rNum = Math.floor(Math.random() * allIn.length);
  randomFoodText.innerHTML = allIn[rNum].toString();
}

// Loop Food random
function loopTime() {
  setTimeout(function() {
    randomFoodChoice();
    if (slowDown) {
      timer += 400;
      console.log(timer);
      if (timer < 2000) {
        loopTime();
      }
    } else {
      loopTime();
    }
    if (timer == 2100) {
      showResult.style.display = "flex";
      foodResult.innerHTML =
        "Hooray! Kaen tayo sa " + randomFoodText.innerText + "!";
      showResult.style.opacity = "1";

    }
  }, timer);

  pickBtn.onclick = function() {
    slowDown = true;
    this.disabled = true;
    resetBtn.disabled = false;
  };
}
spinBtn.onclick = function() {
  if (check1.checked != true && check2.checked != true) {
    alert("Must select at least one food category.");
  } else {
    loopTime();
    this.disabled = true;
    pickBtn.disabled = false;
  }
};

searchBtn.onclick = function() {
  window.open(
    "http://google.com/search?q=" + randomFoodText.innerText + " near me"
  );
};

resetBtn.onclick = function() {
  timer = 100;
  slowDown = false;
  spinBtn.disabled = false;
  showResult.style.display = "none";
};

let fbButton = document.getElementById('fb-share-button');
let url = window.location.href;

fbButton.addEventListener('click', function() {
    window.open('https://www.facebook.com/sharer/sharer.php?u=' + url,
        'facebook-share-dialog',
        'width=800,height=600'
    );
    return false;
});