import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.scss'],
})
export class PhotoGalleryComponent implements OnInit {
  photos = [
    { id: 0, url: './assets/product1.jpg' },
    { id: 1, url: './assets/product2.jpg' },
    { id: 2, url: './assets/product3.jpg' },
    { id: 3, url: './assets/product1.jpg' },
  ];
  imageId: number;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: number,
    private dialogRef: MatDialogRef<PhotoGalleryComponent>
  ) {
    this.imageId = data;
  }

  ngOnInit(): void {
    console.log(this.data);
    console.log(this.photos[0].url);
  }

  changeImg(param: string) {
    if (param === 'decrease') {
      if (this.imageId <= 0) this.imageId = this.photos.length - 1;
      else this.imageId += -1;
    } else if (param === 'increase') {
      if (this.imageId >= this.photos.length - 1) this.imageId = 0;
      else this.imageId += 1;
    }
  }

  close() {
    this.dialogRef.close();
  }
}
