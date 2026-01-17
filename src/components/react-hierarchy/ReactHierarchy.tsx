import "./ReactHierarchy.css";
import { AppConfigType } from "../../types/app-config.types";
import { APP_CONFIG } from "../../app.config";
import { useEffect } from "react";
import { useLayoutStore } from "../../store/layoutStore";
import { HierarchyNodeType } from "../../types/hierarchy-node.types";
import { DEFAULT_MOCK_DATA } from "../../_mock-data/default-mock-data";
import Header from "../header/Header";
import { APP_CONST } from "../../constants/app.const";
import { useDataStore } from "../../store/dataStore";

export type ReactHierarchyProps = {
  appConfig: AppConfigType;
  appData: HierarchyNodeType;
};

export default function ReactHierarchy({
  appConfig = APP_CONFIG,
  appData = DEFAULT_MOCK_DATA,
}: ReactHierarchyProps) {
  // layout store
  const cardHeight = useLayoutStore((s) => s.cardHeight);
  const cardWidth = useLayoutStore((s) => s.cardWidth);
  const cardSpace = useLayoutStore((s) => s.cardSpace);
  const branchHeight = useLayoutStore((s) => s.branchHeight);
  const showLayerA = useLayoutStore((s) => s.showLayerA);
  const showLayerB = useLayoutStore((s) => s.showLayerC);
  const showLayerC = useLayoutStore((s) => s.showLayerA);

  const setCardWidth = useLayoutStore((s) => s.setCardWidth);
  const setCardHeight = useLayoutStore((s) => s.setCardHeight);
  const setCardSpace = useLayoutStore((s) => s.setCardSpace);
  const setBranchHeight = useLayoutStore((s) => s.setBranchHeight);

  // data store
  const setData = useDataStore((s) => s.setData);

  useEffect(() => {
    const { card, branch } = appConfig.layout;

    setCardWidth(card.cardWidth);
    setCardHeight(card.cardHeight);
    setCardSpace(card.cardWidth);
    setBranchHeight(branch.height);
    setData(appData);
  }, [
    appConfig,
    appData,
    setCardHeight,
    setCardWidth,
    setCardSpace,
    setBranchHeight,
    setData,
  ]);

  const totalWidth =
    (2 * cardSpace + cardWidth) * APP_CONST.numberOfCardsPerLayer;

  return (
    <div
      className="react-hierarchy"
      style={{ width: totalWidth, overflow: "hidden" }}
    >
      <div
        className="layout-wrapper"
        style={{ width: totalWidth, overflow: "hidden" }}
      >
        {APP_CONFIG.general.showAppTitle && (
          <div className="header-wrapper">
            <Header />
          </div>
        )}
        {showLayerA && (
          <div className="layer-a-wrapper">
            <div
              className="layer-a-branch-wrapper"
              style={{ height: branchHeight }}
            >
              layer-a-branch
            </div>
            <div
              className="layer-a-cards-wrapper"
              style={{ height: cardHeight }}
            >
              layer-a-cards
            </div>
          </div>
        )}
        {showLayerB && (
          <div className="layer-b-wrapper">
            <div
              className="layer-b-branch-wrapper"
              style={{ height: branchHeight }}
            >
              layer-b-branch
            </div>
            <div
              className="layer-b-cards-wrapper"
              style={{ height: cardHeight }}
            >
              layer-b-cards
            </div>
          </div>
        )}
        {showLayerC && (
          <div className="layer-c-wrapper">
            <div
              className="layer-c-branch-wrapper"
              style={{ height: branchHeight }}
            >
              layer-c-branch
            </div>
            <div
              className="layer-c-cards-wrapper"
              style={{ height: cardHeight }}
            >
              layer-c-cards
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
