import KombatImage from "../assets/kombat.webp"


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
    return (
        <>
            <div className='bg-cardBackground my-1 mx-4 p-1 rounded-lg flex overflow-hidden'>
                <div className="p-2">
                    <img src={KombatImage} alt="kombat" width={80} height={80} className="border-[1px] border-yellow-500 glow rounded-full" />
                </div>
                <div className="flex flex-col p-2 m-auto w-full">
                    <p>Hi👋 {userData?.first_name} {userData?.last_name} (CEO)</p>
                    <p className="text-sm text-[#85888e]">{userData?.username}</p>
                </div>
            </div>
            <div className='bg-cardBackground my-2 mx-4 p-2 rounded-lg flex flex-col'>
                <p>Best Cards To Buy 🪙</p>
                <p className="text-xs text-[#85888e]">Based on your data</p>
            </div>

            {"null" === "null" ? (
                <>
                    <div className="my-2 mx-4 p-2 h-[10rem] text-sm flex text-center items-center ">To see the top cards, enter your Hamster Kombat game cards' ("profit per hour & price") on the enter data page.</div>
                </>
            ) : (
                <>
                    <div>cards</div>
                </>
            )}
        </>
    );
};

export default TopCards;