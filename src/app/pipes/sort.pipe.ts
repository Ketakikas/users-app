import { Pipe, PipeTransform } from '@angular/core';
import { ToDo } from '../model/ToDo.model';

@Pipe({
  name: 'sort',
  pure:false
})
//sort the arrays with this pipe
export class SortPipe implements PipeTransform {

  transform(items:Array<ToDo>,sortBy:string): Array<ToDo> {
    if(sortBy==='')
    {
      return items;
    }
    let resultArray:Array<ToDo>=[];
    if(sortBy=='asc'){      //acsending sort
     return items.sort((a,b)=>{
        let labelA=a.label;
        let labelB=b.label;
        if(labelA>labelB)
            return 1;
        else if(labelB>labelA)
            return -1;
        else  
            return 0;
      });
    }
    else{      //descending sort
      return items.sort((b,a)=>{
           let labelA=a.label;
           let labelB=b.label;
           if(labelA>labelB)
               return 1;
           else if(labelB>labelA)
               return -1;
           else  
               return 0;
         });
        }
    return items;
  }

}
