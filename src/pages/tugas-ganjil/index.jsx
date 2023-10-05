import React, { useState } from 'react';
import "./index.css";

function index() {
  const [names, setNames] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddName = () => {
    if (inputValue) {
      setNames([...names, inputValue]);
      setInputValue('');
    }
  };

  const handleDeleteAllNames = () => {
    setNames([]);
  };

  return (
    <div className='Main'>
      <h2>Add and Clear Our Member</h2>
      <h2>Kelompok 33</h2>
      <input type="text" value={inputValue} onChange={handleInputChange} placeholder='Isi nama..' style={{
          width: "80%",
          height: "300%",
          paddingLeft: "8px",
          paddingTop: "6px",
          paddingBottom: "6px",
          outline: "6px",

        }} />
      <div>
        <button onClick={() => {
          handleAddName();
        }} >Simpan</button>
      {names.length > 0 && (
        <button onClick={handleDeleteAllNames}>Hapus</button>
      )}
      </div>
      
      <li>
        {names.map((name, index) => (
          <li key={index}>{index + 1}. {name}</li>
        ))}
      </li>
    </div>
  );
}

export default index;