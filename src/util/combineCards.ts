import { Card } from "../data/cardData";

type ClientCard = Card

type FirebaseData = {
    id: number;
    pph?: number;
    price?: number;
    level?: number;
};

export type CombinedCard = ClientCard & Partial<FirebaseData> & { roi?: number };

export function combineCardsData(clientCards: ClientCard[], firebaseData: FirebaseData[] | null): CombinedCard[] {

    const findCardValues = (initialPph: number, initialPrice: number, cardLevel: number): { pph: number, price: number, roi: number } => {
        if (cardLevel === 0) {
            const pph = initialPph;
            const price = initialPrice;
            const roi = parseFloat((price / pph / 24).toFixed(2));
            return { pph, price, roi};
        }

        const nxtCardLevel = cardLevel + 1;

        const pphGrowthFactor = 1.07; // PPH growth factor
        const priceGrowthBase = 1.0246950765653693; // Base for price growth

        const pph = Math.round(initialPph * Math.pow(pphGrowthFactor, nxtCardLevel - 1));
        const price = Math.round(initialPrice * Math.pow(priceGrowthBase, (nxtCardLevel - 1) ** 2 + 3 * (nxtCardLevel - 1)));
        const roi = parseFloat((price / pph / 24).toFixed(2));

        return { pph, price, roi };
    }

    const firebaseDataMap = firebaseData ? new Map(firebaseData.map(item => [item.id, item])) : new Map();

    return clientCards.map(card => {
        const firebaseItem = firebaseDataMap.get(card.id);
        const combinedCard: CombinedCard = { ...card, ...firebaseItem };

        // Use values from firebaseItem if present, otherwise fallback to clientCard
        const initialPph = card.initialPph;
        const initialPrice = card.initialPrice;
        const cardLevel = firebaseItem?.level ?? 0; // Defaults to 0 if level is not present

        const { pph, price, roi } = findCardValues(initialPph, initialPrice, cardLevel);

        combinedCard.pph = pph;
        combinedCard.price = price;
        combinedCard.roi = roi;
        combinedCard.level = cardLevel;

        return combinedCard;
    });
}