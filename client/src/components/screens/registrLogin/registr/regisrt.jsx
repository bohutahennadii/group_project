import React from 'react'
import style from './registr.module.css'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';


function Registr(){
  const [formData, setFormData] = useState({
    FirstName: '',
    LastName: '',
    Email: '',
    Password: '',
    
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
      const response = await axios.post('http://localhost:5042/api/Registration/registration', formData, {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*' }
        });
      console.log('Успішно відправлено:', response.data);
    } catch (error) {
      console.error('Помилка відправки:', error);
    }
  }; 
  


  return(
    <div className={style.wrapper}>
        <div className={style.regWrapper}>
          <div className={style.signUp}>
              <p>Реєстрація</p>
              <form action="" onSubmit={handleSubmit}>
                
                <input type='text' id='FirstName' name='FirstName' value={formData.FirstName} onChange={handleChange} placeholder='Введіть ім’я' required/>
                <input type="text" name="LastName" id="LastName" value={formData.LastName} onChange={handleChange} placeholder='Введіть прізвище'  required/>
                <input type='email' id='Email' name='Email'value={formData.Email} onChange={handleChange} placeholder='Введіть електронну адресу' required/>
                <input type="password" id='Password' name='Password' value={formData.Password} onChange={handleChange}placeholder='Введіть пароль' required/>
                <input type="password"  id='RepeatPassword' name='RepeatPassword' placeholder='Повторіть пароль'/>
                <button type='submit'>Реєстрація</button>

              </form>
          </div>
          <div className={style.offerSignIn}>
              <h2>Ternopil lost&found</h2>
              <p>Якщо у вас вже є заєстрований обліковий запис, то виконайте вхід.</p>
              <NavLink to='/login'><button>Вхід</button></NavLink>
          </div>

        </div>
      </div>
  )

}
export default Registr