"use strict";
function isValidString(str) {
  return str !== null && str.trim() !== "";
}

function removeCharsFromString(inputString, charsToRemove) {
  if (!isValidString(inputString)) {
    alert("Invalid input string");
    return "";
  }

  const resultArray = Array.from(inputString).filter(function (char) {
    return charsToRemove.indexOf(char) === -1;
  });

  return resultArray.join("");
}

const inputString = prompt("Enter the string:");

if (!isValidString(inputString)) {
  alert("Invalid input string. ");
} else {
  const charsToRemoveInput = prompt(
    "Enter characters to remove (comma-separated):"
  );

  const charsToRemove = charsToRemoveInput.split(",").map(function (char) {
    return char.trim();
  });

  const result = removeCharsFromString(inputString, charsToRemove);
  alert(result);
}
