import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Admin from "./Admin.js";
import { useNavigate } from "react-router-dom";

function AdminBoard() {
  const navigate = useNavigate();
  const [mode, setMode] = useState("light");
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* Navbar */}
        <AppBar position="static" style={{backgroundColor:"green"}}>
          <Toolbar>
            <Button color="inherit" onClick={() => navigate("/movieboard")}>
              <h4>Client Dashboard</h4>
            </Button>&nbsp;&nbsp;
            <Button color="inherit" onClick={() => navigate("/adminboard")}>
              <h4>AdminDashboard</h4>
            </Button>&nbsp;&nbsp;
            <Button variant="secondary" onClick={() => navigate("/addmovie")} ><h4>Add Movie</h4></Button>
            
            {/* Dark and light Theme provided */}
            <Button
              color="inherit"
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
            >
              <h4>{mode === "light" ? "dark" : "light"} mode</h4>
            </Button>
          </Toolbar>
        </AppBar>

        {/* Listed all movies */}
        <div>
          <Admin />
        </div>

      </ThemeProvider>
    </div>
  )
}
export default AdminBoard;
