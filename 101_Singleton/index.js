let instance

// Глобальная переменная
// class Counter {
//     constructor() {
//         if (!instance) {
//              instance = this;
//             instance.count = 0;
//         }  
//         return instance
//     }


//     getCount() {
//         return instance.count
//     }

//     increaseCount() {
//         return instance.count++;
//     }
// }


// ES6

class Counter {
    constructor () {
        if (typeof Counter.instance === "object") {
            return Counter.instance;
        }
        this.count = 0;
        Counter.instance = this;
        return this;
    }



getCounter() {
    return this.count;
}


increaseCounter() {
  return  this.count++
}

}









const myCount1 = new Counter();
const myCount2 = new Counter();

myCount1.increaseCounter();
myCount1.increaseCounter();
myCount2.increaseCounter();
myCount2.increaseCounter();


console.log(myCount1.getCounter());
console.log(myCount2.getCounter());



