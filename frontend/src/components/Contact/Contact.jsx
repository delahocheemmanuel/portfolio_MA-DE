import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';




const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [message, setMessage] = useState(''); // État pour le message de réponse
    const form = useRef();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const sendEmail = () => {
        emailjs
            .sendForm(
                process.env.REACT_APP_SERVICEID,
                process.env.REACT_APP_TEMPLATEID,
                form.current,
                process.env.REACT_APP_KEY_PUBLIC
            )
            .then((result) => {
                console.log(result.text);
                alert('E-mail envoyé avec succès.'); // Définir le message en cas de succès
            })
            .catch((error) => {
                console.log(error.text);
                alert("L'envoi de l'e-mail a échoué."); // Définir le message en cas d'échec
            });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Envoi des données au backend (port 4000)
            const response = await fetch("https://portfolio-mailjs.onrender.com/api/formData", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            console.log(data); // Affiche la réponse du backend

            // Envoi de l'e-mail après avoir soumis les données au backend
            sendEmail();

            
        } catch (error) {
            console.log(error);
            setMessage("L'envoi de l'e-mail a échoué."); // Définir le message en cas d'erreur
        }
    };

    return (
        <main className="main__contact">
            <form ref={form} onSubmit={handleSubmit} className="form__contact">
                <div className='main__contact--name'>
                    <label htmlFor="name">Nom et prénom:</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea
                        name="message"
                        id="message"
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>
                </div>
                
                <button className="form__contact--btn" type="submit">
                    Envoyer
                </button>
                <p>{message}</p> {/* Afficher le message de réponse */}
            </form>
        </main>
    );
};

export default Contact;
