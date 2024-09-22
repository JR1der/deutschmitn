import './index.css'
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./routes/AppRouter.tsx";
import BaseLayout from "./layout/BaseLayout.tsx";
import theme from "./themes/Theme.tsx";
import {ThemeProvider} from "@mui/material";

const App = () => {
  return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <BaseLayout>
            <AppRouter/>
          </BaseLayout>
        </BrowserRouter>
      </ThemeProvider>
  )
}

export default App
