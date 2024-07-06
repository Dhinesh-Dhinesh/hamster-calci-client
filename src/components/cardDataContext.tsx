import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { fetchCardData, CardData } from '../util/FirestoreService';

export type CardDataContextType = {
    cardData: CardData | null;
    setCardData: React.Dispatch<React.SetStateAction<CardData | null>>;
};

const CardDataContext = createContext<CardDataContextType | undefined>(undefined);

const CardDataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [cardData, setCardData] = useState<CardData | null>(null);

    useEffect(() => {
        const getData = async () => {
            const data = await fetchCardData('1MZVle2lDZ8s2w0FUysv');       //testing id
            console.log(data)
            setCardData(data);
        };

        getData();
    }, []);

    return (
        <CardDataContext.Provider value={{ cardData, setCardData }}>
            {children}
        </CardDataContext.Provider>
    );
};

export { CardDataContext, CardDataProvider }