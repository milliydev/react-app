import React, { useState } from "react";
import { ClipLoader } from "react-spinners";
const BookSearch = () => {
    const [query, setQuery] = useState("");
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [progress, setProgress] = useState(0);
    const searchBooks = async () => {
        if (!query) return;
        setLoading(true);
        setProgress(10);
        try {
            const response = await fetch(
                `https://www.googleapis.com/books/v1/volumes?q=${query}`
            );
            setProgress(50);
            const data = await response.json();
            setProgress(80);
            setBooks(data.items || []);
        } catch (error) {
            console.error("Error fetching books:", error);
        } finally {
            setProgress(100);
            setTimeout(() => setLoading(false), 500);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            searchBooks();
        }
    };

    return (
        <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
            <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
                <input
                    type="text"
                    placeholder="Kitob nomini kiriting"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                    style={{ flex: 1, padding: "10px", fontSize: "16px" }}
                    className="rounded-3xl outline-none"
                />
                <button onClick={searchBooks} disabled={loading} style={{ padding: "10px", fontSize: "16px" }}>
                    {loading ? "Qidirilmoqda..." : "Qidirish"}
                </button>
            </div>
            {loading && (
                <div style={{ marginBottom: "20px" }}>
                    <ClipLoader color="#3498db" size={50} style={{ display: "block", margin: "auto" }} />
                    <div style={{ height: "6px", width: "100%", background: "#eee", borderRadius: "3px", overflow: "hidden", marginTop: "10px" }}>
                        <div style={{ width: `${progress}%`, height: "100%", background: "#3498db", transition: "width 0.3s ease-in-out" }}></div>
                    </div>
                </div>
            )}
            <div>
                {books.map((book) => (
                    <div key={book.id} style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
                        {book.volumeInfo.imageLinks?.thumbnail && (
                            <img
                                src={book.volumeInfo.imageLinks.thumbnail}
                                alt={book.volumeInfo.title}
                                style={{ width: "80px", height: "120px" }}
                            />
                        )}

                        <div>
                            <h3 style={{ fontSize: "18px", margin: 0 }}>{book.volumeInfo.title}</h3>
                            <p style={{ fontSize: "14px", color: "gray" }}>{book.volumeInfo.authors?.join(", ")}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BookSearch;
