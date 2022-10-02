import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.scss'],
})
export class PhotoGalleryComponent implements OnInit {
  photos = [62, 83, 466, 965, 982, 1043, 738].map((n) => `https://picsum.photos/id/${n}/900/500`);

  imageId: number;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: number,
    private dialogRef: MatDialogRef<PhotoGalleryComponent>
  ) {
    this.imageId = data;
  }

  ngOnInit(): void {
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
