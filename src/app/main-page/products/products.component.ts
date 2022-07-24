import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


export interface PhotosApi {
  albumId?: number;
  id?: number;
  title?: string;
  url?: string;
  thumbnailUrl?: string;
}
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})


export class ProductsComponent implements OnInit {
  @Input() products = [];
  @Output() openProducts: EventEmitter<any> = new EventEmitter();

  apiData: PhotosApi;
  limit: number = 10; // <==== Edit this number to limit API results
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    center: true,
    dots: false,
    autoHeight: true,
    autoWidth: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      }
    }
  }
  constructor(private http: HttpClient,) { }

  ngOnInit(): void {
    console.log(this.products);
    this.fetch()
  }

  fetch() {
    const api = `https://jsonplaceholder.typicode.com/albums/1/photos?_start=0&_limit=${this.limit}`;
    const http$ = this.http.get<PhotosApi>(api);

    http$.subscribe(
      res => this.apiData = res,
    )
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
