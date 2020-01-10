import { NgModule } from "@angular/core";
import { PrefetchComponent } from './prefetch.component';
import { RouterModule, Router } from "@angular/router"
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { PrefetchDataResolver } from './prefetch-resolver.service';

@NgModule({
    declarations: [PrefetchComponent],
    exports: [PrefetchComponent],
    imports: [
        FormsModule,
        BrowserModule,
        RouterModule.forChild([
            {
                path: 'prefetch',
                component: PrefetchComponent,
                resolve: {
                    resolvedData: PrefetchDataResolver
                    /* add more resolvers if needed*/
                }
            }
        ])

    ],
    providers: []

})

export class PrefetchModule {

}