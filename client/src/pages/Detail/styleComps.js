import styled from 'styled-components';

export const Content = styled.div`
    width: 95%;
    padding-top: 8rem;
`;

export const Cover = styled.img.attrs(props => ({
    src: props.src
}))`
    width: 100%;
    margin-bottom: 2rem;
    border-radius: 1rem;
`

export const Title = styled.h2`
    margin-bottom: 2rem;
    font-weight: bold;
    text-align: center;
    font-size: 2.5rem;
`

export const Msg = styled.div`
    margin-bottom: 2rem;
    text-align: center;
`

export const MsgItem = styled.span`
    color: rgb(150, 150, 150);
    margin: 0 .5rem;
    font-size: .9rem;
`

export const TagItem = styled(MsgItem)`
    color: rgb(0, 150, 94);
    background-color: rgba(0, 150, 94, 0.1);
    padding: .1rem .3rem;
`

export const Desc = styled.div`
    margin-bottom: 2rem;
    padding: 1.8rem;
    border-radius: .4rem;
    box-shadow: 0 0 3rem .2rem rgba(0, 0, 0, .3);
`