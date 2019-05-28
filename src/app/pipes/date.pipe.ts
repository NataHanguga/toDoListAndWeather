import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'datePipe'
})
export class CustomDatePipe implements PipeTransform {

  transform(date: Date | string, day: number, format: string = 'MMM, d'): string {
    return new DatePipe('en-US').transform(date, format);
  }
  }
