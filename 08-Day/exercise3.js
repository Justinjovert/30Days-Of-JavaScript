/* 


Create an object literal called personAccount. 

It has firstName, lastName, incomes, expenses properties 
and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. 

Incomes is a set of incomes and its description and expenses is a set of incomes and its description. 
*/

const personAccount = {
    firstName: 'Justin',
    lastName: 'Aguillon',
    incomes: {
        partTime: 500,
        partTimeDesc: 'Work',
        fullTime: 1000,
        fullTImeDesc: 'Work'
    },
    expenses: {
        expense: 400,
        description: 'rent'
    },
    totalIncome: function(){
        return this.incomes.partTime + this.incomes.fullTime
    },
    totalExpense: function(){
        return this.expenses.expense
    },
    accountInfo: 'bank',
    /* WORK ON THIS */
    /* ADD OBJECT OF INCOME/EXPENSE AND DESCRIPTION */
    addIncome: function(a){
        return this.totalIncome() + a
    },  
    addExpense: function(b){
        return this.totalExpense() + b
    },
    accountBalance: function(){
        return this.totalIncome() - this.totalExpense()
}
}


let x = 500
let y = 300

console.log(`Income: ${personAccount.totalIncome()}`)
console.log(`Additional Income: ${x}. \nTotal Income ${personAccount.addIncome(x)}`)
console.log(`Expense: ${personAccount.totalExpense()}`)
console.log(`Additional Expense: ${y}. \nTotal Expense ${personAccount.addExpense(y)}`)
console.log(`${personAccount.accountBalance()}`)