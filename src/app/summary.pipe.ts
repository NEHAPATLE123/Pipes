import { Pipe, PipeTransform } from "@angular/core";




@Pipe({
    name: 'summary',
})
export class SummaryPipe implements PipeTransform{

    transform(value: any) {
    //   console.log(value)
    //   return value
     return value.slice(0, 50) + "..."
    }
    
}