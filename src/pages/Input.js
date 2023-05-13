import React, {useState} from "react";

const Input = () => {
    const [textVal, setTextVal] = useState("");

    const onChange = (e) => {
        setTextVal(e.target.value);
    }

    return (
        <div>
            <input type="text" value={textVal} onChange={onChange} />
            <br />
            <p>{textVal}</p>
        </div>
    );
}

export default Input;