import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AngularFireModule} from '@angular/fire';
import {RouteReuseStrategy} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';

import {DataService} from './services/data/data.service';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {environment} from '../environments/environment';


@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        ReactiveFormsModule,
        AngularFireModule.initializeApp(environment.firebase)
    ],
    providers: [
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
        DataService,
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
