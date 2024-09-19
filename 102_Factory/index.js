


// базовый класс
class Bmw {
    constructor(model, price, maxSpeed) {
        this.model = model;
        this.price = price;
        this.maxSpeed = maxSpeed;
    }
}



// фабрика, которая создает разные экземпляры нашего базового класса в зависимости от входящего параметра в ее метод

class BmwFactory {

    create(type) {
        if (type === 'X5') {
            return new Bmw('X5', 100000, 200)
        }
        if (type === 'X6') {
            return new Bmw('X6', 120000, 220)
        }
    }

}


const factory = new BmwFactory();

const bmwX5 = factory.create('X5');
const bmwX6 = factory.create('X6');

console.log(bmwX5);
console.log(bmwX6);
