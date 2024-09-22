import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../img/DeutschMitLogTransparent.png";

const pages = ["Home", "Courses", "About Us", "FAQ"];
const routes = ["/", "/courses", "/about", "/faq"];

const NavBar: React.FC = () => {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleNavigate = (route: string) => {
    navigate(route);
    handleCloseNavMenu();
  };
  return (
    <AppBar className="bg-bg-1 border-b-4 border-dark-red">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box className="duration-300 transition-all hover:scale-110 hidden md:flex items-center mr-2">
            <img
              onClick={() => handleNavigate("/")}
              src={logo}
              alt="Logo"
              className="cursor-pointer h-20 mr-2 ml-5"
            />
          </Box>

          {/*Mobile Menu Icon */}
          <Box className="md:hidden flex items-center">
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              className="text-dark-red"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              className="md:hidden xs:block"
            >
              {pages.map((page, index) => (
                <MenuItem
                  className="hover:bg-dark-red hover:text-bg-1 transition-all hover:-translate-y-1 hover:scale-110 duration-300"
                  key={page}
                  onClick={() => handleNavigate(routes[index])}
                >
                  <Button className="transition-all text-dark-red text-base font-semibold  capitalize w-full justify-start text-center hover:text-bg-1">
                    {page}
                  </Button>
                </MenuItem>
              ))}
              <MenuItem
                className="transition-all hover:-traslate-y-1 hover:scale-110 duration-300 text-center bg-my-yellow hover:bg-dark-red hover:text-bg-1"
                onClick={handleCloseNavMenu}
              >
                <Button
                  className="transition-all text-dark-red text-base font-semibold  capitalize w-full justify-start text-center hover:text-bg-1"
                  onClick={() => handleNavigate("/register")}
                >
                  Register
                </Button>
              </MenuItem>
            </Menu>
          </Box>
          <Box className="flex grow md:hidden justify-end items-cenet">
            <img
              className="cursor-pointer h-[85px]"
              onClick={() => handleNavigate("/")}
              src={logo}
              alt="Logo"
            />
          </Box>
          <Box className="flex-grow hidden md:flex justify-around items-center">
            {pages.map((page, index) => (
              <Button
                className="transition-all duration-300 hover:scale-110 my-2 text-dark-red font-semibold text-base capitalize hover:text-bg-1 hover:bg-dark-red p-2.5"
                key={page}
                onClick={() => handleNavigate(routes[index])}
              >
                {page}
              </Button>
            ))}
            <Button
              className="transition-all duration-300 hover:scale-110 my-2 text-dark-red font-semibold text-base capitalize bg-my-yellow p-2.5 hover:bg-dark-red hover:text-bg-1"
              onClick={() => handleNavigate("/register")}
            >
              Register
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
