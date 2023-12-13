import { Tab, Tabs } from "@mui/material";
import { styled } from "@mui/material/styles";


// ---------------------------------------------------------

// Customized Material UI Tabs Component
const NavTabs = styled(Tabs)(({ theme }) => ({
  '& .MuiTabs-indicator': {
    height: '100%',
    borderRadius: '8px',
  },
}));

// Customized Material UI Tab Component
const NavTab = styled(Tab)(({ theme }) => ({
  color: 'rgba(0, 0, 0, 0.6)',
  '&.Mui-selected': {
    color: '#fff',
    zIndex: '1',
  },
}));


// ---------------------------------------------------------

export { NavTab, NavTabs };