import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createTheme,ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

const root = ReactDOM.createRoot(document.getElementById('root'));

const theme=createTheme({
  palette:{
    primary:{
      main:'#ffff00'
    },
    secondary:{
      main:'#2e2e2e'
    }
  }
})


root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>  
    <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
