import styled from 'styled-components';
import {Link} from 'react-router-dom';
import arrowIcon from '../../assets/arrow.svg';

export const Container = styled.div`
    width: 100%;
    height: 20rem;
    border: 1px solid #fff;
    border-radius: .5rem;
    box-shadow: rgba(0, 0, 0, .1) 0px 1px 20px 2px; 
    margin: 3rem auto;
    display: flex;
    overflow: hidden;
    text-align: right;
    &:nth-of-type(2n) {
        flex-direction: row-reverse;
        text-align: left;
    };
`;

export const Cover = styled.div`
    width: 58%;
    height: 100%;
    overflow: hidden;
    cursor: pointer;
`;

export const LinkImage = styled(Link).attrs(props => ({
    to: props.href || "#"
}))`
    display: inline-block;
    width: 100%;
    height: 100%;
    transition: all .5s;
    background-image: ${props => "url("+ props.src +")"};
    background-size: 100% 100%;
    &:hover {
        transform: scale(1.1);
    }
`;

export const Intro = styled.div`
    width: 42%;
    height: 100%;
    box-sizing: border-box;
    padding: 1.2rem;
`;

export const Title = styled.h2`
    font-size: 1.3rem;
    color: #000;
    font-weight: bold;
    margin: 1rem 0;
`;

export const Extra = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Folder = styled.div`
    cursor: pointer;
`;

export const Desc = styled.article`
    color: #222;
    line-height: 1.4;
    font-size: 1.1rem;
    height: 7.5rem;
    margin-top: 1rem;
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`;

export const Arrow = styled(Link).attrs(props => ({
    to: props.href || "#"
}))`
    display: inline-block;
    width: 2rem;    
    height: 1rem;
    background-image: url(${arrowIcon});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    transform: scale(1.2);
`;