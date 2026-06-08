import type { Service } from '@/types'

export const services: Service[] = [
  {
    id: '1',
    slug: 'mobilite-transport-infrastructures-routieres',
    title: 'Mobilité, Transport & Infrastructures Routières',
    shortDescription:
      'Solutions intelligentes pour la gestion des axes routiers, le péage, le pesage et le stationnement.',
    description:
      'NOISIM accompagne les gestionnaires d’infrastructures routières dans la modernisation de leurs systèmes grâce à des solutions de péage automatisé, de pesage dynamique et de gestion intelligente des parkings. Nos technologies permettent de sécuriser les recettes, fluidifier le trafic et améliorer l’expérience des usagers.',

    icon: 'Car',

    benefits: [
      'Sécurisation des recettes collectées',
      'Réduction des files d’attente',
      'Gestion centralisée multi-sites',
      'Automatisation des opérations',
      'Suivi en temps réel des flux',
      'Intégration avec les systèmes existants',
    ],

    process: [
      {
        step: 1,
        title: 'Étude & Analyse',
        description:
          'Analyse des flux routiers et des besoins opérationnels.',
      },
      {
        step: 2,
        title: 'Conception',
        description:
          'Définition de l’architecture matérielle et logicielle.',
      },
      {
        step: 3,
        title: 'Installation',
        description:
          'Déploiement des équipements et infrastructures.',
      },
      {
        step: 4,
        title: 'Configuration',
        description:
          'Paramétrage des systèmes et intégration.',
      },
      {
        step: 5,
        title: 'Formation & Support',
        description:
          'Accompagnement des équipes et maintenance.',
      },
    ],

    useCases: [
      'Péage autoroutier automatisé',
      'Système de pesage dynamique',
      'Gestion intelligente de parking',
      'Contrôle d’accès routier',
      'Centre de supervision du trafic',
    ],

    faq: [
      {
        question: 'Les systèmes peuvent-ils fonctionner hors ligne ?',
        answer:
          'Oui, les données sont enregistrées localement puis synchronisées dès le retour de la connexion.',
      },
      {
        question: 'Les solutions sont-elles personnalisables ?',
        answer:
          'Oui, chaque déploiement est adapté aux contraintes du site.',
      },
      {
        question: 'Proposez-vous la maintenance ?',
        answer:
          'Oui, nous proposons des contrats de maintenance préventive et corrective.',
      },
    ],
  },

  {
    id: '2',
    slug: 'energie-electricite-industrielle',
    title: 'Énergie & Électricité Industrielle',

    shortDescription:
      'Conception et réalisation d’installations électriques et énergétiques fiables et durables.',

    description:
      'NOISIM intervient dans le domaine de l’énergie et de l’électricité industrielle pour concevoir, installer et maintenir des infrastructures performantes. Nous développons également des solutions photovoltaïques adaptées aux besoins des entreprises, collectivités et sites isolés.',

    icon: 'Zap',

    benefits: [
      'Réduction des coûts énergétiques',
      'Fiabilité accrue des installations',
      'Optimisation de la consommation',
      'Solutions adaptées aux environnements industriels',
      'Maintenance préventive et corrective',
      'Intégration des énergies renouvelables',
    ],

    process: [
      {
        step: 1,
        title: 'Audit Énergétique',
        description:
          'Analyse des besoins et de la consommation énergétique.',
      },
      {
        step: 2,
        title: 'Conception Technique',
        description:
          'Dimensionnement des équipements et schémas électriques.',
      },
      {
        step: 3,
        title: 'Installation',
        description:
          'Mise en œuvre des équipements sur site.',
      },
      {
        step: 4,
        title: 'Tests & Mise en Service',
        description:
          'Validation des performances et sécurité.',
      },
      {
        step: 5,
        title: 'Suivi & Maintenance',
        description:
          'Assistance continue et maintenance des installations.',
      },
    ],

    useCases: [
      'Centrale solaire photovoltaïque',
      'Électrification industrielle',
      'Installation électrique bâtiment',
      'Alimentation d’équipements lourds',
      'Modernisation de réseaux électriques',
    ],

    faq: [
      {
        question: 'Réalisez-vous des installations solaires ?',
        answer:
          'Oui, nous concevons et installons des systèmes photovoltaïques autonomes ou hybrides.',
      },
      {
        question: 'Intervenez-vous sur des sites industriels ?',
        answer:
          'Oui, nous réalisons des installations courant fort et courant faible.',
      },
      {
        question: 'Assurez-vous la maintenance ?',
        answer:
          'Oui, nous assurons le suivi et la maintenance des installations.',
      },
    ],
  },  {
    id: '3',
    slug: 'automatisation-regulation-robotique',
    title: 'Automatisation, Régulation & Robotique',

    shortDescription:
      'Automatisation industrielle, instrumentation et régulation des processus pour optimiser vos performances.',

    description:
      'L’automatisation constitue le cœur du savoir-faire de NOISIM. Nous concevons, intégrons et maintenons des systèmes automatisés permettant d’améliorer la productivité, la qualité et la sécurité des opérations industrielles. Nos équipes interviennent sur les automates, systèmes de supervision, instrumentation et boucles de régulation.',

    icon: 'Cpu',

    benefits: [
      'Optimisation des processus industriels',
      'Réduction des erreurs humaines',
      'Amélioration de la productivité',
      'Disponibilité accrue des équipements',
      'Pilotage en temps réel',
      'Réduction des coûts d’exploitation',
    ],

    process: [
      {
        step: 1,
        title: 'Analyse du Processus',
        description:
          'Étude des opérations existantes et identification des axes d’amélioration.',
      },
      {
        step: 2,
        title: 'Conception de la Solution',
        description:
          'Définition de l’architecture d’automatisation et de supervision.',
      },
      {
        step: 3,
        title: 'Programmation',
        description:
          'Développement des programmes automates et interfaces opérateurs.',
      },
      {
        step: 4,
        title: 'Intégration & Tests',
        description:
          'Validation du fonctionnement avant mise en production.',
      },
      {
        step: 5,
        title: 'Maintenance & Support',
        description:
          'Assistance technique et amélioration continue.',
      },
    ],

    useCases: [
      'Automatisation de station de pompage',
      'Supervision SCADA',
      'Instrumentation industrielle',
      'Contrôle de processus automatisé',
      'Maintenance de systèmes automatisés',
    ],

    faq: [
      {
        question: 'Travaillez-vous sur différents automates ?',
        answer:
          'Oui, nous intervenons sur Siemens, Schneider Electric, Allen-Bradley et d’autres marques industrielles.',
      },
      {
        question: 'Proposez-vous la maintenance ?',
        answer:
          'Oui, nous assurons la maintenance préventive et corrective des systèmes automatisés.',
      },
      {
        question: 'Pouvez-vous moderniser une installation existante ?',
        answer:
          'Oui, nous réalisons des migrations et mises à niveau sans interruption majeure des opérations.',
      },
    ],
  },

  {
    id: '4',
    slug: 'securite-electronique-protection-incendie',
    title: 'Sécurité Électronique & Protection Incendie',

    shortDescription:
      'Des technologies avancées pour protéger les personnes, les infrastructures et les actifs sensibles.',

    description:
      'NOISIM conçoit et déploie des solutions de sécurité électronique intégrées comprenant la vidéosurveillance, le contrôle d’accès, les systèmes anti-intrusion et la protection incendie. Nos solutions assurent une surveillance permanente et une gestion centralisée de la sécurité.',

    icon: 'Shield',

    benefits: [
      'Protection renforcée des sites',
      'Surveillance en temps réel',
      'Détection rapide des incidents',
      'Traçabilité des accès',
      'Réduction des risques opérationnels',
      'Conformité aux normes de sécurité',
    ],

    process: [
      {
        step: 1,
        title: 'Évaluation des Risques',
        description:
          'Identification des zones sensibles et des besoins de protection.',
      },
      {
        step: 2,
        title: 'Conception',
        description:
          'Architecture des systèmes de sécurité et protection incendie.',
      },
      {
        step: 3,
        title: 'Installation',
        description:
          'Déploiement des équipements et câblage.',
      },
      {
        step: 4,
        title: 'Configuration',
        description:
          'Paramétrage des systèmes et intégration.',
      },
      {
        step: 5,
        title: 'Formation & Maintenance',
        description:
          'Formation des utilisateurs et suivi technique.',
      },
    ],

    useCases: [
      'Vidéosurveillance intelligente',
      'Contrôle d’accès biométrique',
      'Détection incendie',
      'Protection périmétrique',
      'Gestion centralisée des visiteurs',
    ],

    faq: [
      {
        question: 'Les systèmes peuvent-ils être supervisés à distance ?',
        answer:
          'Oui, nos solutions permettent une supervision locale et distante.',
      },
      {
        question: 'Installez-vous les systèmes incendie ?',
        answer:
          'Oui, nous installons et maintenons les systèmes de détection et d’alarme incendie.',
      },
      {
        question: 'Peut-on intégrer plusieurs systèmes ?',
        answer:
          'Oui, nous proposons une gestion centralisée de l’ensemble des équipements de sécurité.',
      },
    ],
  },  {
    id: '5',
    slug: 'solutions-numeriques-gestion-actifs',
    title: 'Solutions Numériques & Gestion d’Actifs',

    shortDescription:
      'Développement logiciel, gestion de flotte et infrastructures réseau pour accélérer votre transformation digitale.',

    description:
      'NOISIM accompagne les entreprises dans leur transformation numérique grâce à des solutions logicielles sur mesure, des plateformes de gestion de flotte connectées et des infrastructures réseau performantes. Nous développons des outils adaptés aux besoins métier afin d’améliorer la productivité, la visibilité et la prise de décision.',

    icon: 'MonitorSmartphone',

    benefits: [
      'Digitalisation des processus métier',
      'Suivi en temps réel des actifs',
      'Amélioration de la productivité',
      'Réduction des coûts opérationnels',
      'Sécurisation des infrastructures réseau',
      'Solutions évolutives et personnalisées',
    ],

    process: [
      {
        step: 1,
        title: 'Analyse des Besoins',
        description:
          'Compréhension des objectifs métier et des contraintes techniques.',
      },
      {
        step: 2,
        title: 'Conception',
        description:
          'Définition de l’architecture logicielle ou réseau adaptée.',
      },
      {
        step: 3,
        title: 'Développement & Déploiement',
        description:
          'Mise en œuvre de la solution et intégration dans l’environnement existant.',
      },
      {
        step: 4,
        title: 'Tests & Validation',
        description:
          'Contrôle qualité et validation des fonctionnalités.',
      },
      {
        step: 5,
        title: 'Support & Évolution',
        description:
          'Maintenance, assistance et amélioration continue.',
      },
    ],

    useCases: [
      'Application métier sur mesure',
      'Gestion de flotte GPS',
      'Suivi d’actifs en temps réel',
      'Infrastructure réseau d’entreprise',
      'Tableaux de bord décisionnels',
    ],

    faq: [
      {
        question: 'Développez-vous des applications sur mesure ?',
        answer:
          'Oui, nous développons des solutions adaptées aux besoins spécifiques de chaque client.',
      },
      {
        question: 'Proposez-vous des solutions de géolocalisation ?',
        answer:
          'Oui, nous intégrons des systèmes complets de suivi GPS et de gestion de flotte.',
      },
      {
        question: 'Assurez-vous la maintenance des applications ?',
        answer:
          'Oui, nous proposons des contrats de maintenance et d’assistance technique.',
      },
    ],
  },

  {
    id: '6',
    slug: 'ingenierie-technologies-biomedicales',
    title: 'Ingénierie & Technologies Biomédicales',

    shortDescription:
      'Installation, étalonnage et maintenance des équipements biomédicaux pour garantir la qualité des soins.',

    description:
      'NOISIM met son expertise au service des établissements de santé pour assurer la disponibilité et la fiabilité des équipements biomédicaux. Nos interventions couvrent la fourniture, l’installation, l’étalonnage, la maintenance préventive et corrective ainsi que l’accompagnement technique des équipes médicales.',

    icon: 'Heart',

    benefits: [
      'Fiabilité accrue des équipements médicaux',
      'Réduction des temps d’arrêt',
      'Maintenance préventive planifiée',
      'Respect des normes biomédicales',
      'Sécurité renforcée des patients',
      'Accompagnement technique spécialisé',
    ],

    process: [
      {
        step: 1,
        title: 'Audit du Parc Biomédical',
        description:
          'Inventaire et évaluation des équipements existants.',
      },
      {
        step: 2,
        title: 'Planification',
        description:
          'Définition des opérations de maintenance et d’étalonnage.',
      },
      {
        step: 3,
        title: 'Installation & Calibration',
        description:
          'Mise en service et réglage des équipements médicaux.',
      },
      {
        step: 4,
        title: 'Maintenance',
        description:
          'Interventions préventives et correctives.',
      },
      {
        step: 5,
        title: 'Suivi Technique',
        description:
          'Rapports d’intervention et recommandations d’amélioration.',
      },
    ],

    useCases: [
      'Maintenance d’équipements hospitaliers',
      'Étalonnage de dispositifs médicaux',
      'Installation de matériel biomédical',
      'Gestion de parc biomédical',
      'Support technique hospitalier',
    ],

    faq: [
      {
        question: 'Intervenez-vous sur différents types d’équipements ?',
        answer:
          'Oui, nous prenons en charge un large éventail d’équipements biomédicaux.',
      },
      {
        question: 'Proposez-vous des contrats de maintenance ?',
        answer:
          'Oui, nous proposons des contrats adaptés aux besoins des établissements de santé.',
      },
      {
        question: 'Assurez-vous l’étalonnage des équipements ?',
        answer:
          'Oui, nous réalisons les opérations de calibration et de vérification nécessaires.',
      },
    ],
  },
]