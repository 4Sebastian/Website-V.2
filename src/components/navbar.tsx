import { AppBar, Box, Button, IconButton, Toolbar } from '@mui/material'
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import SettingsIcon from '@mui/icons-material/Settings';

export default function NavBar() {
  return (
      <AppBar color='transparent' elevation={0}>
        <Toolbar>
          <Button sx={{ padding: 1}}>Welcome</Button>
          <Box sx={{flexGrow: 1}}/>
          <Button sx={{ padding: 1 }}>Info</Button>
          <Button sx={{ padding: 1 }}>Projects</Button>
          
          <IconButton size="large" color="primary" sx={{ padding: 1 }}>
          <HelpCenterIcon/>
          </IconButton>
          <IconButton size="large" color="primary" sx={{ padding: 1 }}>
            <SettingsIcon/>
          </IconButton>
        </Toolbar>
      </AppBar>
  )
}
