const costProduct = -5;
const saleProduct = 105;

let total = costProduct + (0.2 * costProduct);
let profitPerProduct = saleProduct - total;
let totalProfit = profitPerProduct * 1000;

if (costProduct < 0 || saleProduct < 0) {
    console.log ('Erro, valor não aceito')
} else {
    console.log('Lucro total com a venda de 1000 produtos: R$ ' + totalProfit);
}
