import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor() {
  }

  @HostListener('window:scroll', ['$event']) onScrollEvent($event) {
    let element = document.getElementById("container");
    if (window.scrollY > screen.height / 3.5) {
      element.classList.add("moveAnim");
    }
  }

  ngOnInit(): void {
  }

}
