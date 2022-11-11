const net = new brain.NeuralNetwork();

const data = [
  { input: { r: 255, g: 255, b: 0 }, output: { purple: 1 } },
  { input: { r: 255, g: 165, b: 0 }, output: { blue: 1 } },
  { input: { r: 0, g: 128, b: 0 }, output: { red: 1 } },
  { input: { r: 128, g: 0, b: 128 }, output: { yellow: 1 } },
  { input: { r: 0, g: 0, b: 255 }, output: { orange: 1 } },
  { input: { r: 255, g: 0, b: 0 }, output: { green: 1 } },
];

net.train(data);

const colorEl = document.getElementById("color-element");
const guessEl = document.getElementById("ai-colorbox");

const yellowButton = document.getElementById("yellow-button");
const orangeButton = document.getElementById("orange-button");
const redButton = document.getElementById("red-button");
const purpleButton = document.getElementById("purple-button");
const blueButton = document.getElementById("blue-button");
const greenButton = document.getElementById("green-button");
const printButton = document.getElementById("print");

let color;
setRandomColor();

function setRandomColor() {
  color = {
    r: Math.random(),
    g: Math.random(),
    b: Math.random(),
  };

  //training buttons
  yellowButton.addEventListener("click", () => {
    chooseColorYellow();
  });

  orangeButton.addEventListener("click", () => {
    chooseColorOrange();
  });

  redButton.addEventListener("click", () => {
    chooseColorRed();
  });
  blueButton.addEventListener("click", () => {
    chooseColorBlue();
  });
  greenButton.addEventListener("click", () => {
    chooseColorGreen();
  });
  purpleButton.addEventListener("click", () => {
    chooseColorPurple();
  });

  printButton.addEventListener("click", print);

  function chooseColorRed() {
    data.push({
      input: color,
      output: { red: 1 },
    });
    setRandomColor();
  }

  function chooseColorOrange() {
    data.push({
      input: color,
      output: { orange: 1 },
    });
    setRandomColor();
  }
  function chooseColorYellow() {
    data.push({
      input: color,
      output: { yellow: 1 },
    });
    setRandomColor();
  }
  function chooseColorBlue() {
    data.push({
      input: color,
      output: { blue: 1 },
    });
    setRandomColor();
  }
  function chooseColorGreen() {
    data.push({
      input: color,
      output: { green: 1 },
    });
    setRandomColor();
  }
  function chooseColorPurple() {
    data.push({
      input: color,
      output: { purple: 1 },
    });
    setRandomColor();
  }

  function print() {
    //console.log(JSON.stringify(data));
    console.log(guess);
  }

  //

  const guess = net.run(color);
  //getting highest value in object
  var arr = Object.keys(guess).map(function (key) {
    return guess[key];
  });
  var max = Math.max.apply(null, arr);
  //

  //getting object name using value
  function getKeyByValue(object, value) {
    return Object.keys(object).find((key) => object[key] === value);
  }
  let finalcolor = getKeyByValue(guess, max);
  //

  switch (finalcolor) {
    case "red":
      guessEl.style.backgroundColor = "red";
      break;
    case "yellow":
      guessEl.style.backgroundColor = "yellow";
      break;
    case "orange":
      guessEl.style.backgroundColor = "orange";
      break;
    case "purple":
      guessEl.style.backgroundColor = "purple";
      break;
    case "green":
      guessEl.style.backgroundColor = "green";
      break;
    case "blue":
      guessEl.style.backgroundColor = "blue";
      break;
    default:
      guessEl.style.backgroundColor = "black";
  }
  colorEl.style.backgroundColor = `rgba(${color.r * 255}, ${color.g * 255}, ${
    color.b * 255
  })`;
}
