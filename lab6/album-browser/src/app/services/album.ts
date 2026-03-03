import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Album } from '../models/album.model';
import { Photo } from '../models/photo.model';

@Injectable({ providedIn: 'root' })
export class AlbumService {
  private base = 'https://dummyjson.com';

  constructor(private http: HttpClient) {}  // ← ДОБАВЬ ЭТО

  getAlbums(): Observable<Album[]> {
    return this.http.get<any>(`${this.base}/products`).pipe(
      map(res => res.products)
    );
  }

  getAlbum(id: number): Observable<Album> {
    return this.http.get<Album>(`${this.base}/products/${id}`);
  }

  getAlbumPhotos(id: number): Observable<Photo[]> {
    return this.http.get<any>(`${this.base}/products/${id}`).pipe(
      map(res => {
        const reviews = res.reviews ?? [];
        return reviews.map((r: any, i: number) => ({
          rating: r.rating,
          comment: r.comment,
          reviewerName: r.reviewerName,
          thumbnailUrl: res.images?.[i] ?? res.thumbnail  // ← берём реальное фото
        }));
      })
    );
  }

  updateAlbum(album: Album): Observable<Album> {  // ← ДОБАВЬ ЭТО
    return this.http.put<Album>(`${this.base}/products/${album.id}`, album);
  }

  deleteAlbum(id: number): Observable<void> {  // ← ДОБАВЬ ЭТО
    return this.http.delete<void>(`${this.base}/products/${id}`);
  }
}