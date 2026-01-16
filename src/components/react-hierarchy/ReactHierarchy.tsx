import "./ReactHierarchy.css";
import { AppConfigType } from "../../types/app-config.types";
import { APP_CONFIG } from "../../app.config";
import { useEffect } from "react";
import { useLayoutStore } from "../../store/layoutStore";

export type ReactHierarchyProps = {
  titleType?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  appConfig: AppConfigType;
};

export default function ReactHierarchy({
  titleType = "h5",
  appConfig = APP_CONFIG,
}: ReactHierarchyProps) {
  // layout store
  const cardWidth = useLayoutStore((s) => s.cardWidth);
  const cardHeight = useLayoutStore((s) => s.cardHeight);
  const cardSpace = useLayoutStore((s) => s.cardSpace);
  const branchHeight = useLayoutStore((s) => s.branchHeight);

  const setCardWidth = useLayoutStore((s) => s.setCardWidth);
  const setCardHeight = useLayoutStore((s) => s.setCardHeight);
  const setCardSpace = useLayoutStore((s) => s.setCardSpace);
  const setBranchHeight = useLayoutStore((s) => s.setBranchHeight);

  useEffect(() => {
    setCardWidth(cardWidth);
    setCardHeight(cardHeight);
    setCardSpace(cardSpace);
    setBranchHeight(branchHeight);
  }, [
    cardWidth,
    cardHeight,
    cardSpace,
    branchHeight,
    setCardHeight,
    setCardWidth,
    setCardSpace,
    setBranchHeight,
  ]);

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
