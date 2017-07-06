import { Component, Input, OnInit } from '@angular/core';
import { Day } from './common/day';
import { MonthService } from './month.service';
import { Router } from '@angular/router';

@Component({
    selector: 'calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.css'],
})

export class CalendarComponent implements OnInit {

    ngOnInit(): void {
        this.goToThisMonth();
    }

    day: Day;

    constructor(
        private monthService: MonthService,
        private router: Router
    ){}

    private goToMonth(date: Date): void {
        var year = date.getFullYear();
        var month = date.getMonth();

        this.router.navigate(['path', year, month + 1]);
    }

    goToThisMonth(): void {
        this.day = this.monthService.getCurrentDay();
        var thisMonth = this.day.day;
        this.goToMonth(thisMonth)
    }

    goToNextMonth(): void {
        var nextMonth = this.day.day;
        nextMonth.setMonth(nextMonth.getMonth() + 1);
        this.day.day = nextMonth;
        this.goToMonth(nextMonth);
    }

    goToPreviousMonth(): void {
        var previousMonth = this.day.day;
        previousMonth.setMonth(previousMonth.getMonth() - 1);
        this.day.day = previousMonth;
        this.goToMonth(previousMonth);
    }

    getMonthName(day: Day): string {
        var monthName = [
            "January", 
            "February", 
            "March", 
            "April", 
            "May", 
            "June",
            "July", 
            "August", 
            "September", 
            "October", 
            "November", 
            "December"
        ];

        return monthName[day.day.getMonth()];
    }

    getYear(day: Day): number {
        return day.day.getFullYear();
    }

    isToday(day: Day): boolean {
        var today = new Date(new Date().toDateString());
        var incomingDay = new Date(day.day.toDateString());

        var result = today == incomingDay;

        return result;
    }
}