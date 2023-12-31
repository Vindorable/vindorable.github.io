import { Tab, Tabs } from "@mui/material";
import { styled } from "@mui/material/styles";


// ---------------------------------------------------------

// Customized Material UI Tabs Component
const NavTabs = styled(Tabs)(({ theme }) => ({
  minHeight: 40,
  height: 40, // Default = 48px
  '& .MuiTabs-indicator': {
    height: '100%',
    borderRadius: '22px',
    backgroundColor: theme.palette.background.defaultInverse,
  },
  '& .MuiTouchRipple-root': {
    display: 'none',
  },
}));

// Customized Material UI Tab Component
const NavTab = styled(Tab)(({ theme }) => ({
  minHeight: 40,
  height: 40, // Default = 48px
  minWidth: 130,
  width: 130,
  color: theme.palette.text.disabled,
  '&.Mui-selected': {
    color: theme.palette.background.default,
    zIndex: '1',
  },
  "&:hover": {
    color: theme.palette.text.primary,
    opacity: 1,
    '&.Mui-selected': {
      color: theme.palette.background.default,
      zIndex: '1',
    },
  }
}));

// Customized Material UI Tabs Component (Vertical Orientation)
const NavTabsV = styled(Tabs)(({ theme }) => ({
  '& .MuiTabs-indicator': {
    width: '100%',
    borderRadius: '22px',
    backgroundColor: theme.palette.background.defaultInverse,
  },
  '& .MuiTouchRipple-root': {
    display: 'none',
  },
}));

// Customized Material UI Tab Component (Vertical Orientation)
const NavTabV = styled(Tab)(({ theme }) => ({
  justifyContent: 'left',
  minHeight: 40,
  height: 40, // Default = 48px
  minWidth: '100%',
  color: theme.palette.text.disabled,
  '&.Mui-selected': {
    color: theme.palette.background.default,
    zIndex: '1',
  },
  "&:hover": {
    color: theme.palette.text.primary,
    opacity: 1,
    '&.Mui-selected': {
      color: theme.palette.background.default,
      zIndex: '1',
    },
  }
}));


// ---------------------------------------------------------

export { NavTab, NavTabs, NavTabV, NavTabsV };