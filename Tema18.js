// Exercitiul 1

let badKids = "Lista copiilor pesepsiti este urmatoarea: Manuela, Daniel, Vicentiu";

console.log(badKids.includes("Daniel"));

badKids = badKids.replace("Daniel", "Cornel");

console.log(badKids);

//Exercitiul 2

const testGrades = "9.80/6.85/9.10/7.80/8.20";

let sum = 0;
let splitGrades = testGrades.split("/");
console.log(splitGrades);

splitGrades.forEach((test) => {
    test = Number(test);
    sum = sum + test;
})

const result = sum / splitGrades.length;
console.log(result);

// Exercitiul 3

const props = {
    name: 'Minge fotbal Nike T90',
    price: 220,
    currency: "RON",
    brand: "Nike"
  }

const {name, price, currency} = props;

const answer = `Produsul ${name} are pretul ${price} ${currency}`

console.log(answer)

// Exercitiul 4

const additionalProps = {
    isAvailable: true
  }

  const bigProps = {...props, ...additionalProps}

  console.log(bigProps);