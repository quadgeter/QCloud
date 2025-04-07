import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import QCloud from './pages/QCloud';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/GlobalStyle';

const theme = {
  colors: {
    primary: '#6C63FF',
    secondary: '#2D2D2D',
    background: '#F5F5F5',
    text: '#333333',
    accent: '#00BFA6',
  },
  fonts: {
    primary: 'Arial, sans-serif',
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/qcloud" element={<QCloud />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
