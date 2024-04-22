import style from './announcement.module.css'
import { announcementItem } from './announcement.data'
import { FaPhoneAlt } from "react-icons/fa";

function Announcement() {
  return (
    <div className={style.wrapper}>
        <h1>Оголошення</h1>
        <div className={style.announcementWrapper}>
            {announcementItem.map(announcementItem =>
              <div className={style.announcement} key={announcementItem.id} >
                <div className={style.announcementImg}><img src={announcementItem.img} alt="foto" /></div>
                <div className={style.announcementText}>
                  <div className={style.title}><h3>{announcementItem.title}</h3></div>
                  <div className={style.text}><p>{announcementItem.text}</p></div>
                  <div className={style.phone}><p><FaPhoneAlt />{announcementItem.phone}</p></div>
                </div>
                
              </div> )}
        </div>

    </div>
  )
}

export default Announcement