
// deposit event
document.getElementById('btn-deposit').addEventListener('click', function () {})

// Result by pressing enter key
document.getElementById('deposit-field').addEventListener('keypress', function (e) {
    if (e.key === "Enter") {
        const inputField = document.getElementById('deposit-field')
        const inputValue = parseFloat(inputField.value);
        
        inputField.value = "";

        if (isNaN(inputValue)){
            alert(`provide a valid number!`)
            return;
        }

        const depositDisplay = document.getElementById('deposit-total');

        const depositDisplayValue = parseFloat(depositDisplay.innerText)

        const totalDeposit = depositDisplayValue + inputValue;

        depositDisplay.innerText = totalDeposit;

        const totalDisplay = document.getElementById('balance-total')

        const totalBalanceValue = parseFloat(totalDisplay.innerText)

        const totalBalanceCalculate = totalBalanceValue + inputValue;

        totalDisplay.innerText = totalBalanceCalculate;


    }
})

// withdraw event
document.getElementById('btn-withdraw').addEventListener('click', function () {})

// Result by pressing enter key

document.getElementById('withdraw-field').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        const withdrawInput = document.getElementById('withdraw-field')
        const withdrawValue = parseFloat(withdrawInput.value);

        withdrawInput.value = "";
        
        if (isNaN(withdrawValue)){
            alert(`provide a valid number!`)
            return;
        }
        
        const withdrawDisplay = document.getElementById('withdraw-total')
        const withdrawAmount = parseFloat(withdrawDisplay.innerText);
        
        const withdrawFromBalance = document.getElementById('balance-total')
        
        const changeBalance = parseFloat(withdrawFromBalance.innerText);
        
        if (withdrawValue > changeBalance){
            alert(`Sorry, you don't have sufficient balance!`)
            return;
        }

        const withdrawCurrent = withdrawAmount + withdrawValue;
        withdrawDisplay.innerText = withdrawCurrent;

        const changeTotal = changeBalance - withdrawValue;
        withdrawFromBalance.innerText = changeTotal


    }
})