import booki from '../assets/images/booki_1.jpg';
import kasa from '../assets/images/kasa_1.jpg';
import grimoire from '../assets/images/grimoire_1.jpg';

const ProjectsData = [
  {
    title: 'Kasa',
    imageSrc: kasa,
    description: 'J’ai réalisé l’intégration React ,SASS d’une maquette Figma fournie par un designer, en m’assurant également de sa compatibilité responsive, tablette comme mobile.',
    technologies: ['React', 'SASS', 'Responsive'],
    githubPagesLink: 'https://delahocheemmanuel.github.io/site_projet_6',
    githubLink: 'https://github.com/delahocheemmanuel/site_projet_6',
  },
  {
    title: 'Booki',
    imageSrc: booki,
    description: "J'ai réalisé l’intégration HTML et CSS d'une maquette Figma fournie par un designer, en m’assurant également de sa compatibilité responsive, tablette comme mobile.",
    technologies: ['HTML', 'CSS', 'Responsive'],
    githubPagesLink: 'https://delahocheemmanuel.github.io/site_projet_2',
    githubLink: 'https://github.com/delahocheemmanuel/site_projet_2',
  },
  {
    title: 'Grimoire',
    imageSrc: grimoire,
    description: "J'ai réalisé le backend avec une base de donnée Mongodb, et le modifié le frontend pour que les messages d'erreurs du backend s'affichent sur le site par le frontend.",
    technologies: ['Mongodb', 'Express', 'React', 'Node'],
    githubPagesLink: 'https://delahocheemmanuel.github.io/site_projet_7',
    githubLink: 'https://github.com/delahocheemmanuel/site_projet_7',
  },
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

export default ProjectsData;

  