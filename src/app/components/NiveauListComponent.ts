import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Niveau } from '../../models/niveau';
import { NiveauService } from '../../services/niveau.service';

@Component({
  selector: 'app-niveau-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './NiveauListComponent.html',
})
export class NiveauListComponent implements OnInit {
  listeNiveaux: Niveau[] = [];

  constructor(private niveauService: NiveauService) {}

  ngOnInit(): void {
    this.chargerNiveaux();
  }

  chargerNiveaux() {
    this.niveauService.getAll().subscribe((data) => {
      this.listeNiveaux = data;
    });
  }

  supprimer(id: number | undefined) {
    if (id) {
      this.niveauService.delete(id).subscribe(() => {
        this.chargerNiveaux();
      });
    }
  }
}
