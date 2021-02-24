import marked from 'marked';
import { useState, useEffect } from "react";

const requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

function Blog({ id }) {
    const [content, setContent] = useState("");

    useEffect(() => {
        fetch(`http://localhost:4014/article/detail/${id}`, requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result);
                if(result.code === 200) {
                    const res = marked(result.data.content);
                    setContent(res);
                }
            })
            .catch(error => console.log('error', error));
    }, [id]);

    return (<div dangerouslySetInnerHTML={{__html: content}}></div>)
}

export default Blog;