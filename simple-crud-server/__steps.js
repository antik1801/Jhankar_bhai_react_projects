/*

MONGODB connection
1. create account
2.create an user with password
3. database > connect > driver > node > view all code
4. change the password in uri
-------------------------------------------------------
1. CREATE operation - POST
2. app.post('/users/',async(req,res)=>{

})
3. make the function async to use await inside it
4. make sure you use express.json middlewere 
5. access data from the body
6. const result = await userCollection.insertOne(user)
7. res.send(result)

*/ 


/*
CLIENT site
---------------------------------
1. create fetch
2. add second paramiter as an object
3. provide method 'POST'
4. add headers: {'content-type': 'application/json'}
5. add body: JSON.stringify(user)
*/

/*
-------------READ---------------

1. create a cursour = userCollection.find()
2. const result = await cursour.toArray()


-------------Delete--------------
--------------------------------

1. create app.delete('/users/:id', async(req,res)=>{})
2. specify unique object id to delete the right user
3. const query = {_id: new ObjectId(id)}
4. const result = await userCollection.deleteOne(query)


----------------------CLient-------------------
1. create dynamic url with unique id
2. make sure the delete method

*/