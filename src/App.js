import {ThemeProvider} from 'styled-components';
import {Container} from './components/styles/Container.styled';
import Header from './components/Header';
import GlobalStyles from './components/styles/Global';
import content from './content';
import Card from './components/Card';
import Footer from './components/Footer';

const theme = {
  colors : {
     header : '#fce6f4',
     body : '#defaef',
     footer : 'gray'
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
      {content.map((item, index)=> (    // => { 이렇게 증괄호 불가. 소괄호 사용!
        <Card key={index} item={item} />
      ))}
    </Container>
    <Footer />
    </>
    </ThemeProvider>
  );
}

export default App;
