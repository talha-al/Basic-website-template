import { Component, OnInit } from '@angular/core';
import { LinkConstants } from 'src/app/links';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

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
