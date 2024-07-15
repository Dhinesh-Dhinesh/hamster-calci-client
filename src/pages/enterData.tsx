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
    const [cards, setCards] = useState<CombinedCard[]>(PRTeamCards);

    const [calciPrice, setCalciPrice] = useState<number>(0)
    const [calciPph, setCalciPph] = useState<number>(0)

    const { openDrawer } = useCardDrawer();
    const { cardData } = useCardData()

    // Change card data based on tabs
    useEffect(() => {
        switch (tab) {
            case "PR&Team": {
                const cardsData = combineCardsData(PRTeamCards, cardData?.prteam ?? null);
                setCards(cardsData);
                break;
            }
            case "Markets": {
                const cardsData = combineCardsData(MarketsCards, cardData?.markets ?? null);
                setCards(cardsData);
                break;
            }
            case "Legal": {
                const cardsData = combineCardsData(LegalCards, cardData?.legal ?? null);
                setCards(cardsData);
                break;
            }
            case "Web3": {
                const cardsData = combineCardsData(Web3, cardData?.web3 ?? null);
                setCards(cardsData);
                break;
            }
            case "Specials": {
                const cardsData = combineCardsData(SpecialsCards, cardData?.specials ?? null);
                setCards(cardsData);
                break;
            }
            default:
                break;
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

            {/* ROI calculator */}{
                tab === "Specials" && (
                    <div className='bg-cardBackground text-gray-500 my-2 mx-4 p-2 rounded-lg flex flex-col'>
                        <p className='text-gray-400 font-bold mb-1'>ROI calculator for time limited cards</p>
                        <p className='my-1'>Profit per hour</p>
                        <input type='number' className='p-1 rounded' onChange={(e) => setCalciPph(parseFloat(e.target.value))} />
                        <p className='my-1'>Price</p>
                        <input type='number' className='p-1 rounded' onChange={(e) => setCalciPrice(parseFloat(e.target.value))} />
                        <p className='mt-2 text-gray-400'>
                            ROI : {
                                (!!calciPrice && !!calciPph)
                                    ? `${parseFloat((calciPrice / calciPph / 24).toFixed(2))} days`
                                    : '-'
                            }
                        </p>
                    </div>
                )
            }
        </>
    )
}
