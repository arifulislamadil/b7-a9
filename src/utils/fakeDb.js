const addToDb = id =>{
    let appliedJobCart = {}
    
    // get previous data from local storage
    const storedCart = localStorage.getItem("applied-cart");
    if(storedCart){
        appliedJobCart = JSON.parse(storedCart)
    }

    // Add Quantity
    let quantity = appliedJobCart[id]
    if(quantity){
        
        appliedJobCart[id]=quantity+1
    }else{
        appliedJobCart[id]=1
    }

    localStorage.setItem("applied-cart",JSON.stringify(appliedJobCart))
    
}


const getStoredCart = ()=>{
    let appliedJobCart = {}
     // get previous data from local storage
     const storedCart = localStorage.getItem("applied-cart");
     if(storedCart){
         appliedJobCart = JSON.parse(storedCart)
     }
     return appliedJobCart
}

export {addToDb, getStoredCart}