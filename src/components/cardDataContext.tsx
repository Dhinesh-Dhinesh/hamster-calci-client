import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { fetchCardData, CardData } from '../util/FirestoreService';

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

    const getData = async () => {

        // Check if Telegram Web App is available
        if (window.Telegram?.WebApp) {
            const tg = window.Telegram.WebApp;

            // Get the user details
            const userData = tg.initDataUnsafe?.user;

            if (userData) {
                const data = await fetchCardData(userData.id.toString()); //^ Testing ID
                console.log(data)
                setCardData(data);
            }
        } else {
            console.log("This web app is build for telegram")
        }

        setCardDataLoading(false)
    };

    const refetchCards = async () => {
        await getData();
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <CardDataContext.Provider value={{ cardData, setCardData, refetchCards, cardDataLoading }}>
            {children}
        </CardDataContext.Provider>
    );
};

export { CardDataContext, CardDataProvider }