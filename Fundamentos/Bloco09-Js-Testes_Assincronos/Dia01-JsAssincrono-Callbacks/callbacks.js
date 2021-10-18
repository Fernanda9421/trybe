// Array de objetos que representa os gastos de uma pessoa em um mês:
const myExpenses = [
  {
    gym: 99,
  },
  {
    ifood: 200,
  },
  {
    phone: 60,
  },
  {
    internet: 100,
  },
];

// Quanto esta pessoa recebeu neste mesmo mês
const myIncome = 1000;

// Balanço do mês:
const monthlyBudget = (myIncome, myExpenses, callback) => {

  const totalExpenses = callback(myExpenses);
  const totalAfterExpenses = myIncome - totalExpenses;

  console.log(`Balanço do mês:
    Recebido: R$${myIncome},00
    Gasto: R$${totalExpenses},00
    Saldo: R$${totalAfterExpenses},00 `);
};

// Função callback:
const handleExpenses = myExpenses => {
  const eachValue = myExpenses.map((item) => Object.values(item)[0]); // [ 99, 200, 60, 100 ]
  const totalExpense = eachValue.reduce((acc, curr) => acc + curr , 0); // 459
  return totalExpense;
};

monthlyBudget(myIncome, myExpenses, handleExpenses);