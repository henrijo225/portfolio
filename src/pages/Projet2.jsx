import { Helmet } from 'react-helmet-async'
import styles from './Projet.module.css';

export default function Projet2() {
    return <>
    <Helmet>
           <meta name="description" content="Presentation du projet 2 Protfolio KOUADIO" />
           <title>Projet2 - Portfolio de KOUADIO</title>
     </Helmet>

        <section>
            <h2>Conception d'un site web de prestation de service à domicile</h2>
            <div className={styles.description}>
                <img src="/image/8.jpg" alt="Projet 1" />
                <div>
                    <p>
                        Ce projet consistait à créer un site web  qui permet aux clients de trouver une personne pour un service précis. Le client tous comme les travailleurs vont créer leur compte sur le site. Chaque travailleur pourra s’inscrire dans un ou plusieurs services, il devra posséder le matériel nécessaire pour accomplir la tâche. Le projet sera applicable pour l’instant dans la région de Montréal et pourra être décentralisé progressivement dans les autres régions. Toute personne désirant obtenir de l’aide sur les différents services proposés pourra créer un compte client.
                    </p>
            
                </div>
            </div>
        </section>

        <section>
            <h2>Technologies</h2>
            <ul className={styles.technologie}>
                <li>HTML5</li>
                <li>CSS</li>
                <li>Express.js</li>
                <li>Node.js</li>
                
            </ul>
        </section>

        <section>
            <h2>Gallerie</h2>
            <div className={styles.gallerie}>
                <img src="/image/11.jpg" alt="Description 1" />
                <img src="/image/10.jpg"  alt="Description 2" />
                <img src="/image/9.jpg" alt="Description 3" />
                
            </div>
        </section>
    </>
}