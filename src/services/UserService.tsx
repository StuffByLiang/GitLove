import * as firebase from 'firebase';
import { BehaviorSubject } from 'rxjs';
import { User } from '../interfaces/User';

class UserService {

    id: string;
    userRef: firebase.firestore.DocumentReference;

    userDoc: User | null;
    userDoc$: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);

    constructor() {

    }

    // constructor(id: string) {
    //     this.id = id;
    //     this.userRef = firebase
    //         .firestore()
    //         .collection('Users')
    //         .doc(this.id);
    // }


    init(id: string) {
        this.id = id;
        this.userRef = firebase
            .firestore()
            .collection('Users')
            .doc(this.id);

        return new Promise((resolve, reject) => {
            this.userRef
                .get()
                .then((result) => {
                    if (result.exists) {
                        const obj = result.data();
                        this.userDoc = {
                            _id: obj['_id'],
                            name: obj['name'],
                            profilePicture: obj['profilePicture'],
                            gender: obj['gender'],
                            dateOfBirth: obj['dateOfBirth'],
                            description: obj['description'],
                            features: obj['features'],
                            languages: obj['languages'],
                            blockedUsers: obj['blockedUsers'],
                            likedUsers: obj['likedUsers'],
                        };
                        this.userDoc$.next({
                            _id: obj['_id'],
                            name: obj['name'],
                            profilePicture: obj['profilePicture'],
                            gender: obj['gender'],
                            dateOfBirth: obj['dateOfBirth'],
                            description: obj['description'],
                            features: obj['features'],
                            languages: obj['languages'],
                            blockedUsers: obj['blockedUsers'],
                            likedUsers: obj['likedUsers'],
                        });
                        this.setupStreams();
                    } else {
                        this.userDoc$.next(null);
                        this.userDoc = null;
                    }
                    resolve();
                }).catch(console.error);
        });
    }


    setupStreams() {
        this.userRef
            .onSnapshot((data) => {
                console.log('doc update', data);
                if (!data.exists) {
                    this.userDoc$.next(null);
                    this.userDoc = null;
                } else {
                    const obj = data.data();
                        this.userDoc = {
                            _id: obj['_id'],
                            name: obj['name'],
                            profilePicture: obj['profilePicture'],
                            gender: obj['gender'],
                            dateOfBirth: obj['dateOfBirth'],
                            description: obj['description'],
                            features: obj['features'],
                            languages: obj['languages'],
                            blockedUsers: obj['blockedUsers'],
                            likedUsers: obj['likedUsers'],
                        };
                        this.userDoc$.next({
                            _id: obj['_id'],
                            name: obj['name'],
                            profilePicture: obj['profilePicture'],
                            gender: obj['gender'],
                            dateOfBirth: obj['dateOfBirth'],
                            description: obj['description'],
                            features: obj['features'],
                            languages: obj['languages'],
                            blockedUsers: obj['blockedUsers'],
                            likedUsers: obj['likedUsers'],
                        });
                }
            })
    }

    isLoggedIn(): boolean {
        return this.userDoc !== undefined;
    }
}

window['userService'] = new UserService();
export const userService: UserService = window['userService'];

/*


// component mount
const us = new UserService('penis');
const sub$ = us.userDoc$.subscribe(data => {
    console.log(data);
    // data is of type User
});


// unmount
sub$.unsubscribe();



*/