import * as React from "react";
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

import "./navbar.css";

const drawerWidth = 240;

const navItems = ["Home"];

function Navbar(props) {
  // eslint-disable-next-line react/prop-types
  const { colorChange } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box sx={{ my: 2 }}>
        <Typography variant="h4">Assessment</Typography>
      </Box>
      <Divider />
      <List>
        {navItems.map((item, index) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box
      sx={{ display: "flex" }}
      className={colorChange ? "appbar_main_scroll" : "appbar_main"}
    >
      <CssBaseline />
      <AppBar component="nav" elevation={0}>
        <Toolbar>
          <IconButton
            color="white"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "10px 10px",
            }}
          >
            <Typography
              variant="h4"
              color={"#fff"}
              sx={{
                fontStyle: "italic",
                fontWeight: "700",
              }}
            >
              Assessment
            </Typography>

            <Box sx={{ display: { xs: "none", sm: "flex" }, gap: "2rem" }}>
              {navItems.map((item, index) => (
                <Typography
                  key={item}
                  sx={{
                    color: "#fff",
                    fontSize: "14px",
                    "&:hover": {
                      cursor: "pointer",
                      color: "#ecebeb",
                    },
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          // container={container}
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
      </Box>
    </Box>
  );
}

export default Navbar;
