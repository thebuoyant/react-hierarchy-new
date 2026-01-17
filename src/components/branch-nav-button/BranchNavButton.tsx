import { Chip } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { APP_CONFIG } from "../../app.config";

export type BranchNavButtonProps = {
  counter?: number;
  direction?: "left" | "right";
  onClick?: () => void;
  isVisible: boolean;
};

export default function BranchNavButton({
  counter = 0,
  direction = "left",
  onClick,
  isVisible = true,
}: BranchNavButtonProps) {
  const handleExpansionClick = () => {
    onClick?.();
  };

  if (!isVisible) {
    return null;
  }

  return (
    <Chip
      className="branch-nav-button"
      label={counter}
      onClick={handleExpansionClick}
      onDelete={handleExpansionClick}
      deleteIcon={
        direction === "left" ? (
          <KeyboardArrowLeftIcon />
        ) : (
          <KeyboardArrowRightIcon />
        )
      }
      size="small"
      style={{
        backgroundColor:
          APP_CONFIG.layout.branchNavButton.activeBackgroundColor,
        color: APP_CONFIG.layout.branchNavButton.activeColor,
      }}
    />
  );
}
