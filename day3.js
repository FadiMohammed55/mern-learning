const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map((num) => num * 2);
console.log(doubled);

const even = numbers.filter((num) => num % 2 === 0);
console.log(even);

const user = {
  name: "Fadi",
  age: 22,
  skills: ["HTML", "JS"],
};

console.log(user.name);

const { name, age } = user;
console.log(name, age);

const users = [
  { name: "Ali", age: 20 },
  { name: "Sara", age: 16 },
];

const adults = users.filter((u) => u.age >= 18);
console.log(adults);
