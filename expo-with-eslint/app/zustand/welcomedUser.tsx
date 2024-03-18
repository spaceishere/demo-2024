import { create } from 'zustand';

type ClientStore = {
  welcomed: boolean;
  change: () => void;
  logOut: () => void;
};

export const useClientWelcomed = create<ClientStore>((set) => ({
  welcomed: false,
  change: () => {
    set({ welcomed: true });
  },
  logOut: () => {
    set({ welcomed: false });
  },
}));
