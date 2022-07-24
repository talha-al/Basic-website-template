import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  @Input() products = [];
  @Output() openProducts: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    console.log(this.products);

  }

  slideHandle(way) {
    const element = document.querySelector('#' + "tst");
    // element.scrollIntoView({ block: "start", behavior: "smooth" });
    element.scrollTo({
      top: 300,
      behavior: 'smooth', // smooth scroll
    });
  }

  scrollTo(idText: string) {

    // window.scrollTo({
    //   top: topPos - ust.scrollHeight,
    //   behavior: 'smooth', // smooth scroll
    // });
  }

  openProductsDialog(product: any) {
    this.openProducts.emit(product)
  }

}
