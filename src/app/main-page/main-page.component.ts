import { PhotoGalleryComponent } from './../photo-gallery/photo-gallery.component';
import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {

  isSmallScreen: boolean = false;
  logo: string = './assets/logo.png';
  categories = [
    { name: 'Home', id: 'home' },
    { name: 'About Me', id: 'aboutUs' },
    { name: 'Photos', id: 'photos' },
    { name: 'Contact', id: 'contact' },
  ];

  @HostListener('window:resize')
  onWindowResize() {
    if (window.screen.width < 600) {
      this.isSmallScreen = true;

    } else {
      this.isSmallScreen = false;
    }
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    var element = document.getElementById("menu");

    if (window.scrollY > screen.height / 10) {
      element.classList.add("sticky");
    } else {
      element.classList.remove("sticky");
    }
  }

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer, public dialog: MatDialog
  ) {
    this.onWindowResize();
    // this.matIconRegistry.addSvgIcon(
    //   `linkedin`,
    //   this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/linkedin.svg")
    // );

    // this.matIconRegistry.addSvgIcon(
    //   `youtube`,
    //   this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/youtube.svg")
    // );

    // this.matIconRegistry.addSvgIcon(
    //   `instagram`,
    //   this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/instagram.svg")
    // );

    // this.matIconRegistry.addSvgIcon(
    //   `facebook`,
    //   this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/facebook.svg")
    // );

  }

  ngOnInit(): void { }

  openPhotoGallery(urlId: number) {
    const dialogRef = this.dialog.open(PhotoGalleryComponent, {
      height: '90%',
      width: '90%',
      disableClose: true,
      data: urlId,
      panelClass: "custom-dialog"
    });
  }

  scrollTo(idText: string) {
    const element = document.querySelector('#' + idText);
    const ust = document.querySelector('#menu');
    const topPos = element.getBoundingClientRect().top + window.pageYOffset;

    window.scrollTo({
      top: topPos - ust.scrollHeight,
      behavior: 'smooth',
    });
  }
}
