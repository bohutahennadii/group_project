import React from 'react'
// import Footer from '../home/footer/footer'
import axios from 'axios';
import { useState } from 'react';

function PageAddAnnouncement() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('photo', file);

      await axios.post('http://localhost:3001/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Файл успішно відправлений на сервер');
    } catch (error) {
      console.error('Помилка відправлення файлу на сервер:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <input type="text" />
        <input type="text" />
        <input type="tel" />
        <button type="submit">SEND</button>
      </form>
    </div>
  );
}

export default PageAddAnnouncement