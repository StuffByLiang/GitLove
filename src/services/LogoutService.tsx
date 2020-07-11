import * as firebase from 'firebase';
import { BehaviorSubject } from 'rxjs';
import { User } from '../interfaces/User';
import FindService from '../services/FindService';
import { Subscription } from 'rxjs';
import { userService } from './UserService';

export class LogoutService {
    
    login = async () => {
        const provider = new firebase.auth.GithubAuthProvider();

    firebase.auth().signOut().then(function() {
        // Sign-out successful.
      }).catch(function(error) {
        // An error happened.
      });
    };
}

window['logoutService'] = new LogoutService();
export const logoutService: LogoutService = window['logoutService'];