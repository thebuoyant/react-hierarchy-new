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
import { extractNodesForLevels } from "../../util/node.util";

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
  const setShowLayerA = useLayoutStore((s) => s.setShowLayerA);
  const setShowLayerB = useLayoutStore((s) => s.setShowLayerB);
  const setShowLayerC = useLayoutStore((s) => s.setShowLayerC);

  // data store
  const dataLayerA = useDataStore((s) => s.dataLayerA);
  const dataLayerB = useDataStore((s) => s.dataLayerB);
  const dataLayerC = useDataStore((s) => s.dataLayerC);

  const setData = useDataStore((s) => s.setData);
  const setDataLayerA = useDataStore((s) => s.setDataLayerA);
  const setDataLayerB = useDataStore((s) => s.setDataLayerB);
  const setDataLayerC = useDataStore((s) => s.setDataLayerC);

  useEffect(() => {
    const { card, branch } = appConfig.layout;

    setCardWidth(card.cardWidth);
    setCardHeight(card.cardHeight);
    setCardSpace(card.cardSpace);
    setBranchHeight(branch.height);
    setData(appData);

    const layerData = extractNodesForLevels(appData);
    const { arrayLevelA, arrayLevelB, arrayLevelC } = layerData;

    setDataLayerA(arrayLevelA);
    setDataLayerB(arrayLevelB);
    setDataLayerC(arrayLevelC);

    setShowLayerA(arrayLevelA.length > 0);
    setShowLayerB(arrayLevelB.length > 0);
    setShowLayerC(arrayLevelC.length > 0);
  }, [
    appConfig,
    appData,
    setCardHeight,
    setCardWidth,
    setCardSpace,
    setBranchHeight,
    setData,
    setDataLayerA,
    setDataLayerB,
    setDataLayerC,
    setShowLayerA,
    setShowLayerB,
    setShowLayerC,
  ]);

  const singleCardTotalWidth = 2 * cardSpace + cardWidth;

  const totalWidth = singleCardTotalWidth * APP_CONST.numberOfCardsPerLayer;

  const numberOfItemsLayerA = dataLayerA.length;
  const numberOfItemsLayerB = dataLayerB.length;
  const numberOfItemsLayerC = dataLayerC.length;

  const calculatedWidthLayerA = numberOfItemsLayerA * singleCardTotalWidth;
  const calculatedWidthLayerB = numberOfItemsLayerB * singleCardTotalWidth;
  const calculatedWidthLayerC = numberOfItemsLayerC * singleCardTotalWidth;

  console.log("cardSpace", cardSpace);

  console.log("numberOfItemsLayerA", numberOfItemsLayerA, singleCardTotalWidth);

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
              style={{
                height: branchHeight,
                width:
                  calculatedWidthLayerA <= totalWidth
                    ? totalWidth
                    : calculatedWidthLayerA,
              }}
            >
              layer-a-branch
            </div>
            <div
              className="layer-a-cards-wrapper"
              style={{
                height: cardHeight,
                width:
                  calculatedWidthLayerA <= totalWidth
                    ? totalWidth
                    : calculatedWidthLayerA,
              }}
            >
              layer-a-cards
            </div>
          </div>
        )}
        {showLayerB && (
          <div className="layer-b-wrapper">
            <div
              className="layer-b-branch-wrapper"
              style={{
                height: branchHeight,
                width:
                  calculatedWidthLayerB <= totalWidth
                    ? totalWidth
                    : calculatedWidthLayerB,
              }}
            >
              layer-b-branch
            </div>
            <div
              className="layer-b-cards-wrapper"
              style={{
                height: cardHeight,
                width:
                  calculatedWidthLayerB <= totalWidth
                    ? totalWidth
                    : calculatedWidthLayerB,
              }}
            >
              layer-b-cards
            </div>
          </div>
        )}
        {showLayerC && (
          <div className="layer-c-wrapper">
            <div
              className="layer-c-branch-wrapper"
              style={{
                height: branchHeight,
                width:
                  calculatedWidthLayerC <= totalWidth
                    ? totalWidth
                    : calculatedWidthLayerC,
              }}
            >
              layer-c-branch
            </div>
            <div
              className="layer-c-cards-wrapper"
              style={{
                height: cardHeight,
                width:
                  calculatedWidthLayerC <= totalWidth
                    ? totalWidth
                    : calculatedWidthLayerC,
              }}
            >
              layer-c-cards
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
