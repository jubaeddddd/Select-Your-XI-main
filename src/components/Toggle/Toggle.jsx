import { useState } from "react";

const Toggle = ({handleToggle,selected}) => {


    const [available,setAvailable]=useState(true)
    const color=()=>{
        setAvailable(!available)
    }

    return (
        <div>
            <div className="flex justify-end mt-10">
                <div class="join grid grid-cols-2">
                    <button style={{backgroundColor: available? 'yellow' : 'white'}} onClick={()=>{handleToggle(true),color()}} class="join-item btn btn-outline">Available</button>
                    <button style={{backgroundColor: available? 'white' : 'yellow'}} onClick={()=>{handleToggle(false),color()}} class="join-item btn btn-outline">Selected({selected.length})</button>
                </div>
            </div>
        </div>
    );
};

export default Toggle;