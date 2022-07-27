'use strict';

function getDivisors(num) {
	let result = [];

	for (let i = 1; i <= num; i++) {
		if(num % i == 0) {
			result.push(i);
		}
	}

	return result;
}

console.log(getDivisors(24));


/* function isSimple(num){
    for (let i = 2; i < num; i++) {
    if (num % i == 0) {
        return false;
    }    
    }
    return true;
}
 
 
function getSimpleDivisors(num){
    for(let j=1; j<num; j++){
        if(num % j == 0 && isSimple(j)){
            console.log(j);
        }
    }
}
 
console.log(getSimpleDivisors(99)); */