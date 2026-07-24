import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EleveAffichage } from '../../models/Eleve';

@Component({
  selector: 'app-eleves-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './eleves-list.component.html',
  styleUrl: './eleves-list.component.css',
})
export class ElevesListComponent {
  recherche: string = '';
  classeFiltre: string = 'Tous';
  niveauFiltre: string = 'Tous';
  statutFiltre: string = 'Tous';

  // Données de test en attendant que le backend renvoie ces champs.
  listeEleves: EleveAffichage[] = [
    {
      id: 1,
      matricule: 'E2501001',
      nomComplet: 'KOTOKO Bénédicte',
      classe: '6ème A',
      niveau: '6ème',
      statutInscription: 'Inscrit',
      telephone: '+228 90 12 34 56',
    },
    {
      id: 2,
      matricule: 'E2501002',
      nomComplet: 'AGBODJAN Koffi',
      classe: '6ème A',
      niveau: '6ème',
      statutInscription: 'Inscrit',
      telephone: '+228 91 23 45 67',
    },
    {
      id: 3,
      matricule: 'E2501003',
      nomComplet: 'TCHALLA Mawuli',
      classe: '5ème B',
      niveau: '5ème',
      statutInscription: 'Inscrit',
      telephone: '+228 90 98 76 54',
    },
    {
      id: 4,
      matricule: 'E2501004',
      nomComplet: 'AMEGAN Kokouvi',
      classe: '4ème A',
      niveau: '4ème',
      statutInscription: 'En attente',
      telephone: '+228 91 11 22 33',
    },
    {
      id: 5,
      matricule: 'E2501005',
      nomComplet: 'DOSSOU Akossiwa',
      classe: '3ème A',
      niveau: '3ème',
      statutInscription: 'Inscrit',
      telephone: '+228 90 33 44 55',
    },
  ];

  get elevesFiltres(): EleveAffichage[] {
    return this.listeEleves.filter((eleve) => {
      const correspondRecherche =
        this.recherche === '' ||
        eleve.nomComplet.toLowerCase().includes(this.recherche.toLowerCase()) ||
        eleve.matricule.toLowerCase().includes(this.recherche.toLowerCase());

      const correspondClasse = this.classeFiltre === 'Tous' || eleve.classe === this.classeFiltre;
      const correspondNiveau = this.niveauFiltre === 'Tous' || eleve.niveau === this.niveauFiltre;
      const correspondStatut =
        this.statutFiltre === 'Tous' || eleve.statutInscription === this.statutFiltre;

      return correspondRecherche && correspondClasse && correspondNiveau && correspondStatut;
    });
  }

  reinitialiserFiltres() {
    this.recherche = '';
    this.classeFiltre = 'Tous';
    this.niveauFiltre = 'Tous';
    this.statutFiltre = 'Tous';
  }
}
