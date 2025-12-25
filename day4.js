console.log("Start");

setTimeout(() => {
  console.log("This runs later");
}, 1000);

console.log("End");

const myPromise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("Operation was successfuly");
  } else {
    reject("There was an error");
  }
});

myPromise
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

const fetchData = async () => {
  let response = await fetch("https://jsonplaceholder.typicode.com/users");
  let data = await response.json();
  console.log(data);
};

fetchData();

const getPosts = async () => {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts");
  let posts = await response.json();
  console.log(posts);
};

getPosts();
