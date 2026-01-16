import "./ReactHierarchy.css";
import { AppConfigType } from "../../types/app-config.types";
import { APP_CONFIG } from "../../app.config";
import { useEffect } from "react";
import { useLayoutStore } from "../../store/layoutStore";
import { HierarchyNodeType } from "../../types/hierarchy-node.types";
import { DEFAULT_MOCK_DATA } from "../../_mock-data/default-mock-data";

export type ReactHierarchyProps = {
  titleType?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  appConfig: AppConfigType;
  appData: HierarchyNodeType;
};

export default function ReactHierarchy({
  titleType = "h5",
  appConfig = APP_CONFIG,
  appData = DEFAULT_MOCK_DATA,
}: ReactHierarchyProps) {
  // layout store

  const setCardWidth = useLayoutStore((s) => s.setCardWidth);
  const setCardHeight = useLayoutStore((s) => s.setCardHeight);
  const setCardSpace = useLayoutStore((s) => s.setCardSpace);
  const setBranchHeight = useLayoutStore((s) => s.setBranchHeight);

  useEffect(() => {
    const { card, branch } = appConfig.layout;

    console.log("appData", appData);
    setCardWidth(card.cardWidth);
    setCardHeight(card.cardHeight);
    setCardSpace(card.cardWidth);
    setBranchHeight(branch.height);
  }, [appConfig, setCardHeight, setCardWidth, setCardSpace, setBranchHeight]);

  return (
    <div className="react-hierarchy">
      <div className="layout-wrapper">
        <div className="header-wrapper">header</div>
        <div className="layer-a-wrapper">
          <div className="layer-a-branch-wrapper">layer-a-branch</div>
          <div className="layer-a-cards-wrapper">layer-a-cards</div>
        </div>
        <div className="layer-b-wrapper">
          <div className="layer-b-branch-wrapper">layer-b-branch</div>
          <div className="layer-b-cards-wrapper">layer-b-cards</div>
        </div>
        <div className="layer-c-wrapper">
          <div className="layer-c-branch-wrapper">layer-c-branch</div>
          <div className="layer-c-cards-wrapper">layer-c-cards</div>
        </div>
      </div>
    </div>
  );
}
