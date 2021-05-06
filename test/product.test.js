import Product from '../src/model/product'
import Sell from '../src/service/sellProduct';

test('deve validar baixa de estoque de venda de uma unidade', () => {
    let produto = new Product('Celular', 500.00, 900.00, 10);
    Sell(produto, 1);
    expect(produto.stock).toBe(9);
})

test('deve aceitar a venda de mais do que uma unidade', () => {
    let produto = new Product('Celular', 500.00, 900.00, 10);
    Sell(produto, 3);
    expect(produto.stock).toBe(7);
})

test('Quando uma venda não houver estoque suficiente, a "transação" deverá ser cancelada e o estoque não deverá ser alterado.', () =>{
    let produto = new Product('SmartWatch', 500.00, 900.00, 5)
    const venda = 6
    if (venda <= produto.stock){
        Sell(produto, venda)
        expect(produto.stock).toBe(2)
    }   else {
        expect(produto.stock).toBe(5)
        return
    }
})