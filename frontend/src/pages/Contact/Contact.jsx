import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';
import config from './config'; // Importez le fichier de configuration

emailjs.init(config.emailjsPublicKey);

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
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
            })
            .catch((error) => {
                console.log(error.text);
            });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Envoi des données au backend (port 4000)
            const response = await fetch("http://localhost:4000/api/formData/save", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            console.log(data); // Affiche la réponse du backend

            // Envoi de l'email après avoir soumis les données au backend
            sendEmail();
        } catch (error) {
            console.log(error);
        }
    };
  

    return (
        <main className="main__contact">
            <form ref={form} onSubmit={handleSubmit} className="form__contact">
                <div>
                    <label htmlFor="name">Nom:</label>
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
                <div className="recaptcha-container">
                    <div
                        className="g-recaptcha"
                        data-sitekey="6Lesj6AnAAAAAJ7qzlyPpxcIOXWGJPB8EtrgAFWG"
                    ></div>
                </div>
                <button className="form__contact--btn" type="submit">
                    Envoyer
                </button>
            </form>
        </main>
    );
};

export default Contact;
