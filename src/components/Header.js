import { StyledHeader, Nav, Logo } from './styles/Header.styled';
import { Container } from './styles/Container.styled';
import { Button } from './styles/Button.styled';
import { Flex } from './styles/Flex.styled'


export default function Header() {
    return (
        <StyledHeader bg='lightgreen'>
            <Container>
                <Nav>
                    <Logo src='./images/logo.svg' alt='' />
                    <Button>Try it free</Button>
                    </Nav>
                    <Flex>
                        <div>
                            <h1>Build The Community Your Fans Will Love</h1>
                            <p>
                            Huddle re-imagines the way we build communities. You have a voice,
                            but so does your audience. Create connections with your users as
                            you engage in genuine discussion.
                            </p>
                           <Button bg='#ff0099' color='#fff'>Get Started For Free</Button>
                            </div>
                    </Flex>
            </Container>
        </StyledHeader>
    )
}
