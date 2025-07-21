const Toggle = ({handleToggle}) => {
    return (
        <div>
            <div className="flex justify-end mt-10">
                <div class="join grid grid-cols-2">
                    <button onClick={()=>{handleToggle(true)}} class="join-item btn btn-outline">Previous page</button>
                    <button onClick={()=>{handleToggle(false)}} class="join-item btn btn-outline">Next</button>
                </div>
            </div>
        </div>
    );
};

export default Toggle;