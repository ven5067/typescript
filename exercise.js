"use strict";
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: "Ven",
    bankAccount: bankAccount,
    hobbies: ["sports", "cooking"]
};
myself.bankAccount.deposit(3000);
console.log(myself);
