import * as firebase from 'firebase';
import { User } from '../interfaces/User';

export class MatchMakerService {
    async createNewMatch(matchees: Array<string>) {
        const newId = firebase.firestore().collection('_').doc().id;
        await firebase
            .firestore()
            .collection('Matches')
            .doc(newId)
            .set({
                _id: newId,
                matchedUsers: matchees,
                message: {
                    authorUid: matchees[0],
                    code: '(alert "Send them a message!")'
                },
                lastMatchActivity: firebase.database.ServerValue.TIMESTAMP, // i think this is good
            });
    }
}

window['matchMakerService'] = new MatchMakerService();
export const matchMakerService: MatchMakerService = window['matchMakerService'];