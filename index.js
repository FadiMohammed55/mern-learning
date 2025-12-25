const name = "Fadi";
const role = "Future MERN Developer";

let age = 22;
const country = "Palestine";

const isStudent = true;
const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js"];

const user = { name, role, age, country, isStudent, skills };

const greet = (name) => `Hello ${name}`;

const score = 75;

if (score >= 60) {
  console.log("Pass");
} else {
  console.log("Fail");
}

const checkAge = (age) => {
  return age >= 18 ? "Adult" : "Minor";
};

const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map((num) => num * 2);
console.log(doubled);

const even = numbers.filter((num) => num % 2 === 0);
console.log(even);

const username = {
  firstname: "Fadi",
  lastname: "Mohammed",
  age: 24,
  skills: ["MongoDB", "Express", "React", "Node.js"],
};

console.log(username.firstname);

const users = [
  { name: "Ali", age: 20 },
  { name: "Sara", age: 17 },
];

const adults = users.filter((u) => u.age >= 18);
console.log(adults);

console.log(checkAge(25));

console.log(`My name is ${name} and I am a ${role}`);
