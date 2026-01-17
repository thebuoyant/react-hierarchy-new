import { create } from "zustand";
import { HierarchyNodeType } from "../types/hierarchy-node.types";
import { DEFAULT_MOCK_DATA } from "../_mock-data/default-mock-data";

type DataState = {
  data: HierarchyNodeType;
  dataLayerA: HierarchyNodeType[];
  dataLayerB: HierarchyNodeType[];
  dataLayerC: HierarchyNodeType[];

  setData: (data: HierarchyNodeType) => void;
  resetData: () => void;
  setDataLayerA: (dataLayerA: HierarchyNodeType[]) => void;
  setDataLayerB: (dataLayerB: HierarchyNodeType[]) => void;
  setDataLayerC: (dataLayerC: HierarchyNodeType[]) => void;
};

export const useDataStore = create<DataState>((set) => ({
  data: DEFAULT_MOCK_DATA,
  dataLayerA: [],
  dataLayerB: [],
  dataLayerC: [],

  setData: (receivedValue) => set({ data: receivedValue }),
  resetData: () => set({ data: DEFAULT_MOCK_DATA }),
  setDataLayerA: (value: HierarchyNodeType[]) => set({ dataLayerA: value }),
  setDataLayerB: (value: HierarchyNodeType[]) => set({ dataLayerB: value }),
  setDataLayerC: (value: HierarchyNodeType[]) => set({ dataLayerC: value }),
}));
