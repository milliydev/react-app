import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Todo from '../../todo/todo.jsx';
import Book from "../../book/Book.jsx";
import WeatherApp from "../../WeatherApp.jsx";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <nav style={{ marginBottom: '20px' }}>
                        <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', gap: '20px' }}>
                            <li>
                                <Link to="/">Book</Link>
                            </li>
                            <li>
                                <Link to="/todo">Todo</Link>
                            </li>
                            <li>
                                <Link to="/weather">Weather</Link>
                            </li>
                        </ul>
                    </nav>

                    <Routes>
                        <Route path="/" element={<Book />} />
                        <Route path="/todo" element={<Todo />} />
                        <Route path="/weather" element={<WeatherApp />} />
                    </Routes>
                </div>
            </Router>
        );
    }
}

export default App;
