import { useState} from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Client from "./Client";
import { useNavigate } from "react-router-dom";

function MovieBoard() {
  const navigate = useNavigate();
//   const [detail, setDetail] = useState([]);
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
        <AppBar position="static">
          <Toolbar>
             <Button color="inherit" onClick={()=>navigate("/movieboard")} >
              <h4>Client Dashboard</h4>
            </Button>&nbsp;&nbsp;
            <Button color="inherit" onClick={()=>navigate("/adminboard")}>
              <h4>AdminDashboard</h4>
            </Button>&nbsp;&nbsp;
            <Button variant="secondary" onClick={() => navigate("/contactus")} ><h4>Contact Us</h4></Button>
            {/* <Button color="inherit" >
              <h4>Dashboard</h4>
            </Button>&nbsp;&nbsp; */}
            {/* <Button color="inherit" >
              <h4> Add new user</h4>
            </Button>&nbsp;&nbsp; */}
            {/* Dark and light Theme provided */}
            <Button
              color="inherit"
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
            >
              <h4>{mode === "light" ? "dark" : "light"} mode</h4>
            </Button>
          </Toolbar>
        </AppBar>

        {/* Listed all movies from the client */}
        <div>
        <Client/>
        </div>
       
        {/* <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/edit/:userid" element={<EditUser />} />
          <Route path="/adduser" element={<AddUser  detail={detail} setDetail={setDetail}/>} />
          <Route path="/userdetail/:userid" element={<UserDetail />} />
        </Routes> */}
    </ThemeProvider>
    </div>
  )
}
export default MovieBoard;
