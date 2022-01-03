import {ThemeProvider} from 'styled-components';
import {Container} from './components/styles/Container.styled';
import Header from './components/Header';
import GlobalStyles from './components/styles/Global';
import content from './content';

const theme = {
  colors : {
     header : '#fce6f4',
     body : '#defaef',
     footer : 'green'
  },
  mobile : '768px',
}

function App() {
  return (
    <ThemeProvider theme = {theme}>
    <>
    <GlobalStyles />
    <Header />
    <Container>
      {content.map((item, index)=> {
        <p>{item.title}</p>
      })}
    </Container>
    </>
    </ThemeProvider>
  );
}

export default App;
