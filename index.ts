#! /usr/bin/env node

import inqurer from "inquirer"

let  currencys: any = {
    USD: 1, //  Base currency;
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280
}

const currency = await inqurer.prompt([{
    name: "from",
    type: "list",
    choices: ['USD' , 'EUR','GBP' ,'INR','PKR'],
    message: "Enter From Currrency",
},
{
    name: "To",
    type: "list",
    choices: ['USD' , 'EUR','GBP' ,'INR','PKR'],
    message: "Enter to Currrency",
},
{
    name: "Amount",
    type: "number",
    message: "Enter your amount",
},
]);

let fromAmount = currencys[currency.from];
let toAmount = currencys[currency.To];
let amounts = currency.Amount;
let baseAmount = amounts / fromAmount;
let CovertedAmount = baseAmount * toAmount;
console.log(CovertedAmount);

// console.log(fromAmount);
// console.log(toAmount);
// console.log(amounts);



