import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import ncs from "./Nav.module.css";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import Badge from '@mui/material/Badge';
import InputBase from "@mui/material/InputBase";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CameraRoundedIcon from "@mui/icons-material/CameraRounded";
import {  useSelector,useDispatch } from 'react-redux'
import { uncheck} from "../../app/counterSlice"
import { ToastContainer, toast } from 'react-toastify';
const drawerWidth = 240;
const navItems = ["About", "Contact","Signup"];

const Navs = (props) => {
  const dispatch = useDispatch()
  const notify = () => toast("Log out  successfully!")
  const checking = useSelector((state) => state.counter.value1)
  const {window}=props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Ekart
      </Typography>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary={"Home"} />
          </ListItemButton>
        </ListItem>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.black, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "50ch",
        "&:focus": {
          width: "55ch",
        },
      },
    },
  }));

  
  const container =  window !== undefined ? () => window().document.body : undefined;
    const navigate=useNavigate()
  useEffect(() => {}, []);
  return (
    <>
      <Box sx={{ display: "flex" }} className={ncs.main_navbar_block}>
        <AppBar component="nav">
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              <CameraRoundedIcon />
            </Typography>

            <IconButton
              color="inherit"
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
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
              onClick={()=> navigate("/")}
            >
              Ekart
            </Typography>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              <Button sx={{ color: "#fff" }} className={ncs.navlist}
              onClick={()=>
              {
                navigate("/")
              }}>
                {"Home"}
              
              </Button>
            </Typography>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              <Button sx={{ color: "#fff" }} className={ncs.navlist}
              onClick={()=>
              {
                alert("")
                navigate("/")
              }}
              >
                {"Products"}
              </Button>
            </Typography>

            <Search className={ncs.search_main_block}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <Button sx={{ color: "#fff" }} className={ncs.login_btn}
            onClick={()=>navigate("/Login")}>
              Login
            </Button>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item,ind) => (
                <Button
                  key={item}
                  sx={{ color: "#fff" }}
                  className={ncs.navlist}
                  onClick={()=>
                  {
                    navigate(`/${item}`)
                  }}
                >
                  {item}
                </Button>
              ))}

              <Button sx={{ color: "#fff" }}>
                <div className={ncs.cartblock}
                onClick={()=>
                {
                 checking?navigate("/Cart"):navigate("/Login")
                  }}>
                  <Badge badgeContent={0} color="success">
                  <ShoppingCartIcon style={{ position: "relative" }}
                  onClick={()=>
                {
                 checking?navigate("/Cart"):navigate("/Login")
                      }} />
                      </Badge>
                  
                </div>
              </Button>
            </Box>
            <Button sx={{ color: "#fff" }}
            
            onClick={(e)=>
                {
                
                  notify()
                  dispatch(uncheck())
                  checking?navigate("/"):navigate("/Login")

                }}
            >
            
              <AccountCircle/>
             

               

            </Button>
            <ToastContainer 
          position="top-right"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"/>
          </Toolbar>
        </AppBar>
        <Box component="nav">
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
        </Box>
      </Box>
    </>
  );
};
export default Navs;
