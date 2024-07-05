import { createContext, useState, ReactNode, FC } from 'react';
import { Drawer } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

// Define the context value types
type Card = {
    id: number,
    name: string,
    img: string,
    type: "PR&Team" | "Markets" | "Legal" | "Specials"
}

export interface CardDrawerContextType {
    isDrawerOpen: boolean;
    openDrawer: (data: Card) => void;
    closeDrawer: () => void;
}

// Create the context
const CardDrawerContext = createContext<CardDrawerContextType | undefined>(undefined);

// Create a provider component
const CardDrawerProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
    const [data, setData] = useState<Card>()

    const openDrawer = (data: Card) => {
        setData(data)
        setIsDrawerOpen(true)
    }
    const closeDrawer = () => setIsDrawerOpen(false);

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

                        <form>
                            <div className='my-2'>
                                <input
                                    type='text'
                                    placeholder='Profit per Hour'
                                    className='w-full px-4 py-2 border rounded-lg'
                                />
                            </div>
                            <p className='text-[#85888e] text-sm'>Ex: Enter 10,230 if your pph is 10.23K.</p>
                            <p>Price:</p>
                            <div className='my-2'>
                                <input
                                    type='text'
                                    placeholder='Price'
                                    className='w-full px-4 py-2 border rounded-lg'
                                />
                            </div>
                            <p className='text-[#85888e] text-sm'>Ex: If your price is 1.15M open your card enter the exact price like (1,154,634)</p>
                            <div className='my-2'>
                                <button
                                    type='submit'
                                    className='w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600'
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </Drawer>
        </CardDrawerContext.Provider>
    );
};

export { CardDrawerContext, CardDrawerProvider };