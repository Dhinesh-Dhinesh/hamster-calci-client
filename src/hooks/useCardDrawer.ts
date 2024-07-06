import { useContext } from 'react';
import { CardDrawerContext, CardDrawerContextType } from '../components/cardDrawerContext';

const useCardDrawer = (): CardDrawerContextType => {
    const context = useContext(CardDrawerContext);
    if (!context) {
        throw new Error('useCardDrawer must be used within a CardDrawerProvider');
    }
    return context;
};

export default useCardDrawer;