import * as firebase from 'firebase';
import { User } from '../interfaces/User';

export class UpdateUserService {
    async updateById(id: string, data: Partial<User>) {
        const user = firebase.firestore().collection('Users').doc(id);
        await user.update(data);
    }
}

window['updateUserService'] = new UpdateUserService();
export const updateUserService = window['updateUserService'];