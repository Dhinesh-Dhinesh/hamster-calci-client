import KombatImage from "../assets/kombat.webp"
import TelegramIcon from '@mui/icons-material/Telegram';

// Firebase
import { logEvent } from 'firebase/analytics';
import { analytics } from '../firebase';
import { useCardData } from "../hooks/useCardData";
import { useEffect, useState } from "react";
import { combineCardsData, CombinedCard } from "../util/combineCards";
import { Card as CardType, LegalCards, MarketsCards, PRTeamCards, SpecialsCards, Web3 } from "../data/cardData";
import useCardDrawer from "../hooks/useCardDrawer";
import Card from "../components/card";

interface User {
    id: number;
    first_name: string;
    last_name: string;
    username: string;
    chat_id: number;
}

interface TopCardsProps {
    userData: User | null;
}

export const TopCards: React.FC<TopCardsProps> = ({ userData }) => {

    const [cards, setCards] = useState<CombinedCard[] | null>(null);

    const { cardData, cardDataLoading } = useCardData()
    const { openDrawer } = useCardDrawer();

    const openTelegramChannel = () => {
        window.open('https://t.me/hamstercalci', '_blank');
    };

    useEffect(() => {
        const tempCards: (CombinedCard | CardType)[] = [];

        if (cardData) {

            const prteamCards = cardData?.prteam ? combineCardsData(PRTeamCards, cardData.prteam) : [];
            const marketsCards = cardData?.markets ? combineCardsData(MarketsCards, cardData.markets) : [];
            const legalCards = cardData?.legal ? combineCardsData(LegalCards, cardData.legal) : [];
            const web3 = cardData?.web3 ? combineCardsData(Web3, cardData.web3) : [];
            const specialsCards = cardData?.specials ? combineCardsData(SpecialsCards, cardData.specials) : [];

            tempCards.push(...prteamCards, ...marketsCards, ...legalCards, ...web3, ...specialsCards);

            // Type guard to check if a card is a CombinedCard
            const isCombinedCard = (card: CardType | CombinedCard): card is CombinedCard => {
                return 'roi' in card;
            };

            // Filter and sort the cards by ROI, handling optional ROI
            const sortedCards = tempCards
                .filter(isCombinedCard) // Filter cards that are CombinedCard with ROI
                .filter(card => card.roi !== undefined && !isNaN(card.roi)) // Exclude cards with ROI NaN or undefined
                .sort((a, b) => (a.roi ?? 0) - (b.roi ?? 0)); // Sort cards by ROI in ascending order, treating undefined as 0

            // Do something with sortedCards, like setting state or other processing
            console.log(sortedCards);
            setCards(sortedCards)

        }
    }, [cardData]);

    return (
        <>
            <div className='bg-cardBackground my-1 mx-4 p-1 rounded-2xl flex overflow-hidden items-center'>
                <div className="p-2" onClick={() => {
                    //* Analytics
                    logEvent(analytics, "button_click", {
                        button_name: "Hamster Glow"
                    })
                }}>
                    <img src={KombatImage} alt="kombat" width={80} height={80} className="border-[1px] border-yellow-500 glow rounded-full" />
                </div>
                <div className="flex flex-col p-2 m-auto w-full">
                    <p>Hi👋 {userData?.first_name} {userData?.last_name} (CEO)</p>
                    <div className="flex items-center mt-2">
                        <button className="bg-background text-sm text-[#85888e] rounded-lg w-[6rem] h-7 text-center" onClick={openTelegramChannel}><TelegramIcon /> Channel</button>
                        {userData?.username && <p className="ml-2 text-xs text-[#85888e]">{'@' + userData.username}</p>}
                    </div>
                </div>
            </div>
            <div className='bg-cardBackground my-2 mx-4 p-2 rounded-lg flex flex-col'>
                <p>Best Cards To Buy 🪙</p>
                <p className="text-xs text-[#85888e]">Based on your data, ROI(Return on investment) less is best</p>

            </div>

            {/* eslint-disable-next-line */}
            {!cardDataLoading && (cards?.length === 0 || !cards) ? (
                <>
                    <div className="my-2 mx-4 p-2 h-[10rem] text-sm flex text-center items-center ">To see the top cards, enter your "Hamster Kombat" game cards ("profit per hour & price") on the enter data page.</div>
                </>
            ) : (
                <>
                    {/* Cards */}
                    <div className='flex flex-wrap justify-center'>
                        {
                            cards?.map((data, index) => (
                                <Card
                                    key={index}
                                    index={index}
                                    id={data.id}
                                    name={data.name}
                                    img={data.img}
                                    roi={data?.roi}
                                    pph={data?.pph}
                                    price={data?.price}
                                    page="main"
                                    type={data?.type}
                                    onClick={() => {
                                        openDrawer(data)
                                    }} />
                            ))
                        }
                    </div>
                </>
            )}
        </>
    );
};

export default TopCards;