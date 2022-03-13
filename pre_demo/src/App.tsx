import React from "react"
import {
  ChakraProvider,
} from "@chakra-ui/react"
import Layout from "./Layout"
import customTheme from "./cf-theme/theme"

if (typeof document === 'undefined') {
    React.useLayoutEffect = React.useEffect;
}



export const App = () => (
  <ChakraProvider theme={customTheme}>
      <Layout/>
  </ChakraProvider>
)