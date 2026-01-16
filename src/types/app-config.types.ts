export type AppConfigType = {
  general: {
    appTitle: string;
    showAppTitle: boolean;
  };
  layout: {
    card: {
      cardHeight: number;
      cardWidth: number;
      cardSpace: number;
      branchHeight: number;
    };
    branch: {
      lineColor: string;
    };
  };
};
