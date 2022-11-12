import React from "react";
import style from './Layout.module.css'

interface LayoutProps {
    children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({children}) => {
  return (
    <>
      <header className={style.header}>
        <p> header - DaftAcademy - WebApp 2022</p>
      </header>
      <main className={style.main}> {children} </main>
      <footer className={style.footer}> footer </footer>
    </>
  );
};
