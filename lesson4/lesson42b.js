let basket = [
    {
        product: "apple",
        price: 30
    },
    {
        product: "banana",
        price: 15
    },
    {
        product: "avocado",
        price: 40
    },
    {
        product: "orange",
        price: 23
    }
];
let basketPrice = 0;
for (let prod of basket) {
    basketPrice += prod.price;
    console.log("Товар " + prod.product + " стоит: " + prod.price);
}

console.log("Стоимость корзины: " + basketPrice + " у.е.");