import "./ReactHierarchy.css";
import { AppConfigType } from "../../types/app-config.types";
import { APP_CONFIG } from "../../app.config";

export type ReactHierarchyProps = {
  titleType?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  appConfig: AppConfigType;
};

export default function ReactHierarchy({
  titleType = "h3",
  appConfig = APP_CONFIG,
}: ReactHierarchyProps) {
  return <div className="react-hierarchy">react hierarchy</div>;
}
