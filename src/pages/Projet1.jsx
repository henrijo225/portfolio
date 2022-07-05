import { Helmet } from 'react-helmet-async'
import styles from './Projet.module.css';

export default function Projet1() {
    return <>
    <Helmet>
           <meta name="description" content="Presentation du projet 1 Protfolio KOUADIO" />
           <title>Projet - Portfolio de KOUADIO</title>
     </Helmet>
        <section>
            <h2>Conception d'application mobile pour OS Mozilla</h2>
            <div className={styles.description}>
                <img src="image/f.jpg" alt="Projet 1" />
                <div>
                    <p>
                    Nouvellement implanté dans mon pays d’origine la Côte d’Ivoire, Mozilla a eu à tisser un Partenariat avec le géant de la communication Orange pour la vente de ses téléphones mobiles. 
C’est dans ce cadre que ce Projet est né.
                    </p>
                    <p>
                    En effet Mozilla nous a contacté mon équipe et moi dans le but de développer des Applications sur leur mobile qui roule en OS Mozilla.Aussi nous avons pour taches d’améliorer leur OS tout en créant de nouvelle mise à jour pour.Ce fut un projet rempli d’émotions et de gaité 
                    </p>
                </div>
            </div>
        </section>

        <section>
            <h2>Technologies</h2>
            <ul className={styles.technologie}>
                <li>OS MOZILLA</li>
                
                
            </ul>
        </section>

        <section>
            <h2>Gallerie</h2>
            <div className={styles.gallerie}>
                <img src="/image/1.jpg" alt="Description 1" />
                <img src="/image/2.jpg" alt="Description 2" />
                <img src="/image/3.jpg" alt="Description 3" />
                <img src="/image/4.jpg" alt="Description 4" />
                <img src="/image/5.jpg" alt="Description 5" />
                <img src="/image/6.jpg" alt="Description 6" />
            </div>
        </section>
    </>
}