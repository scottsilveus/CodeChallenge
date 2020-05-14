// returns new array of products with price 75 or higher
function filterByPrice(products) {
	products.filter((product)=> {product.price > 74})
}
// returns new array of products with weight higher than 1.8
function filterByWeight(products) {
	products.filter((product)=> {product.weight > 1.8})
}

// returns new array of products filtered by filterBy and over limit
// can use this one function instead of creating the two above 
function filterProducts(products, filterBy, limit) {
	return products.filter((product)=> product[filterBy] > limit)
}


// returns new obj from an array of objects where key = product.id
// and value = obj with remaining properties (id is removed) 
function arrayToObj(products) {
	let newObj = {};
	
	products.forEach((product) => {
		// destructure obj into id const and new prod obj that doesn't have id anymore
		const {id, ...prod} = product
	
		newObj[id] = prod
	})

	return newObj;
}
