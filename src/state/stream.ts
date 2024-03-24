import { create } from "zustand";

interface TextState {
  text: string;
  setText: (by: string) => void;
  clearText: () => void;
}

const useTextStore = create<TextState>()((set) => ({
  text: "",
  setText: (to: string) => set((state) => ({ text: state.text + to })),
  clearText: () => set({ text: "" }),
}));

export { useTextStore };
