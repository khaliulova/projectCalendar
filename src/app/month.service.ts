import { Injectable } from '@angular/core';

import { Day } from './common/day';
import { Week } from './common/week';
import { Month } from './common/month';

@Injectable()

export class MonthService {

    getCalendarMonth(date: Date): Month {
        var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
        var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

        firstDay.setDate(firstDay.getDate() - firstDay.getDay());
        lastDay.setDate(lastDay.getDate() + (7 - lastDay.getDay()));

        var month: Month = new Month();
        var week: Week;

        do{
            var dayOfWeek = firstDay.getDay();

            if (dayOfWeek == 0) {
                week = new Week();
                month.weeks.push(week);
            }

            var date = new Date(firstDay);
            var day = new Day();
            day.day = date;

            week.days.push(day);
            firstDay.setDate(firstDay.getDate() + 1)
        }while (firstDay < lastDay)

        return month;
    }

    getCurrentMonth(): Month {
        var day = new Date();
        return this.getCalendarMonth(day);
    }

    getCurrentDay(): Day {
        var date = new Date();
        var day = new Day();

        day.day = date;

        return day;
    }
}