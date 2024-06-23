import createItem from "./service/item.js"
import * as cartService from "./service/cart.js"

const myCart = [];
const wishList = [];

console.log("\n Welcome to the your Shopee Cart!");

const item1 = await createItem("Camisa do SuperMan", 59.90, 2);
const item2 = await createItem("Caneca de Café", 49.01, 1);
const item3 = await createItem("Camisa do Flash", 59.90, 2);
const item4 = await createItem("Caneca de Leite", 49.01, 1);

await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);
await cartService.addItem(myCart, item3);
await cartService.addItem(myCart, item4);

await cartService.removeItem(myCart, item2)
//await cartService.deleteItem( myCart, item2.name);
await cartService.displyCart(myCart);
// console.log(` Shopee Cart Total is : R$ ${await cartService.calculateTotal(myCart)} \n`);

