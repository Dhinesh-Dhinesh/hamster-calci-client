import { Card } from "../data/cardData";

type ClientCard = Card

type FirebaseData = {
    id: number;
    pph?: number;
    price?: number;
    level?: number;
};

export type CombinedCard = ClientCard & Partial<FirebaseData> & { roi?: number };

export function combineCardsData(clientCards: ClientCard[], firebaseData: FirebaseData[] | null): CombinedCard[] | ClientCard[] {

    // If data not available in firestore return client cards
    if (firebaseData === null) return clientCards;

    const firebaseDataMap = new Map(firebaseData.map(item => [item.id, item]));

    return clientCards.map(card => {
        const firebaseItem = firebaseDataMap.get(card.id);
        const combinedCard: CombinedCard = { ...card, ...firebaseItem };
        if (firebaseItem) {
            //level pph and price finder

            const findCardValues = (initialPph: number, initialPrice: number, cardLevel: number): { pph: number, price: number } => {

                if (cardLevel === 0) return { pph: initialPph, price: initialPrice }

                const nxtCardLevel = cardLevel + 1;

                const pphGrowthFactor = 1.07; // PPH growth factor
                const priceGrowthBase = 1.0246950765653693; // Base for price growth

                const pph = Math.round(initialPph * Math.pow(pphGrowthFactor, nxtCardLevel - 1));
                const price = Math.round(initialPrice * Math.pow(priceGrowthBase, (nxtCardLevel - 1) ** 2 + 3 * (nxtCardLevel - 1)));

                return { pph, price }
            }

            const { pph, price } = findCardValues(combinedCard.initialPph, combinedCard.initialPrice, firebaseItem.level as number)


            combinedCard.roi = parseFloat((price / pph / 24).toFixed(2));
            combinedCard.pph = pph;
            combinedCard.price = price;

        }

        return combinedCard;
    });
}