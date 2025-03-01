import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumService } from '../service/album.service';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';  


@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.scss']
})
export class AlbumDetailComponent implements OnInit {
  album: any;
  newTitle: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumsService: AlbumService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumsService.getAlbum(id).subscribe(data => {
      this.album = data;
      this.newTitle = data.title;
    });
  }

  saveTitle(): void {
    this.albumsService.updateAlbum(this.album.id, this.newTitle).subscribe(() => {
      this.album.title = this.newTitle;
    });
  }

  goBack(): void {
    this.router.navigate(['/albums']);
  }

  goToPhotos(): void {
    this.router.navigate(['/albums', this.album.id, 'photos']);
  }
}
