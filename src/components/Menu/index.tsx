import { HistoryIcon, HomeIcon, SettingsIcon, SunIcon } from 'lucide-react'
import styles from './style.module.css'

export function Menu(){
  return(
    <nav className={styles.Menu}>
        <a href="#" className={styles.menuLink}><HomeIcon></HomeIcon></a>

        <a href="#" className={styles.menuLink}><HistoryIcon></HistoryIcon></a>

        <a href="#" className={styles.menuLink}><SettingsIcon></SettingsIcon></a>

        <a href="#" className={styles.menuLink}><SunIcon></SunIcon></a>
    </nav>
  )

}
