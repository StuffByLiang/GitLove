export interface Match {
    _id: string;
    matchedUsers: [string, string];
    message: Message;
    lastMatchActivity: firebase.firestore.Timestamp;
}

export interface Message {
    authorUid: string;
    code: string;
    // status: Status;
}

export enum Status {
    Read
}