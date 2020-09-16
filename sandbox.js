const getTodos = (callback) => {
  const request = new XMLHttpRequest();
  request.addEventListener("readystatechange", () => {
    // console.log(request, request.readyState);
    if (request.readyState === 4 && request.status === 2000) {
      callback(undefined, request.responseText);
      //console.log(request.responseText);
    } else if (request.readyState === 4) {
      callback("Could not request data.");
      //console.log("Could not fetch data.", undefined);
    }
  });
  request.open("GET", "https://jsonplaceholder.typicode.com/todos");
  request.send();
};

getTodos((err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
