import { useForm } from 'react-hook-form';
import "./index.scss";

const Contact = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await fetch('http://localhost:3001/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                console.log('Email envoyé avec succès');
                reset();
            } else {
                console.error("Erreur lors de l'envoi.");
            }
        } catch (error) {
            console.log("Erreur lors de l'envoi :", error);
        }
    };

    return (
        <div className="contact">
            <h2>Me contacter</h2>
            <div className="contactDescription">
                <p>Je suis ravi que vous ayez pris le temps de visiter mon portfolio !</p>
                <p>N'hésitez pas à me contacter si vous avez des questions, pour discuter de vos projets ou d'éventuelles collaborations.</p>
                <p>Je suis ouvert à toute nouvelle opportunité et serai très heureux de vous lire.</p>
                <p>A très bientôt !</p>
            </div>
            <div className='contactAll'>
                <form className="contactForm" onSubmit={handleSubmit(onSubmit)}>
                    <div className='formGroup'>
                        <label htmlFor="name">Nom</label>
                        <input type="text" id="name" name="nom" {...register('name', { required: true })} placeholder="Votre nom"/>
                        {errors.name&& <span>Ce champ est requis</span>}
                    </div>
                    <div className='formGroup'>
                        <label htmlFor="email">E-mail</label>
                        <input type="email" id="email" name="email" {...register('email', { required: true })} placeholder="Votre e-mail"/>
                        {errors.email && <span>Ce champ est requis</span>}
                    </div>
                    <div className='formGroup'>
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" {...register('message', {required: true})} placeholder="Votre message"/>
                        {errors.message && <span>Ce champ est requis</span>}
                    </div>
                    <input type="submit" value="Envoyer" />
                </form>
            </div> 
        </div>
    )
}

export default Contact;