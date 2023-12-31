import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Badge, IconButton } from "@mui/material";
import {
  PersonOutline,
  ShoppingBagOutlined,
  MenuOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import { shades } from "../../theme";
import { useNavigate } from "react-router-dom";
import { setIsCartOpen } from "../../state";

const Navbar = () => {
  const navigate = useNavigate();
  const dispacth = useDispatch();

  const cart = useSelector((state) => state.cart.cart);

  return (
    <Box
      display="flex"
      alignItems="center"
      width="100%"
      height="60px"
      bgcolor="rgba(255,255,255,0.95)"
      color="black"
      position="fixed"
      top="0"
      left="0"
      zIndex="1"
    >
      <Box
        width="80%"
        margin="auto"
        justifyContent="space-between"
        display="flex"
        alignItems="center"
      >
        <Box
          onClick={() => navigate("/")}
          sx={{ "&:hover": { cursor: "pointer" } }}
          color={shades.secondary[500]}
        >
          DRIP
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          columnGap="20px"
          zIndex="2"
        >
          <IconButton sx={{ color: "black" }}>
            <SearchOutlined />
          </IconButton>
          <IconButton sx={{ color: "black" }}>
            <PersonOutline />
          </IconButton>
          <Badge
            badgeContent={cart.length}
            color='secondary'
            invisible={cart.length === 0}
            sx={{
                '& .MuiBadge-badge': {
                   right:5,
                   top:5,
                   padding:'0 40px',
                   height: '14px',
                   minWidth:'13px' 
                },
            }}
          >
            <IconButton
              sx={{ color: "black" }}
              onClick={() => dispacth(setIsCartOpen())}
            >
              <ShoppingBagOutlined />
            </IconButton>
          </Badge>
          <IconButton sx={{ color: "black" }}>
            <MenuOutlined />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
