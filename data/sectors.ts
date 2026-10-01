import type { Sector } from '@/types'

export const sectors: Sector[] = [
  {
    id: '1',
    slug: 'industries-production',
    title: 'Industries & Production',
    description:
      'NOISIM accompagne les industriels dans la modernisation de leurs sites de production grâce à des solutions d’automatisation, d’électricité industrielle, de supervision et de gestion des équipements.',

    challenges: [
      'Arrêts de production et indisponibilité des équipements',
      'Processus industriels encore fortement manuels',
      'Manque de supervision des installations',
      'Coûts élevés liés aux pannes et aux interventions',
      'Difficultés de suivi et de gestion des équipements industriels',
    ],

    solutions: [
      'Automatisation et contrôle des processus industriels',
      'Systèmes SCADA et supervision des installations',
      'Installation et maintenance électrique industrielle',
      'Instrumentation et systèmes de régulation',
      'Solutions numériques pour le suivi des équipements et des actifs',
    ],

    benefits: [
      'Amélioration de la continuité de production',
      'Réduction des arrêts et des temps d’intervention',
      'Meilleure supervision des installations',
      'Optimisation des performances opérationnelles',
      'Amélioration de la gestion des équipements industriels',
    ],

    useCases: [
      'Automatisation d’une ligne de production',
      'Supervision centralisée d’un site industriel',
      'Mise en place d’un système de gestion des équipements',
    ],

    icon: 'Factory',
  },

  {
    id: '2',
    slug: 'petrole-gaz-energie',
    title: 'Pétrole, Gaz & Énergie',
    description:
      'NOISIM fournit des solutions techniques et technologiques destinées aux sites pétroliers, gaziers et énergétiques, avec un accent particulier sur la fiabilité des installations, la sécurité et la supervision des opérations.',

    challenges: [
      'Exigences élevées en matière de disponibilité des installations',
      'Risques liés aux environnements industriels sensibles',
      'Besoin de surveillance permanente des équipements',
      'Coûts liés aux arrêts et aux défaillances techniques',
      'Nécessité de sécuriser les installations et les opérations',
    ],

    solutions: [
      'Automatisation et systèmes de contrôle industriel',
      'Supervision et monitoring des installations',
      'Électricité industrielle et distribution énergétique',
      'Systèmes de sécurité électronique et de détection',
      'Maintenance et gestion des équipements techniques',
    ],

    benefits: [
      'Amélioration de la disponibilité des installations',
      'Renforcement de la sécurité des sites',
      'Meilleure visibilité sur les opérations',
      'Réduction des risques d’arrêt des équipements',
      'Optimisation de la maintenance des installations',
    ],

    useCases: [
      'Supervision d’une installation énergétique',
      'Sécurisation électronique d’un site industriel sensible',
      'Automatisation et contrôle d’une installation technique',
    ],

    icon: 'Droplets',
  },

  {
    id: '3',
    slug: 'infrastructures-transport',
    title: 'Infrastructures & Transport',
    description:
      'NOISIM accompagne les acteurs du transport et des infrastructures dans la modernisation, l’automatisation et la supervision de leurs installations afin d’améliorer la fluidité, la sécurité et la gestion des opérations.',

    challenges: [
      'Gestion manuelle des opérations de transport',
      'Fraude et pertes de revenus sur les infrastructures à péage',
      'Congestion et files d’attente',
      'Manque de visibilité sur les flux et les opérations',
      'Difficultés de supervision des infrastructures',
    ],

    solutions: [
      'Systèmes de péage automatisé',
      'Ponts bascules et systèmes de pesage',
      'Solutions de gestion et de supervision du trafic',
      'Systèmes de contrôle et de surveillance des infrastructures',
      'Tableaux de bord et outils de suivi des opérations',
    ],

    benefits: [
      'Amélioration de la fluidité des opérations',
      'Sécurisation des recettes et des transactions',
      'Meilleure supervision des infrastructures',
      'Réduction des interventions manuelles',
      'Amélioration du suivi des performances',
    ],

    useCases: [
      'Automatisation d’un poste de péage',
      'Système de pesage pour véhicules lourds',
      'Supervision centralisée d’une infrastructure de transport',
    ],

    icon: 'Car',
  },

  {
    id: '4',
    slug: 'sante-biomedical',
    title: 'Santé & Biomédical',
    description:
      'NOISIM accompagne les établissements de santé dans la maintenance, la sécurisation et la gestion de leurs équipements et infrastructures techniques afin de contribuer à la continuité des services de soins.',

    challenges: [
      'Pannes d’équipements médicaux critiques',
      'Difficultés de maintenance et de suivi du parc biomédical',
      'Obsolescence des équipements',
      'Besoin de disponibilité permanente des installations',
      'Exigences élevées en matière de sécurité et de fiabilité',
    ],

    solutions: [
      'Maintenance des équipements biomédicaux',
      'Calibration et contrôle des équipements médicaux',
      'Gestion et suivi du parc biomédical',
      'Maintenance préventive et corrective',
      'Solutions électriques et techniques pour les établissements de santé',
    ],

    benefits: [
      'Amélioration de la disponibilité des équipements',
      'Réduction des pannes critiques',
      'Meilleur suivi du parc biomédical',
      'Prolongation de la durée de vie des équipements',
      'Amélioration de la continuité des services de soins',
    ],

    useCases: [
      'Maintenance d’un parc d’équipements hospitaliers',
      'Calibration d’équipements médicaux',
      'Gestion et suivi des équipements biomédicaux',
    ],

    icon: 'Heart',
  },

  {
    id: '5',
    slug: 'batiment-tertiaire',
    title: 'Bâtiment & Tertiaire',
    description:
      'NOISIM accompagne les entreprises, promoteurs et gestionnaires de bâtiments dans la conception, l’installation et la maintenance des systèmes techniques nécessaires au fonctionnement et à la sécurité de leurs infrastructures.',

    challenges: [
      'Complexité des installations techniques des bâtiments',
      'Consommation énergétique élevée',
      'Risques liés aux défaillances électriques',
      'Besoin de sécurisation des occupants et des biens',
      'Difficultés de supervision des équipements techniques',
    ],

    solutions: [
      'Installations électriques et systèmes énergétiques',
      'Vidéosurveillance et contrôle d’accès',
      'Détection et protection incendie',
      'Supervision des équipements techniques',
      'Solutions numériques pour la gestion des actifs du bâtiment',
    ],

    benefits: [
      'Amélioration de la sécurité des bâtiments',
      'Réduction des risques techniques',
      'Meilleure maîtrise des consommations énergétiques',
      'Amélioration de la disponibilité des installations',
      'Gestion centralisée des équipements techniques',
    ],

    useCases: [
      'Installation électrique d’un complexe tertiaire',
      'Système de sécurité et de vidéosurveillance d’un bâtiment',
      'Supervision des équipements techniques d’un site',
    ],

    icon: 'Building2',
  },

  {
    id: '6',
    slug: 'institutions-administrations',
    title: 'Institutions & Administrations',
    description:
      'NOISIM accompagne les institutions, administrations et organismes publics dans la modernisation de leurs infrastructures et la digitalisation de leurs opérations grâce à des solutions techniques, numériques et de sécurité adaptées.',

    challenges: [
      'Processus administratifs encore largement manuels',
      'Besoin de modernisation des infrastructures techniques',
      'Difficultés de gestion et de suivi des équipements',
      'Besoin de sécurisation des bâtiments et des accès',
      'Manque d’outils de supervision et de pilotage',
    ],

    solutions: [
      'Développement de solutions numériques métiers',
      'Digitalisation et automatisation des processus',
      'Infrastructure réseau et systèmes informatiques',
      'Vidéosurveillance et contrôle des accès',
      'Gestion et supervision des équipements et actifs',
    ],

    benefits: [
      'Modernisation des infrastructures publiques',
      'Amélioration de l’efficacité opérationnelle',
      'Meilleure gestion des équipements et des actifs',
      'Renforcement de la sécurité des sites',
      'Amélioration du suivi et du pilotage des activités',
    ],

    useCases: [
      'Digitalisation d’un processus administratif',
      'Sécurisation d’un bâtiment institutionnel',
      'Mise en place d’une infrastructure réseau et informatique',
    ],

    icon: 'Landmark',
  },
]