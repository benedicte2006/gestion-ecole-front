import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Classe } from '../models/Classe';

@Injectable({
  providedIn: 'root',
})
export class ClasseService {
  private url = 'http://localhost:8081/classe';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Classe[]>(this.url + '/getAllClasse');
  }

  getById(id: number) {
    return this.http.get<Classe>(this.url + '/get/' + id);
  }

  create(classe: Classe) {
    return this.http.post<Classe>(this.url + '/create', classe);
  }

  update(id: number, classe: Classe) {
    return this.http.put<Classe>(this.url + '/update/' + id, classe);
  }

  delete(id: number) {
    return this.http.delete(this.url + '/delete/' + id);
  }
}
