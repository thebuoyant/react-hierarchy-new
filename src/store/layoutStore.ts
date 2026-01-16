import { create } from "zustand";
import { APP_CONFIG } from "../app.config";

type LayoutState = {
  cardHeight: number;
  cardWidth: number;
  cardSpace: number;
  branchHeight: number;

  setCardHeight: (cardHeight: number) => void;
  setCardWidth: (cardWidth: number) => void;
  setCardSpace: (cardSpace: number) => void;
  setBranchHeight: (branchHeight: number) => void;
};

export const useLayoutStore = create<LayoutState>((set) => ({
  cardHeight: APP_CONFIG.layout.card.cardHeight,
  cardWidth: APP_CONFIG.layout.card.cardWidth,
  cardSpace: APP_CONFIG.layout.card.cardSpace,
  branchHeight: 48,

  setCardHeight: (receivedValue: number) => set({ cardHeight: receivedValue }),
  setCardWidth: (receivedValue: number) => set({ cardWidth: receivedValue }),
  setCardSpace: (receivedValue: number) => set({ cardSpace: receivedValue }),
  setBranchHeight: (receivedValue: number) =>
    set({ branchHeight: receivedValue }),
}));
