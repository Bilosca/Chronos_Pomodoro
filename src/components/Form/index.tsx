import styles from './style.module.css';
import { DefaultInput } from '../DefaultInput';
import { Cycles } from '../Cycles';

export function Form(){
  return(
        <form className={styles.form}>
          <div className={styles.formRow}>
          <DefaultInput
          id='Input' 
          type='text' 
          labelText='task' 
          placeholder='Digite aqui'

          ></DefaultInput>
          </div>
          <div className='texto'>
            <p></p>
          </div>

          <div className={styles.ciclos}>
            <Cycles/>
          </div>
        </form>
  )
}