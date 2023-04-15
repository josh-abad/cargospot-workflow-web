import { Box, Button, ButtonGroup } from '@chakra-ui/react'
import AppBar from './components/AppBar'
import Rule from './components/RulePanel'

function App() {
  return (
    <Box>
      <AppBar />
      <Box margin={4}>
        <Rule />
        <ButtonGroup>
          <Button colorScheme="blue">Save</Button>
          <Button colorScheme="red">Cancel</Button>
        </ButtonGroup>
      </Box>
    </Box>
  )
}

export default App
