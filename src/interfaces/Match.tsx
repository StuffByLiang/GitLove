export interface Match {
    _id: string;
    matchedUsers: Array<string>;
    message: Message;
    lastMatchActivity: firebase.firestore.Timestamp;
}

export interface Message {
    authorUid: string;
    code: string;
}