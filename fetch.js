console.clear();

fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    body: JSON.stringify({
    id:1,
      title: 'foo123',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
})
  .then (( res ) => {
      if ( !res.ok ) {
          const message = `Error is ${ res.status }`
          throw new Error (message)
      } else {
          return res.json()
      }
  })
  .then ((res) => console.log(res))
  .catch((error) =>{
    console.log(error)
  })

