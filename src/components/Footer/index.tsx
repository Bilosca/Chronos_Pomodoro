import style from './style.module.css'


export function Footer(){
  return(
    <div className={style.footerContainer}>
      <a href='#' className={style.footerLink}> Entenda a técnica pomodoro 🍅</a>
      <a href='#' className={style.footerLink}> Chronos Pomodoro &copy;{new Date().getFullYear()}</a>
    </div>
  )
}