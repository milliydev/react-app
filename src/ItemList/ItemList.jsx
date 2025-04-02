import { useState } from "react";
function State() {
    const [name, setName] = useState("Zohid");
    const [showContent, setShowContent] = useState(true);
    const [events, setEvents] = useState([
        { title: "Akhror's Birthday Party", id: 1 },
        { title: "Doniyor's Live Stream", id: 2 },
        { title: "Match: Manchester United vs Barcelona", id: 3 }
    ]);

    const handleClick = () => {
        setName("Doniyor");
    };

    // delete items
    const handleDelete = (id) => {
        const filteredEvents = events.filter((event) => event.id !== id);
        setEvents(filteredEvents);
    };

    return (
        <div className="App">
            <h1>My name is {name}</h1>
            <button onClick={handleClick}>Change Name</button>
            <hr/>
            <br/>
            <br/>
            <button onClick={() => setShowContent(!showContent)} className="border ">
                {showContent ? "Hide Events" : "Show Events"}
            </button>
            {showContent && events.map((event) => (
                <div key={event.id}>
                    <h1 className='text-green-500'>{event.title}</h1>
                    <button className='border-2' onClick={() => handleDelete(event.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
}

// {show ? <h1>true</h1> : <h1>False</h1>}
export default State;
