console.clear();

const makeRequest = async (url, config) => {
    const res = await fetch(url, config);
    if (!res.ok) {
        const message = `Error is : ${res.status}`;
        throw new Error (message);
    }
    const data = res.json();
    return data;
};

const sendData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      
    })
    .then((res) => {
        console.log(res);
    })
    .catch(error => console.log(error))
};

sendData();

/* get data */
/* const getData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts')
    .then((res) => {
        console.log(res);
    })
    .catch(error => console.log(error))
};

getData(); */