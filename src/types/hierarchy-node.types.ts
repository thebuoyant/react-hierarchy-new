export type HierarchyNodeType = {
  id: string;
  headerTitle: string;
  headerSubTitle: string;
  content: Record<string, string>;
  avatarUrl: string;
  showAvatar: boolean;
  layout: {
    headerBackgroundColor: string;
    headerTitleColor: string;
    headerSubtitleColor: string;
  };
  children: HierarchyNodeType[];
};
