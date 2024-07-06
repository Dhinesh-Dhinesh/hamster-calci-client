import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';

export type CardObject = {
    id: number;
    pph: number;
    price: number;
};

export type CardData = {
    prteam: CardObject[];
    markets: CardObject[];
    legal: CardObject[];
    specials: CardObject[];
};

export const fetchCardData = async (tele_uid: string): Promise<CardData | null> => {
    const docRef = doc(db, "cards/" + tele_uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data() as CardData;
    } else {
        console.log("No such document!");
        return null;
    }
};