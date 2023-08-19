import booki from '../assets/images/booki_1.webp'; // Importation de l'image du projet "Booki"
import kasa from '../assets/images/kasa_1.webp'; // Importation de l'image du projet "Kasa"
import grimoire from '../assets/images/grimoire_1.webp'; // Importation de l'image du projet "Grimoire"
import sophiebluel from '../assets/images/sophiebluel_1.webp'; // Importation de l'image du projet "Sophie_Bluel"
import nina from '../assets/images/nina_1.webp'; // Importation de l'image du projet "Nina_Carducci"

// Tableau de données contenant les informations sur les projets
const ProjectsData = [
  {
    title: 'Kasa', // Titre du projet "Kasa"
    imageSrc: kasa, // Image du projet "Kasa"
    description: 'J’ai réalisé l’intégration React ,SASS d’une maquette Figma fournie par un designer, en m’assurant également de sa compatibilité responsive, tablette comme mobile.',
    technologies: ['React', 'SASS', 'Responsive'], // Technologies utilisées dans le projet "Kasa"
    githubPagesLink: 'https://delahocheemmanuel.github.io/site_projet_6', // Lien vers GitHub Pages du projet "Kasa"
    githubLink: 'https://github.com/delahocheemmanuel/site_projet_6', // Lien vers le repository GitHub du projet "Kasa"
  },
  {
    title: 'Booki', // Titre du projet "Booki"
    imageSrc: booki, // Image du projet "Booki"
    description: "J'ai réalisé l’intégration HTML et CSS d'une maquette Figma fournie par un designer, en m’assurant également de sa compatibilité responsive, tablette comme mobile.",
    technologies: ['HTML', 'CSS', 'Responsive'], // Technologies utilisées dans le projet "Booki"
    githubPagesLink: 'https://delahocheemmanuel.github.io/site_projet_2', // Lien vers GitHub Pages du projet "Booki"
    githubLink: 'https://github.com/delahocheemmanuel/site_projet_2', // Lien vers le repository GitHub du projet "Booki"
  },
  {
    title: 'Grimoire', // Titre du projet "Grimoire"
    imageSrc: grimoire, // Image du projet "Grimoire"
    description: "J'ai réalisé le backend avec une base de donnée Mongodb, et le modifié le frontend pour que les messages d'erreurs du backend s'affichent sur le site par le frontend.",
    technologies: ['Mongodb', 'Express', 'React', 'Node'], // Technologies utilisées dans le projet "Grimoire"
    githubPagesLink: 'https://delahocheemmanuel.github.io/site_projet_7', // Lien vers GitHub Pages du projet "Grimoire"
    githubLink: 'https://github.com/delahocheemmanuel/site_projet_7', // Lien vers le repository GitHub du projet "Grimoire"
  },
  {
    title: 'Sophie_Bluel', // Titre du projet "Sophie_Bluel"
    imageSrc: sophiebluel, // Image du projet "Sophie_Bluel"
    description: "J'ai réalisé le frontend en html javascript vanilla",
    technologies: ['Javascript', 'API'], // Technologies utilisées dans le projet "Sophie_Bluel"
    
    githubLink: 'https://github.com/delahocheemmanuel/site_projet_3', // Lien vers le repository GitHub du projet "Sophie_Bluel"
  },
  {
    title: 'Nina_Carducci', // Titre du projet "Nina_Carducci"
    imageSrc: nina, // Image du projet "Nina_Carducci"
    description: "j'ai veillé à optimiser les performances, le référencement, la sécurité et l'accessibilité de son site web.En réponse aux demandes spécifiques de la cliente, j'ai également corrigé quelques bugs d'affichage gênants.Pour consigner toutes mes interventions, j'ai rédigé un rapport complet d'optimisation, qui couvre en détail chaque aspect amélioré.",
    technologies: ['Lighthouse', 'SEO', 'WaveTool'], // Technologies utilisées dans le projet "Nina_Carducci"
    githubLink: 'https://github.com/delahocheemmanuel/site_projet_5', // Lien vers le repository GitHub du projet "Nina_Carducci"
  }
  // Ajoutez un nouveau projet ci-dessous :
  // {
  //   title: 'Nom du projet',
  //   imageSrc: lienDeLImage,
  //   description: 'Description de votre projet ici.',
  //   technologies: ['Technologie1', 'Technologie2'],
  //   githubPagesLink: 'Lien vers GitHub Pages',
  //   githubLink: 'Lien vers GitHub',
  // },
];

export default ProjectsData; // Exportation du tableau de données
