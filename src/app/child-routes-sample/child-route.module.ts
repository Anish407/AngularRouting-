import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RouterModule, Router } from "@angular/router"
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ChildRoutesSampleComponent } from './child-routes-sample.component';
import { ChildDetailsSampleComponent } from './childDetails/child-details-sample.component';
import { ChildDataSampleComponent } from './childData/child-data.component';


@NgModule({
    declarations: [ChildRoutesSampleComponent,ChildDetailsSampleComponent,ChildDataSampleComponent],
    exports: [ChildRoutesSampleComponent],
    
    imports: [
        FormsModule,
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forChild([
            {
               path:'childsample', 
               component:ChildRoutesSampleComponent,

               // creating child routes, the parent component must have the router-outlet
               children:[
                {
                    path:'',
                    component:ChildDetailsSampleComponent,
                    pathMatch:'full'
                 },
                {
                   path:'details',
                   component:ChildDetailsSampleComponent
                },
                {
                    path:'child-data',
                    component:ChildDataSampleComponent
                 }
            
            ]
            }
        ])

    ],
    providers: []

})

export class ChildRoutesSampleModule {

}