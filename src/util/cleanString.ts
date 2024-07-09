import { CardData } from "./FirestoreService";

export function cleanString(str: string): keyof CardData {
    // Remove special characters and spaces, then convert to lowercase
    return str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase() as keyof CardData;
}