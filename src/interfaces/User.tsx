export interface User {
    _id: string;
    name: string;
    profilePicture: string;
    gender: Gender;
    dateOfBirth: Date;
    description: string;
    features: Array<{
        question: string,
        answer: string
    }>;
    languages: Array<string>;
    blockedUsers: Array<string>;
    likedUsers: Array<string>;
    nopedUsers: Array<string>;
}

export enum Gender {
    Male,
    Female,
    NonBinary,
    Agender,
    Other
}