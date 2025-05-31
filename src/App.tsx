import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/globalStyles';
import Layout from './components/Layout/Layout';
import About from './pages/About/About';
import Skills from './pages/Skills/Skills';
import Projects from './pages/Projects/Projects';
import Publications from './pages/Publications/Publications';
import Contact from './pages/Contact/Contact';

function App() {
  console.log('Theme primary color:', import.meta.env.VITE_THEME_PRIMARY_COLOR);
  
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
