const student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 22,
    skills: ['JavaScript', 'HTML', 'CSS'],
    country: 'USA',
    enrolled: true,
  };
  
  console.log(student);
  
const skillsArr = JSON.stringify(student.skills, undefined, 0)
console.log(skillsArr)

localStorage.setItem('firstName', student.firstName)
localStorage.setItem('lastName', student.lastName)
localStorage.setItem('age', student.age)
localStorage.setItem('skills', skillsArr)
localStorage.setItem('country', student.country)
localStorage.setItem('enrolled', student.enrolled)




const personAccount = {
    firstName: 'Justin',
    lastName: 'Aguillon',
    incomes: [],
    expenses: [],
    totalIncome: function(){
        return this.incomes.reduce((total, income) => total + income.amount, 0)
    },
    totalExpenses: function(){
        return this.expenses.reduce((total, expenses) => total + expenses.amount, 0)
    },
    accountInfo: function(){
        console.log(`${this.firstName} ${this.lastName}\n`)
        

        console.log("Incomes:")
        this.incomes.forEach(income => {
            console.log(`   -${income.desc} - $${income.amount}`)
        })
        console.log("Expenses:")
        this.expenses.forEach(expense => {
            console.log(`   -${expense.desc} - $${expense.amount}`)
        })
    },
    addIncome: function(desc, amount){
        this.incomes.push({desc, amount})
        console.log(`${desc}\n$${amount} income has been added`)
    },
    addExpense: function(desc, amount){
        this.expenses.push({desc, amount})
        console.log(`${desc}\n$${amount} expense has been added`)
    },
    accountBalance: function(){
        return this.totalIncome() - this.totalExpenses()
    }
}

// Adding some incomes and expenses
personAccount.addIncome('Salary', 3000);
personAccount.addIncome('Freelance Work', 500);
personAccount.addExpense('Rent', 1000);
personAccount.addExpense('Utilities', 200);

console.log(`Total Income: ${personAccount.totalIncome()}`)
console.log(`Total Income: ${personAccount.totalExpenses()}`)
personAccount.accountInfo()
console.log(`Balance: $${personAccount.accountBalance()}`)

