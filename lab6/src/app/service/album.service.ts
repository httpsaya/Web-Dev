import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // Доступен везде
})
export class AlbumService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/albums';
  private photosUrl = 'https://jsonplaceholder.typicode.com/photos';

  constructor(private http: HttpClient) {}

  // 📌 Получить все альбомы
  getAlbums(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // 📌 Получить альбом по ID
  getAlbum(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // 📌 Обновить альбом (изменить заголовок)
  updateAlbum(id: number, title: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, { title });
  }

  // 📌 Удалить альбом
  deleteAlbum(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // 📌 Получить фото для альбома
  getPhotos(albumId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.photosUrl}?albumId=${albumId}`);
  }
}
