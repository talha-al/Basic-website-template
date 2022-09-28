import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-communication-sticky',
  templateUrl: './communication-sticky.component.html',
  styleUrls: ['./communication-sticky.component.scss']
})
export class CommunicationStickyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  goToLink(link){
    window.open("https://www.google.com.tr/?hl=tr");
  }

}
