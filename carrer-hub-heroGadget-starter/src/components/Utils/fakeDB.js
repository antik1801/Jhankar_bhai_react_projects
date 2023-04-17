const addToDb = id =>{
    // step 1 create an empty object and check anything existes in the local db? 
    let jobCart = {};
    const storedJobs = localStorage.getItem('job-cart');
    // step 2 if local db exists then parse the data from local storage
    if (storedJobs) {
        jobCart = JSON.parse(storedJobs);
    }
    // step 3 check if the quantity exists in the localstorage if yes please increase the ammount and set to the shoppingCart object or no set a new item key value
    const quantity = jobCart[id];
    if (quantity) {
        const newQuantity = quantity+1;
        jobCart[id]= newQuantity;
    }
    else{
        jobCart[id] = 1;
    }
    // step 4 set the item to the local storage
    localStorage.setItem('job-cart', JSON.stringify(jobCart))
}

const getStoredCart = () =>{
    // step 1 create an empty object and check anything existes in the local db? 
    let jobCart = {};
    const storedJobs = localStorage.getItem('job-cart');
    if (storedJobs) {
        jobCart = JSON.parse(storedJobs);
    }
    // return jobCart
    return jobCart;
}
export{
    addToDb,
    getStoredCart,
}