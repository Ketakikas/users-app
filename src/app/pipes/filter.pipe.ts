import { Pipe, PipeTransform } from '@angular/core';
import { ToDo } from '../model/ToDo.model';

@Pipe({
  name: 'filter',
  pure:false //by defaut it is true and by setting it false, pipoe will trigger on impure changes also
})
export class FilterPipe implements PipeTransform {

  transform(items: Array<ToDo>,filteredStatus:string): Array<ToDo> {
    if(filteredStatus==''){
      return items;
    }
    let resultArray:Array<ToDo>=[];
    for(let item of items){
      console.log(item);
      if(item.status===filteredStatus){
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
