import styled from 'styled-components';
import {Link} from 'react-router-dom';

const TagLink = styled(Link).attrs(props => ({
    to: props.url || "#"
}))`
    background: #a7ddf4;
    color: #206ce6;
    margin: .5rem;
    padding: .3rem;
`;

function TagCloud({handleClick, children}) {
    return (<TagLink onclick={handleClick}>{children}</TagLink>)
}

export default TagCloud;