const addToDb = id =>{
    // let appliedJobCart = {}
    
    //get previous data from local storage
    // const storedCart = localStorage.getItem("applied-cart");
    // if(storedCart){
    //     appliedJobCart = JSON.parse(storedCart)
    // }


    localStorage.setItem("job-list",id)
    
}

export {addToDb}