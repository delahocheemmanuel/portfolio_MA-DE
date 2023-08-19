import React, { useRef, useState } from 'react'; // Importation des modules React nécessaires
import emailjs from 'emailjs-com'; // Importation du module emailjs-com pour envoyer des e-mails
import './Contact.css'; // Importation du fichier de styles CSS

// Définition du composant Contact
const Contact = () => {
    // États pour stocker les données du formulaire et le message de réponse
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [message, setMessage] = useState('');

    const form = useRef(); // Référence au formulaire

    // Fonction pour gérer les changements dans les champs de formulaire
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Fonction pour envoyer l'e-mail en utilisant emailjs-com
     const sendEmail = () => {
         emailjs
             .sendForm(
                 process.env.REACT_APP_SERVICEID, // ID du service e-mail (défini dans les variables d'environnement)
             process.env.REACT_APP_TEMPLATEID, // ID du modèle e-mail (défini dans les variables d'environnement)
                 form.current, // Référence au formulaire
                 process.env.REACT_APP_KEY_PUBLIC // Clé publique (définie dans les variables d'environnement)
             )
            .then((result) => {
                 console.log(result.text); // Affiche le résultat de l'envoi
                 alert('E-mail envoyé avec succès.'); // Affiche une alerte en cas de succès
             })
         .catch((error) => {
                 console.log(error.text); // Affiche l'erreur en cas d'échec
                 alert("L'envoi de l'e-mail a échoué.");
             });
     };

    // Fonction pour soumettre le formulaire
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.name && formData.email && formData.message) {
            try {
                const response = await fetch("https://portfolio-mailjs.onrender.com/api/formData", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                });

                const data = await response.json();
                console.log(data);

                sendEmail();
                setMessage("Email envoyé."); // Message de succès
            } catch (error) {
                console.log(error);
                setMessage("L'envoi de l'e-mail a échoué.");
            }
        } else {
            setMessage("Tous les champs ne sont pas encore remplis."); // Message d'erreur
        }
    };
    // Rendu du composant
    return (
        <main className="main__contact">
            {/* Formulaire de contact */}
            <form ref={form} onSubmit={handleSubmit} className="form__contact">
                <div className='main__contact--name'>
                    <label htmlFor="name">Nom et prénom:</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Exemple : Jean Dupont"
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
                        placeholder="Exemple : jean.dupont@example.com"
                    />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea
                        name="message"
                        id="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Exemple : Bonjour, je suis intéressé par..."
                    ></textarea>
                </div>
                <p>*tous les champs doivent être remplis</p>
                {/* Bouton pour envoyer le formulaire */}
                <button className="form__contact--btn" type="submit">
                    Envoyer
                </button>
                {/* Affiche le message de réponse */}
                {message && <p className='message__response'>{message}</p>}
            </form>
        </main>
    );
};

export default Contact; // Exportation du composant Contact
