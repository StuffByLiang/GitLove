import * as firebase from 'firebase';
import { BehaviorSubject } from 'rxjs';
import { User } from '../interfaces/User';


class GetUserService {

    users: Array<User>

    usersRef: firebase.firestore.CollectionReference;
    Users$: BehaviorSubject<Array<User>> = new BehaviorSubject([]);

    init() {
        this.usersRef = firebase
            .firestore()
            .collection('Users');
        return new Promise((resolve, reject) => {
            this.usersRef.onSnapshot(data => {
                const users = [];
                for (let index = 0; index < data.docs.length; index++) {
                    const document = data.docs[index];
                    users.push(document.data());
                }
                this.users = users;
                this.Users$.next(users);
                resolve();
            });
        });
    }

}

window['getUserService'] = new GetUserService();
export const getUserService: GetUserService = window['getUserService'];