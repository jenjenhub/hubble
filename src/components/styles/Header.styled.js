import styled from 'styled-components';

export const StyledHeader = styled.header`
    background-color: ${({theme})=> theme.colors.header}; 
    padding: 40px 0;

    h1 {
        color: blue;
    }

    &:hover{
        background-color: lightpink;
    }
`

// [line 4 / destructure props] background-color: ${(props) => props.bg} 를 ${({bg}) => bg} 로 간단하게.