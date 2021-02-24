import React from 'react';
import styled from 'styled-components';

import {MiddleContainer} from '../../common/styleComp';

const Title = styled.h2`
    width: 100%;
    margin: 0 auto;
    padding-top: 6rem;
    font-size: 5rem;
`

function NoMatch() {
    return (<MiddleContainer>
        <Title>404, 页面未找到</Title>
    </MiddleContainer>)
}

export default NoMatch;