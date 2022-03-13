import React from "react"
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import Layout from "./Layout"

if (typeof document === 'undefined') {
    React.useLayoutEffect = React.useEffect;
}

const customTheme = {
    ...theme,
    colors: {
        ...theme.colors,
        'flex-pagebg': '#E5E5E5',
        'flex-searchicon': '#747681',
        'flex-green': '#19AB6A',
        'flex-grey': '#EAEAEA',
        'flex-lightgrey': '#F4F4F6'
    },
    styles: {
        global: {
          'html, body': {
            // color: 'gray.600',
            // lineHeight: 'tall',
            bg: 'white'
          }
        },
    }
}

export const App = () => (
  <ChakraProvider theme={customTheme}>
      <Layout/>
  </ChakraProvider>
)