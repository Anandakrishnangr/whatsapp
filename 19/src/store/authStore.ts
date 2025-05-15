import {create} from 'zustand';
import { persist } from 'zustand/middleware';

// Define the interface for the store state
interface AuthState {
  user: { name: string; id: string } | null;
  token: string | null;
  login: (user: { name: string; id: string }, token: string) => void;
  logout: () => void;
}

// Create the store with the 'persist' middleware
const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      login: (user, token) => set({ user, token }),
      logout: () => set({ user: null, token: null }),
    }),
    {
      name: 'auth-storage', // LocalStorage key
    }
  )
);

export default useAuthStore;
