/*
When the button#counter_btn is clicked, display how many times it has been clicked in the span#click_count
*/

// YOUR CODE GOES HERE
const counterButton = document.getElementById("counter_btn");
const counter = document.getElementById("click_count");
counterButton.onclick = () => counter.innerHTML++;

/*
When the button#reset_btn is clicked, reset the button click counter to 0
*/

// YOUR CODE GOES HERE
const resetButton = document.getElementById("reset_btn");
resetButton.onclick = function () {
  counter.innerHTML = 0;
};
