import { useDataStore } from "../../store/dataStore";
import { HierarchyNodeType } from "../../types/hierarchy-node.types";
import Card from "../card/Card";
import "./LayerCCards.css";

export default function LayerCCards() {
  // data store
  const dataLayerC = useDataStore((s) => s.dataLayerC);

  return (
    <div className="layer-c-cards">
      {dataLayerC.map((node: HierarchyNodeType, index: number) => {
        const content = <div>some content layer c</div>;
        const handleNavButtonClick = () => {
          const selectedNodeId = node.id;

          console.log("selectedNodeId", selectedNodeId);
        };
        return (
          <Card
            key={index}
            node={node}
            showNavButton={node.children.length > 0}
            showParentConnection={false}
            showChildConnection={false}
            positionIndex={index}
            content={content}
            onNavButtonClick={handleNavButtonClick}
          />
        );
      })}
    </div>
  );
}
