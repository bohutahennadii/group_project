import React from 'react'
import { NavLink } from 'react-router-dom';
import style from './login.module.css'

function Login(){
  return(
    <div className={style.wrapper}>
      <div className={style.LoginWrapper}>
        <div className={style.signIn}>
        <p>Вхід</p>
        <form action="">
          <input type="text" name="email" id="email" placeholder='Введіть електронну адресу' />
          <input type="password" name="password" id="password" placeholder='Введіть пароль'/>
          <a>Забули пароль?</a>
          <button type="submit">Увійти</button>
          
        </form>
        </div>
      
        <div className={style.offerSignUp}>
          <h2>Ternopil lost&found</h2>
          <p>Зареєструйтеся у своєму особистому обліковому записі, щоб користуватись нашим сайтом.</p>
          <NavLink to='/registr'><button>Реєстрація аккаунту</button></NavLink>
        </div>
        </div>
      </div>
    
  )
}

export default Login