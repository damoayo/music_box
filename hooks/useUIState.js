import { create } from "zustand";

const useUIState = create((set) => ({
  homeCategory: "",
  headerImageSrc:
    "https://images.unsplash.com/photo-1680552396773-2a942321e750?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  setHomeCategory: (value) => set({ homeCategory: value }),
  setHeaderImageSrc: (src) => set({ headerImageSrc: src }),
}));

export default useUIState;
