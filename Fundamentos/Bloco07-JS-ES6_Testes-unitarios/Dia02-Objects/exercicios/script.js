const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  const deliveryPerson = order.order.delivery.deliveryPerson;
  const nameCustomer = order.name;
  const phoneNumber = order.phoneNumber;
  const address = order.address;
  const street = address.street;
  const number = address.number;
  const apartment = address.apartment;
  //Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701

  console.log(`Olá ${deliveryPerson}, entrega para: ${nameCustomer}, Telefone: ${phoneNumber}, R. ${street}, Nº: ${number}, AP: ${apartment}`);
}

customerInfo(order);

// const orderModifier = (order) => {
//   const newCustomer = order.name = 'Luiz Silva';
//   const newTotal = order.payment.total = 50;

//   let pizza1;
//   let pizza2;
//   const pizzas = Object.keys(order.order.pizza);
//   for (key in pizzas) {
//     pizza1 = pizzas[0];
//     pizza2 = pizzas[1];
//   }

//   const drink = Object.values(order.order.drinks);
//   const typeDrink = Object.values(drink[0].type).join('');

//   // "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."

//   console.log(`Olá ${newCustomer}, o total do seu pedido de ${pizza1}, ${pizza2} e ${typeDrink} é de R$ ${newTotal},00.`);

// }

// orderModifier(order);

const orderModifier = (order) => {
  const newCustomer = order.name = 'Luiz Silva';
  const newTotal = order.payment.total = 50;
  const pizzas = Object.keys(order.order.pizza);
  const drink = order.order.drinks.coke.type;

  // "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."

  console.log(`Olá ${newCustomer}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${drink} é de R$ ${newTotal},00.`);

}

orderModifier(order);