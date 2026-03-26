import { CommonModule } from '@angular/common';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Album } from '../models/album.model';
import { AlbumService } from '../services/album';
import { Router } from '@angular/router';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './albums.html',
  styleUrl: './albums.css',
})
export class Albums implements OnInit {
  albums: Album[] = [];
  loading = true;
  searchQuery = '';
  sortOrder = 'id-asc';

  constructor(
    private albumService: AlbumService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.albumService.getAlbums().subscribe(data => {
      this.albums = data;
      this.loading = false;
      this.cdr.detectChanges();
    });
  }

  filteredAlbums(): Album[] {
    const filtered = this.albums.filter(a =>
      a.title.toLowerCase().includes(this.searchQuery.toLowerCase())
    );

    return [...filtered].sort((a, b) => {
      switch (this.sortOrder) {
        case 'id-asc':     return a.id - b.id;
        case 'id-desc':    return b.id - a.id;
        case 'title-asc':  return a.title.localeCompare(b.title, undefined, { sensitivity: 'base' });
        case 'title-desc': return b.title.localeCompare(a.title, undefined, { sensitivity: 'base' });
        default:           return 0;
      }
    });
  }

  goToDetail(id: number) {
    this.router.navigate(['/albums', id]);
  }

  deleteAlbum(id: number) {
    this.albumService.deleteAlbum(id).subscribe(() => {
      this.albums = this.albums.filter(a => a.id !== id);
      this.cdr.detectChanges();
    });
  }
}