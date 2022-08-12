// Get all input values
function getInputValue(inputFieldAmount) {
    const inputField = document.getElementById(inputFieldAmount);
    const inputFieldText = inputField.value;
    const inputFieldNumber = parseFloat(inputFieldText);

    // Input filed MT string
    inputField.value = "";

    return inputFieldNumber;
}

// Total value with input and previous amount
function totalField(previousAmount, valueFromInput) {
    const previousBalance = document.getElementById(previousAmount);
    const previousBalanceText = previousBalance.innerText;
    const previousBalanceNumber = parseFloat(previousBalanceText);

    previousBalance.innerText = previousBalanceNumber + valueFromInput;
}

// Current Balance
function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText);

    return balanceTotalAmount;
}

// Update Balance
function updateBalance(previousBalanceAmount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalAmount = getCurrentBalance();

    if (isAdd == true) {
        balanceTotal.innerText = balanceTotalAmount + previousBalanceAmount;
    }
    else {
        balanceTotal.innerText = balanceTotalAmount - previousBalanceAmount;
    }
}


// ---- Deposit ----
document.getElementById('deposit-button').addEventListener('click', function () {
    const depositInput = getInputValue('deposit-input');

    if (depositInput > 0) {
        totalField('deposit-total', depositInput);
        updateBalance(depositInput, true);
    }
    // Error message
    else {
        alert('Please input a larger amount than 0');
    }
})

// ---- Withdraw ----
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();

    if (withdrawInput > 0 && withdrawInput < currentBalance) {
        totalField('withdraw-total', withdrawInput);
        updateBalance(withdrawInput, false);
    }
    // Error message
    if (currentBalance < withdrawInput) {
        alert("No enough money");
    }
    else {
        alert('Please input a larger amount than 0');
    }
});