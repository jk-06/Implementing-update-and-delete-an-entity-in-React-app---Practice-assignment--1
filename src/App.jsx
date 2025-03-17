import { useEffect, useState } from "react";
import UpdateItem from "./components/UpdateItem";

// use the following link to get the data
// `/doors` will give you all the doors, to get a specific door use `/doors/1`.
const API_URI = `http://${import.meta.env.VITE_API_URI}/doors/1`;

function App() {
    const [item, setItem] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(API_URI)
            .then((res) => {
                if (!res.ok) throw new Error("Failed to fetch item");
                return res.json();
            })
            .then((data) => setItem(data))
            .catch((err) => setError(err.message));
    }, []);

    if (error) return <p>Error: {error}</p>;
    return <>{item ? <UpdateItem item={item} /> : <p>Loading item...</p>}</>;
}

export default App;
