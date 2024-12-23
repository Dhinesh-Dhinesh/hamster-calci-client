import React, { createContext, useState, useEffect, ReactNode } from 'react';

interface User {
    id: number;
    first_name: string;
    last_name: string;
    username: string;
    chat_id: number;
}

interface UserContextProps {
    user: User | null;
    loading: boolean;
    activeUsers: number;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

interface UserProviderProps {
    children: ReactNode;
}

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [activeUsers, setActiveUsers] = useState<number>(0);

    useEffect(() => {
        if (window.Telegram?.WebApp) {
            const tg = window.Telegram.WebApp;
            const userData = tg.initDataUnsafe?.user;

            if (userData) {
                setUser({
                    id: userData.id,
                    first_name: userData.first_name,
                    last_name: userData.last_name,
                    username: userData.username,
                    chat_id: userData.id,
                });
            }
            //! For testing uncomment this line 
            else {
                setUser({
                    id: 11111111,
                    first_name: "For Test - webapp made for mobile phones only",
                    last_name: "",
                    username: "removed login for adsense",
                    chat_id: 213321,
                });
            }
        }

        const getRandomActiveUserLevel = (min = 10, max = 150) => {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        setActiveUsers(getRandomActiveUserLevel())

        setLoading(false);
    }, []);

    return (
        <UserContext.Provider value={{ user, loading, activeUsers }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider };
export type { User, UserContextProps };