//(a) Use the fetch() method to make a GET request to an API (e.g., JSONPlaceholder: https://jsonplaceholder.typicode.com/posts). Display the response data in the console.

let fetch_promise = fetch('https://jsonplaceholder.typicode.com/posts');
fetch_promise.then(function(response) {
    if (!response.ok) {
    }
    return response.json();
  })
  .then(function(data) {
    console.log(data);
  });


//(b) Use the fetch() method to make a GET request to an API (e.g., JSONPlaceholder: https://jsonplaceholder.typicode.com/posts). Store all the titles in a custom list and display this list in the console.

let fetch_promise1 = fetch('https://jsonplaceholder.typicode.com/posts');
fetch_promise1.then(function(response) {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(function(posts) {
    const titles = posts.map(function(post) {
      return post.title;
    });
    console.log(titles); 
  })
 
