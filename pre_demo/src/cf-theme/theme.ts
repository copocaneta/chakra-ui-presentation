import { extendTheme } from '@chakra-ui/react'

const customTheme = extendTheme({
  colors: {
    'flex-pagebg': '#E5E5E5',
    'flex-searchicon': '#747681',
    'flex-green': '#19AB6A',
    'flex-grey': '#EAEAEA',
    'flex-lightgrey': '#F4F4F6'
  },
  styles: {
    global: {
      'html, body': {
        color: 'gray.600',
        // lineHeight: 'tall',
        bg: 'white'
      }
    }
  }
})

export default customTheme
