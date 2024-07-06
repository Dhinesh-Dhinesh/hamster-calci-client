import { createContext, useState, ReactNode, FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Drawer } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { CombinedCard } from '../util/combineCards';
import LoadingButton from '@mui/lab/LoadingButton';

export interface CardDrawerContextType {
    isDrawerOpen: boolean;
    openDrawer: (data: CombinedCard) => void;
    closeDrawer: () => void;
}

interface FormData {
    pph: number;
    price: number;
}

// Create the context
const CardDrawerContext = createContext<CardDrawerContextType | undefined>(undefined);

// Create a provider component
const CardDrawerProvider: FC<{ children: ReactNode }> = ({ children }) => {

    //Submit loading
    const [loading, setLoading] = useState(false);

    // react hook form
    const { register, handleSubmit, formState: { errors }, clearErrors, reset } = useForm<FormData>();

    const onSubmit: SubmitHandler<FormData> = (formData) => {
        setLoading(true);
        console.log(formData);
        // Simulate an async operation
        setTimeout(() => {
            setLoading(false);
            closeDrawer();
        }, 2000);
    };

    // drawer
    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
    const [data, setData] = useState<CombinedCard>()

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
                        borderTopLeftRadius: '24px',
                        borderTopRightRadius: '24px',
                        backgroundColor: "#1b1f24",
                        border: '4px solid transparent', // Adjust the border width as needed
                        boxShadow: '0 0 20px rgba(255, 215, 0, 0.8)', // Increase shadow on hover
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
                            <p className='text-[#85888e] text-sm'>Ex: Enter 10,230 if your pph is 10.23K.</p>
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
                            <p className='text-[#85888e] text-sm'>Ex: If your price is 1.15M open your card enter the exact price like (1,154,634)</p>
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