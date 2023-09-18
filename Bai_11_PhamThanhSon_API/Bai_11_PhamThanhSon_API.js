fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'DELETE',
    })
    .then((response) => response.json())
    .then(() => console.log("Thanh Cong"))
    .catch(() => console.error("That Bai"))