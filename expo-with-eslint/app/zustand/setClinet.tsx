import { create } from 'zustand';

type ClientStore = {
  name: string;
  change: () => void;
  changeBack: () => void;
};

export const useClientStore = create<ClientStore>((set) => ({
  name: 'marco',
  change: () => {
    set({ name: 'changed marcooooo' });
  },
  changeBack: () => {
    set({ name: 'marcoooo' });
  },
}));
