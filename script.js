var answer1 = false;
var answer2 = false;
var answer3 = false;
var tries = 0;
var answer;

function retry(){
  answer1 = false;
  answer2 = false;
  answer3 = false;
  var tries = 0;
}



function quiz(){
  while(answer1 == false){
  answer = prompt("what is 3 + 3?:");
      if(answer == null){
      return;
    }
    if(answer == 6){
      alert("You got it correct! Moving on!");
      answer1 = true;
    } else {
      alert("Try again");
      tries++;
    }
  }
  while(answer2 == false){
    answer = prompt("what is 1+1?:");
        if(answer == null){
      return;
    }
    if(answer == "Window"){
      alert("You got it correct! Moving on!");
      answer2 = true;
    } else {
      alert("Try again");
      tries++;
    }
  }
  alert("One more question to go!");
  while(answer3 == false){
    answer = prompt("What is the best item in drednot?:");
      if(answer == null){
      return;
    }
    if(answer == "RC"){
    alert("WOOO YOU GOT IT CORRECT, GG");
    answer3 = true;
  } else {
    alert("Try again");
    tries++;
  }
  }

  document.getElementById("stats").innerHTML = "Thank you for playing my quiz! You got the wrong answer " + tries + " times! Try again by clicking the button!";
}