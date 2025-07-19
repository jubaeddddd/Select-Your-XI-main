const Player = ({player}) => {
    const {name,country,role,battingStyle,price,image}=player
    return (
        <div>
            <div class="card shadow-sm">
                <figure className="h-[400px] w-[370px]">
                    <img
                        className="h-full w-full object-cover rounded-4xl"
                        src={image}
                        alt=""
                    />
                </figure>
                <div className="flex flex-col space-y-3 mt-3">
                    <div className="flex items-center gap-3">
                       <img className="h-[50px]" src="https://img.icons8.com/?size=24&id=2yC9SZKcXDdX&format=png" alt="" />
                       <h2 className="text-3xl font-semibold">{name}</h2>
                    </div>
                    <div className="flex justify-between border-b-2 border-gray-300 pb-3">
                        <p className="flex gap-2 ml-2 items-center text-gray-400"><img className="h-[25px]" src="https://img.icons8.com/?size=50&id=2755&format=png" alt="" /> <span className="font-semibold text-xl">{country}</span></p>
                        <h2 className="text-2xl p-2 rounded-xl text-gray-500 bg-gray-200">{role}</h2>
                    </div>
                    <div><p className="text-3xl font-bold">Rating</p></div>
                    <div className="flex justify-between">
                        <p className="text-2xl font-bold">{battingStyle}</p>
                        <p className="text-2xl text-gray-300">{battingStyle}</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="text-2xl font-bold">Price: {price}</p>
                        <button className="btn">Choose Player</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Player;