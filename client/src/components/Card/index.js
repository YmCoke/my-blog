import { Container, Cover, LinkImage, Intro, Title, Extra, Folder, Desc, Arrow } from './styleComps'
import TagComp from '../TagUnion';

import folderIcon from '../../assets/folder.svg';
import timeIcon from '../../assets/time.svg';
import likeIcon from '../../assets/like.svg';
import viewIcon from '../../assets/view.svg';

import * as moment from 'moment';

function Card({meta}) {
    return (<Container>
        <Cover>
            <LinkImage href={`/detail/${meta.id}`} src={meta.cover} alt=""/>
        </Cover>
        <Intro>
            <TagComp src={timeIcon}>Released At {moment(meta.mtime).format('YYYY-MM-DD')}</TagComp>
            <Title>{meta.title}</Title>
            <Extra>
                <Folder><TagComp src={folderIcon}>{meta.tag}</TagComp></Folder>
                <TagComp src={likeIcon}>{meta.views} PV</TagComp>
                <TagComp src={viewIcon}>{meta.likes} likes</TagComp>
            </Extra>
            <Desc>{meta.desc}</Desc>
            <Arrow href={`/detail/${meta.id}`} />
        </Intro>
    </Container>)
}

export default Card;