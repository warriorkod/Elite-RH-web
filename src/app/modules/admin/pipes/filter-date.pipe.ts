import { Pipe, PipeTransform } from '@angular/core';
import { getLocaleDateFormat, formatDate, DatePipe } from '@angular/common';

@Pipe({
  name: 'filterDate'
})
export class FilterDatePipe implements PipeTransform {

  constructor(private datePipe : DatePipe){}

  transform(items: any[], arg: Date): any[] {

    console.log("Valeur = "+items+" arg= "+arg)

    if(!items) return [];
    if(!arg) {
      console.log("arg vide");
      return items;
    }

    return items.filter(it => { 
      console.log(it);
      return it.date.includes(this.datePipe.transform(arg, "MM/dd/yyyy"));
    });
  }

}
