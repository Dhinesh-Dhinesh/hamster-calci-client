import React, { createContext, useState, useEffect, ReactNode, useCallback } from 'react';
import { fetchCardData, CardData } from '../util/FirestoreService';
import useUser from '../hooks/useUser';

export type CardDataContextType = {
    cardData: CardData | null;
    setCardData: React.Dispatch<React.SetStateAction<CardData | null>>;
    refetchCards: () => void;
    cardDataLoading: boolean;
};

const CardDataContext = createContext<CardDataContextType | undefined>(undefined);

const CardDataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [cardData, setCardData] = useState<CardData | null>(null);
    const [cardDataLoading, setCardDataLoading] = useState<boolean>(true)

    const { user } = useUser();

    const getData = useCallback(async () => {
        if (user) {
            const data = await fetchCardData(user.id.toString()); // Assuming fetchCardData is a function that fetches the card data
            console.log(data);
            setCardData(data);
        } else {
            console.log("This web app is built for Telegram");
        }

        setCardDataLoading(false);
    }, [user]);

    const refetchCards = async () => {
        await getData();
    };

    useEffect(() => {
        getData();
    }, [getData]);

    return (
        <CardDataContext.Provider value={{ cardData, setCardData, refetchCards, cardDataLoading }}>
            {children}
        </CardDataContext.Provider>
    );
};

export { CardDataContext, CardDataProvider }