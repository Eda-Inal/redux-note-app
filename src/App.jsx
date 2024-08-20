import './App.css';
import { useSelector} from 'react-redux';
import All from './components/all';
import { darkTheme, lightTheme } from './theme';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
function App() {
  const isDarkTheme = useSelector((state) => state.note.isDarkTheme);
  const currentTheme = isDarkTheme ? darkTheme : lightTheme;
  
  return (
    <>
      <ThemeProvider theme={currentTheme}>
        <CssBaseline>
          <All />
        </CssBaseline>
      </ThemeProvider>
    </>
  );
}

export default App;
