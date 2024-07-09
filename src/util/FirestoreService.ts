import { db } from '../firebase';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';

export type CardObject = {
    id: number;
    pph: number;
    price: number;
};

export type CardData = {
    prteam: CardObject[];
    markets: CardObject[];
    legal: CardObject[];
    web3: CardObject[];
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


// updata card data
type ArrayFieldName = keyof CardData;

export const updateCard = async (tele_uid: string, field: ArrayFieldName, updateFields: CardObject): Promise<void> => {
    const docRef = doc(db, "cards", tele_uid);

    try {
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            const cardData = docSnap.data() as CardData;

            // Ensure the field exists and is initialized as an array
            if (Array.isArray(cardData[field])) {
                // Find the index of the element in the specified array
                const index = cardData[field].findIndex(item => item.id === updateFields.id);

                if (index !== -1) {
                    // Update the fields of the element
                    cardData[field][index] = { ...cardData[field][index], ...updateFields };
                } else {
                    // Item not found, create a new item
                    const newItem: CardObject = {
                        ...updateFields, // Include the updated fields
                    };
                    cardData[field].push(newItem);
                }

                // Update Firestore document
                await updateDoc(docRef, {
                    [field]: cardData[field]
                });
            } else {
                await updateDoc(docRef, {
                    [field]: [updateFields]
                });
                console.log(`Field '${field}' does not exist or is not an array so new field is inserted`);
            }
        } else {
            await setDoc(docRef, {
                [field]: [updateFields]
            });
            console.log("New one created")
        }
    } catch (error) {
        console.error("Error updating document:", error);
        throw error; // Handle or propagate the error as needed
    }
};