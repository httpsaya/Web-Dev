import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { AlbumService } from '../service/album.service';
import { RouterModule } from '@angular/router'; // ✅ Добавляем

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {
  albums: any[] = [];

  constructor(private albumsService: AlbumService, private router: Router) {}

  ngOnInit(): void {
    this.albumsService.getAlbums().subscribe(data => {
      this.albums = data;
    });
  }

  deleteAlbum(id: number): void {
    this.albumsService.deleteAlbum(id).subscribe(() => {
      this.albums = this.albums.filter(album => album.id !== id);
    });
  }

  goToDetail(id: number): void {
    this.router.navigate(['/albums', id]); // Переход на детальную страницу
  }
}
