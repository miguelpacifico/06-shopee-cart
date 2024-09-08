async function addItem(userCart, item) {
    userCart.push(item);
}

async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name);

    if(index !== -1){
        userCart.splice(index,1);
    }
}

async function removeItem(userCart, item) {
    const indexFound = userCart.findIndex((p) => p.name === item.name);
    
    if(indexFound == -1) {
        console.log(`\n⚠️ ${item.name}: item não encontrado`);
        return;
    }

    if(userCart[indexFound].quantity > 1) {
        userCart[indexFound].quantity -= 1;
        console.log(`\n⚠️ ${item.name}: item deletado`);
        return;
    }

    if(userCart[indexFound].quantity == 1) {
        userCart.splice(indexFound, 1);
        return;
    }
}

async function calculateTotal(userCart) {
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log("\nShopee Cart Total:");
    console.log(`💰 Total: ${result}`);
}

async function displayCart(userCart) {
    console.log("\nShopee cart list");

    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity}x | SubTotal ${item.subtotal()}`);
    });
}

export {
    addItem,
    deleteItem,
    removeItem,
    calculateTotal,
    displayCart
}