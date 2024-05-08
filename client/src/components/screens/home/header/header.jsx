import React from 'react'
import style from './header.module.css'
import { CiSquarePlus } from "react-icons/ci";
import { NavLink } from 'react-router-dom';
function Header() {
  
  return (
    <div className={style.headerWrapper}>
      <div className={style.logo}>
        <img src="./logo.svg" alt="logo" />
        <p>Ternopil Lost&found</p>
      </div>
      <div className={style.registrBtn}>
        <NavLink to='/addAnnouncement'><button className={style.addOgl}>Додати оголошення<CiSquarePlus style={{width:30,height:30}}/></button></NavLink>
        <div style={{display:'flex'}}>
          <NavLink to='/login'><button  className={style.signIn}>Вхід</button></NavLink>
          <NavLink to='https://localhost:7181/Users/Create'><button className={style.signUp}>Реєстрація аккаунту</button></NavLink>
        </div>
      </div>
    </div>
    
  )
}

export default Header