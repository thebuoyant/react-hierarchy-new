import { Typography } from "@mui/material";
import "./Header.css";
import { APP_CONFIG } from "../../app.config";

export type HeaderProps = {
  titleType?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

export default function Header({ titleType = "h5" }: HeaderProps) {
  return (
    <div className="header">
      <Typography className="hierarchy-title" variant={titleType}>
        {APP_CONFIG.general.appTitle}
      </Typography>
    </div>
  );
}
