import * as firebase from 'firebase';
import { BehaviorSubject } from 'rxjs';
import { User } from '../interfaces/User';
import FindService from '../services/FindService';
import { Subscription } from 'rxjs';
import UserService from './UserService';

export class LoginService {

    login = async () => {
        const provider = new firebase.auth.GithubAuthProvider();

        firebase.auth().setPersistence('local');
        // const result = await firebase.auth().signInWithPopup(provider);
        firebase.auth().signInWithPopup(provider).then(function (result) {
            // This gives you a GitHub Access Token. You can use it to access the GitHub API.
            let credential = result.credential as firebase.auth.OAuthCredential;
            let token = credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            window['myUserService'] = new UserService(result.user.uid);
            window['myUserService'].init();

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
                            blockedUsers: [],
                            likedUsers: []
                        });
                    }

                });

        }).catch(function (error) {
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


    logout = async () => {
        firebase.auth().signOut().then(function () {
            // Sign-out successful.
        }).catch(function (error) {
            // An error happened.
            console.error(error);
        });
    }




}

window['loginService'] = new LoginService();
export const loginService: LoginService = window['loginService'];