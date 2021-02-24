import styled from "styled-components";
import TagCloud from '../TagCloud';

const Container = styled.div`
    width: 100%;
    white-space: wrap;
    display: flex;
    flex-wrap: wrap;
`;

const tags = [
    'html', 'css', 'js',
    'vue', 'react',
    'algorithm', 'network', 'os', 'csapp'
]

function TagCloudList({changeTag}) {
    changeTag = changeTag || (() => {});
    const tagComps = tags.map(tag => (
        <TagCloud handleClick={() => {
            changeTag(tag);
        }}>{tag}</TagCloud>
    ));
    return (<Container>
        {tagComps}
    </Container>)
}

export default TagCloudList;