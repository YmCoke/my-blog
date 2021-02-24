import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    position: fixed;
    background: #fff;
    padding: 0 2.4rem;
    opacity: 0.95;
    z-index: 200;
    box-shadow: rgba(0,0,0,.5) 0px 1px 40px -8px;
    box-sizing: border-box;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
    min-width: 70rem;
    top: 0;
`;

export const Title = styled.a.attrs({
    href: "/"
})`
    color: tomato;
    height: 4.25rem;
    width: 14.67rem;
    line-height: 4.25rem;
`;

export const Menu = styled.nav`
    height: 4.25rem;
    line-height: 4.25rem;
    display: flex;
    align-items: center;
`;

export const Form = styled.form`
    height: 4.25rem;
    line-height: 4.25rem;
    position: relative;
    margin-right: 1rem;
`;

export const SearchInput = styled.input.attrs(props => ({
    placeholder: props.placeholder
}))`
    width: 13rem;
    height: 2rem;
    vertical-align: middle;
    padding-left: 2rem;
    border: 0.08rem solid #7e8c8d;
    outline: none;
    border-radius: 0.2rem;
`;

export const SearchIcon = styled.img.attrs(props => ({
    src: props.backgroundImage
}))`
    width: 1.2rem;
    height: 1.1rem;
    position: absolute;
    left: 0.5rem;
    top: 1.65rem;
    opacity: .8;
    cursor: pointer;
`;

export const DeleteIcon = styled(SearchIcon).attrs(props => ({
    display: props.hidden && "none"
}))`
    left: auto;
    top: 1.8rem;    
    right: .5rem;
    height: .9rem;
`;

export const ThemeBtn = styled.button`
    width: 7.3rem;
    height: 2.6rem;
    border-radius: 3rem;
    border: 2px solid #fff;
    padding: 0;
    outline: none;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    background: ${props => props.dark ? "linear-gradient(rgb(9, 18, 54), rgb(30, 33, 93))" : "linear-gradient(rgb(57, 89, 138), rgb(121, 215, 237))"};
`;

export const ThemeIcon = styled.img`
    width: 1.6rem;
    height: 1.6rem;
    position: absolute;
    src: ${props => props.src};
`;

export const SunIcon = styled(ThemeIcon)`
    left: .5rem;
    top: .4rem;
`;

export const MoonIcon = styled(ThemeIcon)`
    left: auto;
    right: .5rem;
    top: .4rem;
`;