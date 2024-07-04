import { useState } from 'react';

import { PRTeamCards } from "../data/cardData"
import Card from '../components/card';

export const EnterData: React.FC = () => {

    const [tab, setTab] = useState<string>("PR&Team")

    return (
        <>
            {/* Top Bar */}
            <div className='bg-cardBackground my-2 mx-4 p-1 rounded-lg flex justify-evenly'>
                <button className={`${tab === "PR&Team" && "bg-background rounded-lg"} text-sm font-bold h-10 w-1/4`} onClick={() => setTab("PR&Team")}>PR&Team</button>
                <button className={`${tab === "Markets" && "bg-background rounded-lg"} text-sm font-bold h-10 w-1/4`} onClick={() => setTab("Markets")}>Markets</button>
                <button className={`${tab === "Legal" && "bg-background rounded-lg"} text-sm font-bold h-10 w-1/4`} onClick={() => setTab("Legal")}>Legal</button>
                <button className={`${tab === "Special" && "bg-background rounded-lg"} text-sm font-bold h-10 w-1/4`} onClick={() => setTab("Special")}>Special</button>
            </div>

            {/* Cards */}
            <div className='flex flex-wrap justify-center'>

                {
                    PRTeamCards.map((data, index) => (
                        <Card key={index} id={data.id} name={data.name} img={data.img} />
                    ))
                }

                {/* <div className='p-2 flex-1 min-w-[48%] max-w-[48%]'>
                    <div className="bg-cardBackground rounded-lg p-4 text-white text-center">
                        <div className="flex items-center justify-center overflow-hidden">
                            <div
                                className="bg-no-repeat bg-center bg-contain w-14 h-14 min-w-[35%]"
                                style={{ backgroundImage: 'url("https://static-00.iconduck.com/assets.00/japan-icon-2048x1536-fmuesvup.png")' }}
                            ></div>
                            <div className="text-sm font-bold">Licence Japan</div>
                        </div>
                        <hr className='p-1 border-[#85888e]' />
                        <div className="text-[.6rem] text-left text-[#85888e]">Profit per hour : <span className='text-white font-bold'>{formatNumber(15430)}</span></div>
                        <div className="text-[.6rem] text-left flex items-center text-[#85888e]">Price :<img alt='logo' src={coinImage} className='mx-[.2rem] w-[1rem] h-[1]' />
                            <span className='text-white font-bold'>{formatNumber(264430)}</span>
                        </div>
                        <div className="text-[.6rem] font-semibold text-left text-[#85888e]">ROI : <span className='text-white font-bold'>24.35 </span>Days</div>
                    </div>
                </div>

                <div className='p-2 flex-1 min-w-[48%] max-w-[48%]'>
                    <div className="bg-cardBackground rounded-lg p-4 text-white text-center">
                        <div className="flex items-center justify-center overflow-hidden">
                            <div
                                className="bg-no-repeat bg-center bg-contain w-14 h-14 min-w-[35%]"
                                style={{ backgroundImage: 'url("https://static-00.iconduck.com/assets.00/japan-icon-2048x1536-fmuesvup.png")' }}
                            ></div>
                            <div className="text-sm font-bold">Licence Japan</div>
                        </div>
                        <hr className='p-1 border-[#85888e]' />
                        <div className="text-[.6rem] text-left text-[#85888e]">Profit per hour : <span className='text-white font-bold'>{formatNumber(15430)}</span></div>
                        <div className="text-[.6rem] text-left flex items-center text-[#85888e]">Price :<img alt='logo' src={coinImage} className='mx-[.2rem] w-[1rem] h-[1]' />
                            <span className='text-white font-bold'>{formatNumber(264430)}</span>
                        </div>
                        <div className="text-[.6rem] font-semibold text-left text-[#85888e]">ROI : <span className='text-white font-bold'>24.35 </span>Days</div>
                    </div>
                </div> */}

            </div>
        </>
    )
}
