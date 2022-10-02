import { Component, OnInit } from '@angular/core';
import { LinkConstants } from 'src/app/links';

@Component({
  selector: 'app-communication-sticky',
  templateUrl: './communication-sticky.component.html',
  styleUrls: ['./communication-sticky.component.scss']
})
export class CommunicationStickyComponent implements OnInit {

  linkInstagram = LinkConstants.linkInstagram;
  linkFaceBook = LinkConstants.linkFaceBook;
  linkLinkedin = LinkConstants.linkLinkedin;
  linkTwitter = LinkConstants.linkTwitter;

  constructor() { }

  ngOnInit(): void {
  }

  goToLink(link) {
    window.open(link);
  }

}
