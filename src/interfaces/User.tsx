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
}

export enum Gender {
    Male,
    Female,
    NonBinary,
    Agender,
    Other
}

export enum Preference {
    Male,
    Female,
    NonBinary,
    Agender,
    Other
}