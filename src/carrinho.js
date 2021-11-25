const items = [
    {fruta : "banana", preço: 2.99, amount: 0},
    {fruta : "maça", preço: 1.99, amount: 0},
];

const cart = [
];

const addCart = (fruta) => {
    const existedFruit = cart.find(x => x.fruta === fruta.fruta);
    if (existedFruit) {
        fruta.amount += 1
    }else{
        fruta.amount += 1
        cart.push(fruta)
    }
        
};



addCart(items[0])
addCart(items[0])
addCart(items[0])
addCart(items[1])
addCart(items[1])
addCart(items[1])
addCart(items[1])
console.log(cart)
