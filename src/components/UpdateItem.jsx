import { useState } from "react";

const UpdateItem = ({ item }) => {
    // 1. Create a state for the form
    const [updatedItem, setUpdatedItem] = useState(item);

    // 2. Create a function to handle the form input changes
    const handleChange = (e) => {
        setUpdatedItem({ ...updatedItem, [e.target.name]: e.target.value });
    };

    // 3. Create a function to handle the form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://${import.meta.env.VITE_API_URI}/doors/${item.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedItem),
            });

            if (!response.ok) {
                throw new Error("Failed to update item");
            }

            alert("Item updated successfully!");
        } catch (error) {
            console.error("Error updating item:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" name="name" value={updatedItem.name} onChange={handleChange} />
            </label>
            <button type="submit">Update</button>
        </form>
    );
};

export default UpdateItem;
