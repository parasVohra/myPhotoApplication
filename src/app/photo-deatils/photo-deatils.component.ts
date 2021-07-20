import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-photo-deatils',
  templateUrl: './photo-deatils.component.html',
  styleUrls: ['./photo-deatils.component.css'],
})
export class PhotoDeatilsComponent implements OnInit {
  constructor(private photoService: PhotoService) {}

  ngOnInit(): void {
    this.photoService.getPhoto().subscribe((res) => {
      console.log(res);
    });
  }
}
