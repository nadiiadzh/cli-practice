function validateUserInput(amount, initialCurrency, targetCurrency){
    if (amount === undefined || initialCurrency === undefined || targetCurrency === undefined){
        
        if(amount === undefined){
            console.log('You did not provide  the amount');
            process.exit();
        }else if(initialCurrency === undefined){
            console.log('You did not provide  the initial currency');
            process.exit();
        }else{
            console.log('You did not provide  the target currency');
            process.exit();
        }

 }
}

function getRate(rates, initialCurrency, targetCurrency){
    return rates[initialCurrency][targetCurrency]
}

module.exports = {
  validateUserInput, 
  getRate, 
};