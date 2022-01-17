import { Pipe, PipeTransform } from '@angular/core';
import { strictEqual } from 'assert';

//pipe to get reverse of the string
@Pipe({
  name: 'reverseString'
})
export class ReverseStringPipe implements PipeTransform {
  reverse:string="";
  transform(value: string):string {
    for (let index = (value.length-1); index >=0;index--) {
      //console.log(index);
      this.reverse+=value[index];
  }
  //console.log(this.reverse);
  return this.reverse;
}
}
