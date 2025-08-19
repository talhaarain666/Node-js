let addToCart = () => {
    return "Added to Cart"
}

let changeQty = () => {
    return 5
}

// default export for CommonJS module
// module.exports=addToCart

// named exports for CommonJS module (multiple exports)
module.exports = {
    addToCart,
    changeQty
}