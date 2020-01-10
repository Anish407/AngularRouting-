import { Injectable } from "@angular/core";
import { PrefetchDatService } from './prefetch/prefetch.service';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { IProductModel } from 'src/models/productModel';
import { Observable } from 'rxjs';

@Injectable({
    providedIn:'root'
})

export class  PrefetchDataResolver implements Resolve<IProductModel[]>{
  
    constructor(private prefetchSvc:PrefetchDatService) {
        
    }

    // we dont need to subscribe to the observable we return as the resolver does that for us. Also the data is returned only when 
    // the data is available
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): IProductModel[] | Observable<IProductModel[]> | Promise<IProductModel[]> {
       return this.prefetchSvc.getData();

       //return; if there is an error we can simply return which will cancel the route and the user will stay on the previous route
   // or redirect to error page
    }


}