import * as firebase from 'firebase';
import { BehaviorSubject } from 'rxjs';
import { User } from '../interfaces/User';

class UserService {

    id: string;
    userRef: firebase.firestore.DocumentReference;

    userDoc: User | null;
    userDoc$: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);

    constructor(id: string) {
        this.id = id;
        this.userRef = firebase
            .firestore()
            .collection('Users')
            .doc(this.id);
    }


    init() {
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
                            preferences: obj['preferences'],
                            languages: obj['languages']
                        };
                        this.userDoc$.next({
                            _id: obj['_id'],
                            name: obj['name'],
                            profilePicture: obj['profilePicture'],
                            gender: obj['gender'],
                            dateOfBirth: obj['dateOfBirth'],
                            description: obj['description'],
                            features: obj['features'],
                            preferences: obj['preferences'],
                            languages: obj['languages']
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
                            preferences: obj['preferences'],
                            languages: obj['languages']
                        };
                        this.userDoc$.next({
                            _id: obj['_id'],
                            name: obj['name'],
                            profilePicture: obj['profilePicture'],
                            gender: obj['gender'],
                            dateOfBirth: obj['dateOfBirth'],
                            description: obj['description'],
                            features: obj['features'],
                            preferences: obj['preferences'],
                            languages: obj['languages']
                        });
                }
            })
    }
}

export default UserService;