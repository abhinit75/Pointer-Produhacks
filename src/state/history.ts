import { create } from "zustand";

type Query = {
  query: string;
  response: string;
};

interface HistoryState {
  history: Query[];
  addHistory: (query: string, response: string) => void;
}

const useHistory = create<HistoryState>((set) => ({
  history: [],
  addHistory: (query: string, response: string) =>
    set((state) => ({
      history: [{ query, response }, ...state.history],
    })),
}));

export { useHistory };
