import React from "react";
import { useState, useContext } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const drawerWidth = 240;
const navItems = ["Home", "Discussion", "Resource", "Questions"];

function Navbar(props) {
  const { logout } = useContext(AuthContext);

  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const homehandler = () => {
    navigate("/");
  };
  const discussionHandler = () => {
    navigate("/Discussion");
  };
  const ResourcesHandler = () => {
    navigate("/resource");
  };
  const QuestionsHandler = () => {
    navigate("/Questions");
  };
  const loginhandler = () => {
    navigate("/join");
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary="Home" onClick={homehandler} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary="Discussion" onClick={discussionHandler} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary="Resources" onClick={ResourcesHandler} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary="Questions" onClick={QuestionsHandler} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText onClick={loginhandler} primary="Login" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", backgroundColor: "white" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{ backgroundColor: "whitesmoke", boxShadow: "none" }}
      >
        <Toolbar>
          <IconButton
            color="Black"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            // a light sunset orange color
            color="Black"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            MUI
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button onClick={homehandler} sx={{ color: "#ff" }}>
              Home
            </Button>
            <Button onClick={discussionHandler} sx={{ color: "#ff" }}>
              Discussion
            </Button>
            <Button onClick={ResourcesHandler} sx={{ color: "#ff" }}>
              Resources
            </Button>
            <Button onClick={QuestionsHandler} sx={{ color: "#ff" }}>
              Questions
            </Button>
            <button
              onClick={localStorage.isLogin ? logout : loginhandler}
              className="bg-[#6528F7] w-20 h-8 rounded-md hover:text-[#6528F7] hover:bg-white hover:border-[#6528F7] "
            >
              {localStorage.isLogin ? "Logout" : "Login"}
            </button>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navbar;
