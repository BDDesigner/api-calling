console.clear();

/* axios.post("https://jsonplaceholder.typicode.com/posts", {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
})
.then(res => console.log(res.data))
.catch(err => console.log(err)) ; */

const makeRequest = async (config) => {
    return await axios (config);
};

const sendData = () => {
    makeRequest({
        url: "https://jsonplaceholder.typicode.com/posts",
        method: "post",
        data: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
    })
    .then( res => console.log(res.data))
    .catch( err => console.log(err));
};

sendData();


/* const getData = () => {
    makeRequest("https://jsonplaceholder.typicode.com/posts")
    .then( res => console.log(res))
    .catch( err => console.log(err));
};

getData(); */