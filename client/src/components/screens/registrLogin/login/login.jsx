import style from './login.module.css'

function Login(){
  return(
    <div className={style.wrapper}>
      <div className={style.LoginWrapper}>
        <p>Sign In</p>
        <form action="">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
          <button>Вхід</button>
        </form>
      </div>
    </div>
  )
}

export default Login