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
import useUser from "../hooks/useUser";
import InfoIcon from '@mui/icons-material/Info';
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import SwapVertIcon from '@mui/icons-material/SwapVert';

type SortType = 'paybackdays' | 'lowtohigh' | 'hightolow' | 'lowtohighpph' | 'hightolowpph';

export const TopCards: React.FC = () => {

    const [cards, setCards] = useState<CombinedCard[] | null>(null);
    const [sortType, setSortType] = useState<SortType>('paybackdays');

    const { user, activeUsers } = useUser();
    const { cardData, cardDataLoading } = useCardData()
    const { openDrawer } = useCardDrawer();

    const openTelegramChannel = () => {
        window.open('https://t.me/hamstercalci', '_blank');
    };

    const openHowToUse = () => {
        window.open('https://t.me/hamstercalci/6', '_blank');
    }

    const handleSortChange = (event: SelectChangeEvent) => {
        setSortType(event.target.value as SortType);
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
                return 'roi' in card && 'pph' in card && 'price' in card;
            };

            // Filter out non-CombinedCard and cards with invalid ROI
            const filteredCards = tempCards
                .filter(isCombinedCard) // Filter cards that are CombinedCard with necessary properties
                .filter(card => card.roi !== undefined && !isNaN(card.roi)); // Exclude cards with ROI NaN or undefined

            let sortedCards: CombinedCard[];

            if (sortType === 'paybackdays') {
                // Sort by ROI
                sortedCards = filteredCards.sort((a, b) => (a.roi ?? 0) - (b.roi ?? 0));
                setCards(sortedCards)
            } else if (sortType === 'lowtohigh') {

                const sortedCards = filteredCards.sort((a, b) => {
                    return a.price! - b.price! // A and B are equal in terms of ratio
                });
                setCards(sortedCards)
            } else if (sortType === 'hightolow') {

                const sortedCards = filteredCards.sort((a, b) => {
                    return b.price! - a.price!  // A and B are equal in terms of ratio
                });
                setCards(sortedCards)
            } else if (sortType === 'lowtohighpph') {

                const sortedCards = filteredCards.sort((a, b) => {
                    return a.pph! - b.pph! // A and B are equal in terms of ratio
                });
                setCards(sortedCards)
            } else if (sortType === 'hightolowpph') {

                const sortedCards = filteredCards.sort((a, b) => {
                    return b.pph! - a.pph!  // A and B are equal in terms of ratio
                });
                setCards(sortedCards)
            }
        }
    }, [cardData, sortType]);

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
                    <p>Hi👋 {user?.first_name} {user?.last_name} (CEO)</p>
                    <div className="flex items-center mt-2">
                        <button className="bg-background text-sm text-[#85888e] rounded-lg w-[6rem] h-7 text-center" onClick={openTelegramChannel}><TelegramIcon /> Channel</button>
                        {user?.username && <p className="ml-2 text-xs text-[#85888e]">{'@' + user.username}</p>}
                    </div>
                </div>
            </div>
            <div className='bg-cardBackground my-2 mx-4 p-2 rounded-lg flex flex-col'>
                <div className="flex justify-between">
                    <p>Best Cards To Buy 🪙</p>
                    <p className="text-xs text-[#85888e]">Active users: {activeUsers}</p>
                </div>
                <div className="flex justify-between text-center">
                    <p className="text-xs text-[#85888e]">Based on your data</p>
                    {/* How to use link */}
                    <div className="text-xs flex items-center text-[#85888e]" onClick={openHowToUse}>
                        <p>How to use</p>
                        <InfoIcon sx={{ fontSize: "15px", marginLeft: "4px", marginTop: "2px" }} />
                    </div>
                </div>
            </div>

            {/* Sorting */}

            <div className='bg-cardBackground text-[#85888e] my-2 mx-4 p-2 rounded-lg flex items-center justify-between'>
                <p>Sort by <SwapVertIcon /></p>
                <FormControl>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={sortType}
                        onChange={handleSortChange}
                        size="small"
                        sx={{
                            color: '#85888e',
                            bgcolor: '#272a2e',
                            fontSize: '0.875rem',
                            '& .MuiSelect-select': {
                                bgcolor: '#272a2e',
                            },
                            '& .MuiSvgIcon-root': {
                                color: '#e5e7eb',
                            },
                            '& .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#85888e',
                            },
                        }}
                        MenuProps={{
                            PaperProps: {
                                sx: {
                                    bgcolor: '#272a2e',
                                    '& .MuiMenuItem-root': {
                                        fontSize: '0.875rem',
                                        color: '#85888e',
                                        '&:hover': {
                                            bgcolor: '#33373b',
                                        },
                                    },
                                },
                            },
                        }}
                    >
                        <MenuItem value={"paybackdays"}>Payback Days</MenuItem>
                        <MenuItem value={"lowtohighpph"}>PPH: Low - High</MenuItem>
                        <MenuItem value={"hightolowpph"}>PPH: High - Low</MenuItem>
                        <MenuItem value={"lowtohigh"}>Price: Low - High</MenuItem>
                        <MenuItem value={"hightolow"}>Price: High - Low</MenuItem>
                    </Select>
                </FormControl>
            </div>

            {!cardDataLoading && (cards?.length === 0 || !cards) ? (
                <>
                    {/* Instruction message */}
                    <div className="my-2 mx-4 p-2 h-[10rem] text-sm flex text-center items-center">
                        To see the top cards, enter your "🐹 Hamster Kombat" game cards ("profit per hour & price") on the enter data page.
                    </div>

                    {/* How to use link */}
                    <div className="my-1 mx-4 text-sm flex text-center items-center justify-center text-gray-400" onClick={openHowToUse}>
                        <p>How to use</p>
                        <InfoIcon sx={{ fontSize: "16px", marginLeft: "4px" }} />
                    </div>
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