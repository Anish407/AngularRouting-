import { Component, OnInit } from '@angular/core';
import { anim, voidTrigger } from '../animate';
import { ProductDataService } from 'src/services/product-service';
import { IProductModel } from 'src/models/productModel';


@Component({
  selector: 'child-data',
  templateUrl: './child-data.component.html',
  styleUrls: ['./child-data.component.css'],
  animations:[anim,voidTrigger]

})
export class ChildDataSampleComponent implements OnInit {

  product:IProductModel;
  constructor(private prodSvc:ProductDataService) { }

  ngOnInit() {
    this.product=this.prodSvc.getProduct(1);
  }

}
