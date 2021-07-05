import { ContractService } from './../services/contract.service';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'weiToOne' })
export class WeiToOnePipe implements PipeTransform {
  constructor(private contractService: ContractService) {}
  transform(value: number, ...args: any[]) {
    return this.contractService.weiToOne(String(value));
  }
}
