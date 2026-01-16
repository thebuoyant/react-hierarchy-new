import {
  CssBaseline,
  Container,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { APP_CONFIG } from "./app.config";
import ReactHierarchy from "./components/react-hierarchy/ReactHierarchy";
import { DEFAULT_MOCK_DATA } from "./_mock-data/default-mock-data";
import { generateRandomHierarchy } from "./util/mock-data.util";

const theme = createTheme({ palette: { mode: "light" } });

const RUN_RANDOM_MOCK = false;

export const RANDOM_MOCK_DATA = generateRandomHierarchy(DEFAULT_MOCK_DATA, {
  maxNumberOfLayers: 4,
  maxNumberOfNodesPerLayer: 3,
  seed: 42,
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <ReactHierarchy
          appConfig={APP_CONFIG}
          appData={RUN_RANDOM_MOCK ? RANDOM_MOCK_DATA : DEFAULT_MOCK_DATA}
        />
      </Container>
    </ThemeProvider>
  );
}
