import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'shortAddress'})
export class ShortAddressPipe implements PipeTransform {
  transform(value: string, ...args: any[]) {
    return value ? `${value.substring(0,4)}...${value.substr(value.length -2)}` : '';
  }

}
