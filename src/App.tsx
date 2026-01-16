import {
  CssBaseline,
  Container,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { APP_CONFIG } from "./app.config";
import ReactHierarchy from "./components/react-hierarchy/ReactHierarchy";

const theme = createTheme({ palette: { mode: "light" } });

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <ReactHierarchy appConfig={APP_CONFIG} />
      </Container>
    </ThemeProvider>
  );
}
