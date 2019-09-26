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

let timer = 100;
let slowDown = false;

// Food Randomizer

function randomFoodChoice() {
    let rNum = Math.floor(Math.random() * userInput.length);
  randomFoodText.innerHTML = userInput[rNum].toString();
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
  let val = document.getElementById("userinput").value.split('\n');
   userInput.push(val);
   userInput = val;
  console.log(userInput);
  for(let i=0;i <userInput.length;i++){
if(userInput[i] == ""){
  userInput.splice(i,1);
}
  }

   if(val == ""){
    alert("You haven't entered any choices!")
    document.getElementById("userinput").focus();
   }else if(val.length < 3) {
    alert("Enter at least three valid choices!")
    document.getElementById("userinput").focus();
   }else{
     val.disabled = true;
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
