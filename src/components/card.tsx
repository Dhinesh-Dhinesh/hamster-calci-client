import React, { useMemo } from 'react';
import { formatNumber } from '../util/numberFormat';
import coinImage from "../assets/coin.png"

type CardProps = {
    id: number;
    name: string;
    img: string;
    pph?: number | null;
    price?: number | null;
    roi?: number | null;
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const MemoizedCard: React.FC<CardProps> = ({ id, name, img, pph, price, roi, onClick }) => {
    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (onClick) {
            onClick(event);
        }
    };

    // Memoize the JSX content of the card
    const cardContent = useMemo(() => (
        <div className='bg-cardBackground rounded-lg p-4 text-white text-center'>
            {/* Image and title */}
            <div className="flex items-center justify-start overflow-hidden">
                <div
                    className="bg-no-repeat bg-center bg-contain w-14 h-14"
                    style={{ backgroundImage: `url(${img})` }}
                ></div>
                <p className="text-xs font-bold ml-2 flex-1 text-left">{name}</p>
            </div>
            <hr className='p-1 border-[#464749]' />
            <div className="text-[.6rem] text-left text-[#85888e]">
                Profit per hour: <span className='text-white font-bold'>{pph ? formatNumber(pph) : 0}</span>
            </div>
            <div className="text-[.6rem] text-left flex items-center text-[#85888e]">
                Price:
                <img alt='logo' src={coinImage} className='mx-[.2rem] w-[1rem] h-[1rem]' />
                <span className='text-white font-bold'>{price ? formatNumber(price) : 0}</span>
            </div>
            <div className="text-[.6rem] font-semibold text-left text-[#85888e]">
                ROI: <span className='text-white font-bold'>{roi ? roi + " Days" : " - "}</span>
            </div>
        </div>
    ), [name, img, pph, price, roi]);

    return (
        <div className='p-2 flex-1 min-w-[48%] max-w-[48%]' key={id} onClick={handleClick}>
            {cardContent}
        </div>
    );
};

const Card = React.memo(MemoizedCard);

export default Card;