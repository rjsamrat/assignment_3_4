// Conversion rates 
const cadToUsdRate = 0.74;
const usdToCadRate = 1.34;

// Function to convert from CAD to USD
function convertCadToUsd(amount) {
    return amount * cadToUsdRate;
}

// Function to convert from USD to CAD
function convertUsdToCad(amount) {
    return amount * usdToCadRate;
}

// Function to handle button click and perform currency conversion
function convertCurrency() {
    const amountInput = document.getElementById("amount");
    const fromCurrencySelect = document.getElementById("fromcurrency");
    const toCurrencySelect = document.getElementById("tocurrency");
    const resultParagraph = document.getElementById("result");

    // Get user input values
    const amount = parseFloat(amountInput.value);
    const fromCurrency = fromCurrencySelect.value;
    const toCurrency = toCurrencySelect.value;

    // Conversion based on selected currencies
    let result;
    if (fromCurrency === "CAD" && toCurrency === "USD") {
        result = convertCadToUsd(amount);
    } else if (fromCurrency === "USD" && toCurrency === "CAD") {
        result = convertUsdToCad(amount);
    } else {
        alert("Invalid conversion. Please select different currencies.");
        return;
    }

    // Display the result 
    resultParagraph.textContent = `${result.toFixed(3)}`;
}
