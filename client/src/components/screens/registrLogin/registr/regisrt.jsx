import style from './registr.module.css'
function Registr(){
  return(
    <div className={style.wrapper}>
        <div className={style.regWrapper}>
          <p>Sign up</p>
          <form action="">
            <label htmlFor="FirstName">First Name</label>
            <input type="text" name ="FirstName" id="FirstName"/>
            <label htmlFor="LastName">Last Name</label>
            <input type="text" name ="LastName" id="LastName"/>
            <label htmlFor="email">Email</label>
            <input type="email"  name="email" id="email"/>
            <label htmlFor="phone">Phone</label>
            <input type="text" name="phone" id="phone"/>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password"/>
            <label htmlFor="sumbitPass">Repeat Password</label>
            <input type="password" name="sumbitPass" id="sumbitPass"/>
            <button>Реєстрація</button>
          </form>

        </div>
      </div>
  )

}
export default Registr