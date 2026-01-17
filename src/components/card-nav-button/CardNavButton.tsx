import { Chip } from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { APP_CONFIG } from "../../app.config";
import { CardNavButtonClickPayloadType } from "../../types/graph.types";

export type CardNavButtonProps = {
  counter?: number;
  isExpanded?: boolean;
  onClick?: (payload: CardNavButtonClickPayloadType) => void;
  nodeId: string;
  positionIndex: number;
};

export default function CardNavButton({
  counter = 0,
  isExpanded = false,
  onClick,
  nodeId,
  positionIndex,
}: CardNavButtonProps) {
  const handleExpansionClick = () => {
    onClick?.({
      expanded: !isExpanded,
      counter,
      nodeId,
      positionIndex,
    });
  };

  return (
    <Chip
      className="card-nav-button"
      label={counter}
      onClick={handleExpansionClick}
      onDelete={handleExpansionClick}
      deleteIcon={isExpanded ? <ExpandMoreIcon /> : <ExpandLessIcon />}
      size="small"
      style={{
        backgroundColor: isExpanded
          ? APP_CONFIG.layout.cardNavButton.activeBackgroundColor
          : APP_CONFIG.layout.cardNavButton.defaultBackgroundColor,
        color: isExpanded
          ? APP_CONFIG.layout.cardNavButton.activeColor
          : APP_CONFIG.layout.cardNavButton.defaultColor,
      }}
    />
  );
}
