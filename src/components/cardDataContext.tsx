import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { fetchCardData, CardData } from '../util/FirestoreService';

export type CardDataContextType = {
    cardData: CardData | null;
    setCardData: React.Dispatch<React.SetStateAction<CardData | null>>;
    refetchCards: () => void;
};

const CardDataContext = createContext<CardDataContextType | undefined>(undefined);

const CardDataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [cardData, setCardData] = useState<CardData | null>(null);

    const getData = async () => {
        const data = await fetchCardData('1MZVle2lDZ8s2w0FUysv'); // Testing ID
        console.log(data)
        setCardData(data);
    };

    const refetchCards = async () => {
        await getData();
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <CardDataContext.Provider value={{ cardData, setCardData, refetchCards }}>
            {children}
        </CardDataContext.Provider>
    );
};

export { CardDataContext, CardDataProvider }