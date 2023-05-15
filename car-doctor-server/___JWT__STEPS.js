/**
* JWT: Secure your api
* CREATE TOKEN
---------------------------------------
after user login
1. send user login basic info to create token
2. in server side: install npm i jwt
3. import jesonwebtoken
4. jwt.sign(payload,secret,{expires})
5. return token to the client side
6. after receiving the token store it either http only cookies or localstorage

7. use a general space onauthstatechange

--------------------------------------------------------
                    send token to the server
--------------------------------------------------------
1. for sensitive api call () send authorization headers {authorization: `bearer token`}
--------------------------------------------------------
                    Verify Token
`````````````````````````````````````````````````````````
1. create a function verifyJWT(middlewere)
2. this function have 3 parameters(req,res,next)
3. first check whether the authorization header existed
4. if not send 401
5. get the token out of the authorization header
6. call jey.verify(token,secret,(err,decode))
7. if err => send 401
8. send decoded to the req object so that we can retrive it later
9. call the next() to go to the next function
------------------------------------------------------------
1. check whether tokan has been matched to the email


*/