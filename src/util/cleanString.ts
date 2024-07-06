export function cleanString(str: string): string {
    // Remove special characters, spaces, and numbers, then convert to lowercase
    return str.replace(/[^a-zA-Z]/g, '').toLowerCase();
}