import { Cover, Mask, Welcome, Title, Bubble, Sentence, List, ListItem, Content } from './styleComps';

import CardList from '../../components/CardList';
import Union from '../../components/Union';
import LinkBtn from '../../components/LinkBtn'

import githubIcon from "../../assets/github.svg";
import wechatIcon from "../../assets/wechat.svg";
import emailIcon from "../../assets/email.svg";

import newIcon from "../../assets/new.svg";

import { MiddleContainer } from '../../common/styleComp';

import { useState, useEffect } from 'react';

import { getBlogMetaList } from '../../service/Blog';

function Home() {
    const [cardlist, setCardList] = useState([]);
    useEffect(() => {
        (async () => {
            try {
                const resp = await getBlogMetaList();
                setCardList(resp.data.data.datas);
            }
            catch(err) {
                console.error("获取首页资料失败 --> ", err);
            }
        })();
    }, []);
    return (<div>
        <Cover src="https://static.yancey.app/kobebryant.jpg?x-oss-process=image/format,webp">
            <Mask>
                <Welcome>
                    <Title>HI, STRANGER!</Title>
                    <Bubble>
                        <Sentence>HEROES COME AND GO, BUT LEGENDS ARE FOREVER. 💜💛</Sentence>
                        <List>
                            <ListItem src={githubIcon} />
                            <ListItem src={wechatIcon} />
                            <ListItem src={emailIcon} />
                        </List>
                    </Bubble>
                </Welcome>
            </Mask>
        </Cover>
        <MiddleContainer>
            <Content>
                <Union icon={newIcon} title="The Latest!">
                    <CardList cardlist={cardlist}/>
                    <LinkBtn to="/blog">More</LinkBtn>
                </Union>
            </Content>
        </MiddleContainer>
    </div>)
}

export default Home;