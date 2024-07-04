// src/App.tsx
import React, { useState, useEffect } from 'react';
// import UserDetails from './userDetails';

import { Routes, Route, useNavigate } from "react-router-dom"

// images
import hamsterLogo from "./assets/hamster-kombat-coin.png"
import { TopCards } from './pages/topCards';
import { EnterData } from './pages/enterData';


interface User {
  id: number;
  first_name: string;
  last_name: string;
  username: string;
  chat_id: number;
}

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  const [bottomTab, setBottomTab] = useState<string>("TopCards")

  const navigate = useNavigate();

  useEffect(() => {
    // Check if Telegram Web App is available
    if (window.Telegram?.WebApp) {
      const tg = window.Telegram.WebApp;

      // Get the user details
      const userData = tg.initDataUnsafe?.user;

      if (userData) {
        setUser({
          id: userData.id,
          first_name: userData.first_name,
          last_name: userData.last_name,
          username: userData.username,
          chat_id: userData.id, // Assuming chat_id is same as user id
        });
      }
    }
  }, []);

  if (!user) return;

  return (
    <div className='flex flex-col'>
      {/* Title */}
      <div className='text-xl m-1 flex justify-center items-center font-bold'>Trick Hamster <img alt='logo' src={hamsterLogo} className='ml-2 w-[1.5rem] h-[1.5rem]' /></div>
      {/* Page */}
      <div className='container mb-32'>
        <Routes>
          <Route path="/" element={<TopCards userData={user} />} />
          <Route path="/enter-data" element={<EnterData />} />
        </Routes>
        {/* container end */}
      </div>

      {/* bottom tab */}
      <div className='bg-cardBackground mx-[1rem] p-1 rounded-2xl flex justify-evenly fixed bottom-0 left-0 right-0 z-50'>
        <button className={`text-sm font-bold h-12 w-1/2 ${bottomTab === "TopCards" ? "bg-background rounded-2xl" : ""}`} onClick={() => {
          setBottomTab("TopCards")
          navigate('/')
        }
        }>Top Cards</button>
        <button className={`text-sm font-bold h-12 w-1/2 ${bottomTab === "EnterData" ? "bg-background rounded-2xl" : ""}`} onClick={() => {
          setBottomTab("EnterData")
          navigate('/enter-data')
        }
        }>Enter Data</button>
      </div>

    </div>
  );
};

export default App;
