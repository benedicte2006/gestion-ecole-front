import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  email: string = '';
  motDePasse: string = '';
  afficherMotDePasse: boolean = false;

  constructor(private router: Router) {}

  seConnecter(formulaire: NgForm) {
    if (formulaire.invalid) {
      return;
    }

    // Pour l'instant, pas de vérification réelle : on redirige direct.
    // Plus tard on appellera le backend pour vérifier email/mot de passe.
    this.router.navigate(['/tableau-de-bord']);
  }
}
