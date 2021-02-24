import BgComp from '../BgComp';

function BgCompList({bglist}) {
    const bgComps = bglist.map(bg => (
        <BgComp key={bg.id} title={bg.title} src={bg.cover} url={`/detail/${bg.id}`}/>
    ));
    return (<>
        {bgComps}
    </>)
}

export default BgCompList;