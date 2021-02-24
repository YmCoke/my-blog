import { Cover, Title, Content, Aside } from './styleComp';

import CardList from '../../components/CardList';
import Union from '../../components/Union';
import BgCompList from '../../components/BgCompList';
import TagCloudList from '../../components/TagCloudList';
import Pager from '../../components/Pager';

import topIcon from '../../assets/TOPSALES.svg';
import tagIcon from '../../assets/tag.svg';

import { useState, useEffect } from 'react';
import { getBlogMetaList, getViewTop } from '../../service/Blog';

import { dynamicResetScroll } from '../../RouterGuard/resetScroll'

function Blog() {
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const [cardlist, setCardlist] = useState([]);
    useEffect(() => {
        (async () => {
            try {
                const resp = await getBlogMetaList(page);
                setCardlist(resp.data.data.datas);
                if (resp.data.data.total !== total) setTotal(resp.data.data.total);
            }
            catch(err) {
                console.warn("内部错误", err);
            }
        })();
        // eslint-disable-next-line
    }, [page]);


    const [bglist, setBglist] = useState([]);
    useEffect(() => {
        (async () => {
            try {
                const resp = await getViewTop()
                setBglist(resp.data.data);
            }
            catch(err) {
                console.warn("内部错误", err);
            }   
        })();
    }, []);


    const [tag, setTag] = useState(null);
    useEffect(() => {
        (async() => {
            if(!tag) return;
            try {
                
            }
            catch(err) {

            }
        })();
    }, [tag]);
    return (<div>
        <Cover src="https://static.yancey.app/blog-fe-static/blog_page_header.jpg">
            <Title>Tech and Poems.</Title>
        </Cover>
        <Content>
            <div>
                <CardList cardlist={cardlist} />
                <Pager total={total} page={page} onchange={(newPage) => {
                    if (page === newPage) return;
                    setPage(newPage);
                    dynamicResetScroll();
                }} />
            </div>
            <Aside>
                <Union icon={topIcon} title="Top 7 Most Viewed">
                    <BgCompList bglist={bglist}/>
                </Union>
                <Union icon={tagIcon} title="Tag Cloud">
                    <TagCloudList changeTag={(newTag) => {

                    }}/>
                </Union>
            </Aside>
        </Content>
    </div>)
}

export default Blog;