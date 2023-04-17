import { getStoredCart } from "../utils/fakeDB";

export const productsAndCartData = async () => {
    // fetch the data from database
    const productsData = await fetch('products.json')
    const products = await productsData.json();
    // match data that matches in localStorage
    let cartArray = [];
    const savedCart = getStoredCart();
    for (const id in savedCart) {
        const foundProducts = products.find(product => product.id === id)
        if (foundProducts) {
            foundProducts.quantity = savedCart[id];
            cartArray.push(foundProducts);
        }
    }
    return {cartArray,products};
}
