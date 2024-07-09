import { Card } from "../data/cardData";

type ClientCard = Card

type FirebaseData = {
    id: number;
    pph: number;
    price: number;
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
            combinedCard.roi = parseFloat((firebaseItem.price / firebaseItem.pph / 24).toFixed(2));
        }
        return combinedCard;
    });
}