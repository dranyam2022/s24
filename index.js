const getCube = (num) => num ** 3;
let number = 3;
console.log(`The cube of ${number} is ${getCube(number)}.`);

const address = ["Blk9 Lt10 Deca 3", "Basak", "Lapu-lapu City", "Cebu", "6015"];
const [street, barangay, city, province, zip] = [...address];
console.log(`I live at ${street}, ${barangay}, ${city}, ${province}, ${zip}.`);

const animal = {
    name: "Rico",
    age: 4,
    breed: "Aspin",
    weigth: "20kg",
}
const { name, age, breed, weigth } = animal;
console.log(`${name} was a ${breed}. He weighed at ${weigth} and was very loyal`);

const arrayNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
arrayNum.forEach((num) => console.log(num));

const reduceNumber = arrayNum.reduce((accu, curr) => accu + curr, 0)
console.log(reduceNumber);