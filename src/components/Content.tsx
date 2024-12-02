import Box from '@mui/material/Box';
import Toolbar from "@mui/material/Toolbar";
import { Outlet } from 'react-router-dom';

const drawerWidth = 240;

const Content = () => {
  return (
    <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
  )
}

export default Content