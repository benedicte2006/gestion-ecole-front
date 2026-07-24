import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Niveau } from '../models/Niveau';

@Injectable({
  providedIn: 'root',
})
export class NiveauService {
  private url = 'http://localhost:8081/niveau';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Niveau[]>(this.url + '/getAllNiveau');
  }

  getById(id: number) {
    return this.http.get<Niveau>(this.url + '/get/' + id);
  }

  create(niveau: Niveau) {
    return this.http.post<Niveau>(this.url + '/create', niveau);
  }

  update(id: number, niveau: Niveau) {
    return this.http.put<Niveau>(this.url + '/update/' + id, niveau);
  }

  delete(id: number) {
    return this.http.delete(this.url + '/delete/' + id);
  }
}
