/**
 * ---------------------------------------------------
 *                  BASIC
 * ---------------------------------------------------
 * 
 * 1. Donot show the link to them who should not see it
 * 2. only show the person / types of user who should show it
 * 3. do not allow to visit the link by typing on the url
 * (use admin route to check whether a user is admin / not admin)
 * 4. If not admin then user redirect to other page you could logout user and send them to the login as well
 * 
 *
 * 
 * ------------------------------------------------------
 *                  To send data
 * ------------------------------------------------------
 * 1. verify JWTtoken(identify admin/user)(send authorization & token to the server if possible  use axios to send jwt token by intercepting the request)
 * 2. If it is an admin activity make sure only admin is posting data
 * by using verifyAdmin
 * 
 * 
 */