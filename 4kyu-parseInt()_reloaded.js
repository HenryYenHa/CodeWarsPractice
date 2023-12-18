let thousandFlag = false;
let hundredFlag = false;
let dashFlag = false;
let returnNumber = 0;
let thousandNumber = 0;
let tempWords = "";

function parseInt(string) {
  returnNumber = 0;
  let numArray = string.split(" ");
  if (string.includes("million")) {
    return 1000000;
  }
  if (string.includes("zero")) {
    return 0;
  }
  for (number of numArray) {
    let currNumber = readWord(number);
    console.log("currNumber:", currNumber);
    if (thousandFlag) {
      thousandFlag = false;
      thousandNumber = returnNumber * 1000;
      returnNumber = 0;
    } else if (hundredFlag) {
      hundredFlag = false;
      returnNumber = returnNumber * 100;
    } else if (dashFlag) {
      currNumber = currNumber + readWord(number);
      returnNumber = returnNumber + currNumber;
    } else {
      returnNumber = returnNumber + currNumber;
    }
  }
  const fullReturn = returnNumber + thousandNumber;
  returnNumber = 0;
  thousandNumber = 0;
  return fullReturn;
}

function readWord(string) {
  let input = "";
  if (dashFlag) {
    dashFlag = false;
    input = tempWords;
    tempWords = "";
  } else if (string.includes("-")) {
    const split = string.split("-");
    input = split[0];
    tempWords = split[1];
    dashFlag = true;
  } else {
    input = string;
  }
  switch (input) {
    case "one":
      return 1;
    case "two":
      return 2;
    case "three":
      return 3;
    case "four":
      return 4;
    case "five":
      return 5;
    case "six":
      return 6;
    case "seven":
      return 7;
    case "eight":
      return 8;
    case "nine":
      return 9;
    case "ten":
      return 10;
    case "eleven":
      return 11;
    case "twelve":
      return 12;
    case "thirteen":
      return 13;
    case "fourteen":
      return 14;
    case "fifteen":
      return 15;
    case "sixteen":
      return 16;
    case "seventeen":
      return 17;
    case "eighteen":
      return 18;
    case "nineteen":
      return 19;
    case "twenty":
      return 20;
    case "thirty":
      return 30;
    case "forty":
      return 40;
    case "fifty":
      return 50;
    case "sixty":
      return 60;
    case "seventy":
      return 70;
    case "eighty":
      return 80;
    case "ninety":
      return 90;
    case "hundred":
      hundredFlag = true;
      return 0;
    case "thousand":
      thousandFlag = true;
      return 0;
    default:
      console.log("extraItem");
      return 0;
  }
}
