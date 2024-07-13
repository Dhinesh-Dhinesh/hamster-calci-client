import { useEffect, useState } from 'react';

import { PRTeamCards, MarketsCards, LegalCards, SpecialsCards, Web3 } from "../data/cardData"
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
                break
            case "Markets":
                setCards(MarketsCards)

                if (cardData?.markets) {
                    const cardsData = combineCardsData(MarketsCards, cardData.markets);
                    setCards(cardsData)
                }
                break
            case "Legal":
                setCards(LegalCards)

                if (cardData?.legal) {
                    const cardsData = combineCardsData(LegalCards, cardData.legal);
                    setCards(cardsData)
                }
                break
            case "Web3":
                setCards(Web3)

                if (cardData?.web3) {
                    const cardsData = combineCardsData(Web3, cardData.web3);
                    setCards(cardsData)
                }
                break
            case "Specials":
                setCards(SpecialsCards)

                if (cardData?.specials) {
                    const cardsData = combineCardsData(SpecialsCards, cardData.specials);
                    setCards(cardsData)
                }
                break
            default:
                break
        }
    }, [tab, cardData])

    return (
        <>
            {/* Top Bar */}
            <div className='bg-cardBackground my-2 mx-4 p-1 rounded-lg flex justify-evenly'>
                {["PR&Team", "Markets", "Legal", "Web3", "Specials"].map((tabName) => (
                    <button
                        key={tabName}
                        onClick={() => {
                            setTab(tabName);
                            //* Analytics
                            logEvent(analytics, tabName);
                        }}
                        className={`${tab === tabName ? "bg-background rounded-lg" : ""}
                         text-xs sm:text-sm h-10 w-1/5 text-center font-bold`}>
                        {tabName}
                    </button>
                ))}
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
                            initialPrice={data.initialPrice}
                            initialPph={data.initialPph}
                            level={data.level}
                            pph={data?.pph}
                            price={data?.price}
                            roi={data?.roi}
                            onClick={() => {
                                openDrawer(data)
                            }} />
                    ))
                }
            </div>
        </>
    )
}
