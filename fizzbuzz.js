function fizzbuzz(limit) {
    for (let i =0; i<=limit; i++){
        if (i === 0){
        	console.log(i)
        } else if (i%3 === 0 && i%5 === 0) {
        	console.log('fizzbuzz')
        } else if (i%5 === 0) {
        	console.log('buzz')
        } else if (i%3===0) {
        	console.log('fizz')
        }	else { 
        	console.log(i)
        }
    }
}