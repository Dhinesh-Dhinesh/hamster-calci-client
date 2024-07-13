import { createContext, useState, ReactNode, FC, useEffect } from 'react';
import { Drawer } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { CombinedCard } from '../util/combineCards';
import LoadingButton from '@mui/lab/LoadingButton';
import { formatNumber } from '../util/numberFormat';
import { updateCard } from '../util/FirestoreService';
import { cleanString } from '../util/cleanString';
import { useCardData } from '../hooks/useCardData';
import { logEvent } from 'firebase/analytics';
import { analytics } from '../firebase';
import useUser from '../hooks/useUser';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import CoinImage from "../assets/coin.png";

export interface CardDrawerContextType {
    isDrawerOpen: boolean;
    openDrawer: (data: CombinedCard) => void;
    closeDrawer: () => void;
}


type SampleDataType = {
    pph: number;
    price: number;
    roiHours: number;
    roiDays: string;
}

const initialSampleData: SampleDataType = {
    pph: 0,
    price: 0,
    roiHours: 0,
    roiDays: ''
};

// Create the context
const CardDrawerContext = createContext<CardDrawerContextType | undefined>(undefined);

// Create a provider component
const CardDrawerProvider: FC<{ children: ReactNode }> = ({ children }) => {

    const { refetchCards } = useCardData();
    const { user } = useUser();

    //Submit loading
    const [loading, setLoading] = useState(false);

    // drawer
    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
    const [data, setData] = useState<CombinedCard>()
    const [lvl, setLvl] = useState<number>(0)

    const [sampleData, setSampleData] = useState<SampleDataType>(initialSampleData);

    // react hook form

    const onSubmit = () => {

        // if no data exit or skip
        if (!data) return;

        if ((lvl === 0) || (data?.level == lvl)) return;

        setLoading(true);

        const cardType = cleanString(data.type)

        // Check user is available

        if (user) {
            updateCard(user.id.toString(), cardType, {
                id: data.id,
                level: lvl
            }).then(() => {
                //* Analytics
                logEvent(analytics, "card_update", {
                    cardName: data.name
                })

                // refetch cards data then change loading state & close drawer
                refetchCards()
                setLoading(false);
                closeDrawer();
            }).catch(err => {
                //* Analytics
                logEvent(analytics, "error", {
                    function: "Update Card",
                    message: err,
                })
            })
        } else {
            console.log("This web app is build for telegram")
        }
    };

    // drawer
    const openDrawer = (data: CombinedCard) => {

        if (data.level) {
            setLvl(data.level)
        }

        //* Analytics
        logEvent(analytics, "card_view", {
            cardName: data.name,
        })

        setData(data)
        setIsDrawerOpen(true)
    }
    const closeDrawer = () => {
        setIsDrawerOpen(false);

        // reset the local values
        setSampleData(initialSampleData);
        setLvl(0);

    }

    // inc dec handler
    const handleLevelChange = (changeType: "inc" | "dec"): void => {
        if (changeType === "inc") {
            setLvl((prev) => {
                if (prev === 25) return 25;

                return prev + 1;
            })
        } else {
            setLvl((prev) => {
                if (prev === 0) return 0;

                return prev - 1;
            })
        }
    }

    useEffect(() => {
        //level pph and price finder

        const findCardValues = (initialPph: number, initialPrice: number, cardLevel: number): { pph: number, price: number } => {

            if (cardLevel === 0) return { pph: initialPph, price: initialPrice }

            const nxtCardLevel = cardLevel + 1;

            const pphGrowthFactor = 1.07; // PPH growth factor
            const priceGrowthBase = 1.0246950765653693; // Base for price growth

            const pph = Math.round(initialPph * Math.pow(pphGrowthFactor, nxtCardLevel - 1));
            const price = Math.round(initialPrice * Math.pow(priceGrowthBase, (nxtCardLevel - 1) ** 2 + 3 * (nxtCardLevel - 1)));

            return { pph, price }
        }

        if (data && data.initialPph !== undefined && data.initialPrice !== undefined) {
            const { pph, price } = findCardValues(data.initialPph, data.initialPrice, lvl)

            const roiHours = price / pph;
            const roiDays = (roiHours / 24).toFixed(2);

            // to prevent re-render
            setSampleData(prevData => {
                if (prevData.pph !== pph || prevData.price !== price || prevData.roiHours !== roiHours || prevData.roiDays !== roiDays) {
                    return { pph, price, roiHours, roiDays };
                }
                return prevData;
            });
        }

    }, [lvl, data])

    return (
        <CardDrawerContext.Provider value={{ isDrawerOpen, openDrawer, closeDrawer }}>
            {children}
            <Drawer
                anchor="bottom"
                open={isDrawerOpen}
                onClose={closeDrawer}
                sx={{
                    '& .MuiDrawer-paper': {
                        height: '70%', // Adjust the height as needed
                        borderTopLeftRadius: '30px',
                        borderTopRightRadius: '30px',
                        backgroundColor: "#1b1f24",
                        borderTop: '2px solid rgba(255, 215, 0, 0.8)', // Adjust the border width as needed
                        boxShadow: '0 0 25px rgba(255, 215, 0, 0.8)', // Increase shadow on hover
                    },
                }}
            >
                <button
                    onClick={closeDrawer}
                    style={{
                        position: 'absolute',
                        top: '16px',
                        right: '16px',
                        background: 'none',
                        border: 'none',
                        color: 'white',
                        cursor: 'pointer',
                    }}
                >
                    <CloseIcon />
                </button>
                <div className='h-[15rem] text-white'>
                    <div className='my-2 mx-4 p-1 rounded-lg h-full'>
                        {/* Image and title */}
                        <div className="flex items-center justify-start overflow-hidden">
                            <div
                                className="bg-no-repeat bg-center bg-contain w-14 h-14"
                                style={{ backgroundImage: `url(${data?.img})` }}
                            ></div>
                            <p className="text-xs font-bold ml-2 flex-1">{data?.name}</p>
                        </div>
                        <p className='text-[#85888e] text-xs mt-1'>Open your {data?.name} card in "Hamster Kombat" and enter your card's exact level</p>
                        <hr className='mt-2 p-1 border-[#464749]' />

                        {/* Values */}
                        <div className="text-xl text-left text-[#85888e]">
                            Level: <span className='text-white'>{lvl}</span>
                        </div>
                        <div className="text-lg text-left text-[#85888e] mt-2">
                            Profit per hour: <span className='text-white'>{formatNumber(sampleData.pph)}</span>
                        </div>
                        <div className="text-lg text-left flex items-center text-[#85888e]">
                            Price:
                            <img alt='logo' src={CoinImage} className='mx-[.2rem] w-[1rem] h-[1rem] mt-1' />
                            <span className='text-white'>{formatNumber(sampleData.price)}</span>
                        </div>
                        <div className="text-lg text-left flex items-center text-[#85888e] mt-2">
                            ROI: <span className='text-white mx-[.2rem]'> {sampleData.roiHours.toFixed(2)} hours / {sampleData.roiDays} days</span>
                        </div>
                        <hr className='mt-2 p-1 border-[#464749]' />

                        <div className='my-2' onClick={() => onSubmit()}>
                            <LoadingButton
                                disabled={lvl === 0 ? true : false}
                                size='small'
                                type='submit'
                                loading={loading}
                                variant='contained'
                                className='w-full bg-blue-500 py-2 hover:bg-blue-600 h-14'
                                sx={{
                                    borderRadius: '12px',
                                    textTransform: 'none',
                                    '& .MuiCircularProgress-root': {
                                        color: 'white',
                                    },
                                }}
                            >
                                Save
                            </LoadingButton>
                        </div>

                        <hr className='mt-4 p-1 border-[#464749]' />

                        {/* Level */}
                        <div className='flex flex-col items-center mt-5'>
                            <div className='flex items-center justify-evenly w-full'>
                                <RemoveCircleIcon onClick={() => handleLevelChange("dec")} sx={{
                                    cursor: 'pointer',
                                    transition: 'transform 0.1s ease',
                                    '&:hover': {
                                        transform: 'scale(1.1)',
                                    },
                                    '&:active': {
                                        transform: 'scale(0.9)',
                                    },
                                }} />
                                <p>{lvl}</p>
                                <AddCircleIcon onClick={() => handleLevelChange("inc")}
                                    sx={{
                                        cursor: 'pointer',
                                        transition: 'transform 0.1s ease',
                                        '&:hover': {
                                            transform: 'scale(1.1)',
                                        },
                                        '&:active': {
                                            transform: 'scale(0.9)',
                                        },
                                    }} />
                            </div>
                            <p className='text-[#858689]'>Level</p>
                        </div>

                        <hr className='mt-2 p-1 border-[#464749]' />
                    </div>
                </div>
            </Drawer>
        </CardDrawerContext.Provider>
    );
};

export { CardDrawerContext, CardDrawerProvider };