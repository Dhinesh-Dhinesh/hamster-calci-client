// src/App.tsx
import React, { useState, useEffect } from 'react';
// import UserDetails from './userDetails';

import { Routes, Route, useNavigate, useLocation } from "react-router-dom"

// images
import hamsterLogo from "./assets/hamster-kombat-coin.png"
import { TopCards } from './pages/topCards';
import { EnterData } from './pages/enterData';
import QRcode from "./assets/qrcode.svg"
import StyleIcon from '@mui/icons-material/Style';
import FileCopyIcon from '@mui/icons-material/FileCopy';

// Firebase
import { logEvent } from 'firebase/analytics';
import { analytics } from './firebase';

interface User {
  id: number;
  first_name: string;
  last_name: string;
  username: string;
  chat_id: number;
}

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const navigate = useNavigate();
  const location = useLocation();

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
      } else {
        setUser({
          id: 213132132,
          first_name: "userData.first_name",
          last_name: "userData.last_name",
          username: "userData.username",
          chat_id: 211331, // Assuming chat_id is same as user id
        });
      }
    }

    setLoading(false)
  }, []);

  // Analytics page_view key
  useEffect(() => {
    const pathName: string = location.pathname;

    function logScreenView(screenName: string, screenClass: string): void {
      logEvent(analytics, "screen_view", {
        firebase_screen: screenName,
        firebase_screen_class: screenClass,
      });
    }

    // Log screen view for all screens
    switch (pathName) {
      case "/":
        //* Analytics
        logScreenView("Top cards", "TopCards");
        break;
      case "/enter-data":
        //* Analytics
        logScreenView("Enter data", "EnterData");
        break;
      default:
        break;
    }
    console.log(pathName);
  }, [location]);

  if (!user && !loading) return (
    <div className='font-bold text-white flex justify-center items-center h-[100vh] flex-col bg-black'>
      <p className='text-lg'>Open on your mobile</p>
      <img alt="telegram qrcode" src={QRcode} className='bg-white border-2 border-blue-600 m-14 rounded-3xl w-[20rem] h-[20rem]' />
      <p className='text-lg'>@trick_hamster_bot/trickhamster</p>
    </div>
  )

  return (
    <div className='flex flex-col'>
      {/* Title */}
      <div className='text-xl m-1 flex justify-center items-center font-bold z-40'>Hamster Calci <img alt='logo' src={hamsterLogo} className='ml-2 w-[1.5rem] h-[1.5rem]' /></div>
      {/* Page */}
      {/* <div className='container mb-32'> */}
      <div className="border-[#f3ba2f] border-t-2 rounded-t-[35px] top-glow z-5 py-2 mb-32">
        <Routes>
          <Route path="/" element={<TopCards userData={user} />} />
          <Route path="/enter-data" element={<EnterData />} />
        </Routes>
        {/* container end */}
      </div>

      {/* bottom tab */}
      <div className='bg-cardBackground mx-[1rem] p-1 rounded-2xl flex justify-evenly fixed bottom-0 left-0 right-0 z-50 border-2 border-background'>
        <button className={`text-sm font-bold h-12 w-1/2 items-center flex justify-center ${location.pathname === "/" ? "bg-background rounded-2xl" : ""}`} onClick={() => {
          navigate('/')
        }
        }><StyleIcon className='mr-2' fontSize="small" />Top Cards</button>
        <button className={`text-sm font-bold h-12 w-1/2 items-center flex justify-center ${location.pathname === "/enter-data" ? "bg-background rounded-2xl" : ""}`} onClick={() => {
          navigate('/enter-data')
        }
        }><FileCopyIcon className='mr-2' fontSize="small" />Enter Data</button>
      </div>

    </div>
  );
};

export default App;
