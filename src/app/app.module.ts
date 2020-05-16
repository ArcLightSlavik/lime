import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';

import {StatusBar} from '@ionic-native/status-bar/ngx';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {IonicModule, IonicRouteStrategy} from '@ionic/angular';

import {DataService} from './services/data/data.service';
import {AppComponent} from './app.component';
import {ActionService} from './services/action/action.service';
import {AppRoutingModule} from './app-routing.module';


@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        ReactiveFormsModule
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
        DataService,
        ActionService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
