// Question # 1:
// Question # 2:

function calculate() {
	var number = parseFloat(document.getElementById('numberInput').value);
	var roundOff = Math.round(number);
	var floorValue = Math.floor(number);
	var ceilValue = Math.ceil(number);
	var resultDiv = document.getElementById('results');
	resultDiv.innerHTML = `
		<p>Number: ${number}</p>
		<p>Round off value: ${roundOff}</p>
		<p>Floor value: ${floorValue}</p>
		<p>Ceil value: ${ceilValue}</p>
	`;
}




// // Question # 3:
 var number = -4;
 var absoluteValue = number < 0 ? -number : number;
 document.getElementById('absolute-value').innerText = "The absolute value of " + number + " is " + absoluteValue;




// Question # 4:
var diceValue = Math.floor(Math.random() * 6) + 1;
document.getElementById("dice-result").textContent = "Random Dice Value: " + diceValue;





// Question # 5:
var coinFlip = Math.random();
var coinValue = "Heads";
if (coinFlip < 0.5) {
    coinValue = "Tails";
}
document.getElementById("coin-result").textContent = "Random Coin Value: " + coinValue ;






// Question # 6:
var randomNumber = Math.random();
randomNumber = randomNumber * 100;
randomNumber = Math.floor(randomNumber);
randomNumber = randomNumber + 1;
document.write("Random number between 1 and 100: " + randomNumber + "<br>");






// Question # 7:
function getWeight() {
	var weight = prompt("Enter your weight in kilograms:");
	return weight;
  }
  function displayWeight(weight) {
	document.write("The weight of the user is " + weight + " kilograms.");
  }
  var weight = getWeight();
  displayWeight(weight);




// Question # 8:
var secretNumber = Math.floor(Math.random() * 10) + 1;
var userInput = prompt("Enter a number between 1 and 10");
userInput = parseInt(userInput);
if (isNaN(userInput) || userInput < 1 || userInput > 10) {
  alert("Invalid input. Please enter a number between 1 and 10.");
} else if (userInput === secretNumber) {
  alert("Congratulations! You guessed the correct number.");
} else {
  alert("Try again!"); 
}
