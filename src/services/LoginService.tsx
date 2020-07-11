import * as firebase from 'firebase';
import { BehaviorSubject } from 'rxjs';
import { User } from '../interfaces/User';
import FindService from '../services/FindService';
import { Subscription } from 'rxjs';

class LoginService {

    

    login = async () => {
        const provider = new firebase.auth.GithubAuthProvider();

        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a GitHub Access Token. You can use it to access the GitHub API.
            let credential = result.credential as firebase.auth.OAuthCredential;
            let token = credential.accessToken
            // The signed-in user info.
            var user = result.user;
            
            console.log(user);
            
            const fs: FindService = new FindService;
            
            const usersRef = fs.usersRef.doc(user.uid);

            usersRef.get()
                .then((docSnapshot) => {
                    if (docSnapshot.exists) {
                        usersRef.onSnapshot((doc) => {
                            // stuff on login
                        });
                    } else {
                        usersRef.set({
                            _id: user.uid,
                            name: user.displayName, 
                            profilePicture: user.photoURL,
                            gender: null,
                            dateOfBirth: null,
                            description: null,
                            features: null,
                            languages: [],
                        });
                    }
                });

        }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
    });
    }

    
    
    

}


export default LoginService;