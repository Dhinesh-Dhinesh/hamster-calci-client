import { useContext } from "react";
import { CardDataContext, CardDataContextType } from "../components/cardDataContext";

export const useCardData = (): CardDataContextType => {
    const context = useContext(CardDataContext);
    if (!context) {
        throw new Error('useCardData must be used within a CardDataProvider');
    }
    return context;
};