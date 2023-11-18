import { AppBar, Box, Button, Container, IconButton, Stack, Toolbar, Typography } from '@mui/material'
import NavBar from '@/components/navbar';
import Welcome from '@/components/welcome';
import Projects from '@/components/projects';
import Info from '@/components/info';
import Contact from '@/components/contact';

const order = [Welcome, Info, Projects, Contact];

export default function Home() {
  return (
    <Box overflow="clip">
      <NavBar/>
      {order.map((func) => 
        <Box sx={{width: "100dvw", height: "100dvh"}}>
          {func()}
        </Box>
      )}
      {/* Welcome Page */}
      {/* Info Page */}
      {/* Projects Page */}
      {/* Contact Page */}
    </Box>

  )
}
