import * as firebase from 'firebase';
import { BehaviourSubject } from 'rxjs';
import { User } from '../interfaces/User';

class UserService {
    id: string;
    userRef = firebase.firestore.DocumentReference;

    userDoc: User | null;
    userDoc$: BehaviourSubject<User | null> = new BehaviourSubject<User | null>(null);
}

export default UserService;