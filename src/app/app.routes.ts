import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login';
import { LayoutComponent } from './layout/layout';
import { DashboardComponent } from './pages/dashboard/dashboard';
import { ElevesListComponent } from './pages/eleves-list/eleves-list';

export const routes: Routes = [
  { path: 'connexion', component: LoginComponent },

  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'tableau-de-bord', component: DashboardComponent },
      { path: 'eleves', component: ElevesListComponent },
      { path: '', redirectTo: 'tableau-de-bord', pathMatch: 'full' },
    ],
  },

  { path: '**', redirectTo: 'connexion' },
];
