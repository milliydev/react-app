import {useState} from "react";


function State() {

    const [name, setName] = useState("Zohid");

    const handleClick  = () => {
        setName('Doniyor');
    }
    return (
        <div className="App">
            <h1>My name is {name}</h1>
            <button onClick={handleClick}>Change Nakme</button>
        </div>
    );
}

export default State;
