import { Box, Container, Link, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../img/DeutschMitLogTransparent.png";

const pages = ["Home", "Courses", "About Us", "FAQ"];
const routes = ["/", "/courses", "/about", "/faq"];

const Footer: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = (route: string) => {
    navigate(route);
  };

  return (
    <Box className="w-full bg-my-yellow py-6 border-t-4 border-dark-red realative bottom-0">
      <Container maxWidth="xl">
        {/* Footer for mobile (logo on top, links in block) */}
        <Box className="flex md:hidden flex-col items-center space-y-4">
          <img
            src={logo}
            alt="DeutschMITN Logo"
            className="h-24 mb-4 cursor-pointer duration-300 transition-all hover:scale-110"
            onClick={() => handleNavigate("/")}
          />
          {pages.map((page, index) => (
            <Link
              key={page}
              href={routes[index]}
              className="text-dark-red hover:underline text-base font-semibold capitalize"
              underline="none"
            >
              {page}
            </Link>
          ))}
          <Link
            href="https://t.me/deutschmitn"
            target="_blank"
            rel="noopener"
            className="text-dark-red hover:underline text-base font-semibold capitalize"
            underline="none"
          >
            Telegram
          </Link>
          <Link
            href="mailto:info@deutschmitn.com"
            className="text-dark-red hover:underline text-base font-semibold capitalize"
            underline="none"
          >
            Contact
          </Link>
        </Box>

        {/* Footer for larger screens (flex layout) */}
        <Box className="hidden md:flex justify-between items-center">
          <Box className="flex items-center space-x-6">
            <img
              src={logo}
              alt="DeutschMITN Logo"
              className="h-14 cursor-pointer duration-300 transition-all hover:scale-110"
              onClick={() => handleNavigate("/")}
            />
            <Box className="flex space-x-6">
              {pages.map((page, index) => (
                <Link
                  key={page}
                  href={routes[index]}
                  className="text-dark-red hover:underline text-base font-semibold capitalize"
                  underline="none"
                >
                  {page}
                </Link>
              ))}
              <Link
                href="https://t.me/deutschmitn"
                target="_blank"
                rel="noopener"
                className="text-dark-red hover:underline text-base font-semibold capitalize"
                underline="none"
              >
                Telegram
              </Link>
              <Link
                href="mailto:info@deutschmitn.com"
                className="text-dark-red hover:underline text-base font-semibold capitalize"
                underline="none"
              >
                Contact
              </Link>
            </Box>
          </Box>
          <Typography className="text-dark-red" variant="body2">
            © {new Date().getFullYear()} DeutschMITN. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
