
/* Create a personAccount out function. 
It has firstname, lastname, incomes, expenses inner variables. 
It has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance inner functions. 
Incomes is a set of incomes and its description and expenses is also a set of expenses and its description. */



function personAccount(firstName, lastName){

    let incomes = []
    let expenses = []

    function accountInfo(){
        return `${firstName} ${lastName}`
    }
    function addIncome(income){
        incomes.push(income)
    }
    function addExpense(expense){
        expenses.push(expense)
    }

    function totalIncome(){
        return incomes.reduce((a, b) => a.amount + b.amount)
    }
    function totalExpense(){
        return expenses.reduce((a, b) => a.amount + b.amount)
    }
    function totalBalance(){
        console.log(totalIncome())
        console.log(totalExpense())
        return totalIncome() - totalExpense()
    }

    return {
        accountInfo, 
        addIncome,
        addExpense,
        totalIncome,
        totalExpense,
        totalBalance
    }

}


const account = personAccount('Justin', 'Aguillon')

console.log(account.accountInfo())
account.addIncome({description: 'Salary', amount: 3000})
account.addIncome({description: 'Freelance Work', amount: 1500})
account.addExpense({description: 'Rent', amount: 1000})
account.addExpense({description: 'Utility', amount: 500})

console.log(`Total Income: ${account.totalIncome()}`)
console.log(`Total Expense: ${account.totalExpense()}`)
console.log(`Account Balance: ${account.totalBalance()}`)
