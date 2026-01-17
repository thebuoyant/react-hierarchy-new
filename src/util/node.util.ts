import { HierarchyNodeType } from "../types/hierarchy-node.types";

/**
 * Extracts nodes for ui structure.
 */
export function extractNodesForLevels(root: HierarchyNodeType): {
  arrayLevelA: HierarchyNodeType[];
  arrayLevelB: HierarchyNodeType[];
  arrayLevelC: HierarchyNodeType[];
} {
  const arrayLevelA: HierarchyNodeType[] = [root];
  const arrayLevelB: HierarchyNodeType[] = root.children;

  const firstChild = root.children[0]; // HierarchyNode | undefined

  const arrayLevelC: HierarchyNodeType[] = firstChild
    ? firstChild.children
    : [];

  return {
    arrayLevelA,
    arrayLevelB,
    arrayLevelC,
  };
}
