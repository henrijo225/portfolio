import Menu from "./Menu";

import styles from './Header.module.css';


export default function Header() {
    return <header className={styles.header}>
        <div className="wrapper">
            <img src="/image/logo.png" alt="Logo" />
            <h1>Portfolio de KOUADIO</h1>
            <Menu />
        </div>
    </header>
}