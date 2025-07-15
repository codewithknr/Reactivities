import { useEffect, useState } from 'react'
import { Box, Container, CssBaseline} from '@mui/material';
import axios from 'axios';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  useEffect(() => {
    //Using React Hooks
    // fetch('https://localhost:5001/api/activities')
    //   .then(response => response.json())
    //   .then(data => setActivities(data))
    axios('https://localhost:5001/api/activities')
      .then(response => setActivities(response.data))

    return () => { }
  }, [])

  return (
    <Box sx={{bgColor:'#eeeeee'}}>
      <CssBaseline></CssBaseline>
      <NavBar />
      <Container maxWidth="xl" sx={{ mt: 3 }}>
        <ActivityDashboard activities={activities}></ActivityDashboard>
      </Container>
    </Box>
  )
}

export default App
