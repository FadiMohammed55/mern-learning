fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log("Error:", error));

const getPosts = async () => {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let posts = await response.json();
    console.log(posts);
  } catch (error) {
    console.log("Error:", error);
  }
};

getPosts();

const createPost = async () => {
  const postData = {
    title: "New Post",
    body: "This is a new post.",
    userId: 1,
  };

  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  });

  const result = await response.json();
  console.log(result);
};

createPost();

// GET: Fetch data
const fetchData = async () => {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts");
  let data = await response.json();
  console.log(data);
};

// POST: Send data
const sendData = async () => {
  const postData = { title: "Post Title", body: "Post Body", userId: 1 };
  let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  });
  let result = await response.json();
  console.log(result);
};

fetchData();
sendData();
