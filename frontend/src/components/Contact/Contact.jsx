import React, { useRef, useState } from 'react'; // Importation des modules React nécessaires
import emailjs from 'emailjs-com'; // Importation du module emailjs-com pour envoyer des e-mails
import './Contact.sass'; // Importation du fichier de styles CSS

// Définition du composant Contact
const Contact = () => {
    // États pour stocker les données du formulaire et le message de réponse
    const [formData, setFormData] = useState({ // État pour stocker les données du formulaire
        name: '',
        email: '',
        message: '',
    });
    const [message, setMessage] = useState(''); // État pour stocker le message de réponse
    const [isSubmitting, setIsSubmitting] = useState(false); // Nouvel état pour suivre l'état de la soumission

    const form = useRef(); // Référence au formulaire

    // Fonction pour gérer les changements dans les champs de formulaire
    const handleChange = (e) => {                          // Fonction pour gérer les changements dans les champs de formulaire
        const { name, value } = e.target;                  // Destructuration de l'événement
        setFormData({ ...formData, [name]: value });       // Mise à jour de l'état avec les nouvelles données
    };

    // Fonction pour envoyer l'e-mail en utilisant emailjs-com
    const sendEmail = () => {                              // Fonction pour envoyer l'e-mail en utilisant emailjs-com
        emailjs
            .sendForm(                                     // Méthode sendForm de emailjs-com
                process.env.REACT_APP_SERVICEID,
                process.env.REACT_APP_TEMPLATEID,
                form.current,
                process.env.REACT_APP_KEY_PUBLIC
            )
            .then((result) => {                            // Résultat de la méthode sendForm
                console.log(result.text);
                setMessage('E-mail envoyé avec succès.');
            })
            .catch((error) => {                            // Gestion des erreurs
                console.log(error.text);
                setMessage("L'envoi de l'e-mail a échoué.");
            });
    };

    // Fonction pour soumettre le formulaire
    const handleSubmit = async (e) => {                    // Fonction pour soumettre le formulaire
        e.preventDefault();                                // Empêche le comportement par défaut du formulaire

        if (isSubmitting) {                                
            return; // Si déjà en cours de soumission, ne rien faire
        }

        setIsSubmitting(true); // Début de la soumission

        

        if (formData.name && formData.email && formData.message) {     // Si tous les champs sont remplis
            try {
                const response = await fetch("https://portfolio-mailjs.onrender.com/api/formData", {  // Envoi des données du formulaire à l'API
                    method: "POST",                                                                   // Méthode POST
                    headers: {
                        "Content-Type": "application/json",                                           // Type de contenu
                    },
                    body: JSON.stringify(formData),                                                   // Données du formulaire
                });

                const data = await response.json();                                                   // Récupération des données de la réponse
                console.log(data);

                sendEmail();                                                                          // Envoi de l'e-mail
                setMessage("Email envoyé."); // Message de succès
            } catch (error) {
                console.log(error);
                setMessage("L'envoi de l'e-mail a échoué.");                               
            }
        } else {
            setMessage("Tous les champs ne sont pas encore remplis.");                                
        }
        setTimeout(() => {
            setIsSubmitting(false); // Fin de la soumission après un délai (timeout)
        }, 1000); // Temps en millisecondes (ici, 5 secondes)
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
