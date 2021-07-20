import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-recent-album',
  templateUrl: './recent-album.component.html',
  styleUrls: ['./recent-album.component.css'],
})
export class RecentAlbumComponent implements OnInit {
  constructor(private albumService: AlbumService) {}

  ngOnInit(): void {
    this.albumService.getAllAlbums().subscribe((res) => {
      console.log(res);
    });
  }
}
