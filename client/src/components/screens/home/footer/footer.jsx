import React from 'react'

import style from './footer.module.css'

function Footer(){
  return(
    <div className={style.FooterWrapper}> 
      <div className={style.imgContainer}>
        <img src="/light_logo.svg" alt="logo" />
      </div>
      <div className={style.AboutUs}>
        <h2>Ternopil lost&found</h2>
        <p>Про нас</p>
        <p>Політика конфіденційності</p>
      </div>
      <div className={style.Contacts}>
        <div className={style.ContactsText}><p>Наші контакти</p></div>
        <div className={style.phone}> 
          <p>Телефон</p>
          <p>+380975461223</p>
        </div>
        <hr />
        <div className={style.email}>
          <p>Пошта</p>
          <p>ternopilLostFound@gmail.com</p>
        </div>
        <hr />
      </div>

    </div>
  )
}
export default Footer;