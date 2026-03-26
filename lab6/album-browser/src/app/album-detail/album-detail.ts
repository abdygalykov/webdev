import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumService } from '../services/album';
import { Album } from '../models/album.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './album-detail.html',
})
export class AlbumDetailComponent implements OnInit {
  album: Album | null = null;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private albumService: AlbumService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbum(id).subscribe(data => {
      this.album = data;
      this.loading = false;
      this.cdr.detectChanges();
    });
  }

  save() {
    if (this.album) {
      this.albumService.updateAlbum(this.album).subscribe(() => {
        alert('Saved!');
      });
    }
  }
}