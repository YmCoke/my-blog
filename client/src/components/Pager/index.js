import styled from 'styled-components';

const Container = styled.ul`
    display: flex
`

const PageItem = styled.li`
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    text-align: center;
    line-height: 2rem;
    margin: 0 .2rem;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    color: rgb(150, 150, 150);
    border: 1px solid rgb(150, 150, 150);
    background-color: rgba(0, 0, 0, 0);
    opacity: ${props => props.disabled && 0.38};
    cursor: ${props => !props.disabled && "pointer"};

    &:hover {
        color: ${props => !props.disabled && "#3f51b5"};
        border: ${props => !props.disabled && "1px solid rgba(63, 81, 181, 0.5)"};
        background-color: ${props => !props.disabled && "rgba(63, 81, 181, 0.12)"};
    }
`;

const LIMIT = 10;

function Pager({total, page, onchange}) {
    const pageItems = [];
    onchange = onchange || (() => {});
    
    for(let i = page - 2; i <= page + 2; ++ i)
        if(i >= 1 && i <= Math.floor(total + LIMIT - 1) / LIMIT) {
            pageItems.push(<PageItem onClick={() => onchange(i)} key={i}>{i}</PageItem>);
        }

    return <Container>
        <PageItem onClick={() => onchange(page - 1)} disabled={page === 1}>{"<"}</PageItem>
        {pageItems}
        <PageItem onClick={() => onchange(page + 1)} disabled={page === total}>{">"}</PageItem>
    </Container>
}

export default Pager;