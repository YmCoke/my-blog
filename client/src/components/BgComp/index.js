import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Container = styled.div`
    position: relative;
    cursor: pointer;
    height: 5rem;
    margin-bottom: 2rem;
`;

const Bg = styled(Link).attrs(props => ({
    to: props.url || "#"
}))`
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    background-size: cover;
    background-position: 50% center;
    background-repeat: no-repeat;
    filter: blur(10px);
    opacity: .5;
    inset: 0px;
    background-image: ${props => "url("+ props.src +")"};
`;

const Content = styled.div`
    width: 100%;
    height: 100%;
    inset: 0;
    z-index: 200;
    display: flex;
    box-sizing: border-box;
    padding: 1rem 1.5rem;
    align-items: center;
`;

const Msg = styled.div`
    width: 19rem;
    flex: 1;
    text-align: left;
    margin-right: 1rem;
`;

const Title = styled.h4`
    font-weight: bold;
    margin-bottom: 0.8rem;
    color: #000;
`;


const Url = styled.div`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
`;

const Img = styled.img.attrs(props => ({
    img: props.src
}))`
    width: 4rem;
    height: 4rem;
    border-radius: 1rem;
`

function BgComp ({title, url, src}) {
    return (<Container>
        <Content>
            <Msg>
                <Title>{title}</Title>
                <Url>{url}</Url>
            </Msg>
            <Img src={src}/>
        </Content>
        <Bg src={src} url={url}/> 
    </Container>)
}

export default BgComp;