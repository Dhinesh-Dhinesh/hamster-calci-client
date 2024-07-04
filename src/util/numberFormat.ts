export function formatNumber(number: number): string {
    const numStr = number.toString();
    return numStr.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}