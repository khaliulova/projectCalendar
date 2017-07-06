import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Day } from './common/day';
import { MonthService } from './month.service';
import { Month } from './common/month';

@Component({
    selector: 'month-table',
    templateUrl: './month.component.html',
    styleUrls: ['./month.component.css'],
    providers: [MonthService]
})

export class MonthComponent implements OnInit {

    ngOnInit(): void {
        this.route.params
        .subscribe((params: Params) => {
            this.currentYear = params['year'];
            this.currentMonth = params['month'] - 1;
            this.getCalendarMonth();
        });
    }

    month: Month;
    currentMonth: number;
    currentYear: number;

    constructor(
        private monthService: MonthService,
        private route: ActivatedRoute
    ) {}

    getCalendarMonth(): void {
        var date = new Date(this.currentYear, this.currentMonth, 1);
        this.month = this.monthService.getCalendarMonth(date);
    }

    getDayOfWeek(day: Day): string {
        var dayInt = day.day.getDay();
        switch (dayInt) {
            case 0:
                return "Sunday,";
            case 1:
                return "Monday,";
            case 2:
                return "Tuesday,";
            case 3:
                return "Wednesday,";
            case 4:
                return "Thursday,";
            case 5:
                return "Friday,";
            case 6:
                return "Saturday,";
        }
    }

    getDate(day: Day): number {
        return day.day.getDate();
    }

    isToday(day: Day): boolean {
        var today = new Date().toDateString();
        var incomingDay = day.day.toDateString();
        var result = today == incomingDay;

        return result;
    }

    isMonth(day: Day): boolean {
        var incomingMonth = day.day.getMonth();
        var result = this.currentMonth != incomingMonth;

        return result;
    }

    isOutput(day: Day): boolean {
        var dayOfTheWeek = day.day.getDay();
        var result = (dayOfTheWeek == 0 || dayOfTheWeek == 6) ? true : false;

        return result;
    }
}