import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumService } from '../service/album.service';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.scss']
})
export class AlbumPhotosComponent implements OnInit {
  photos: any[] = [];
  albumId!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumsService: AlbumService
  ) {}

  ngOnInit(): void {
    this.albumId = Number(this.route.snapshot.paramMap.get('id'));
    this.albumsService.getPhotos(this.albumId).subscribe(data => {
      this.photos = data;
    });
  }

  goBack(): void {
    this.router.navigate(['/albums', this.albumId]);
  }
}
