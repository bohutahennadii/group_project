import React from 'react'

import style from './MainLogo.module.css'
import { CiSquarePlus } from "react-icons/ci";

function MainLogo(){
  return(
    <div className={style.wrapper}>
        <div className={style.logo}><img src="./logo.svg" alt="logo" /></div>
        <div className={style.Text}>
          <h1>Ternopil lost&found</h1>
          <p>Сайт " Тернопіль Лост&Фаунд"  служить як централізований ресурс для мешканців Тернополя та околиць, які втратили або знайшли особисті речі.</p>
          <button className={style.addOgl}>Додати оголошення<CiSquarePlus style={{width:30,height:30}}/></button>
          
        </div>
    </div>
  )

}

export default MainLogo