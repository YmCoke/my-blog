import styled from 'styled-components';

const Icon = styled.img`
    background-image: ${props => "url(" + props.src + ")"};
    margin-right: .8rem;
    background-size: 100% 100%;
    vertical-align: middle;
`

const Span = styled.span`
    color: #bfbfbf;
    font-size: .8rem;
    font-weight: 500;
`

const Container = styled.div`
    margin-bottom: .8rem;
`

function TagComp({ src, children }) {
    return (<Container>
        <Icon src={src} />
        <Span>{children}</Span>
    </Container>)
}

export default TagComp;