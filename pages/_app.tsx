import { ChakraProvider, extendTheme} from '@chakra-ui/react'
import PlayerLayout from '../components/PlayerLayout';
import 'reset-css';

const theme = extendTheme({
  colors: {
    gray: {
      100: '#f7fafc',
      200: '#edf2f7',
      300: '#e2e8f0',
      400: '#cbd5e0',
      500: '#a0aec0',
      600: '#718096',
      700: '#4a5568',
      800: '#2d3748',
      900: '#1a202c',
    },
  },
  components: {
    Button: {
      variants: {
        link: {
          ":focus": {
            boxShadow: 'none',
            outline: 'none',
          },
        }
      }
    }
  }
})

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <PlayerLayout>
        <Component {...pageProps} />
      </PlayerLayout>
    </ChakraProvider>
  )
}

export default MyApp
