import { createContext, useState, ReactNode, FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Drawer } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { CombinedCard } from '../util/combineCards';
import LoadingButton from '@mui/lab/LoadingButton';
import { convertStringToNumber } from '../util/numberFormat';
import { updateCard } from '../util/FirestoreService';
import { cleanString } from '../util/cleanString';
import { useCardData } from '../hooks/useCardData';

export interface CardDrawerContextType {
    isDrawerOpen: boolean;
    openDrawer: (data: CombinedCard) => void;
    closeDrawer: () => void;
}

interface FormData {
    pph: string;
    price: string;
}

// Create the context
const CardDrawerContext = createContext<CardDrawerContextType | undefined>(undefined);

// Create a provider component
const CardDrawerProvider: FC<{ children: ReactNode }> = ({ children }) => {

    const { refetchCards } = useCardData();

    //Submit loading
    const [loading, setLoading] = useState(false);

    // drawer
    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
    const [data, setData] = useState<CombinedCard>()

    // react hook form
    const { register, handleSubmit, formState: { errors }, clearErrors, reset } = useForm<FormData>();

    const onSubmit: SubmitHandler<FormData> = (formData) => {
        setLoading(true);

        if (!data) return;

        const toUpdata = {
            id: data.id,
            pph: convertStringToNumber(formData.pph),
            price: convertStringToNumber(formData.price),
        }

        // ! log
        console.log({
            id: data.id,
            pph: convertStringToNumber(formData.pph),
            price: convertStringToNumber(formData.price),
        });

        const cardType = cleanString(data.type)

        updateCard("1MZVle2lDZ8s2w0FUysv", cardType, {
            id: toUpdata.id,
            pph: toUpdata.pph as number,
            price: toUpdata.price as number
        }).then(() => {
            // refetch cards data then change loading state & close drawer and 
            refetchCards()
            setLoading(false);
            closeDrawer();
        })
    };

    // drawer
    const openDrawer = (data: CombinedCard) => {
        setData(data)
        setIsDrawerOpen(true)
    }
    const closeDrawer = () => {
        setIsDrawerOpen(false);
        reset()
        clearErrors()
    }


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

                        <form onSubmit={handleSubmit(onSubmit)}>
                        <p className='text-[#85888e] text-xs mt-1'>Open your card in "Hamster Kombat" & Enter the exact Profit per hour and Price of next level card</p>
                        <hr className='mt-2 p-1 border-[#464749]' />
                            <p>Profit per hour:</p>
                            <div className='my-2'>
                                <input
                                    type='number'
                                    autoComplete='off'
                                    placeholder={data?.pph !== undefined ? data.pph.toString() : "Profit per hour"}
                                    className='w-full px-4 py-2 border rounded-lg'
                                    {...register("pph", {
                                        required: "Profit per hour is required",
                                        pattern: { value: /^[0-9]+$/, message: "Only numbers are allowed" }
                                    })}
                                />
                                {errors.pph && <p className='text-red-500 text-sm mt-1'>{errors.pph.message}</p>}
                            </div>
                            <p className='text-[#85888e] text-sm'>Ex: Enter 1,770 if your pph is +1.77K.</p>
                            <p>Price:</p>
                            <div className='my-2'>
                                <input
                                    type='number'
                                    autoComplete='off'
                                    placeholder={data?.price !== undefined ? data.price.toString() : "Price"}
                                    className='w-full px-4 py-2 border rounded-lg'
                                    {...register("price", {
                                        required: "Price is required",
                                        pattern: { value: /^[0-9]+$/, message: "Only numbers are allowed" }
                                    })}
                                />
                                {errors.price && <p className='text-red-500 text-sm mt-1'>{errors.price.message}</p>}
                            </div>
                            <p className='text-[#85888e] text-sm'>Ex: Enter 1,154,634 if your price is 1.15M</p>
                            <div className='my-2'>
                                <LoadingButton
                                    type='submit'
                                    loading={loading}
                                    variant='contained'
                                    className='w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600'
                                    sx={{
                                        '& .MuiCircularProgress-root': {
                                            color: 'white',
                                        },
                                    }}
                                >
                                    Submit
                                </LoadingButton>
                            </div>
                        </form>
                    </div>
                </div>
            </Drawer>
        </CardDrawerContext.Provider>
    );
};

export { CardDrawerContext, CardDrawerProvider };