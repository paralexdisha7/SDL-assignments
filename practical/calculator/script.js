clearDisplay = () => {
  document.getElementById("display").value = "";
};
addToDisplay = (value) => {
  document.getElementById("display").value += value;
};

giveAnswer = () => {
  var result = eval(document.getElementById("display").value);
  document.getElementById("display").value = result;
};
