import { create } from 'zustand';

type User = {
  email: string;
  id: string;
  name: string;
  image: string;
};

type ClientStore = {
  user: User | {};
  token: string | null;
  setUser: (newUser: User) => void;
  setToken: (token: string) => void;
};

export const useClientStore = create<ClientStore>((set) => ({
  user: {},
  token: null,

  setUser: (newUser) => {
    set({ user: newUser });
  },

  setToken: (token) => {
    set({ token });
  },
}));
