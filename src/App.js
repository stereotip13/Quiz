import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Questions from './pages/Questions'
import Settings from './pages/Settings'
import FinalScreen from './pages/FinalScreen'
import { Box, Container } from '@mui/system'
function App() {
  return (
    <Router>
      <Container maxWidth="sm">
        <Box textAlign="center" mt={5}>
          <Routes>
            <Route path="/" exact element={<Settings />} />
            <Route path="/questions" element={<Questions />} />
            <Route path="/score" element={<FinalScreen />} />
          </Routes>
        </Box>
      </Container>
    </Router>
  )
}

export default App
