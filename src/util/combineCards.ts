import { Card } from "../data/cardData";

type ClientCard = Card

type FirebaseData = {
    id: number;
    pph?: number;
    price?: number;
    level?: number;
    totalPph?: number;
    totalPrice?: number;
};

export type CombinedCard = ClientCard & Partial<FirebaseData> & { roi?: number };

export function combineCardsData(clientCards: ClientCard[], firebaseData: FirebaseData[] | null): CombinedCard[] {

    const findCardValues = (initialPph: number, initialPrice: number, cardLevel: number): { pph: number, price: number, roi: number, totalPph: number, totalPrice: number } => {
        let totalPph = 0;
        let totalPrice = 0;

        if (cardLevel === 0) {
            // Ignore the card if the level is 0
            return { pph: initialPph, price: initialPrice, roi: parseFloat((initialPrice / initialPph / 24).toFixed(2)), totalPph, totalPrice };
        }

        const pphGrowthFactor = 1.07; // PPH growth factor
        const priceGrowthBase = 1.0246950765653693; // Base for price growth

        for (let lvl = 1; lvl <= cardLevel + 1; lvl++) {
            const pph = Math.round(initialPph * Math.pow(pphGrowthFactor, lvl - 1));
            const price = Math.round(initialPrice * Math.pow(priceGrowthBase, (lvl - 1) ** 2 + 3 * (lvl - 1)));

            if (lvl <= cardLevel) {
                totalPph += pph;
                totalPrice += price;
            }

            // Calculate roi for the last level
            if (lvl === cardLevel + 1) {
                const roi = parseFloat((price / pph / 24).toFixed(2));
                return { pph, price, roi, totalPph, totalPrice };
            }
        }

        return { pph: totalPph, price: totalPrice, roi: 0, totalPph, totalPrice }; // Default roi to 0 if not calculated
    }

    const firebaseDataMap = firebaseData ? new Map(firebaseData.map(item => [item.id, item])) : new Map();

    return clientCards.map(card => {
        const firebaseItem = firebaseDataMap.get(card.id);
        const combinedCard: CombinedCard = { ...card, ...firebaseItem };

        // Use values from firebaseItem if present, otherwise fallback to clientCard
        const initialPph = card.initialPph;
        const initialPrice = card.initialPrice;
        const cardLevel = firebaseItem?.level ?? 0; // Defaults to 0 if level is not present

        const { pph, price, roi, totalPph, totalPrice } = findCardValues(initialPph, initialPrice, cardLevel);

        combinedCard.pph = pph;
        combinedCard.price = price;
        combinedCard.roi = roi;
        combinedCard.totalPph = totalPph;
        combinedCard.totalPrice = totalPrice;
        combinedCard.level = cardLevel;

        return combinedCard;
    });
}