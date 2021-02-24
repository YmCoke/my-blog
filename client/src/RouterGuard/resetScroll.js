import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

export function resetScroll(Comp) {
    const HigherComp = function (props) {
        useEffect(() => (
            props.history.listen(() => {
                window.scrollTo(0, 0);
            })
            // eslint-disable-next-line
        ), []);
        return <Comp {...props} />
    }
    return HigherComp;
}

function __ResetScrollComp(props) {
    useEffect(() => (
        props.history.listen(() => {
            window.scrollTo(0, 0);
        })
        // eslint-disable-next-line
    ), []);
    return null;
}

export function dynamicResetScroll() {
    function move() {
        window.scrollTo(0, Math.max(window.scrollY - distance, 0));
        distance += 1;
        if(window.scrollY !== 0) {
            window.requestAnimationFrame(move);
        }
    }
    const pos = window.scrollY;
    let distance = pos / 60;
    move();
}

export const ResetScrollComp = withRouter(__ResetScrollComp);