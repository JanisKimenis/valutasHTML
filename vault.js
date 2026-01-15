const baseRates = {
  EUR: { EUR: 1.0, GBP: 0.86, USD: 1.09, CHF: 1.06, SEK: 11.45 },
  GBP: { EUR: 1.16, GBP: 1.0, USD: 1.27, CHF: 1.23, SEK: 13.3 },
  USD: { EUR: 0.92, GBP: 0.79, USD: 1.0, CHF: 0.97, SEK: 10.48 },
  CHF: { EUR: 0.94, GBP: 0.81, USD: 1.03, CHF: 1.0, SEK: 10.8 },
  SEK: { EUR: 0.087, GBP: 0.075, USD: 0.095, CHF: 0.093, SEK: 1.0 },
};

const inputValue = document.getElementById("input");
const button = document.getElementById("button");
const outputText = document.getElementById("output");
const selectElement = document.getElementById("selectElement");

button.addEventListener("click", function () {
  let userInput = inputValue.value;
  let userVault = selectElement.value;
  let eurVault = baseRates.EUR[userVault];

  let result = userInput * eurVault;

  outputText.innerText = result;
});
