import React from 'react'
// import Footer from '../home/footer/footer'
import axios from 'axios';
import { useState } from 'react';

function PageAddAnnouncement(){
  const [formData, setFormData] = useState({
    name: '',
    age: 0,
    job: '',
    salary: 0
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Змінено URL на адресу JSON-сервера
      await axios.post('http://localhost:5026', formData);
      console.log('Дані успішно відправлені на сервер');
    } catch (error) {
      console.error('Помилка відправлення даних на сервер:', error);
    }
  };
  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Ім'я:
          <input type="text" name="FirtName" value={formData.FirstName} onChange={handleChange} />
        </label>
        <label>
          LastName:
          <input type="text" name="LastName" value={formData.LastName} onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="text" name="email" value={formData.Email} onChange={handleChange} />
        </label>
        <label>
          password:
          <input type="text" name="password" value={formData.Password} onChange={handleChange} />

        </label>
        <button type="submit">Додати користувача</button>
      </form>
    </div>
  );
}

export default PageAddAnnouncement