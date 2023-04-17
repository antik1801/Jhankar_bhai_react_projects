/*

        ---------------------------------
        ---------------------------------
                    initial steps


* 1. visit: console.firebase.google.com
* 2. Create project (skip google analytics)
* 3. Register App
* 4. Install firebase
* 5. add config file to your projects
* 6. Danger : Do not publish or make firebase config by pushing those to github.

            -----------------------------------------------
                          Intrigrations
            -----------------------------------------------
                          


* 7. Go to docs > build > authentication > web > get started
* 8. Export App from the firebase.config.js file: export default app
* 9. login.js: import {getAuth} from firebase/auth 
* 10. create const auth = getAuth(app)
            -----------------------------------------------
                          Provider setup 
            -----------------------------------------------
* 11. Import google Auth provider and create a new GoogleAuthProvider
* 12. use signInWithPopUp and pass auth and provider
* 13. activate signin method(google,tweeter,youtube,facebook)
* 14. [vite]: change 127.0.0.1 to localhost

*           -------------------------------------------------
                            More Auth Provider
*           -------------------------------------------------
*
* 15. Activate the auth provider(create app, provide redirect URL, client id, client secret)
* 16. 
*/