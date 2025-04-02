import React, { useState, useEffect } from 'react';
const CounterItem = () => {
    const [item, setItem] = useState([]);
    useEffect(() => {
        const counterGenerate = () => {
            return Array.from({ length: 5 }, (_, i) => i + 1); // Misol uchun 1-5 oralig‘ida array yaratamiz
        };
        const newItem = counterGenerate();
        setItem(newItem);
        console.log("Render");
    }, []);

    return (
        <ul>
            {item.map((num) => (
                <li key={num}>{num}</li>
            ))}
        </ul>
    );
}
export default CounterItem;
