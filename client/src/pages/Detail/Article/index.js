import { useEffect, useState } from 'react';
import marked from 'marked';
import styled from 'styled-components';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css';

const Container = styled.div`
    & h1 {
        font-size: 2rem;
        font-weight: bold;
        margin: 2rem 0 .5rem;
    }

    & h2 {
        font-size: 1.5rem;
        margin: 2rem 0 .5rem;
    }

    & h3 {
        font-size: 1rem;
        margin: 2rem 0 .5rem;
    }

    & p {
        margin-bottom: 1rem;
        line-height: 1.6;
    }

    & strong {
        font-weight: bold;
    }

    & li {
        line-height: 1.6;
    }

    & ol li {
        list-style: decimal;
    }

    & ul li {
        list-style: disc;
    }

    & pre {
        margin: 2rem 0px;
        border-radius: 0.8rem;
        line-height: 1.6;
        padding: 1.2rem !important;
        background-color: rgb(41, 45, 62) !important;
        font-family: monospace,monospace;
        font-size: 1em;
    }
`;

marked.setOptions({
    highlight(code) {
       return hljs.highlightAuto(code).value;
        // try {
        //     const result = hljs.highlight(lang, code);
        //     callback(null, result);
        // }
        // catch(err) {
        //     callback(err);
        // }
    }
});

function Article({ data }) {
    const [html, setHTML] = useState("");
    const content = data ? data.content : "";
    useEffect(() => {
        setHTML(marked(content));
    }, [content]);
    return (<Container dangerouslySetInnerHTML={{__html: html}}></Container>)
}

export default Article;