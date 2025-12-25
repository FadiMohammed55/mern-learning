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

console.log(checkAge(25));

console.log(`My name is ${name} and I am a ${role}`);
