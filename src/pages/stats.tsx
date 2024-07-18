import coinImage from "../assets/coin.png"
import { formatNumber } from '../util/numberFormat';
import { useEffect, useState } from 'react';
import { combineCardsData, CombinedCard } from '../util/combineCards';
import { LegalCards, MarketsCards, PRTeamCards, SpecialsCards, Web3 } from "../data/cardData";
import { useCardData } from '../hooks/useCardData';
import { cleanString } from "../util/cleanString";

type SubTotal = {
    pph: number;
    price: number;
}

type Total = {
    pph: number;
    price: number;
    prteam: SubTotal;
    markets: SubTotal;
    legal: SubTotal;
    web3: SubTotal;
    specials: SubTotal;
}

const Stats: React.FC = () => {

    const [total, setTotal] = useState<Total>({
        pph: 0,
        price: 0,
        prteam: {
            pph: 0,
            price: 0
        },
        markets: {
            pph: 0,
            price: 0
        },
        legal: {
            pph: 0,
            price: 0
        },
        web3: {
            pph: 0,
            price: 0
        },
        specials: {
            pph: 0,
            price: 0
        },
    })

    const { cardData } = useCardData()

    useEffect(() => {
        const tempCards: (CombinedCard)[] = [];

        if (cardData) {

            const prteamCards = combineCardsData(PRTeamCards, cardData.prteam);
            const marketsCards = combineCardsData(MarketsCards, cardData.markets);
            const legalCards = combineCardsData(LegalCards, cardData.legal);
            const web3 = combineCardsData(Web3, cardData.web3);
            const specialsCards = combineCardsData(SpecialsCards, cardData.specials);

            tempCards.push(...prteamCards, ...marketsCards, ...legalCards, ...web3, ...specialsCards);
        }

        // Calculate total PPH and total price
        const totalPPH = tempCards.reduce((acc, card) => acc + (card.totalPph || 0), 0);
        const totalPrice = tempCards.reduce((acc, card) => acc + (card.totalPrice || 0), 0);

        // Calculate total PPH and total price for cards of type "specials"
        const prTeamTotals = tempCards.reduce((acc, card) => {
            if (card.type === "PR&Team") {
                acc.totalPPH += card.totalPph || 0;
                acc.totalPrice += card.totalPrice || 0;
            }
            return acc;
        }, { totalPPH: 0, totalPrice: 0 })

        const marketsTotals = tempCards.reduce((acc, card) => {
            if (card.type === "Markets") {
                acc.totalPPH += card.totalPph || 0;
                acc.totalPrice += card.totalPrice || 0;
            }
            return acc;
        }, { totalPPH: 0, totalPrice: 0 })

        const legalTotals = tempCards.reduce((acc, card) => {
            if (card.type === "Legal") {
                acc.totalPPH += card.totalPph || 0;
                acc.totalPrice += card.totalPrice || 0;
            }
            return acc;
        }, { totalPPH: 0, totalPrice: 0 })

        const web3Totals = tempCards.reduce((acc, card) => {
            if (card.type === "Web3") {
                acc.totalPPH += card.totalPph || 0;
                acc.totalPrice += card.totalPrice || 0;
            }
            return acc;
        }, { totalPPH: 0, totalPrice: 0 })

        const specialTotals = tempCards.reduce((acc, card) => {
            if (card.type === "Specials") {
                acc.totalPPH += card.totalPph || 0;
                acc.totalPrice += card.totalPrice || 0;
            }
            return acc;
        }, { totalPPH: 0, totalPrice: 0 })



        setTotal({
            pph: totalPPH,
            price: totalPrice,
            prteam: {
                pph: prTeamTotals.totalPPH,
                price: prTeamTotals.totalPrice
            },
            markets: {
                pph: marketsTotals.totalPPH,
                price: marketsTotals.totalPrice
            },
            legal: {
                pph: legalTotals.totalPPH,
                price: legalTotals.totalPrice
            },
            web3: {
                pph: web3Totals.totalPPH,
                price: web3Totals.totalPrice
            },
            specials: {
                pph: specialTotals.totalPPH,
                price: specialTotals.totalPrice
            }
        })

    }, [cardData])

    const categories = ['PR&Team', 'Markets', 'Legal', 'Web3', 'Specials'];

    return (
        <div className='bg-cardBackground my-1 mx-4 p-1 rounded-2xl flex overflow-hidden items-center flex-col'>
            <div className='flex flex-col items-center justify-center mt-2'>
                <p className='font-bold'>Performance Overview</p>
            </div>
            <hr className='px-40 border-gray-600 mt-4' />
            <div className='flex flex-col items-center justify-center mt-2'>
                <p className='text-gray-400 text-xs text-center'>Based on your card levels, the total Profit Per Hour (PPH) and the total coins spent have been calculated</p>
            </div>
            <hr className='px-40 border-gray-600 mt-4' />
            <div className='flex flex-col items-center justify-center w-full mt-5'>
                <p className='font-bold'>Total PPH Gain (Profit Per Hour)</p>
                <p className='text-[#85888e] font-bold'>+ {formatNumber(total.pph)}</p>
            </div>
            <div className='flex flex-col items-center justify-center w-full mt-10 mb-5'>
                <p className='font-bold'>Total Coins Spent</p>
                <div className=" text-left flex items-center">
                    <img alt='logo' src={coinImage} className='mx-[.2rem] w-[1rem] h-[1rem]' />
                    <span className='text-[#85888e] font-bold'>{formatNumber(total.price)}</span>
                </div>
            </div>
            <hr className='px-40 border-gray-600 mt-4' />
            <div className="grid grid-cols-2 gap-4 py-5">
                {categories.map(category => (
                    <div key={category} className="p-4 bg-background rounded-2xl text-xs w-36">
                        <h3 className="text-sm font-semibold capitalize">{category}</h3>
                        <hr className='border-gray-600 my-1' />
                        <p>Total PPH Gain:</p>
                        <p className="text-gray-400">{formatNumber(total[cleanString(category)].pph)}</p>
                        <p className="mt-1">Total Coins Spent:</p>
                        <p className="text-gray-400">{formatNumber(total[cleanString(category)].price)}</p>
                    </div>
                ))}
            </div>
            <hr className='px-40 border-gray-600' />
            <div className='flex flex-col items-center justify-center mt-2'>
                <p className='text-gray-400 text-xs text-center'>Time-limited cards are not included in the calculation.</p>
            </div>
            <hr className='px-40 border-gray-600 mt-4 mb-4' />
        </div>
    )
}


export default Stats;