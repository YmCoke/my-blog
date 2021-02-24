import styled from 'styled-components';
import Card from '../Card';

const Container = styled.div`
    width: 55rem;
`;

function CardList({cardlist}) {
    const cardComps = cardlist ? cardlist.map(card => (
        <Card key={card.id} meta={card} />
    )) : [];
    return (<Container>
        {cardComps}
    </Container>)
}

export default CardList;