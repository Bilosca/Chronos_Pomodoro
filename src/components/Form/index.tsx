import { CirclePlayIcon } from 'lucide-react';
import styles from './style.module.css';
import { DefaultInput } from '../DefaultInput';

export function Form(){
  return(
        <form className={styles.form}>
          <div className={styles.formRow}>
          <DefaultInput
          id='Input' 
          type='text' 
          labelText='task' 
          placeholder='Digite aqui'
          defaultValue='Modelo'
          disabled
          ></DefaultInput>
          </div>
          <div className='texto'>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className={styles.ciclos}>
            <p>Ciclos</p>
          </div>
            <button className={styles.playBtn}><CirclePlayIcon></CirclePlayIcon></button>
        </form>
  )
}