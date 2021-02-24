import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Btn = styled(Link).attrs(props => ({
    to: props.to || "#"
}))`
    display: inline-block;
    font-family: Arial;
    font-size: 1.5rem;
    width: 8rem;
    height: 1.5rem;
    text-align: center;
    line-height: 1.5rem;
    border-radius: 1.4rem;
    color: rgb(240, 82, 40);
    border: 2px solid rgb(240, 82, 40);
    padding: 1rem 2rem;
    cursor: pointer;
    transition: all .3s;
    &:hover {
        transform: scale(1.1);
    };
`;

function LinkBtn (props) {
    return (<Btn {...props} >{props.children}</Btn>);
}

export default LinkBtn;