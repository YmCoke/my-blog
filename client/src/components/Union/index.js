import styled from 'styled-components';

const Container = styled.section`
    width: 100%;
    text-align: center;
    margin: 2rem 0;
`;

const Header = styled.header`
    border-bottom: 1px dashed #bbb;
    padding: .6rem 0;
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
`;

const Icon = styled.img.attrs(props => ({
    src: props.icon
}))`
    width: 1.8rem;
    height: 1.8rem;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    vertical-align: middle;
    margin-right: 0.6rem;
`;

const Title = styled.h3`
    font-size: 1.3rem;
    color: #666;
`;

function Union ({ icon, title, children }) {
    return (<Container>
        <Header>
            <Icon icon={icon}/>
            <Title>{title}</Title>
        </Header>
        {children}
    </Container>)
}

export default Union;