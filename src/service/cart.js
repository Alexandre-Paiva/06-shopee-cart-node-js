//adicionar item no carrinho.
async function addItem(userCart, item) {
    userCart.push(item);
};

// deletar item do carrinho.
async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name);

    if(index !== -1) {
        userCart.splice(index, 1);
    }
};

// remover item do carrinho 
async function removeItem(userCart, item) {
    // Localizar o indice do item 
    const indexFound = userCart.findIndex((p) =>
    p.name === item.name);

    //Caso não localize o item 
     if(indexFound == -1){
        console.log(`Item não encontardo`);
        return;
     }
     // se item > 1 subtrair 1
     if(userCart[indexFound].quantity > 1) {
        userCart[indexFound].quantity -= 1;
        return;
     }
     //caso item = 1 deletar item
     if(userCart[indexFound].quantity == 1) {
        userCart.splice(indexFound, 1);
        return;
     }

    /* Verificar se tamanho do array é maior que zero e menor que o tamanho total
    if(index >= 0 && index < userCart.length) {
        userCart.splice(deleteIndex, 1)
    }
        */

};

// mostrar os itens e o subtotal do carrinho.
async function displyCart(userCart){
    userCart.forEach((item, index) => {
        console.log(
            `${index + 1 } . ${item.name} - R$ ${item.price} | ${item.quantity} X | Subtotal = ${item.subtotal()}`
        );
    });
    console.log(` Shopee Cart Total is : R$ ${await calculateTotal(userCart)} \n`);
}

// calcular o total do carrinho 
async function calculateTotal(userCart) {
    return userCart.reduce((total, item) => total + item.subtotal(), 0);
};

export {
    addItem,
    deleteItem,
    removeItem,
    calculateTotal,
    displyCart
}