import { Helmet } from 'react-helmet-async'
import styles from './Accueil.module.css'


export default function Accueil() {
    return <>
         <Helmet>
           <meta name="description" content="Protfolio KOUADIO" />
           <title>Accueil - Portfolio de KOUADIO</title>
         </Helmet>


        <section className={styles.presentation}>
            <img src="/image/joel.jpg" alt="KOUADIO Konan Henri Joël" />
            <div>
                <h2>Bonjour, je suis KOUADIO Konan Henri Joël</h2>
                <p>
                 Diplômé d’une maîtrise en gestion des RH, je me suis redirigé vers ma passion qui est l’informatique et plus spécialement la programmation. J’aime relever les défis liés à la polyvalence de l’informatique et développer des applications et sites utiles, variables et ergonomiques.
                </p>
                <p>
                Développeur depuis deux ans, je souhaite désormais mettre mes compétences et mon expérience au service d’une entreprise. Ayant travaillé sur plusieurs différents projets (développement apps mobiles, création de site web pour l’entreprise FDFP.), je peux bien m’intégrer dans une équipe de développement grâce à mes connaissances (HTML5, Java/J2EE, C#)
                </p>
            </div>
        </section>
        
        <section className={styles.presentation + ' ' +  styles.inverse}>
            <img src="/image/lang.jpg" alt="KOUADIO Konan Henri Joël" />
            <div>
                <h2>Langages </h2>
                <ul>
                    <li>Java</li>
                    <li>C#</li>
                    <li>HTML5</li>
                    <li>CSS</li>
                    <li>Java Script</li>
                </ul>   
                <br />
                <br />   
                <h2>Frameworks</h2>
                <ul>
                    <li>Node.js</li> 
                    <li>Express.js</li>
                    <li>React</li> 
                    <li>Boostrap</li> 

                </ul>
                <br />
                <br />
                <h2>Autres</h2>
                <ul>
                    <li>MySql</li>
                    <li>Sql lite</li>
                    <li>Mongo Db</li>
                </ul>
                       
            </div>
        </section>

    </>
}