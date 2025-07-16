import { create } from "zustand";

type ThemeMode = 'light' | 'dark';

interface ThemeStore{
    mode: ThemeMode;
    toggleTheme: ()=> void;
};

function getInitialMode ():ThemeMode{
    const stored = localStorage.getItem('theme');
    if(stored === 'light' || stored === 'dark') return stored;
    return 'light';
}

/** Theme store used for toggle mode */
export const useThemeStore = create<ThemeStore>((set)=>({
    mode:getInitialMode(),  //default
    toggleTheme: () =>
    set((state) => {
      const newMode = state.mode === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newMode);
      return { mode: newMode };
    }),
}));

