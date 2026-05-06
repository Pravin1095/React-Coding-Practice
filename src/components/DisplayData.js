import { useState } from "react";

const DisplayData = () => {
  const [items, setItems] = useState([
    "Apple MacBook Pro",
    "Apple iPhone 15",
    "Samsung Galaxy S23",
    "Sony Headphones",
    "Dell XPS 13",
    "HP Pavilion Laptop",
    "Lenovo ThinkPad",
    "Asus ROG Laptop",
    "Canon DSLR Camera",
    "Nikon Mirrorless Camera",
    "iPad Air",
    "Apple Watch",
    "Boat Wireless Earbuds",
    "JBL Bluetooth Speaker",
    "Logitech Mouse",
    "Mechanical Keyboard",
    "Gaming Monitor",
    "LG Smart TV",
    "Mi Power Bank",
    "OnePlus Nord Phone",
  ]);

  const [addedData, setAddedData] = useState("");

  const handleDelete = (deletedData) => {
    const newItems = items.filter((data) => data !== deletedData);
    setItems(newItems);
  };

  const handleChange = (e) => {
    setAddedData(e.target.value);
  };
  const handleAdd = () => {
    setItems((prev) => {
      if (prev.includes(addedData)) {
        alert("Already exists");
        return [...prev];
      } else {
        alert("successfully added");
        return [...prev, addedData];
      }
    });

    setAddedData("");
  };

  return (
    <>
      <input value={addedData} placeholder="Add" onChange={handleChange} />
      <button onClick={handleAdd}>Add</button>
      {items &&
        items.map((data) => {
          return (
            <div key={data}>
              <h3>{data}</h3>

              <button onClick={() => handleDelete(data)}>Delete</button>
            </div>
          );
        })}
    </>
  );
};

export default DisplayData;
