import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";


// ---------------------------------------------------------

// Customized Material UI Box Component
const AnimBox = styled(Box)(({ theme }) => ({
  padding: "10px",
  //textAlign: "center",
  borderRadius: "4px",
  marginBottom: "-20px",
  position: "relative",

  "&::after": {
    content: "''",
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    borderRadius: "4px",
    background: "linear-gradient(120deg, #00F260, #0575E6, #00F260)",
    backgroundSize: "300% 300%",
    clipPath: "polygon(0% 100%, 3px 100%, 3px 3px, calc(100% - 3px) 3px, calc(100% - 3px) calc(100% - 3px), 3px calc(100% - 3px), 3px 100%, 100% 100%, 100% 0%, 0% 0%)",
    zIndex: -1,
    animation: "frame-enter 1s forwards ease-in-out reverse, gradient-animation 4s ease-in-out infinite",
  },

  "@keyframes gradient-animation": {
    "0%": { backgroundPosition: "15% 0%" },
    "50%": { backgroundPosition: "85% 100%" },
    "100%": { backgroundPosition: "15% 0%" },
  },

  "@keyframes frame-enter": {
    "0%": {
      clipPath: "polygon(0% 100%, 3px 100%, 3px 3px, calc(100% - 3px) 3px, calc(100% - 3px) calc(100% - 3px), 3px calc(100% - 3px), 3px 100%, 100% 100%, 100% 0%, 0% 0%)"
    },
    "25%": {
      clipPath: "polygon(0% 100%, 3px 100%, 3px 3px, calc(100% - 3px) 3px, calc(100% - 3px) calc(100% - 3px), calc(100% - 3px) calc(100% - 3px), calc(100% - 3px) 100%, 100% 100%, 100% 0%, 0% 0%)"
    },
    "50%": {
      clipPath: "polygon(0% 100%, 3px 100%, 3px 3px, calc(100% - 3px) 3px, calc(100% - 3px) 3px, calc(100% - 3px) 3px, calc(100% - 3px) 3px, calc(100% - 3px) 3px, 100% 0%, 0% 0%)"
    },
    "75%": {
      WebkitClipPath: "polygon(0% 100%, 3px 100%, 3px 3px, 3px 3px, 3px 3px, 3px 3px, 3px 3px, 3px 3px, 3px 0%, 0% 0%)"
    },
    "100%": {
      WebkitClipPath: "polygon(0% 100%, 3px 100%, 3px 100%, 3px 100%, 3px 100%, 3px 100%, 3px 100%, 3px 100%, 3px 100%, 0% 100%)"
    },
  }
}));


// ---------------------------------------------------------

export { AnimBox };