import { CardData } from "./FirestoreService";

export function cleanString(str: string): keyof CardData {
    // Remove special characters, spaces, and numbers, then convert to lowercase
    return str.replace(/[^a-zA-Z]/g, '').toLowerCase() as keyof CardData;
}