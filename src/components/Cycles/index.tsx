import style from "./style.module.css";

export function Cycles(){
  return(
    <div className={style.Cycles}>
      <span>ciclos:</span>
      <div className={style.cycleDots}>
        <span className={`${style.cycleDot} ${style.workTime}`}></span>
        <span className={`${style.cycleDot} ${style.shortRest}`}></span>
        <span className={`${style.cycleDot} ${style.workTime}`}></span>
        <span className={`${style.cycleDot} ${style.shortRest}`}></span>
        <span className={`${style.cycleDot} ${style.workTime}`}></span>
        <span className={`${style.cycleDot} ${style.shortRest}`}></span>
        <span className={`${style.cycleDot} ${style.workTime}`}></span>
        <span className={`${style.cycleDot} ${style.longRest}`}></span>
      </div>


    </div>

  );
}