export function formatNumber(number: number): string {
    const numStr = number.toString();
    return numStr.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

export function convertStringToNumber(value: string): number | null {
    // Remove any commas
    const cleanedValue = value.replace(/,/g, '');

    // Convert to number
    const numberValue = parseFloat(cleanedValue);

    // Check if the result is a valid number
    if (isNaN(numberValue)) {
        return null; // Return null for invalid numbers
    }

    return numberValue;
}