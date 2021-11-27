import { Component } from '@angular/core';
import { ImageService } from '../services/image.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  imageUrl: string = "";

  constructor(private imageService: ImageService) {
    this.getImage();
  }

  getImage() {
    this.imageService.getImage().subscribe(res => {
      this.response(res);
    });
  }

  response(res) {
    let urlCreator = window.URL || window.webkitURL;
    this.imageUrl = urlCreator.createObjectURL(res);
  }

}
