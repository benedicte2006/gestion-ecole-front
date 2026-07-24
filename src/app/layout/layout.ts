import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {
  menuItems = [
    { libelle: 'Tableau de bord', lien: '/tableau-de-bord', icone: '📊' },
    { libelle: 'Élèves', lien: '/eleves', icone: '👥' },
    { libelle: 'Inscriptions', lien: '/inscriptions', icone: '📝' },
    { libelle: 'Frais scolaires', lien: '/frais-scolaires', icone: '💰' },
    { libelle: 'Paiements', lien: '/paiements', icone: '💳' },
    { libelle: 'Enseignants', lien: '/enseignants', icone: '🧑‍🏫' },
    { libelle: 'Classes & Niveaux', lien: '/classes', icone: '🏫' },
    { libelle: 'Examens & Notes', lien: '/examens', icone: '📋' },
    { libelle: 'Communications', lien: '/communications', icone: '💬' },
    { libelle: 'Paramètres', lien: '/parametres', icone: '⚙️' },
  ];

  anneeScolaireActive = '2025-2026';
}
