import {StyledCard} from './styles/Card.styled'

export default function Card({item: {id, title, body, image}}) {
    return (
         <StyledCard layout={ id % 2 ===0 && 'row-reverse'}>       {/*if the id is even, then (&& means 'then' without an else) row-reverse*/}
        <div>
            <div>
                <h2>{title}</h2>
                <p>{body}</p>
                <div>
                    <img src={`./images/${image}`} alt="" />
                </div>
            </div>
        </div>
    </StyledCard>
    )
}
