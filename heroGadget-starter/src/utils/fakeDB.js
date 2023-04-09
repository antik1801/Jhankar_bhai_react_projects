// common function to connect local storage
// I have been explained line by line throught the command 

// function 1: add data to local storage
const addToDb = id =>{
    // step 1 create an empty object and check anything existes in the local db? 
    let shoppingCart = {};
    const storedCart = localStorage.getItem('shopping-cart');

    // step 2 if local db exists then parse the data from local storage
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart)
    }
    // step 3 check if the quantity exists in the localstorage if yes please increase the ammount and set to the shoppingCart object or no set a new item key value
    const quantity = shoppingCart[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    } else {
        shoppingCart[id] = 1;
    }
    // step 4 set the item to the local storage
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));

}

// get Stored Data from cart
const getStoredCart = () =>{
    // step 1 create an empty object and check anything existes in the local db? 
    let shoppingCart = {};
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart)
    }
    // step 2 return shopping cart from function
    return shoppingCart;
}

export {
    addToDb,
    getStoredCart,
    
}