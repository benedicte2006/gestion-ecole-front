import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard', // ou app-dashboard, app-eleves-list, app-login
  standalone: true,
  imports: [/* ... */],
  templateUrl: './layout.component.html', // avec .component
  styleUrl: './layout.component.css', // avec .component
})
export class DashboardComponent {
  statistiques = [
    { titre: 'Total élèves', valeur: '1 248', evolution: '+8,5%', icone: '👥' },
    { titre: 'Taux de recouvrement', valeur: '78,6%', evolution: '+5,2%', icone: '⏱️' },
    { titre: 'Impayés (FCFA)', valeur: '8 450 000', evolution: '+12,4%', icone: '📋' },
    { titre: 'Paiements du mois', valeur: '12 750 000', evolution: '+15,8%', icone: '💳' },
  ];

  repartitionNiveaux = [
    { niveau: '6ème', pourcentage: 24, couleur: '#3b6fe0' },
    { niveau: '5ème', pourcentage: 22, couleur: '#5a8bf0' },
    { niveau: '4ème', pourcentage: 20, couleur: '#22c1c3' },
    { niveau: '3ème', pourcentage: 18, couleur: '#b6e3c6' },
    { niveau: '2nde', pourcentage: 10, couleur: '#f0c419' },
    { niveau: '1ère', pourcentage: 6, couleur: '#a56fe0' },
  ];

  alertes = [
    { message: '15 élèves ont des frais impayés depuis plus de 60 jours.', type: 'attente' },
    { message: '23 inscriptions sont en attente de paiement.', type: 'attente' },
  ];
}
