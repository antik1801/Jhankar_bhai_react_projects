// common function to connect local storage
// I have been explained line by line throught the command 

// function 1: add data to local storage
const addToDb = id =>{
    let shoppingCart = {}
    // get Previoud data from local storage
    const storedCart = localStorage.getItem('shopping-cart')
    if (storedCart) {
        // if data exists in stored card
        shoppingCart = JSON.parse(storedCart);
    } else {
        
    }
// add quantity
    const quantity = shoppingCart[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    } else {
        shoppingCart[id] = 1;

        /*
        this block will generate a object like this 
        shoppingCart = {
            '623853b2578e9e6ad1ae0dd5': 1,
         }
        */
    }
    localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart))

}

export {
    addToDb,
}