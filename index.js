/* ALGORITHM TO FIND WHETHER OR NOT A NUMBER IS PRIME
test number 4
1. check if 4 is divisible by each element of primeArr and push to divVal array quotients of op
2. if no whole number returned to divVal arr then it is PN
3. if any whole numbers returned to divVal arr then it is not PN
4. if input is equal to any value of primeArr array then it is PN
*/

// 4; 4-4 = 0 ; false
const checkWholeNum = n => {
     if(n!==0) {
         return (n - Math.floor(n) !== 0);
     }
}

const checkPrime = number => {
    const primeArr = [2, 3, 5, 7, 11];
    const divVal = [];
    primeArr.forEach(val => {
        divVal.push(number/val);
        // divVal = [2, 1.3333333333333333, 0.8, 0.5714285714285714, 0.36363636363636365]
    });
    

    if(divVal.every(el => checkWholeNum(el)) || primeArr.some(el => number === el)){
        console.log(`${number} is a Prime Number!`);
    } else {
        console.log(`${number} is not a Prime Number :(`);
    }
};

checkPrime(3573);
checkPrime(3);
checkPrime(100094);
checkPrime(7);
checkPrime(11);




//ALGORITHM TO LOG PRIME NUMBERS TO THE CONSOLE
const logPrime = (lowLimit, upLimit) => {
    for(let i = lowLimit; i >= lowLimit && i <= upLimit; i++) {
    const divVal2 = [];
    const prime = [2, 3, 5, 7, 11];
    
    prime.forEach(val => divVal2.push(i/val));

    if (divVal2.every(el => checkWholeNum(el)) || prime.some(el => i === el)) {
        console.log(i);
    }
};
};

logPrime(1000, 1071);