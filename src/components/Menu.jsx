import { NavLink} from 'react-router-dom';
import styles from './Menu.module.css';

export default function Menu() {
    return <nav className={styles.menu}>
        <ul>
        <li>
                <NavLink to="/" className={({isActive}) => isActive ? styles.active : undefined}> 
                Accueil
                </NavLink>
                    
         </li>
            
        <li>
                <NavLink to="Projet1" className={({isActive}) => isActive ? styles.active : undefined}>
                    Projet1 </NavLink>
                    
        </li>

        <li>
                <NavLink to="Projet2" className={({isActive}) => isActive ? styles.active : undefined}>
                    Projet2 </NavLink>
                    
        </li>
       

            <li>
                <NavLink to="Contact" className={({isActive}) => isActive ? styles.active : undefined}>
                    Contact</NavLink>
                   
            </li>
        </ul>
    </nav>
}