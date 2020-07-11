import * as firebase from 'firebase';
import { BehaviorSubject } from 'rxjs';
import { Match } from '../interfaces/Match';


class MatchService {

    matches: Array<Match>
    matchRef: firebase.firestore.CollectionReference;
    Matches$: BehaviorSubject<Array<Match>> = new BehaviorSubject([]);

    init() {
        this.matchRef = firebase
            .firestore()
            .collection('Matches');
        return new Promise((resolve, reject) => {
            this.matchRef.onSnapshot(data => {
                const matches = [];
                for (let index = 0; index < data.docs.length; index++) {
                    const document = data.docs[index];
                    matches.push(document.data());
                }
                this.matches = matches;
                this.Matches$.next(matches);
                resolve();
            });
        });
    }

}

window['matchService'] = new MatchService();
export const matchService: MatchService = window['matchService'];