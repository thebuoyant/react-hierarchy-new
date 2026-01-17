import { useDataStore } from "../../store/dataStore";
import { HierarchyNodeType } from "../../types/hierarchy-node.types";
import Card from "../card/Card";

export default function LayerACards() {
  // data store
  const dataLayerA = useDataStore((s) => s.dataLayerA);

  return (
    <div className="layer-a-cards">
      {dataLayerA.map((node: HierarchyNodeType, index: number) => {
        const content = <div>some content layer a</div>;
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
