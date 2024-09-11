const totalPrice = (products) =>{
    let sum = 0
    products.forEach(element => {
        sum = element.subTotal + sum
    });
    return sum
}

export {totalPrice}