const Toggle = ({handleToggle,selected}) => {
    return (
        <div>
            <div className="flex justify-end mt-10">
                <div class="join grid grid-cols-2">
                    <button onClick={()=>{handleToggle(true)}} class="join-item btn btn-outline">Available</button>
                    <button onClick={()=>{handleToggle(false)}} class="join-item btn btn-outline">Selected({selected.length})</button>
                </div>
            </div>
        </div>
    );
};

export default Toggle;