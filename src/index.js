import createItem from './services/item.js'
import * as cartService from "./services/cart.js";

const myCart = [];
const myWishList = [];

console.log("Welcome to the your Shopee Cart!");

const item1 = await createItem("Bone Shaker", 20.99, 1);
const item2 = await createItem("Twin Mill", 39.99, 3);
const item3 = await createItem("Dodge Charger Daytona", 19.50, 1);
const item4 = await createItem("Nissan Skyline GT-R (R34)", 23.20, 2);
const item5 = await createItem("Lamborghini Aventador", 15.67, 5);
const item6 = await createItem("Porsche 911 GT3", 26.20, 7);
const item7 = await createItem("Ford Mustang GT", 19.80, 8);
const item8 = await createItem("Aston Martin DB5", 35.50, 3);
const item9 = await createItem("Bugatti Veyron", 60.95, 1);
const item10 = await createItem("Koenigsegg Agera R", 72.15, 2);
const item11 = await createItem("Pagani Huayra", 30.00, 2);

await cartService.addItem(myCart,item1);
await cartService.addItem(myCart,item2);
await cartService.addItem(myCart,item3);
await cartService.addItem(myWishList,item4);
await cartService.addItem(myCart,item5);
await cartService.addItem(myCart,item6);
await cartService.addItem(myCart,item7);
await cartService.addItem(myWishList,item8);
await cartService.addItem(myCart,item9);
await cartService.addItem(myWishList,item10);

await cartService.removeItem(myCart,item6);
await cartService.removeItem(myCart,item11);

await cartService.deleteItem(myCart, item7.name);

await cartService.displayCart(myCart)

await cartService.calculateTotal(myCart)
