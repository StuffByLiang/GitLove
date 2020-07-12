import * as firebase from 'firebase';
import { Match } from '../interfaces/Match';

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
                    code: '(alert "Send them a message!")',
                    read: true
                },
                lastMatchActivity: firebase.database.ServerValue.TIMESTAMP, // i think this is good
            });
    }

    async updateById(id: string, data: Partial<Match>) {
        const match = firebase.firestore().collection('Matches').doc(id);
        await match.update(data);
    }
}

window['matchMakerService'] = new MatchMakerService();
export const matchMakerService: MatchMakerService = window['matchMakerService'];