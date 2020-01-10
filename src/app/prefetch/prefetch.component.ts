import { Component, OnInit } from '@angular/core';
import { PrefetchDatService } from './prefetch/prefetch.service';
import { IProductModel } from 'src/models/productModel';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prefetch',
  templateUrl: './prefetch.component.html',
  styleUrls: ['./prefetch.component.css']
})
export class PrefetchComponent implements OnInit {

  products: IProductModel[];
  constructor(private prefetchSvc: PrefetchDatService,private route:ActivatedRoute) { }

  ngOnInit() {

   //this.products= this.route.snapshot.data['resolvedData']; // the problem with this approach is that all routes
   // get the data by reference, so if 1 component changes a value it is reflected accross all components that use this array

   this.route.data.subscribe(d=> this.products= d['resolvedData'])


  }

}
