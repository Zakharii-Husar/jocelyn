import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/globalStyles';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Research from './pages/Research/Research';
import Publications from './pages/Publications/Publications';

// Lazy load pages for better performance
const Experience = () => <div>Experience Page</div>;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="research" element={<Research />} />
            <Route path="publications" element={<Publications />} />
            <Route path="experience" element={<Experience />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
