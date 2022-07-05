
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Projet1 from './pages/Projet1';
import Accueil from './pages/Accueil';
import Projet2 from './pages/Projet2';
import Layout from './pages/Layout';
import Contact from './pages/Contact';


export default function App() {

    return <Routes>
        
         <Route Path="/" element={<Layout />}>
                <Route index element={<Accueil />} />
                <Route path="Projet1" element={<Projet1 />}/>
                <Route path="Projet2" element={<Projet2 />}/>
                <Route path="Contact" element={<Contact />}/>
        </Route>
     </Routes>

}

