import { create } from 'zustand';
import { IUser } from '@/types/models';

interface UserState {
  user: IUser | null;
  // eslint-disable-next-line no-unused-vars
  addUser: (user: IUser) => void;
}

export const useUserStore = create<UserState>()((set) => ({
  user: null,
  addUser: (user) => set({ user }),
}));
