import styled from 'styled-components';

export const StyledHeader = styled.header`
    background-color: ${({theme})=> theme.colors.header}; 
    padding: 40px 0;

    &:hover{
        background-color: lightpink;
    }
`
// [line 4 / destructure props] background-color: ${(props) => props.bg} 를 ${({bg}) => bg} 로 간단하게.

export const Nav = styled.nav`
display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;

  @media(max-width: ${ ({theme}) => theme.mobile }) {
    flex-direction: column;
  }
`

export const Logo = styled.img`
 @media(max-width: ${ ({theme}) => theme.mobile }) {
    margin-bottom: 40px;
  }
`

export const Image = styled.img`
width: 375px;
margin-left: 40px;

@media(max-width: ${ ({theme}) => theme.mobile }) {
    margin-bottom: 40px 0 30px;
}
`