import { useState } from 'react';

import { PRTeamCards } from "../data/cardData"
import Card from '../components/card';

// Firebase
import { logEvent } from 'firebase/analytics';
import { analytics } from '../firebase';

export const EnterData: React.FC = () => {

    const [tab, setTab] = useState<string>("PR&Team")

    return (
        <>
            {/* Top Bar */}
            <div className='bg-cardBackground my-2 mx-4 p-1 rounded-lg flex justify-evenly'>
                <button
                    onClick={() => {
                        setTab("PR&Team")
                        logEvent(analytics, "PR_Team")
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
                    PRTeamCards.map((data, index) => (
                        <Card key={index} id={data.id} name={data.name} img={data.img} />
                    ))
                }
            </div>
        </>
    )
}
