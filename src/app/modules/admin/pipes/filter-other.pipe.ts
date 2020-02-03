import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'filterOther'
})
export class FilterOtherPipe implements PipeTransform {

  constructor(private datePipe : DatePipe){}

  transform(items: any[], arg: any): any[] {

    console.log("arg "+arg);
    if(!items) return [];
    if(!arg) return items;

    console.log("today = "+this.datePipe.transform(new Date(), "MM/dd/yyyy"));

    switch(arg){
      case "today":
        return items.filter(it => {
            return it.date.includes(this.datePipe.transform(new Date(), "MM/dd/yyyy"));
        });
      case "week":
        return items;
    }
    return items;
  }

}
