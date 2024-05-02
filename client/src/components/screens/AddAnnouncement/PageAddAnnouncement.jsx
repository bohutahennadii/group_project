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
      await axios.post('http://localhost:3000/users', formData);
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
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <label>
          Вік:
          <input type="number" name="age" value={formData.age} onChange={handleChange} />
        </label>
        <label>
          Посада:
          <input type="text" name="job" value={formData.job} onChange={handleChange} />
        </label>
        <label>
          Зарплата:
          <input type="number" name="salary" value={formData.salary} onChange={handleChange} />
        </label>
        <button type="submit">Додати користувача</button>
      </form>
    </div>
  );
}

export default PageAddAnnouncement