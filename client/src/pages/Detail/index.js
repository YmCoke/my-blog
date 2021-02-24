import React, { useEffect, useState } from 'react';
import { Content, Cover, Title, Msg, MsgItem, TagItem, Desc } from './styleComps';
import { MiddleContainer } from '../../common/styleComp';
import { getBlogById } from '../../service/Blog';
import * as moment from 'moment';

import Article from './Article';

function Detail(props) {
    const id = props.match.params.id;
    const [blog, setBlog] = useState(null);
    useEffect(() => {
        (async() => {
            if(id === undefined) return ;
            const resp = await getBlogById(id);
            if(resp.data.data === undefined) return ;
            setBlog(resp.data.data);
        })();
    }, [id]);
    return (<MiddleContainer>
        {
            blog ? (<Content>
                <Cover src={blog.cover} />
                <Title>{blog.title}</Title>
                <Msg>
                    <MsgItem>{moment(blog.mtime).format("MMMM Do YYYY")}</MsgItem>
                    <MsgItem>{blog.views} PV</MsgItem>
                    <MsgItem>{blog.likes} Likes</MsgItem>
                    <TagItem>{blog.tag}</TagItem>
                </Msg>
                <Desc>{blog.desc}</Desc>
                <Article data={blog}/>
            </Content>) : null
        }
    </MiddleContainer>)
}

export default Detail;