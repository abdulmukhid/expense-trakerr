import React, { useState } from 'react';
import axios from 'axios';

const TeacherForm = () => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the teacher's name to the backend API to add to the database
    axios.post('/api/teachers', { name })
      .then((response) => {
        console.log('Teacher added:', response.data);
        // Reset the form fields after successful addition
        setName('');
      })
      .catch((error) => {
        console.error('Error adding teacher:', error);
      });
  };

  return (
    <div>
      <h2>Add Teacher</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <button type="submit">Add Teacher</button>
      </form>
    </div>
  );
};

export default TeacherForm;
