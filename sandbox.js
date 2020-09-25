const getTodos = (resource) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.addEventListener("readystatechange", () => {
      // console.log(request, request.readyState);
      if (request.readyState === 4 && request.status === 2000) {
        const data = JSON.parse(request.responseText);
        resolve(data);
        //callback(undefined, data);
        //console.log(request.responseText);
      } else if (request.readyState === 4) {
        reject("Could not request data.");
        //callback("Could not request data.");
        //console.log("Could not fetch data.", undefined);
      }
    });
    //request.open("GET", "https://jsonplaceholder.typicode.com/todos");
    request.open("GET", resource);
    request.send();
  });
};

getTodos("./todos.json").then((data) => {
  console.log(data);
}).catch((err) => {
  console.log(err);
});

// callback hell
/*
getTodos("todos.json", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
*/

// Promise
const getSomething = () => {
  return new Promise((resolve, reject) => {
    //resolve("Some data");
    reject("Some error");
  });
};

/*
getSomething().then((data) => {
  console.log(data);
}, (error) => {
  console.log(error);
});
*/

getSomething().then((data) => {
  console.log(data);
}).catch((err) => {
  console.log(err);
});

// fetch api
fetch("./todos.json")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// Async / Await

const getTodosAsync = async (url) => {
  try {
    const res = await fetch(url);
    if (res.status !== 200) {
      throw new Error("Cannot fetch data.");
    }

    const data = await res.json();
    return (data);
  } catch (error) {
    console.log(error);
  }
};

getTodosAsync("./todos.json")
  .then((data) => console.log(data))
  .catch((err) => console.log(err.message));
