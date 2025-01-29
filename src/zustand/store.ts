import { create } from "zustand";

interface SidebarState {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  closeSidebar: () => void;
  openSidebar: () => void;
}

export const useSidebarStore = create<SidebarState>((set) => ({
  isSidebarOpen: false,
  toggleSidebar: () =>
    set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
  closeSidebar: () => set({ isSidebarOpen: false }),
  openSidebar: () => set({ isSidebarOpen: true }),
}));

interface AuthState {
  isLoading: boolean;
  error: string | null;
  token: string | null;
  login: (username: string, password: string, role: string) => Promise<boolean>;
  logout: () => void;
}

interface AuthState {
  isLoading: boolean;
  error: string | null;
  token: string | null;
  login: (username: string, password: string, role: string) => Promise<boolean>;
  logout: () => void;
  checkTokenExpiration: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  isLoading: false,
  error: null,
  token: localStorage.getItem("token") || null,

  login: async (username, password, role) => {
    set({ isLoading: true, error: null });

    try {
      const response = await fetch(
        "https://hotel-management-system-backend-yref.onrender.com/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password, role }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Login failed");
      }

      const data = await response.json();
      const expiresAt = Date.now() + 60 * 60 * 1000; // 1 hour expiration

      localStorage.setItem("token", data.token);
      localStorage.setItem("tokenExpiresAt", expiresAt.toString());

      set({ token: data.token, isLoading: false });

      return true;
    } catch (err) {
      set({
        error: err instanceof Error ? err.message : "An unknown error occurred",
        isLoading: false,
      });
      return false;
    }
  },

  logout: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("tokenExpiresAt");
    set({ token: null });
  },

  checkTokenExpiration: () => {
    const expiresAt = localStorage.getItem("tokenExpiresAt");
    if (expiresAt && Date.now() > Number(expiresAt)) {
      useAuthStore.getState().logout();
    }
  },
}));

export default useAuthStore;
