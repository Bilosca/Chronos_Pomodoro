import { HistoryIcon, HomeIcon, MoonIcon, SettingsIcon, SunIcon } from "lucide-react";
import styles from "./style.module.css";
import React, { useState, useEffect } from "react";

type AvailableThemes = "dark" | "light";

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>(()=>{
    const StorageTheme = localStorage.getItem('theme') as AvailableThemes || 'dark';
    return StorageTheme
  });

  function handleTheme(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();
    setTheme((prevTheme) => {
      const nextTheme = prevTheme === "dark" ? "light" : "dark";
      return nextTheme;
    });
    return;
  }

  const nextThemeIcon ={
    dark:<SunIcon/>,
    light:<MoonIcon/>
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <nav className={styles.Menu}>
      <a href="#" className={styles.menuLink} title="Página Inicial">
        <HomeIcon></HomeIcon>
      </a>

      <a href="#" className={styles.menuLink} title="Histórico">
        <HistoryIcon></HistoryIcon>
      </a>

      <a href="#" className={styles.menuLink} title="Configurações">
        <SettingsIcon></SettingsIcon>
      </a>

      <a
        href="#"
        className={styles.menuLink}
        title="Tema"
        onClick={handleTheme}
      >
        {nextThemeIcon[theme]}
      </a>
    </nav>
  );
}
