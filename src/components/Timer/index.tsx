import styles from './style.module.css';
import { useTaskContext } from '../../contexts/taskContext/useTaskContext';
export function Timer(){
  const {state} = useTaskContext()
  return(
    <div className={styles.timerContainer}>{state.formattedSecondsRemaining}
    </div>
  )
}