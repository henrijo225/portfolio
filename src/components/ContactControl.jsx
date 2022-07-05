import style from './Contact.module.css'
export default function ContactControl(){
    const handleSubmit = async (event) => {
        event.preventDefault();
    
  }



    return <form noValidate className={style.form} onSubmit ={handleSubmit}>

        <h1>Contactez - moi</h1>
        <label>Nom</label>
        <input input="Nom"/>

        <label>Email</label>
        <input input="Email"/>

        <label>Message</label>
        <textarea input="Message"></textarea>

        <button type="submit">Envoyer</button>

    </form>
}