import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-photos-section',
  templateUrl: './photos-section.component.html',
  styleUrls: ['./photos-section.component.scss']
})
export class PhotosSectionComponent implements OnInit {

  @Input() photos: any[] = [];
  @Output() openPhotos: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  openPhotoGallery(index: number) {
    this.openPhotos.emit(index)
  }
}
