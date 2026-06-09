import type { Project } from '@/types'

export const projects: Project[] = [
  {
    id: '1',
    slug: 'toll-control-system',
    title: 'Toll Control System (TCS)',
    client: 'NOISIM — Produit Propriétaire',
    sector: 'Mobilité & Infrastructures Urbaines',
    context:
      'Le TCS est une solution logicielle et matérielle complète développée en interne par NOISIM pour moderniser la gestion des postes de péage. Face aux pertes de revenus liées à la fraude, aux erreurs humaines et aux inefficacités opérationnelles des systèmes manuels, NOISIM a conçu une plateforme intégrée couvrant l\'ensemble du cycle de gestion d\'un péage — de la supervision stratégique à l\'expérience utilisateur final.',
    problem:
      'Les opérateurs de péage traditionnels font face à des défis structurels : fraude du personnel au guichet, absence de traçabilité des transactions, impossibilité de piloter en temps réel les recettes multi-sites, et infrastructure coûteuse en ressources humaines. Les usagers réguliers subissent des files d\'attente chroniques, sans aucun moyen de paiement dématérialisé.',
    solution:
      'Le Toll Control System est une solution écosystème composée de trois applications complémentaires interconnectées, couvrant tous les acteurs du péage : la direction, le personnel d\'exploitation, et les usagers. Deux des modes de passage sont automatisés éliminant ainsi la nécessité de personnel aux cabines : le passage par carte prépayée avec badgeage RFID/NFC, et le passage par abonnement avec tag véhicule à reconnaissance automatique.',
    results: [
      'Élimination totale de la fraude aux postes de péage grâce à l\'automatisation',
      'Réduction de 70 % des coûts opérationnels liés au personnel de cabine',
      'Temps de passage réduit à moins de 5 secondes par véhicule',
      'Visibilité temps réel sur toutes les transactions et recettes multi-sites',
      'Taux d\'abonnement actifs gérables illimité via le système de tags',
      'Rapports financiers automatisés quotidiens, hebdomadaires et mensuels',
    ],
    technologies: [
      'Application Desktop (Direction)',
      'Application Web (Personnel)',
      'Application Mobile (Usagers)',
      'RFID / NFC',
      'Tags véhicules',
      'Paiement dématérialisé',
      'API REST',
      'Temps réel',
    ],
    featured: true,
    imageUrl: '/TCS.png',
  },
]
