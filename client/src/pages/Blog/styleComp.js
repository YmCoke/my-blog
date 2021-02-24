import styled from 'styled-components';

export const Cover = styled.div`
    height: 28rem;
    background-image: url(${props => props.src});
    background-size: cover;
    position: relative;
`;

export const Title = styled.h2`
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translate(-50%);
    font-size: 3.5rem;
    -webkit-background-clip:text;
    -webkit-text-fill-color:transparent;
    background-image: linear-gradient(to left, rgb(196, 152, 122) 33%, rgb(255, 213, 191) 73%);
`;

export const Content = styled.div`
    margin-top: 2rem;
    padding: 0 5rem;
    display: flex;
`;

export const Aside = styled.aside`
    flex: 1;
    margin-left: 4rem;
`;