/*
1. create a post api on the server site.
2. client site send data via post
3. set fetch method inside the fetch options (second paramiter of the fetch )
4. options will have 3 things  : method
5. options will have headers : 'content-type: 'application/json'
6. body : don't forget to send data by json stringify in the body
7. on the server site don't forget to use express middlewere
    app.use(express.json())
*/