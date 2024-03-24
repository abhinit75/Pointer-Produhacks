import { create } from "zustand";

interface SearchState {
  isResultsLoading: boolean;
  setIsResultsLoading: (by: boolean) => void;
}

const useSearchStatusStore = create<SearchState>()((set) => ({
  isResultsLoading: false,
  setIsResultsLoading: (to: boolean) => set({ isResultsLoading: to }),
}));

export { useSearchStatusStore };
