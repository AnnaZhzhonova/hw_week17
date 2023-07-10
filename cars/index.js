const data = [
    {
      id: 1,
      type: 'car',
      brand: 'Audi',
      doors: 4,
      price: 4300000,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg'
    },
    {
      id: 2,
      type: 'car',
      brand: 'Mercedes-Benz',
      doors: 4,
      price: 2800000,
      image: 'https://www.mercedes-benz-mena.com/en/passengercars/mercedes-benz-cars/models/e-class/sedan-w213-fl/explore/_jcr_content/notificationboxes/notificationbox/image.MQ6.12.20211013084329.jpeg'
    },
      {
      id: 3,
      type: 'bike',
      brand: 'Harley-Davidson',
      maxSpeed: 210,
      price: 1300000,
      image: 'https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg'
    },
    {
      id: 4,
      type: 'bike',
      brand: 'Harley-Davidson',
      maxSpeed: 220,
      price: 1400000,
      image: 'https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png'
    }
  ];


class Transport {
    constructor(type, brand, price, image){
        this.type = type;
        this.brand = brand;
        this.price = price;
        this.image = image
    }
    getImage(){
        return this.image
    }
    getInfo(){
        return `type: ${this.type}, brand: ${this.brand}`
        
    };
    getPrice(){
        return `цена: ${this.price} руб.`;
    };
}
class Car extends Transport {
    constructor (type, brand, price, image, doors){
        super(type, brand, price, image);
        this.doors = doors;
    };

    getDoorsCount(){
        return `количество дверей: ${this.doors}`;
    }
}

class Bike extends Transport {
    constructor (type, brand, price, image, maxSpeed){
        super(type, brand, price, image);
        this.maxSpeed = maxSpeed;
    }
    getMaxSpeed(){
        return `максимальная скорость: ${this.maxSpeed} км/ч`;
    }
}


const catalog = document.querySelector('.catalog');


function createCarCard(parent, img, text, price,doors){
    const catalogCard = document.createElement('div');
    catalogCard.classList.add('card');
    parent.append(catalogCard);
    const image = document.createElement('img');
    image.src = img;
    catalogCard.append(image);
    const description = document.createElement('div');
    description.innerHTML = text;
    catalogCard.append(description);
    const itemPrice = document.createElement('p');
    itemPrice.textContent = price;
    catalogCard.append(itemPrice); 
    const doorsCount = document.createElement('p');
    doorsCount.textContent = doors;
    catalogCard.append(doorsCount);
}



function createBikeCard(parent, img, text, price,speed){
    const catalogCard = document.createElement('div');
    catalogCard.classList.add('card');
    parent.append(catalogCard);
    const image = document.createElement('img');
    image.src = img;
    catalogCard.append(image);
    const description = document.createElement('div');
    description.innerHTML = text;
    catalogCard.append(description);
    const itemPrice = document.createElement('p');
    itemPrice.textContent = price;
    catalogCard.append(itemPrice); 
    const maxSpeed = document.createElement('p');
    maxSpeed.textContent = speed;
    catalogCard.append(maxSpeed);
} 

for(let item of data){
    if (item.type === 'car'){
        const car = new Car (item.type, item.brand, item.price, item.image, item.doors);
        createCarCard(catalog, car.getImage(), car.getInfo(),car.getPrice(),car.getDoorsCount());

    } else if (item.type === 'bike'){
        const bike = new Bike(item.type,item.brand, item.price,item.image, item.maxSpeed);
        createBikeCard(catalog, bike.getImage(), bike.getInfo(),bike.getPrice(),bike.getMaxSpeed());

    }
}