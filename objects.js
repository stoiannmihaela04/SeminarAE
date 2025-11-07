const obj = {
 name: "Adrian",
 greet: function() {
    console.log(`Hello, ${this.name}`);

 },
 greet2: () => {
    console.log(`Hello, ${this.name}`)
 }
}

obj.name = "Mihai"
obj.age = 26

// obj.greet()

// console.log(obj.age);

const product = {
    price: 25,
    name: 'Bottle',
    description: 'Aqua Carpatica'
}

const product2 = {
    name: product.name,
    description: product.description,
    price:30
}

console.log(product2);