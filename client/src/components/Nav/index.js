import { Wrapper, Title, Menu, SearchInput, Form, SearchIcon, DeleteIcon, ThemeBtn, SunIcon, MoonIcon } from './styleComps';
import TagLink from '../TagLink';

import homeIcon from '../../assets/home.svg';
import blogIcon from '../../assets/blog.svg';
import archiveIcon from '../../assets/archive.svg';
import aboutIcon from '../../assets/about.svg';
import searchIcon from '../../assets/search.svg';
import deleteIcon from '../../assets/delete.svg';
import sunIcon from '../../assets/sun.svg';
import moonIcon from '../../assets/moon.svg';

function Nav(props) {
    return (<Wrapper>
        <Title>My Blog App</Title>
        <Menu>
            <TagLink icon={homeIcon} link="/">Home</TagLink>
            <TagLink icon={blogIcon} link="/blog">Blog</TagLink>
            <TagLink icon={archiveIcon} link="/Archive">Archive</TagLink>
            <TagLink icon={aboutIcon} link="/About">About</TagLink>
            <Form>
                <SearchInput placeholder="Search here..." />
                <SearchIcon backgroundImage={searchIcon} />
                <DeleteIcon backgroundImage={deleteIcon} />
            </Form>
            <ThemeBtn>
                <SunIcon src={sunIcon} />
                <MoonIcon src={moonIcon} />
            </ThemeBtn>
        </Menu>
    </Wrapper>)
};

export default Nav;