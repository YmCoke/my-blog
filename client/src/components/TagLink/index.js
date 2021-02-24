import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const rotate = keyframes`
    from {
        transform: rotate(0);
    }
    10% {
        transform: rotate(-45deg);
    }
    20% {
        transform: rotate(0);
    }
    30% {
        transform: rotate(45deg);
    }
    40% {
        transform: rotate(0);
    }
`;

const StyleLink = styled(Link)`
    cursor: pointer;
    margin-right: 1.5rem;
    transition: all .2s;
    height: 100%;
    display: inline-block;
    &:hover {
        transform: scale(1.2);
        & img {
            animation: 1s linear .5s ${rotate} infinite;
        }
    };
`;

const StyleImg = styled.img`
    margin-right: 0.4rem;
    vertical-align: middle;
`;

const StyleSpan = styled.span`
    font-size: 1.1rem;
`

function TagLink({ icon, link, children }) {
    return (
        <StyleLink to={link}>
            <StyleImg src={icon} alt="" />
            <StyleSpan>{children}</StyleSpan>
        </StyleLink>
    )
}

export default TagLink;