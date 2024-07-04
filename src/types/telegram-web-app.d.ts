// src/types/telegram-web-app.d.ts

interface TelegramUser {
    id: number;
    first_name: string;
    last_name: string;
    username: string;
  }
  
  interface TelegramWebApp {
    initDataUnsafe?: {
      user?: TelegramUser;
    };
  }
  
  interface Telegram {
    WebApp: TelegramWebApp;
  }
  
  interface Window {
    Telegram: Telegram;
  }