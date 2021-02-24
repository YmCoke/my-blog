import styled from "styled-components";
import {MiddleContainer} from '../../common/styleComp';

const Container = styled(MiddleContainer)`
    margin: 6rem auto;
`;

const Top = styled.div`
    padding: .6rem 0;
    border-bottom: 1px dashed #bbb;
    font-weight: bold;
    font-size: .9rem;
`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: .7rem;
    margin-top: .5rem;
    color: #666;
`;

function Footer () {
    return (<Container>
        <Top>Crafted with by Coke</Top>
        <Bottom>
            <div>Copyright © 2021 Coke Inc. and its affiliates.</div>
            <div>Chronicle of EventsPrivacy PolicyContact Me</div>
        </Bottom>
    </Container>)
}

export default Footer;