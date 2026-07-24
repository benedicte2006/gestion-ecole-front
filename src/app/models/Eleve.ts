export interface EleveAffichage {
  id: number;
  matricule: string;
  nomComplet: string;
  classe: string;
  niveau: string;
  statutInscription: 'Inscrit' | 'En attente';
  telephone: string;
}
