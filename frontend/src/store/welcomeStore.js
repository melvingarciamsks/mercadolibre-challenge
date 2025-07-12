// src/store/welcomeStore.js
import { create } from 'zustand';

export const useWelcomeStore = create((set) => ({
  shown: localStorage.getItem('welcomeShown') === 'true',
  showOnce: () => {
    localStorage.setItem('welcomeShown', 'true');
    set({ shown: true });
  },
}));
