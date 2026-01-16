import { create } from "zustand";
import { APP_CONFIG } from "../app.config";

type LayoutState = {
  cardHeight: number;
  cardWidth: number;
  cardSpace: number;
  branchHeight: number;
  showHeader: boolean;
  showLayerA: boolean;
  showLayerB: boolean;
  showLayerC: boolean;

  setCardHeight: (cardHeight: number) => void;
  setCardWidth: (cardWidth: number) => void;
  setCardSpace: (cardSpace: number) => void;
  setBranchHeight: (branchHeight: number) => void;
  setShowHeader: (showHeader: boolean) => void;
  setShowLayerA: (showLayerA: boolean) => void;
  setShowLayerB: (showLayerB: boolean) => void;
  setShowLayerC: (showLayerC: boolean) => void;
};

export const useLayoutStore = create<LayoutState>((set) => ({
  cardHeight: APP_CONFIG.layout.card.cardHeight,
  cardWidth: APP_CONFIG.layout.card.cardWidth,
  cardSpace: APP_CONFIG.layout.card.cardSpace,
  branchHeight: 48,
  showHeader: true,
  showLayerA: true,
  showLayerB: true,
  showLayerC: true,

  setCardHeight: (value: number) => set({ cardHeight: value }),
  setCardWidth: (value: number) => set({ cardWidth: value }),
  setCardSpace: (value: number) => set({ cardSpace: value }),
  setBranchHeight: (value: number) => set({ branchHeight: value }),
  setShowHeader: (value: boolean) => set({ showHeader: value }),
  setShowLayerA: (value: boolean) => set({ showLayerA: value }),
  setShowLayerB: (value: boolean) => set({ showLayerB: value }),
  setShowLayerC: (value: boolean) => set({ showLayerC: value }),
}));
