import { Component, OnInit } from '@angular/core';
import { anim, voidTrigger } from '../animate';
import { ProductDataService } from 'src/services/product-service';
import { IProductModel } from 'src/models/productModel';


@Component({
  selector: 'app-child-sample',
  templateUrl: './child-details-sample.component.html',
  styleUrls: ['./child-details-sample.component.css'],
  animations:[anim,voidTrigger]

})
export class ChildDetailsSampleComponent implements OnInit {

  product:IProductModel;
  constructor(private prodSvc:ProductDataService) { }

  ngOnInit() {
    this.product=this.prodSvc.getProduct(1);
  }

}
