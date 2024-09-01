import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Specialty } from '../../models/speciality';

@Injectable({
  providedIn: 'root',
})
export class SpecialtyService {
  private apiUrl = 'http://localhost:5000/specialty'; 

  constructor(private http: HttpClient) {}

  // Add a new specialty
  addSpecialty(specialty: Specialty): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`${this.apiUrl}/Addspecialty`, specialty, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }

  // Get all specialties
  getAllSpecialties(): Observable<Specialty[]> {
    return this.http.get<Specialty[]>(`${this.apiUrl}/GetAllspecialties`);
  }

  // Get a specialty by ID
  getSpecialtyById(SpecialtyId: string): Observable<Specialty> {
    return this.http.get<Specialty>(`${this.apiUrl}/Getspecialty/${SpecialtyId}`);
  }

  updateSpecialty(id: string, specialtyData: Specialty): Observable<Specialty> {
    const url = `${this.apiUrl}/Updatespecialty/${id}`;
    return this.http.put<Specialty>(url, specialtyData, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  // Delete a specialty by ID
  deleteSpecialty(SpecialtyId: string): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.apiUrl}/Deletespecialty/${SpecialtyId}`);
  }
}
