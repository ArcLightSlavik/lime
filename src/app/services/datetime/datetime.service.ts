import {Injectable} from '@angular/core';
import * as moment from 'moment';
import {BehaviorSubject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DatetimeService {
    private appInstallDate: Date;
    private readonly selectedDate: BehaviorSubject<Date>;

    constructor() {
        this.selectedDate = new BehaviorSubject<Date>(this.getCurrentDateTime());
    }

    async setSelectedDate(date: Date | string): Promise<void> {
        return this.selectedDate.next(typeof date === 'string' ? this.createDateFromString(date) : date);
    }

    async getSelectedDate(): Promise<Date> {
        return this.selectedDate.getValue();
    }

    getSelectedDateSubscription(): BehaviorSubject<Date> {
        return this.selectedDate;
    }

    getCurrentDateTime(): Date {
        return moment().toDate();
    }

    createDateFromString(date: string): Date {
        return moment(date).toDate();
    }

    getDateTimeISOWithFormat(date?: Date): string {
        return date ? moment(date).format('L') : moment().format('L');
    }

    get installDate(): Date {
        return this.appInstallDate;
    }

    set installDate(value: Date) {
        this.appInstallDate = value;
    }
}
