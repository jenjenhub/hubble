import {ThemeProvider} from 'styled-components';
import {Container} from './components/styles/Container.styled';
import Header from './components/Header';
import GlobalStyles from './components/styles/Global';

const theme = {
  colors : {
     header : 'lightpink',
     body : 'papayawhip',
     footer : 'green'
  }
}

function App() {
  return (
    <ThemeProvider theme = {theme}>
    <>
    <GlobalStyles />
    <Header />
    <Container>
      <h1>Body</h1>
    </Container>
    </>
    </ThemeProvider>
  );
}

export default App;
