import Player from "../Player/Player";

const Players = ({ players }) => {
    return (
        <div>
            {/* uppper part  */}
            <div className="mt-8 flex justify-between">
                <div>
                    <h1 className="text-3xl font-bold">Available Players</h1>
                </div>
                <div class="join grid grid-cols-2">
                    <button class="join-item btn btn-outline">Previous page</button>
                    <button class="join-item btn btn-outline">Next</button>
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