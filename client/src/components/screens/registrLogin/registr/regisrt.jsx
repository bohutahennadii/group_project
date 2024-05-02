import React from 'react'
import style from './registr.module.css'
import { NavLink } from 'react-router-dom';

function Registr(){
  return(
    <div className={style.wrapper}>
        <div className={style.regWrapper}>
          <div className={style.signUp}>
              <p>Реєстрація</p>
              <form action="">
                
                <input type='text' id='FirstName' name='FirstName' placeholder='Введіть ім’я' required/>
                <input type="text" name="LastName" id="LastName" placeholder='Введіть прізвище' />
                <input type='email' id='email' name='email' placeholder='Введіть електронну адресу' required/>
                <input type="password" id='password' name='password' placeholder='Введіть пароль' required/>
                <input type="password"  id='repeatPassword' name='repeatPassword' placeholder='Повторіть пароль'/>
                <button>Реєстрація</button>

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