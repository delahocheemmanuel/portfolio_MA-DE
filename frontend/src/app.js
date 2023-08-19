import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';

function App() {
    return (
        // Utilisation du composant BrowserRouter pour gérer les routes
        <BrowserRouter>
            {/* Inclusion du composant Header */}
            <Header />
            
            {/* Utilisation du composant Routes pour définir les routes */}
            <Routes>
                {/* Définition de la route principale ("/") pour afficher le composant Home */}
                <Route exact path="/" element={<Home />} />
            </Routes>
            
            {/* Inclusion du composant Footer */}
            <Footer />
        </BrowserRouter>
    );
}

export default App;
