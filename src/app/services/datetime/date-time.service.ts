import {Injectable} from '@angular/core';
import * as moment from 'moment';

@Injectable({
    providedIn: 'root'
})
export class DateTimeService {

    constructor() {
    }

    getCurrentDateTime(): Date {
        return moment().toDate();
    }

    getDateTimeString(date?: Date): string {
        return date ? moment(date).format('L') : moment().format('L');
    }
}
