const shoppingCart=[
    {name: 'shirt', price: 1900 , quantity: 4},
    {name: 'shoe', price: 1200  , quantity: 5},
    {name: 'pant', price: 2000  , quantity: 2},
    {name: 'belt', price: 1400  , quantity: 7},
];

function totalCost(products){
    let sum=0;
    for(let i=0;i<products.length;i++){
        const product = products[i];
        sum=sum+product.price;
        // console.log(product);
    }
    return sum;
}
const expense = totalCost(shoppingCart);
console.log('Total: ',expense);