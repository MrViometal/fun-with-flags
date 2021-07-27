import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/themes';
import { GlobalStyles } from './styles/globalStyles';
import { Layout, MainContentContainer } from './components/layout';
import { currentTheme } from './constants/localStorage';
import { BrowserRouter as Router } from 'react-router-dom';
import history from './history';

const THEMES = {
  light: lightTheme,
  dark: darkTheme
};

function App() {
  const [theme, updateTheme] = useState(currentTheme);
  return (
    <ThemeProvider theme={THEMES[theme]}>
      <Layout updateTheme={updateTheme}>
        <Router history={history}>
          <MainContentContainer />
        </Router>
      </Layout>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
