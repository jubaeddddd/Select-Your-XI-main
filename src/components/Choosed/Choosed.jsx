import ChoosedPlayer from "../ChoosedPlayer/ChoosedPlayer";


const Choosed = ({ selected , handleToggle , deletePlayer}) => {
    return (
        <div className="pb-96 mt-10">
            <div>
                <h3 className="text-5xl font-bold">Selected Players ({selected.length}/12)</h3>
            </div>
            <div className="mt-10">
                {
                    selected.map(select => <ChoosedPlayer deletePlayer={deletePlayer} select={select}></ChoosedPlayer>)
                }
            </div>
            <div>
                <button onClick={()=>{handleToggle(true)}} className="btn">Add More Player</button>
            </div>
        </div>
    );
};

export default Choosed;