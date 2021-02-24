import styled from "styled-components";

export const Cover = styled.div`
    height: 100vh;
    background-image: ${props => "url(" + props.src + ")"};
    background-size: cover;
    background-repeat: no-repeat;

`;

export const Mask = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    left: 0;
    top: 0;
    background: rgba(0,0,0,.2);
`;

export const Welcome = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    width: 40rem;
    height: 20rem;
    box-sizing: border-box;
    padding: 1.5rem;
    transform: translate(-50%, -40%);
    color: #fff;
    font-weight: bold;
`;

export const Title = styled.h2`
    font-size: 5rem;
    width: 100%;
    text-align: center;
`;

export const Bubble = styled.div`
    width: 100%;
    height: 6.5rem;
    box-sizing: border-box;
    padding: 1rem;
    margin-top: 3rem;
    background: rgba(0,0,0,.5);
    border-radius: .5rem;
`;

export const Sentence = styled.div`
    text-align: center;
    margin-bottom: 1.5rem;
    font-weight: bold;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const List = styled.nav`
    display: flex;
    justify-content: center;
`;

export const ListItem = styled.a.attrs(props => ({
    href: props.href || "#"
}))`
    width: 1.5rem;
    height: 1.5rem;
    margin: 0 1rem;
    background-image: ${props => "url(" + props.src + ")"};
    background-size: cover;
`;

export const Content = styled.div`
    width: 65rem;
    margin: 3rem auto 0;
    padding: 0 5rem;
    box-sizing: border-box;
`;