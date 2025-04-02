import { useState } from "react";
export default function TodoApp() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");
    const [editIndex, setEditIndex] = useState(null);
    const [editText, setEditText] = useState("");
    const addTodo = () => {
        if (input.trim()) {
            setTodos([...todos, input]);
            setInput("");
        }
    };

    const removeTodo = (index) => {
        setTodos(todos.filter((_, i) => i !== index));
    };

    const startEdit = (index) => {
        setEditIndex(index);
        setEditText(todos[index]);
    };

    const saveEdit = () => {
        if (editText.trim()) {
            const updatedTodos = todos.map((todo, i) =>
                i === editIndex ? editText : todo
            );
            setTodos(updatedTodos);
            setEditIndex(null);
            setEditText("");
        }
    };

    return (
        <div className="p-4 max-w-md mx-auto bg-white shadow-lg rounded-lg">
            <h2 className="text-xl font-bold mb-4">React Todo App</h2>
            <input
                className="border p-2 w-full mb-2"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && addTodo()}
                placeholder="todo..."
            />
            <button
                className="bg-blue-500 text-white px-4 py-2 w-full"
                onClick={addTodo}
            >
                Qo'shish
            </button>

            <ul className="mt-4">
                {todos.map((todo, index) => (
                    <li
                        key={index}
                        className="flex justify-between p-2 bg-gray-100 my-1"
                    >
                        {editIndex === index ? (
                            <input
                                className="border p-1 flex-1"
                                value={editText}
                                onChange={(e) => setEditText(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && saveEdit()}
                            />
                        ) : (
                            <span>{todo}</span>
                        )}

                        <div className="flex space-x-2">
                            {editIndex === index ? (
                                <button className="text-green-500" onClick={saveEdit}>
                                    ✔
                                </button>
                            ) : (
                                <button className="text-yellow-500" onClick={() => startEdit(index)}>
                                    🖋️
                                </button>
                            )}
                            <button className="text-red-500" onClick={() => removeTodo(index)}>
                                X
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
