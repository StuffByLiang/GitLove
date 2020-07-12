import * as firebase from 'firebase';

import { BehaviorSubject } from 'rxjs';
import { User } from '../interfaces/User';
import { Subscription } from 'rxjs';
import {userService} from './UserService';
import IonAlert from '@ionic/react';
import { getUserService } from './GetUserService';
import { matchService } from './MatchService';

export class LoginService {

    login = async () => {
        const provider = new firebase.auth.GithubAuthProvider();

        await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);

        let result: firebase.auth.UserCredential;
        try {
            result = await firebase.auth().signInWithPopup(provider);
        } catch (error) {
            alert("error signing in... please try using chrome or firefox and enable cookies")
            console.error(error);
        }
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        let credential: firebase.auth.OAuthCredential = result.credential;
        let token = credential.accessToken;
        // The signed-in user info.
        let user = result.user;


        const usersRef = getUserService.usersRef.doc(user.uid);

        usersRef.get()
            .then((docSnapshot) => {
                if (docSnapshot.exists) {
                    userService.init(user.uid);
                    matchService.init(user.uid);
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
                        features: [{
                            question: "Operating System?",
                            answer: ""
                        }, {
                            question: "Open Source Project?",
                            answer: ""
                        }, {
                            question: "Goals?",
                            answer: ""
                        }],
                        languages: [],
                        blockedUsers: [],
                        likedUsers: [],
                        nopedUsers: [],
                    });
                    userService.init(user.uid);
                    matchService.init(user.uid);
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