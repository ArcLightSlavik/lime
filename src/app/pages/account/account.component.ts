import {Component, OnInit} from '@angular/core';
import {AlertController} from '@ionic/angular';

import {StorageService} from '../../services/storage/storage.service';

@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {

    constructor(
        private storageService: StorageService,
        private alertController: AlertController
    ) {
    }

    ngOnInit() {
    }

    resetApp(): void {
        this.storageService.clearLocalStorage(true).then(() => {
            this.presentResetAlert();
        });
    }

    async presentResetAlert() {
        const alert = await this.alertController.create({
            id: 'appResetAlert',
            header: 'App Reset Successful!',
            buttons: ['OK'],
        });

        await alert.present();
    }
}
