document.addEventListener("DOMContentLoaded", function(){
document.getElementById("submit").addEventListener("click", convertFToC);

function convertFToC(){
  var inputValue = Number(document.getElementById('input').value);
	output = ((inputValue - 32)/1.8).toFixed(2);
	updateDisplay();
}

function updateDisplay(){
  document.getElementById('output').textContent = output + "°C";
}

});