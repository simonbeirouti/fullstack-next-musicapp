import { Box } from '@chakra-ui/layout'
import Sidebar from './sidebar'

export default function playerLayout({children}) {
  return (
    <Box width="100vw" height="100vh">
        <Box position="absolute" top="0" width="250px" left="0">
            <Sidebar></Sidebar>
        </Box>
        <Box marginLeft="250px" marginBottom="100px">
          <Box height="calc(100vh - 100px)">
            {children}
          </Box>
        </Box>
        <Box position="absolute" left="0" bottom="0">
            Bottom box
        </Box>
    </Box>
  )
}