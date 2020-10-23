import React from "react"
import { createMuiTheme, ThemeProvider } from '@material-ui/core'

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'KnowledgeLight',
      'Raleway',
      'Helvetica',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  palette: {
    primary: {
      main: 'hsl(206, 31%, 29%)'
    },
  }
})

const Theme = ({ path, children }) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}
export default Theme