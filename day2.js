const country = "Palestine"; // cannot change

const name = "Fadi"; // String
const age = 22; // Number
const isStudent = true; // Boolean
const skills = ["HTML", "CSS", "JS"]; // Array
const user = { name, age }; // Object

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

console.log(checkAge(20));
