import { useEffect, useState } from 'react';

import { PRTeamCards, MarketsCards } from "../data/cardData"
import Card from '../components/card';
import { combineCardsData, CombinedCard } from '../util/combineCards';
import { useCardData } from '../hooks/useCardData';

import useCardDrawer from '../hooks/useCardDrawer';
// Firebase
import { logEvent } from 'firebase/analytics';
import { analytics } from '../firebase';


export const EnterData: React.FC = () => {

    const [tab, setTab] = useState<string>("PR&Team")
    const [cards, setCards] = useState<CombinedCard[] | null>(PRTeamCards);

    const { openDrawer } = useCardDrawer();
    const { cardData } = useCardData()

    // Change card data based on tabs
    useEffect(() => {
        switch (tab) {
            case "PR&Team":
                setCards(PRTeamCards)

                if (cardData?.prteam) {
                    const cardsData = combineCardsData(PRTeamCards, cardData.prteam);
                    setCards(cardsData)
                }

                break;
            case "Markets":
                setCards(MarketsCards)

                if (cardData?.markets) {
                    const cardsData = combineCardsData(MarketsCards, cardData.markets);
                    setCards(cardsData)
                }

                break;
            default:
                break;
        }
    }, [tab, cardData])

    return (
        <>
            {/* Top Bar */}
            <div className='bg-cardBackground my-2 mx-4 p-1 rounded-lg flex justify-evenly'>
                <button
                    onClick={() => {
                        setTab("PR&Team")
                        logEvent(analytics, "PR&Team")
                    }}
                    className={`${tab === "PR&Team" && "bg-background rounded-lg"} text-sm font-bold h-10 w-1/4`}>PR&Team</button>
                <button
                    onClick={() => {
                        setTab("Markets")
                        logEvent(analytics, "Markets")
                    }}
                    className={`${tab === "Markets" && "bg-background rounded-lg"} text-sm font-bold h-10 w-1/4`}>Markets</button>
                <button onClick={() => {
                    setTab("Legal")
                    logEvent(analytics, "Legal")
                }} className={`${tab === "Legal" && "bg-background rounded-lg"} text-sm font-bold h-10 w-1/4`}>Legal</button>
                <button
                    onClick={() => {
                        setTab("Special")
                        logEvent(analytics, "Special")
                    }}
                    className={`${tab === "Special" && "bg-background rounded-lg"} text-sm font-bold h-10 w-1/4`}>Special</button>
            </div>

            {/* Cards */}
            <div className='flex flex-wrap justify-center'>
                {
                    cards && cards.map((data, index) => (
                        <Card
                            key={index}
                            id={data.id}
                            name={data.name}
                            img={data.img}
                            roi={data?.roi}
                            pph={data?.pph}
                            price={data?.price}
                            onClick={() => {
                                openDrawer(data)
                            }} />
                    ))
                }
            </div>
        </>
    )
}
