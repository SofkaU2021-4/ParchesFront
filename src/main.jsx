import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ThemeProvider, createTheme } from '@mui/material/styles'

const plantilla = createTheme({
  palette: {
    primary: {
      main: '#140d4fff'
    },
    secondary: {
      main: '#53acf1ff'
    },
    info: {
      main: '#f0f2f1ff'
    },
    success: {
      main: '#f58442ff'
    },
    error: {
      main: '#f7cc24ff'
    }
  }
})

const store = configureStore();

ReactDOM.render(
  <ThemeProvider theme={plantilla}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
)
