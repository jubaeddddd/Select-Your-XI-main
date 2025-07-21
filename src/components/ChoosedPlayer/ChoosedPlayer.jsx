const ChoosedPlayer = ({select,deletePlayer}) => {
    return (
        <div>
            <div className="flex items-center justify-between bg-gray-100 py-4 px-4 rounded-3xl mb-3">
                <div className="flex gap-4 items-center">
                    <img className="h-[81px] w-[81px] rounded-full object-cover" src={select.image} alt="" />
                    <div>
                        <h3 className="text-3xl font-bold">{select.name}</h3>
                        <h2 className="text-2xl font-semibold">{select.battingStyle}</h2>
                    </div>
                </div>
                <div>
                    <img onClick={()=>{deletePlayer(select)}} src="https://img.icons8.com/?size=52&id=362&format=png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default ChoosedPlayer;