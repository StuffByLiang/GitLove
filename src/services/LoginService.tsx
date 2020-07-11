import * as firebase from 'firebase';

import { BehaviorSubject } from 'rxjs';
import { User } from '../interfaces/User';
import FindService from '../services/FindService';
import { Subscription } from 'rxjs';
import {userService} from './UserService';
import IonAlert from '@ionic/react';

export class LoginService {

    login = async () => {
        const provider = new firebase.auth.GithubAuthProvider();

        await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);

        let result: firebase.auth.UserCredential;
        try {
            result = await firebase.auth().signInWithPopup(provider);
        } catch (error) {
            console.error("WHAT THE BLOODY FUCK", error);
        }
        console.log(result);
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        let credential: firebase.auth.OAuthCredential = result.credential;
        let token = credential.accessToken;
        // The signed-in user info.
        let user = result.user;

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
                        dateOfBirth: new firebase.firestore.Timestamp(0, 0),
                        description: null,
                        features: null,
                        languages: [],
                        blockedUsers: [],
                        likedUsers: []
                    });
                }

            });

    }


    logout = async () => {
        try {
            await firebase.auth().signOut();
        } catch (error) {
            console.error("Logout Error", error);
        }
    }

}

window['loginService'] = new LoginService();
export const loginService: LoginService = window['loginService'];