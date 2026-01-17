import { create } from "zustand";
import { HierarchyNodeType } from "../types/hierarchy-node.types";
import { DEFAULT_MOCK_DATA } from "../_mock-data/default-mock-data";

type DataState = {
  data: HierarchyNodeType;
  setData: (data: HierarchyNodeType) => void;
  resetData: () => void;
};

export const useDataStore = create<DataState>((set) => ({
  data: DEFAULT_MOCK_DATA,
  setData: (receivedValue) => set({ data: receivedValue }),
  resetData: () => set({ data: DEFAULT_MOCK_DATA }),
}));
