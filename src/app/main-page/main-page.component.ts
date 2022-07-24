import { PhotoGalleryComponent } from './../photo-gallery/photo-gallery.component';
import { ProductsDialogComponent } from './../products-dialog/products-dialog.component';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  @ViewChild('el') span: ElementRef;

  menuCtrl: boolean = false;
  logo: string = './assets/logo.png';
  selectedButton: string = 'whoWeAre';
  categories = [
    { name: 'Who We Are', id: 'whoWeAre' },
    { name: 'Products', id: 'products' },
    { name: 'Photos', id: 'photos' },
    { name: 'Contact', id: 'contact' },
  ];
  products: Products[] = [
    {
      id: 1,
      name: 'CEREBRA',
      description: 'Advanced Clinical Information System',
      photo: './assets/product1.jpg',
    },
    {
      id: 2,
      name: 'GALIBOX',
      description: 'Medical device data transfer system Hardware + Software',
      photo: './assets/product2.jpg',
    },
    {
      id: 3,
      name: 'LUTEA',
      description: 'Hospital ICU Clinical Information System',
      photo: './assets/product3.jpg',
    },
    {
      id: 5,
      name: 'LUTEAAA',
      description: 'Hospital ICU Clinical Information System',
      photo: './assets/product3.jpg',
    },
  ];

  photos = [
    { url: './assets/product1.jpg' },
    { url: './assets/product2.jpg' },
    { url: './assets/product3.jpg' },
    { url: './assets/product1.jpg' },
  ];

  constructor(public dialog: MatDialog) { this.onWindowResize(); }

  @HostListener('window:resize')
  onWindowResize() {
    if (window.screen.width < 600) {
      console.log("600!den küçük!!!");
      this.menuCtrl = true;

    } else {
      console.log("600!den Büyük!!!");
      this.menuCtrl = false;
    }
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    var element = document.getElementById("ustMenu");

    if (window.scrollY > screen.height / 10) {
      element.classList.add("sticky");
    }else{
      element.classList.remove("sticky");
    }
  }

  ngOnInit(): void {


  }

  openProductsDialog(prod: Products) {
    const dialogRef = this.dialog.open(ProductsDialogComponent, {
      height: '60vh',
      width: '60vh',
      disableClose: true,
      data: prod,
    });
  }

  openPhotoGallery(urlId: number) {
    const dialogRef = this.dialog.open(PhotoGalleryComponent, {
      height: '90vh',
      width: '100vh',
      disableClose: true,
      data: urlId
    });
  }

  scrollTo(idText: string) {
    this.selectedButton = idText;
    const element = document.querySelector('#' + idText);
    const ust = document.querySelector('#ustMenu');
    const topPos = element.getBoundingClientRect().top + window.pageYOffset;

    window.scrollTo({
      top: topPos - ust.scrollHeight,
      behavior: 'smooth', // smooth scroll
    });
  }
}

export interface Products {
  id: number;
  name: string;
  photo: string;
  description: string;
}
