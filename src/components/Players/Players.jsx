import Player from "../Player/Player";
import Toggle from "../Toggle/Toggle";

const Players = ({ players}) => {
    return (
        <div>
            {/* uppper part  */}
            <div className="mt-8 flex justify-between">
                <div>
                    <h1 className="text-3xl font-bold">Available Players</h1>
                </div>
            </div>
            {/* lower part  */}
            <div className="flex justify-center pb-80">
                <div className="grid grid-cols-3 my-10 gap-28">
                    {
                        players.map( player => <Player player={player}></Player>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Players;